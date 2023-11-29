import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomComponent } from './room/room.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  
 {path:"",component:HomeComponent},
 {path:"about",component:AboutComponent},
 {path:"room", component:RoomComponent},
 {path:"gallery", component:GalleryComponent},
 {path:"login",component:LoginComponent},
  {path:"contact", component:ContactComponent},
  {path:"amenities", component:AmenitiesComponent},
  {path:"booking", component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
