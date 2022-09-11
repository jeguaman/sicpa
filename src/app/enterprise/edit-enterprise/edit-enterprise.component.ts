import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.component.html',
  styleUrls: ['./edit-enterprise.component.css']
})
export class EditEnterpriseComponent implements OnInit {
  editEnterpriseForm: enterpriseForm = new enterpriseForm();

  @ViewChild("enterpriseForm")
  enterpriseForm!: NgForm;

  isSubmitted: boolean = false;
  enterpriseId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.enterpriseId = this.route.snapshot.params['id'];
    this.getEnterprisesDetailById();
  }
  getEnterprisesDetailById() {
    this.httpProvider.getEnterprisesDetailById(this.enterpriseId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editEnterpriseForm.id = resultData.id;
          this.editEnterpriseForm.name = resultData.name;
          this.editEnterpriseForm.address = resultData.address;
          this.editEnterpriseForm.status = resultData.status;
          this.editEnterpriseForm.phone = resultData.phone;
          this.editEnterpriseForm.createdBy = resultData.createdBy;
          this.editEnterpriseForm.createdDate = resultData.createdDate;
        }
      }
    },
      (error: any) => { });
  }

  EditEnterprise(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEnterprises(this.editEnterpriseForm).subscribe(async data => {
        if (data != null && data.status === 201) {
          this.toastr.success("Enterprise was updated");
          setTimeout(() => {
            this.router.navigate(['/Enterprises']);
          }, 500);
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Enterprises']);
          }, 500);
        });
    }
  }
}

export class enterpriseForm {
  id: number = 0;
  name: string = "";
  address: string = "";
  status: boolean = true;
  phone: number = 0;
  createdBy: string = "";
  createdDate: Date = new Date();
  modifiedBy: string = "jeguamanMod";
  modifiedDate: Date = new Date();
}
