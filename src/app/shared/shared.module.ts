import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeScreenComponent } from './component/employee-screen/employee-screen.component';
import { EmployeeToolbarComponent } from './component/employee-toolbar/employee-toolbar.component';

@NgModule({
  declarations: [
    EmployeeScreenComponent,
    EmployeeToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
