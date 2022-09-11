import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEnterpriseComponent } from './enterprise/add-enterprise/add-enterprise.component';
import { EditEnterpriseComponent } from './enterprise/edit-enterprise/edit-enterprise.component';
import { ViewEnterpriseComponent } from './enterprise/view-enterprise/view-enterprise.component';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    AddEnterpriseComponent,
    EditEnterpriseComponent,
    ViewEnterpriseComponent,
    ViewDepartmentComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
