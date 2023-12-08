import { Component, OnDestroy, OnInit, Sanitizer } from '@angular/core';
import { DbMoviesService } from '../../services/dbMovies/db-movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit,OnDestroy{

  constructor(private DbMoviesService: DbMoviesService,
    private sanitaizer: DomSanitizer ){
    
  }

  sanitizedTrailerLink!: SafeResourceUrl;
  mTitle!:string|any;
  Movie!:string|any;

  ngOnInit(): void {

    //get Title by localhost
    this.mTitle = localStorage.getItem('mTrailer')?.toLowerCase()
    this.Movie = this.DbMoviesService.getMovies().filter( f=> f.Title.toLowerCase().includes(this.mTitle))
    this.sanitizedTrailerLink = this.sanitaizer.bypassSecurityTrustResourceUrl(this.Movie[0].TrailerLink)
    console.log(this.Movie);
    //end of the road
  }

  
   
  

  ngOnDestroy(): void {
    localStorage.removeItem('mTrailer')
  }

}
