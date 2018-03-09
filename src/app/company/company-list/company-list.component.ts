import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Company } from '../../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies$: FirebaseListObservable<Company[]>;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): any {
    this.companies$ = this.companyService.getCompanies();
  }
}
