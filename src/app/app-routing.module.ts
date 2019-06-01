import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { GeneralModule } from './general/general.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';
import { TutorialComponent } from './general/tutorial/tutorial.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { UserTypeComponent } from './general/user-type/user-type.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'tutorial', component: TutorialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: UserTypeComponent },

];

@NgModule({
    imports: [
      BrowserModule,
      GeneralModule,
      LocationModule,
      UserModule,
      RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
