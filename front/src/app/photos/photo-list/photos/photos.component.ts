import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhotoComponent } from "../../photo/photo.component"
@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoComponent[] = [];
  rows = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos){
    const newRows = [];

    for(let i = 0; i<photos.length; i++){
      newRows.push(photos.slice(i,i+3))
    };

    return newRows;
  }
}
