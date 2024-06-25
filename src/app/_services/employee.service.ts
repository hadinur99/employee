import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../_models/data-dummy-employee';
import { BehaviorSubject } from 'rxjs';
import { EmployeeData } from '../_models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  //   private employees = EMPLOYEES;

  private employeesSubject = new BehaviorSubject<any>(EMPLOYEES);
  employees$ = this.employeesSubject.asObservable();

  private filterSubject = new BehaviorSubject<string>('');
  filter$ = this.filterSubject.asObservable();

  constructor() {}

  getEmployees() {
    return this.employeesSubject.value;
  }

  addEmployee(newEmployee: EmployeeData): void {
    try {
      const updatedEmployees = [...this.getEmployees(), newEmployee];
      this.employeesSubject.next(updatedEmployees);
    } catch (error) {
      console.error('Failed to update employees', error);
    }
  }

  updateEmployees(updatedEmployee: EmployeeData): void {
    try {
      const updatedEmployees = this.getEmployees().map(
        (employee: { username: string }) =>
          employee.username === updatedEmployee.username
            ? updatedEmployee
            : employee
      );
      this.employeesSubject.next(updatedEmployees);
    } catch (error) {
      console.error('Failed to update employees', error);
    }
  }

  setFilterValue(value: string): void {
    this.filterSubject.next(value);
  }

  getFilterValue(): string {
    return this.filterSubject.value;
  }
}
