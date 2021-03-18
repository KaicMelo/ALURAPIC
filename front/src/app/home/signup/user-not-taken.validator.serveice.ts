import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SignUpService } from "./signup.service";

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakenService {
  constructor(private signUpServeice: SignUpService) { }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.signUpServeice.checkUserNametTaken(userName)))
        .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
        .pipe(first());
    }
  }
}
