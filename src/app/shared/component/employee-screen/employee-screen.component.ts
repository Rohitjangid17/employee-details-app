import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Employee } from '../../interfaces/common';

@Component({
  selector: 'app-employee-screen',
  templateUrl: './employee-screen.component.html',
  styleUrls: ['./employee-screen.component.scss']
})
export class EmployeeScreenComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  // Get All Employee
  getAllEmployee() {
    this._commonService.getEmployee().subscribe((employeeRes: Employee[]) => {
        this.employeeList = employeeRes;
        console.log(this.employeeList);
    })
  }
}
