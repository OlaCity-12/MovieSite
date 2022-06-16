import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieDetailsComponent } from './movieComponet/movie-details/movie-details.component';
import { MoviePageComponent } from './movieComponet/movie-page/movie-page.component';
import { SignupDetailsComponent } from './registerPage/signup-details/signup-details.component';
import { SignupFormComponent } from './registerPage/signup-form/signup-form.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component:SignupDetailsComponent},
  {path: 'signup/form', component: SignupFormComponent},
  {path: 'movies', component: MoviePageComponent},
  {path: 'movies/id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
