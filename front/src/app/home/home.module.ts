import { NgModule } from "@angular/core";
import { SiginInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
  declarations: [SiginInComponent],
  imports: [CommonModule, ReactiveFormsModule,VMessageModule]
})

export class HomeModule { }
