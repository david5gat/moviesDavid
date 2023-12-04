import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './main/movies/movies.component';
import { ProfileComponent } from './main/profile/profile.component';
import { MovieTrailerComponent } from './main/movie-trailer/movie-trailer.component';

const routes: Routes = [
  {path:'',   redirectTo: '/movies', pathMatch: 'full' },
  {path:'movies',pathMatch:'prefix',component:MoviesComponent},
  {path:'movies/:movie', pathMatch:'prefix', component:MovieTrailerComponent},
  // children:[{
  //   path:'',pathMatch:'prefix',component:MovieTrailerComponent
  // }
  // ]},
  {path:'profile',pathMatch:'prefix',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
