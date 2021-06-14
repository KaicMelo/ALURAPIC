import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const CLOUD = `${environment.ApiUrl}/imgs/`;

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _url = '';

  @Input() description = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
