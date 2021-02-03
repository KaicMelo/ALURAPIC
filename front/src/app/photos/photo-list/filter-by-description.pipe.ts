import { Pipe, PipeTransform } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: PhotoComponent[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery))
    } else {
      return photos;
    }
  }
}
