import { NgModule } from "@angular/core";
import { SiginInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SiginInComponent],
  imports: [CommonModule, ReactiveFormsModule,VMessageModule,RouterModule]
})

export class HomeModule { }
