import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../main/components/dialogs/confirm-dialog/confirm-dialog.component';
import { EmployeeData } from '../_models/employee';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDeleteDialog(data: EmployeeData) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '280px',
      data: data,
    });

    dialogRef.componentInstance.employeeName = `${data.firstName} ${data.lastName}`;
    return dialogRef.afterClosed();
  }
}
