import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AuthGuard } from '../_guards/auth.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employee-list',
        component: EmployeeListComponent,
      },
      {
        path: 'employee-setup',
        component: EmployeeAddComponent,
      },
      {
        path: 'employee-setup/:username',
        component: EmployeeAddComponent,
      },
      {
        path: 'employee-detail/:username',
        component: EmployeeDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
