import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ImageModel } from '../shared/image-model.model';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private imagePostUrl: string = "";

  constructor(private http: HttpClient) { }

  uploadImage(imageData: ImageModel): Observable<ImageModel>{
    return this.http.post<ImageModel>(this.imagePostUrl, imageData);
  }
}
