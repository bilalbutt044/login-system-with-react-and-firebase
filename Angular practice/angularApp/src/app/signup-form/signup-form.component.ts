import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { UsernameValidator } from './username.validator';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  // form = new FormGroup({
  //   account : new FormGroup({
  //     username: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3),
  //       UsernameValidator.cannotContainSpace
  //     ], [
  //       UsernameValidator.shouldBeUnique
  //     ]),
  //     password: new FormControl('' , Validators.required)
  //   })
  // });

  // alternative using FormBuilder class
  form ;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      acoount: fb.group({
        username: ['', [Validators.required,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace],
        [UsernameValidator.shouldBeUnique]
        ],
        password : ['', Validators.required]
        }),
    });
  }
  get username() {
    return this.form.get('account.username');
  }

  login() {
     this.form.setErrors({
       invalidLogin : true
     });
  }
}




