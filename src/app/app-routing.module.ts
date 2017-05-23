import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequisitionComponent } from './requisition/requisition.component';
import { LoginComponent } from './login/login.component';
import { MyCompaniesComponent } from './my-companies/my-companies.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'requisition',  component: RequisitionComponent },
  { path: 'my-companies',  component: MyCompaniesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
