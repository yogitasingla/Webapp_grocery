import { LocationComponent } from './location/location.component';
import { OtpComponent } from './otp/otp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhVerifyComponent} from "./ph-verify/ph-verify.component";
import{CategoryComponent }from "./category/category.component"

const routes: Routes = [
  {path: "verify", component: PhVerifyComponent },
  {path:"otp",component:OtpComponent},
  {path:"location",component:LocationComponent},
  {path:"category",component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
