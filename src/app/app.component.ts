import { Component } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/take';
import { MaterialModule } from './material/material.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  constructor(private db: AngularFireDatabase) {
    const observable = this.db.object(`connected`);
    //observable.subscribe(console.log);
    observable.take(2)
    .subscribe(
      next => console.log('next', next),
      error => console.log('error', error),
      () => console.log('completed')
    );
    //.subscribe(console.log);
  }
}
