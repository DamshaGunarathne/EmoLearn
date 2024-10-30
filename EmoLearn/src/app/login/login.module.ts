import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const loginRouting: ModuleWithProviders<LoginModule> = RouterModule.forChild([
  {
    path: '',
    component: LoginComponent
  }
]);

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    loginRouting,
    SharedModule
  ]
})
export class LoginModule { }
