import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from '../../../_models/data-dummy-employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.scss',
})
export class EmployeeAddComponent {
  title!: string;
  username!: string | null;
  employeeFormGroup!: FormGroup;
  groups = [
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
    'Group 6',
    'Group 7',
    'Group 8',
    'Group 9',
    'Group 10',
  ];

  constructor(
    private fb: FormBuilder,
    private loc: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employees = EMPLOYEES;
    this.username = this.route.snapshot.paramMap.get('username');

    const employee = employees.find((emp) => emp.username === this.username);
    // console.log('u', employees);
    this.buildForm();

    if (employee) {
      this.title = 'Edit Employee';
      console.log('em', employee);
      this.employeeFormGroup.setValue({
        firstName: employee?.firstName,
        lastName: employee?.lastName,
        birthDate: employee?.birthDate,
        email: employee?.email,
        basicSalary: employee?.basicSalary,
        group: employee?.group,
      });
    } else {
      this.title = 'Add Employee';
    }
  }

  private buildForm() {
    this.employeeFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, this.dateValidator]],
      email: ['', [Validators.required, Validators.email]],
      basicSalary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      group: ['', Validators.required],
    });
  }

  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const today = new Date().toISOString().split('T')[0];
    return control.value > today ? { invalidDate: true } : null;
  }

  onSave(): void {
    if (this.employeeFormGroup.valid) {
      // Save the data
      console.log('Employee Data:', this.employeeFormGroup.value);
    }
  }

  onCancel(): void {
    // Navigate back to employee list
    console.log('Cancel');
    this.loc.back();
  }
}
