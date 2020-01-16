import { Injectable } from '@angular/core'
import { IUSER } from '../models'

@Injectable({ providedIn: 'root' })
export class RegisterUserService {
    private _user: IUSER;
    set(user: IUSER) {
        this._user = user
    }
    get() {
        return this._user
    }
}