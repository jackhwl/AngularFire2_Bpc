import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company$: FirebaseObjectObservable<any>;

  constructor(private companyService: CompanyService) {
    this.company$ = this.companyService.company$;
  }

  ngOnInit() {
  }

  saveCompany(company) {
    this.companyService.saveCompany(company);
  }
}
