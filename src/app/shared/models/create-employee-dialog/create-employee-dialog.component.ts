import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.scss']
})
export class CreateEmployeeDialogComponent {
  genders: string[] = ["male", "female", "other"];
  education: string[] = ["matric", "diploma", "intermediate", "graduate", "post graduate"];
}
