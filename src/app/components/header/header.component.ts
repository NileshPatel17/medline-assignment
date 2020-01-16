import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
@Component({
    selector: 'app-header',
    template: `
    <header class='bg-blue-500 h-300 mb-2'>{{userData | json}}</header>
    `
})
export class HeaderComponent {
    userData;
    constructor(private route: ActivatedRoute) {
        console.log(this.route)
        this.route.paramMap.subscribe(
            params => {
                this.userData = params.get('userData')
            })

    }
}