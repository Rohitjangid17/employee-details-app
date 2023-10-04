import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  createEmployee(data: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>("http://localhost:3000/employee", data);
  }

  getEmployee(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>("http://localhost:3000/employee");
  }
}
