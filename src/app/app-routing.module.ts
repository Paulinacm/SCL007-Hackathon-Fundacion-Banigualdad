import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent  } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { HeaderComponent  } from './components/menu/header/header.component';
import { FooterComponent } from './components/menu/footer/footer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/profile', component: ProfileComponent},
  {path: 'users/regiter', component: RegisterComponent},
  {path: 'menu/header', component: HeaderComponent},
  {path: 'menu/footer', component: FooterComponent},
  {path: 'page404', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
