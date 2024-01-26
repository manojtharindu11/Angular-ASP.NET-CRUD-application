import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this._http.get<Employee[]>(this.baseApiUrl+'/api/employees');
  }

  addNewEmployee(addEmployeeRequest : Employee) : Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this._http.post<Employee>(this.baseApiUrl+'/api/employees', addEmployeeRequest)
  }

  getEmployee(id: string): Observable<Employee> {
    return this._http.get<Employee>(this.baseApiUrl+'/api/employees/'+id);
  }

  updateEmployee(id:string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this._http.put<Employee>(this.baseApiUrl+'/api/employees/'+id, updateEmployeeRequest);
  }

  deleteEmployee(id:string) :Observable<Employee> {
    return this._http.delete<Employee>(this.baseApiUrl+'/api/employees/'+id);
  }
}
