import { Component, OnInit } from '@angular/core';
import { DbMoviesService } from '../../services/dbMovies/db-movies.service';
import { Movies } from '../../main-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  
  constructor( private DbMoviesService: DbMoviesService,
    public rout : Router){
    this.Movies = DbMoviesService.getMovies()
  }

  
  Movies!: Movies[];


  ngOnInit(): void {
    console.log(this.Movies);
  }

  async saveMovie(e:string){
    localStorage.setItem('mTrailer',e.toString())
  }

  watchTrailer(e:string){
    this.saveMovie(e);
    this.rout.navigateByUrl(`movies/${e}`)
  }

}
