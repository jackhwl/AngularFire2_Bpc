import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import { Company } from '../company';

@Injectable()
export class CompanyService {

  companies$: FirebaseListObservable<Company[]>;
  company$: FirebaseObjectObservable<Company>;
  constructor(private db: AngularFireDatabase) {
    this.company$ = this.db.object(`company`);
    this.companies$ = this.db.list(`companies`);
  }

  getCompanies() {
    return this.companies$;
  }

  saveCompany(company) {
    Observable.from(this.company$.set({ name: company.name }))
      .catch(error => Observable.throw(error));
  }

  editCompany(company) {
    this.company$.update({phone:123})
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
  }

  removeCompany(company) {
    this.company$.remove()
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
  }

}
