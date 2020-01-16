import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ModalService } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medline-assignment';
  constructor(private modalService: ModalService, private router: Router) { }

}
