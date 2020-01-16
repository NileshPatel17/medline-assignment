import { Component } from '@angular/core';
import { IUSER } from '../../models'
import { RegisterUserService } from 'src/app/services/register-user.service';
@Component({
    selector: 'app-register-user-feedback',
    template: `
    <div>
        <div class="text-3xl mb-2 mt-2 ml-2">Thank You</div>
        <div class="ml-2">Your details has been submitted successfully!</div>
    </div>
    `
})
export class RegisterUserFeedbackComponent {
    userData: IUSER;
    constructor(private registerUserService: RegisterUserService) {
        this.userData = this.registerUserService.get()

    }
}