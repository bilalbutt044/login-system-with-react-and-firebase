import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace
    ]),
    password : new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
