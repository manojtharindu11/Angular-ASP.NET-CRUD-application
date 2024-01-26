import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private _employeeService : EmployeesService) {}

  employees: Employee[] = [];


  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe({
      next: (res:any) => {
        this.employees = res;
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }
}
