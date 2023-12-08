import { Component, OnInit } from '@angular/core';
import { DbMoviesService } from '../../services/dbMovies/db-movies.service';
import { Movies } from '../../main-interfaces';
import { Router } from '@angular/router';
import { DblocalstorageService } from '../../services/localstore/dblocalstorage.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{

  
  
  constructor( private DbMoviesService: DbMoviesService,
    public rout : Router,
    private DblocalstorageService: DblocalstorageService){
    this.Movies = DbMoviesService.getMovies()
  }
  
  favoriteMovie(e:Movies){
    e.favorite = !e.favorite
    this.saveFavoritesM(this.Movies)
    this.saveFavoritesM(this.Movies)
    console.log(this.Movies);
    
  }
  
  Movies!: Movies[];


  ngOnInit(): void {
    console.log(this.Movies);
  }

  saveFavoritesM(e:Movies[]){
    this.DblocalstorageService.saveLocalstorage(e)
  }

   saveMovie(e:string){
    localStorage.setItem('mTrailer',e.toString())
  }

  watchTrailer(e:string){
    this.saveMovie(e);
    this.rout.navigateByUrl(`movies/${e}`)
  }

}
