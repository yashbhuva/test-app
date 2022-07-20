import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { CrudComponent } from './crud/crud.component';
import { CrudFormComponent } from './crud-form/crud-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReactiveformComponent,
    SigninComponent,
    LoginComponent,
    PostComponent,
    CrudComponent,
    CrudFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
