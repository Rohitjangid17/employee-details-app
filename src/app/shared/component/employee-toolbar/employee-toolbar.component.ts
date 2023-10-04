import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeDialogComponent } from '../../models/create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'app-employee-toolbar',
  templateUrl: './employee-toolbar.component.html',
  styleUrls: ['./employee-toolbar.component.scss']
})
export class EmployeeToolbarComponent implements OnInit {

  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void { }

  addEmployee() {
    const dialogRef = this._matDialog.open(CreateEmployeeDialogComponent, {
      height: '400px',
      width: '600px',
    });
    console.log(dialogRef);
  }
}
