import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ModalService } from 'src/app/_modal';
import { RegisterUserService } from 'src/app/services/register-user.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private router:Router,private modalService:ModalService,private registerUserService:RegisterUserService) { }

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
    this.modalService.open("custom-modal-1")
  }
 
  closeModal(id: string,confirm: boolean) {
    this.modalService.close(id);
    if(confirm){
      this.registerUserService.set(this.userForm.value)
      this.router.navigate(['./register-feedback'])
    }
}
}
