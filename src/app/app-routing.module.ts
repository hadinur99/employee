import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './main/pages/employee-list/employee-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
