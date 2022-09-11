import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.css']
})
export class AddEnterpriseComponent implements OnInit {
  addEnterpriseForm: enterpriseForm = new enterpriseForm();

  @ViewChild("enterpriseForm")
  enterpriseForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  AddEnterprise(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEnterprises(this.addEnterpriseForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.status === 201) {
            this.toastr.success("Enterprise was added");
            setTimeout(() => {
              this.router.navigate(['/Enterprises']);
            }, 500);
          }
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
  name: string = "";
  phone: string = "";
  address: string = "";
  status: boolean = true;
  createdBy: string = "jeguaman";
  createdDate: Date = new Date();
}