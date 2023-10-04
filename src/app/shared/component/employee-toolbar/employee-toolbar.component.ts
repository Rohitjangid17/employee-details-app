import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeDialogComponent } from '../../models/create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'app-employee-toolbar',
  templateUrl: './employee-toolbar.component.html',
  styleUrls: ['./employee-toolbar.component.scss']
})
export class EmployeeToolbarComponent {

  constructor(
    private _matDialog: MatDialog
  ) { }

  addEmployee() {
    const dialogRef = this._matDialog.open(CreateEmployeeDialogComponent);
    console.log(dialogRef);
  }
}
