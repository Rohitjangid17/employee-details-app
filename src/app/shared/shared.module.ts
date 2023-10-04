import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeScreenComponent } from './component/employee-screen/employee-screen.component';
import { EmployeeToolbarComponent } from './component/employee-toolbar/employee-toolbar.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeScreenComponent,
    EmployeeToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
