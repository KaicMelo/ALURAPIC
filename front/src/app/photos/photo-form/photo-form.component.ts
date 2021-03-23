import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.services';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private PhotoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowcomments: [true]
    })
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowcomments = this.photoForm.get('allowcomments').value;

    this.PhotoService.upload(description, allowcomments, this.file).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
