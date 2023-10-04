import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeToolbarComponent } from './shared/component/employee-toolbar/employee-toolbar.component';
import { CreateEmployeeDialogComponent } from './shared/models/create-employee-dialog/create-employee-dialog.component';
import { EmployeeScreenComponent } from './shared/component/employee-screen/employee-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeToolbarComponent,
    CreateEmployeeDialogComponent,
    EmployeeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
