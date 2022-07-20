import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveformComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'crudform',
    component: CrudFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
