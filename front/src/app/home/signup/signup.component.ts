import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validator/lower-case.validator";
import { UserNotTakenService } from "./user-not-taken.validator.serveice";

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenService: UserNotTakenService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(40)
        ],
        this.userNotTakenService.checkUserNameTaken()
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })
  }
}
