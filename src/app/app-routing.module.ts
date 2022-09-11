import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { AddEnterpriseComponent } from './enterprise/add-enterprise/add-enterprise.component';
import { EditEnterpriseComponent } from './enterprise/edit-enterprise/edit-enterprise.component';
import { ViewEnterpriseComponent } from './enterprise/view-enterprise/view-enterprise.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Enterprises', component: ViewEnterpriseComponent },
  { path: 'Departments', component: ViewDepartmentComponent },
  { path: 'Employees', component: ViewEmployeeComponent },
  { path: 'EmployeesEdit/:id', component: EditEmployeeComponent },
  { path: 'EmployeesAdd', component: AddEmployeeComponent },
  { path: 'EnterpriseAdd', component: AddEnterpriseComponent },
  { path: 'EnterpriseEdit/:id', component: EditEnterpriseComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }