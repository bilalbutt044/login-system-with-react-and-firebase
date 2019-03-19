import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethod = [
    { id: 1 , contact: 'email' },
    { id: 2 , contact: 'skype' }
 ];
  constructor() { }

  ngOnInit() {
  }

  log(x) {   console.log(x); }
  submit(f) {
    console.log(f);
  
  }
}
