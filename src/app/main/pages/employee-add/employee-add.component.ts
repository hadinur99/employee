import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPLOYEES } from '../../../_models/data-dummy-employee';
import { EmployeeService } from '../../../_services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.scss',
})
export class EmployeeAddComponent {
  title!: string;
  username!: string | null;
  employeeFormGroup!: FormGroup;
  isEdit = false;
  groups = [
    'Group1',
    'Group2',
    'Group3',
    'Group4',
    'Group5',
    'Group6',
    'Group7',
    'Group8',
    'Group9',
    'Group10',
  ];

  statuses = ['Active', 'Inactive'];

  constructor(
    private fb: FormBuilder,
    private loc: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const employees = this.employeeService.getEmployees();
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
    if (this.username) {
      this.isEdit = true;
    }

    const employee = employees.find(
      (emp: { username: string | null }) => emp.username === this.username
    );
    this.buildForm();

    if (employee) {
      this.title = 'Edit Employee';
      this.employeeFormGroup.setValue({
        username: employee?.username,
        firstName: employee?.firstName,
        lastName: employee?.lastName,
        birthDate: employee?.birthDate,
        email: employee?.email,
        basicSalary: employee?.basicSalary,
        group: employee?.group,
        status: employee?.status,
      });
    } else {
      this.title = 'Add Employee';
    }
  }

  private buildForm() {
    this.employeeFormGroup = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, this.dateValidator]],
      email: ['', [Validators.required, Validators.email]],
      basicSalary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      group: ['', Validators.required],
      status: [''],
    });
  }

  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const today = new Date().toISOString().split('T')[0];
    return control.value > today ? { invalidDate: true } : null;
  }

  onSave(): void {
    if (this.employeeFormGroup.valid) {
      // Save the data
      const newEmployee = this.employeeFormGroup.value;
      if (this.isEdit) {
        this.employeeService.updateEmployees(newEmployee);
      } else {
        this.employeeService.addEmployee(newEmployee);
      }
      this.route.navigateByUrl('/employee-list');
    }
  }

  onCancel(): void {
    // Navigate back to employee list
    console.log('Cancel');
    this.loc.back();
  }
}
