import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from 'src/app/service/http-provider.service';

@Component({
  selector: 'app-view-enterprise',
  templateUrl: './view-enterprise.component.html',
  styleUrls: ['./view-enterprise.component.css']
})
export class ViewEnterpriseComponent implements OnInit {

  closeResult = '';
  enterpriseList: any = [];
  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService, private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.getAllEnterprises();
  }
  async getAllEnterprises() {
    this.httpProvider.getAllEnterprises().subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.enterpriseList = resultData;
        }
      }
    },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.enterpriseList = [];
            }
          }
        }
      });
  }

  AddEnterprise() {
    this.router.navigate(['EnterpriseAdd']);
  }

}
