import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../shared/image-model.model';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  constructor(private http: HttpClient) { }

  getImagesUrl: string = "assets/images.json";

  getImages(): Observable<ImageModel[]>{
    return this.http.get<ImageModel[]>(this.getImagesUrl);
  }
}
