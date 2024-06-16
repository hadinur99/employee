import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../../../_models/employee';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from '../../../_models/data-dummy-employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent implements OnInit {
  employee!: any;
  username!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const employees = EMPLOYEES;
    this.username = this.route.snapshot.paramMap.get('username');

    this.employee = employees.find((emp) => emp.username === this.username);
  }

  convertCurrency(key: number) {
    let formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    return formatter.format(key);
  }
}
