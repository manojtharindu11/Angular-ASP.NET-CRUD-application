import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeDetail: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        const id = params.get('id');
        if (id) {
          // call API
          this._employeeService.getEmployee(id).subscribe({
            next: (res: any) => {
              this.employeeDetail = res;
            },
            error: (err: any) => {
              console.log(err);
            },
          });
        }
      },
    });
  }

  UpdateEmployee(){
    this._employeeService.updateEmployee(this.employeeDetail.id,this.employeeDetail).subscribe({
      next: (res:any) => {
        this._router.navigate(['employees']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  DeleteEmployee(id: string){
    this._employeeService.deleteEmployee(id).subscribe({
      next: (res:any) => {
        this._router.navigate(['employees']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }


}
