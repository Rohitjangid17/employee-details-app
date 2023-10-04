import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Employee } from '../../interfaces/common';
import { CommonService } from '../../services/common.service';

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
    private _formBuilder: FormBuilder,
    private _commonService: CommonService
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
    // get data to form object to send data in server
    const employeeData: Employee = {
      employeeFirstName: this.addEmployeeForm.get("employee_first_name")?.value,
      employeeLastName: this.addEmployeeForm.get("employee_last_name")?.value,
      employeeEmail: this.addEmployeeForm.get("employee_email")?.value,
      employeeDateOfBirth: this.addEmployeeForm.get("employee_date_of_birth")?.value,
      employeeGender: this.addEmployeeForm.get("employee_gender")?.value,
      employeeEducation: this.addEmployeeForm.get("employee_education")?.value,
      employeeCompany: this.addEmployeeForm.get("employee_company")?.value,
      employeeExperience: this.addEmployeeForm.get("employee_experience")?.value,
      employeePackage: this.addEmployeeForm.get("employee_package")?.value,
    }
    // add employee API call here
    this._commonService.createEmployee(employeeData).subscribe((employeeRes: Employee) => {
      console.log(employeeRes)
    })
  }
}
