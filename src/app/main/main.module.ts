import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { PipeCurrencyIDR } from '../_utils/currency-idr.pipe';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

const components = [
  EmployeeListComponent,
  EmployeeAddComponent,
  EmployeeDetailComponent,
  ConfirmDialogComponent,
];

const modules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormField,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  FormsModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
];

@NgModule({
  declarations: [...components, PipeCurrencyIDR],
  imports: [
    CommonModule,
    MainRoutingModule,
    ...modules,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class MainModule {}
