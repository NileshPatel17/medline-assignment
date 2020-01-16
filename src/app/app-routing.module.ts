import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './components/register-user';
import { HeaderComponent } from './components/header';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'register-feedback',
    component: HeaderComponent
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
