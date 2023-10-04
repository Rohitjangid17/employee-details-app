import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeScreenComponent } from './component/employee-screen/employee-screen.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
