import { Component } from '@angular/core';
import { CoursesServices } from './course.service';

@Component({
    selector: 'app-course',
    templateUrl: 'course.component.html'
})

export class CoursesComponent {

    // tslint:disable-next-line:no-inferrable-types
    colSpan: number = 5;
    text = 'my first angular app';
    imageUrl = 'https://via.placeholder.com/350x150';
    isActive = false;
    email = 'me@gmail.com';
    course = {
        title: 'this is course ttile',
        rating: 4.9563,
        students: 30156,
        prince: 120.96,
        releaseDate: new Date()
    };
    paragraph  = `
         kjadhkjadh akjd hakjdhkaj hdkjadhkjadh kajdhkajdhkjadhkjahdkjahdjahdkjadhkajdhkajdhakjsdhak kj ada
    `;
    ClickBtn($event) {
        $event.stopPropagation();
        console.log('btn click');
    }
    divClick() {
        console.log('div click');
    }

    keyPressEvent() {
        console.log(this.email);
    }
    courses;
    constructor(service: CoursesServices) {
        this.courses = service.getServices();
    }
}
