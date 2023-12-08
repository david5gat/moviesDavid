import { Injectable } from '@angular/core';
import { concat } from 'rxjs';
import { Movies } from 'src/app/main-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DblocalstorageService {

  constructor() { }

  Movies!:Movies[]

  saveLocalstorage(e:Movies[]){
    localStorage.setItem('favoritesM',JSON.stringify(e))
  }

  localSmovies(){
   const storeData = localStorage.getItem('favoritesM')
    if (storeData) {
      this.Movies = JSON.parse(storeData);
    }
    return this.Movies;
  }
  
  getfavoritesMovies(){
    const searFavorites = this.Movies.filter(f => f.favorite === true)

    searFavorites.forEach(favoriteMovie => {
      console.log(favoriteMovie);
      
    })
    return this.Movies;
  }
}
