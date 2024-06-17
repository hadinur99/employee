import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../_models/data-dummy-employee';
import { BehaviorSubject } from 'rxjs';
import { EmployeeData } from '../_models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  //   private employees = EMPLOYEES;

  private employeesSubject = new BehaviorSubject<any>(EMPLOYEES);

  employees$ = this.employeesSubject.asObservable();

  constructor() {}

  getEmployees() {
    return this.employeesSubject.value;
  }

  addEmployee(newEmployee: EmployeeData): void {
    const updatedEmployees = [...this.getEmployees(), newEmployee];
    this.employeesSubject.next(updatedEmployees);
  }

  updateEmployees(updatedEmployee: EmployeeData): void {
    const updatedEmployees = this.getEmployees().map(
      (employee: { username: string }) =>
        employee.username === updatedEmployee.username
          ? updatedEmployee
          : employee
    );
    this.employeesSubject.next(updatedEmployees);
  }
}
