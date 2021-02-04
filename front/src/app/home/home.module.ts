import { NgModule } from "@angular/core";
import { SiginInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SiginInComponent],
  imports: [ReactiveFormsModule]
})

export class HomeModule { }
