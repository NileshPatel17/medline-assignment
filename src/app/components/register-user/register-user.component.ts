import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      ext: new FormControl('')
    }, {
      updateOn: 'blur'
    })
  }
  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }
    this.router.navigate(['./register-feedback',{
      userData:this.userForm.value
    }])
    console.log(this.userForm.value)
  }
}
