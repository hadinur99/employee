import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../_models/data-dummy-employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees = EMPLOYEES;

  constructor() {}

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }
}
