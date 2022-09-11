import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  editDepartmentForm: departmentForm = new departmentForm();

  @ViewChild("departmentForm")
  enterpriseForm!: NgForm;

  isSubmitted: boolean = false;
  departmentId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.departmentId = this.route.snapshot.params['id'];
    this.getDepartmentsDetailById();
  }
  getDepartmentsDetailById() {
    this.httpProvider.getDepartmentsDetailById(this.departmentId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editDepartmentForm.id = resultData.id;
          this.editDepartmentForm.name = resultData.name;
          this.editDepartmentForm.description = resultData.description;
          this.editDepartmentForm.status = resultData.status;
          this.editDepartmentForm.phone = resultData.phone;
          this.editDepartmentForm.createdBy = resultData.createdBy;
          this.editDepartmentForm.createdDate = resultData.createdDate;
          this.editDepartmentForm.idEnterprise.id = resultData.idEnterprise.id
        }
      }
    },
      (error: any) => { });
  }

  EditDepartment(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveDepartments(this.editDepartmentForm).subscribe(async data => {
        if (data != null && data.status === 201) {
          this.toastr.success("Department was updated");
          setTimeout(() => {
            this.router.navigate(['/Departments']);
          }, 500);
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Departments']);
          }, 500);
        });
    }
  }
}

export class departmentForm {
  id: number = 0;
  name: string = "";
  description: string = "";
  status: boolean = true;
  phone: number = 0;
  createdBy: string = "";
  createdDate: Date = new Date();
  modifiedBy: string = "jeguamanMod";
  modifiedDate: Date = new Date();
  idEnterprise: { id: string } = {
    id: '',
  };
}


