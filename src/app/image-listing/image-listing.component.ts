import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../shared/image-model.model';
import {GetImagesService} from "./get-images.service";

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.css']
})
export class ImageListingComponent implements OnInit {

  constructor(private getImagesService: GetImagesService) { }

  imagesList: ImageModel[];
  imagesCompleteList: ImageModel[];
  errorMessage: string = "";
  imageName: string = "";
  sortByDate: string = "";

  ngOnInit(): void {
    var self = this;
    this.errorMessage = null;
    this.getImagesService.getImages().subscribe({
      next(data) {self.imagesCompleteList = data; self.imagesList = data;},
      error(error) { self.errorMessage = error}
    });
  }

  filterImages(){
    var name = this.imageName;
    this.imagesList = this.imagesCompleteList.filter(function(image){
      return image.imageName.indexOf(name) >= 0
    })
  }

  sortImages(){
    if(this.sortByDate == "desc")
      this.imagesList = this.imagesList.sort(function(a, b){ 
        let tempA = (new Date(a.imageDate)).getTime();
        let tempB = (new Date(b.imageDate)).getTime();
        return tempB-tempA;
      });
    else
      this.imagesList = this.imagesList.sort(function(a, b){ 
        let tempA = (new Date(a.imageDate)).getTime();
        let tempB = (new Date(b.imageDate)).getTime();
        return tempA-tempB;
      });

  }



}
