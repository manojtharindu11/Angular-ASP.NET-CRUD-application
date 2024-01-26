import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private _employeeService : EmployeesService, private _router: Router) {}

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  addEmployee() {
    this._employeeService.addNewEmployee(this.addEmployeeRequest).subscribe({
      next: (res:any) => {
        this._router.navigate(['employees']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }
}
