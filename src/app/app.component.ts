import { Component } from '@angular/core';
import { CommonService } from './shared/services/common.service';
import { Employee } from './shared/interfaces/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-details-app';

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
