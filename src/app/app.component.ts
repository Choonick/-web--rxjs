import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  values: number[] = [];

  ngOnInit(): void {
    const observable$ = Observable.from(this.myArray);
    this.subscription = observable$
      .map(item => item * 2)
      .filter(item => item > 5)
      .subscribe(
        value => {
          console.log(value);
          this.values.push(value);
        },
        error => console.log(error),
        () => console.log('Streaming finished')
      );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }


}
