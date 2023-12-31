import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './main/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBModule } from './modules/mdbmodule/mdb.module';
import { NavbarComponent } from './main/interface/navbar/navbar.component';
import { MoviesComponent } from './main/movies/movies.component';
import { FavoritesComponent } from './main/favorites/favorites.component';
import { MovieTrailerComponent } from './main/movie-trailer/movie-trailer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    MoviesComponent,
    FavoritesComponent,
    MovieTrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
