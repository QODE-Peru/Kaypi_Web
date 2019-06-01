import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [TutorialComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralModule { }
