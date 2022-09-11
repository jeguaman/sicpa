import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8090/sicpa/api";

var httpLink = {
  getAllEmployees: apiUrl + "/employees",
  //deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/employees/",
  saveEmployee: apiUrl + "/employees/register"
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
  public saveEmployee(model: any): Observable<any> {
    console.log("MOdel:" + model);
    return this.webApiService.post(httpLink.saveEmployee, model);
  }
}
