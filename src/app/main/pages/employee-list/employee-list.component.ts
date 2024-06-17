import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { EmployeeData } from '../../../_models/employee';
import { Router } from '@angular/router';
import { Subject, debounceTime, pipe, take, takeUntil } from 'rxjs';
import { EMPLOYEES } from '../../../_models/data-dummy-employee';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../_services/dialog-service.service';
import { EmployeeService } from '../../../_services/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private route: Router,
    public dialog: MatDialog,
    private dialogService: DialogService,
    private employeeService: EmployeeService
  ) {
    this.dataSource = new MatTableDataSource<EmployeeData>();
  }

  ngOnInit(): void {
    this.employeeService.employees$.subscribe((employees) => {
      this.dataSource.data = employees;
    });

    this.filterSubject.pipe(debounceTime(300)).subscribe((filterValue) => {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(e: Event): void {
    const filterValue = (e.target as HTMLInputElement).value;
    this.filterSubject.next(filterValue);
  }

  onDelete(e: EmployeeData) {
    this.dialogService
      .openDeleteDialog(e)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          if (!data || data == undefined) {
            return;
          } else {
            const data = this.dataSource.data;
            const filteredData = data.filter(
              (employee) => employee.username !== e.username
            );
            this.dataSource.data = filteredData;
          }
        },
      });
  }

  addEmployee() {
    this.route.navigateByUrl('/employee-setup');
  }
}
