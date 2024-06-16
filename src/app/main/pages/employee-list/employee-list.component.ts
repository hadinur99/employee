import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { EmployeeData } from '../../../_models/employee';
import { Router } from '@angular/router';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'basicSalary',
    'status',
    'action',
  ];
  dataSource: MatTableDataSource<EmployeeData>;

  private filterSubject = new Subject<string>();
  private $ngUnsubscribe = new Subject();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private route: Router) {
    this.dataSource = new MatTableDataSource<EmployeeData>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.loadData();

    this.filterSubject.pipe(debounceTime(300)).subscribe((filterValue) => {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    });
  }

  loadData(): void {
    this.http
      .get<EmployeeData[]>('assets/employee-data-dummy.json')
      .pipe(takeUntil(this.$ngUnsubscribe))
      .subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource<EmployeeData>(data);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }

  applyFilter(e: Event): void {
    const filterValue = (e.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filterSubject.next(filterValue);
  }

  onDelete(e: EmployeeData) {
    console.log('delete', e);
    const username = e?.username;
    this.dataSource;
  }

  addEmployee() {
    this.route.navigateByUrl('/employee-setup');
  }
}
