import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../main/components/dialogs/confirm-dialog/confirm-dialog.component';
import { EmployeeData } from '../_models/employee';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openDeleteDialog(data: EmployeeData) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '280px',
      data: data,
    });

    dialogRef.componentInstance.employeeName = `${data.firstName} ${data.lastName}`;
    return dialogRef.afterClosed();
  }

  snackBarDialog(text1: string, text2: string) {
    this._snackBar.open(text1, text2, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
