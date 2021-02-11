import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageModel } from '../shared/image-model.model';
import { UploadImageService } from "../upload-image/upload-image.service";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  imageForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private imageUploadService: UploadImageService) { }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group(
      {
        imageName: ['', Validators.required],
        uploadImageUrl: ['', Validators.required]
      }
    )
  }

  successMessage: string = "";
  errorMessage: string = "";
  
  submitImage(){
    this.successMessage = null;
    this.errorMessage = null;
    var imageDate = (new Date()).toISOString();
    var imageData = new ImageModel();
    imageData.imageName = this.imageForm.value.imageName;
    imageData.imageUrl = this.imageForm.value.uploadImageUrl;
    imageData.imageDate = imageDate;
    this.imageUploadService.uploadImage(imageData).subscribe(
      (success: any) => this.successMessage = success.message,
      (error: any) => this.errorMessage = error.message
    );
  }

}
