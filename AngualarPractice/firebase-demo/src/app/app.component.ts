import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  courses: any[];
  subscribe: Subscription;
  constructor(db: AngularFireDatabase ) {
   this.subscribe =  db.list('/course')
    .valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
