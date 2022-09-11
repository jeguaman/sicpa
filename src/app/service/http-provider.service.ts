import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8090/sicpa/api";

var httpLink = {
  getAllEmployees: apiUrl + "/employees",
  getAllDepartments: apiUrl + "/departments",
  getAllEnterprises: apiUrl + "/enterprises",
  //deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/employees/",
  getDepartmentsDetailById: apiUrl + "/departments/",
  getEnterprisesDetailById: apiUrl + "/enterprises/",
  saveEmployee: apiUrl + "/employees/register",
  saveDepartments: apiUrl + "/departments/register",
  saveEnterprises: apiUrl + "/enterprises/register"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllEmployees(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployees);
  }
  /*public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }*/
  public getEmployeeDetailById(model: number): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + model);
  }
  public saveEmployees(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }

  /*
  Departments
  */
  public getAllDepartments(): Observable<any> {
    return this.webApiService.get(httpLink.getAllDepartments);
  }
  public getDepartmentsDetailById(model: number): Observable<any> {
    return this.webApiService.get(httpLink.getDepartmentsDetailById + model);
  }
  public saveDepartments(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveDepartments, model);
  }

  /*
   Enterprises
   */
  public getAllEnterprises(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEnterprises);
  }
  public getEnterprisesDetailById(model: number): Observable<any> {
    return this.webApiService.get(httpLink.getEnterprisesDetailById + model);
  }
  public saveEnterprises(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEnterprises, model);
  }
}
