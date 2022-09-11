import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ViewEnterpriseComponent } from './enterprise/view-enterprise/view-enterprise.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Enterprises', component: ViewEnterpriseComponent },
  { path: 'Departments', component: ViewDepartmentComponent },
  { path: 'Employees', component: ViewEmployeeComponent },
  { path: 'EmployeesEdit', component: EditEmployeeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }