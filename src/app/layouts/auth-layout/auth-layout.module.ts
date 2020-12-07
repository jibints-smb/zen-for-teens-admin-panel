import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
  ]
})
export class AuthLayoutModule { }
