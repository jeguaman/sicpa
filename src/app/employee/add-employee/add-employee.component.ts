import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: employeeForm = new employeeForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  AddEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEmployee(this.addEmployeeForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.status === 201 ) {
            this.toastr.success("Employee was added");
            setTimeout(() => {
              this.router.navigate(['/Employees']);
            }, 500);
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Employees']);
          }, 500);
        });
    }
  }
}

export class employeeForm {
  name: string = "";
  surname: string = "";
  status: boolean = true;
  age: number = 0;
  email: string = "";
  position: string = "";
  createdBy: string = "jeguaman";
  createdDate: Date = new Date();
}
