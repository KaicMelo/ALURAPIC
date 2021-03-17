import { NgModule } from "@angular/core";
import { SiginInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    SiginInComponent,
    SignupComponent,
    HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule
  ]
})

export class HomeModule { }
