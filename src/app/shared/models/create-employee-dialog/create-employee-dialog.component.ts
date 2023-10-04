import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.scss']
})
export class CreateEmployeeDialogComponent {
  genders: string[] = ["male", "female", "other"];
  education: string[] = ["matric", "diploma", "intermediate", "graduate", "post graduate"];
  addEmployeeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.addEmployeeForm = this._formBuilder.group({
      employee_first_name: ["", [Validators.required]],
      employee_last_name: ["", [Validators.required]],
      employee_email: ["", [Validators.required]],
      employee_date_of_birth: ["", [Validators.required]],
      employee_gender: ["", [Validators.required]],
      employee_education: ["", [Validators.required]],
      employee_company: ["", [Validators.required]],
      employee_experience: ["", [Validators.required]],
      employee_package: ["", [Validators.required]],
    })
  }

  addEmployee() {
    console.log(this.addEmployeeForm.value);
  }
}
