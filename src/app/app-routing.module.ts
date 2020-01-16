import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './components/register-user';
import { RegisterUserFeedbackComponent } from './components/register-user-feedback';
import { PageNotFoundComponent } from './components/page-not-found';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'register-feedback',
    component: RegisterUserFeedbackComponent
  },
  {
    path:'404',
    component:PageNotFoundComponent
  },
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
