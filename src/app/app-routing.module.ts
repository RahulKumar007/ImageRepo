import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  { path: 'upload-image', component: UploadImageComponent },
  { path: 'list-image', component: ImageListingComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
