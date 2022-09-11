import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeForm: employeeForm = new employeeForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;

  isSubmitted: boolean = false;
  employeeId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    this.getEmployeeDetailById();
  }
  getEmployeeDetailById() {
    this.httpProvider.getEmployeeDetailById(this.employeeId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editEmployeeForm.id = resultData.id;
          this.editEmployeeForm.name = resultData.name;
          this.editEmployeeForm.surname = resultData.surname;
          this.editEmployeeForm.status = resultData.status;
          this.editEmployeeForm.age = resultData.age;
          this.editEmployeeForm.email = resultData.email;
          this.editEmployeeForm.position = resultData.position;
          this.editEmployeeForm.createdBy = resultData.createdBy;
          this.editEmployeeForm.createdDate = resultData.createdDate;
        }
      }
    },
      (error: any) => { });
  }

  EditEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEmployee(this.editEmployeeForm).subscribe(async data => {
        console.log("status: " + data.status);
        if (data != null && data.status === 201) {
          this.toastr.success("Employee was updated");
          setTimeout(() => {
            this.router.navigate(['/Employees']);
          }, 500);
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
  id: number = 0;
  name: string = "";
  surname: string = "";
  status: boolean = true;
  age: number = 0;
  email: string = "";
  position: string = "";
  createdBy: string = "";
  createdDate: Date = new Date();
  modifiedBy: string = "jeguamanMod";
  modifiedDate: Date = new Date();
}