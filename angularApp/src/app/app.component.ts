import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  viewMode = 'map';
  courses;

  title = 'angularApp';
  post = {
    isFavorite : true
  };
  course = [];
  task = {
    id : 1,
    assignee : {
      name: 'bilal'
    }
  };
  onFavoriteChange($event: FavoriteChangeEventArgs) {
    console.log('change event:', $event.newValue);
  }
  Add() {
    this.courses.push({ id: 4 , title: 'course' + this.courses.length });
  }
  onChange(item) {
    const index =  this.courses.indexOf(item);
    this.courses.splice(index , 1);
  }
  loadCourses() {
    this.courses = [
      {id: 1 , title : 'course1' },
      {id: 2 , title : 'course2' },
      {id: 3 , title : 'course3' }
    ];
  }
  trackCourse(index , course) {
    return course ? course.id : undefined;
  }
}



