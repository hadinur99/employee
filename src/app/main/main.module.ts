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
import { CurrencyIDR } from '../_utils/currency-idr.pipe';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent,
    CurrencyIDR,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
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

    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,

    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,

    MatSelectModule,
  ],
})
export class MainModule {}
