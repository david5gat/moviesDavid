import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movies } from 'src/app/main-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbMoviesService {


  constructor() { }

  private MovieTitle = new Subject<string>

  saveMovie!:string;

  Movies: Movies[] = [
    {
      Title: 'Tenet',
      Description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      Rating: 7.8,
      Duration:  '2h 30 min',
      Genre: "Action, Sci-Fi",
      ReleasedDate: "3 September 2020",
      Image:"./assets/Tenet.png",
      TrailerLink: "https://www.youtube.com/embed/LdOM0x0XDMo",
      favorite:false
    },
    {
      Title: 'Spider-Man: Into the Spider-Verse',
      Description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities",
      Rating: 8.4,
      Duration:  '1h 57min',
      Genre: "Action, Animation, Adventure",
      ReleasedDate: "14 December 2018",
      Image:"./assets/SpiderMan.png",
      TrailerLink: "https://www.youtube.com/embed/tg52up16eq0",
      favorite:false
    },
    {
      Title: 'Knives Out',
      Description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      Rating: 7.9,
      Duration:  '2h 10min',
      Genre: "Comedy, Crime, Drama",
      ReleasedDate: "27 November 2019",
      Image:"./assets/KnivesOut.png",
      TrailerLink: "https://www.youtube.com/embed/qGqiHJTsRkQ",
      favorite:false
    },
    {
      Title: ' Guardians of the Galaxy',
      Description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      Rating:  8.0,
      Duration:  '2h 1min',
      Genre: "Action, Adventure, Comedy",
      ReleasedDate: "1 August 2014",
      Image:"./assets/GuardiansofTheGalaxy.png",
      TrailerLink: "https://www.youtube.com/embed/d96cjJhvlMA",
      favorite:false
    },
    {
      Title: 'Age of Ultron',
      Description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan. ",
      Rating: 7.3,
      Duration:  '2h 21min',
      Genre: "Action, Adventure, Sci-Fi",
      ReleasedDate: "1 May 2015",
      Image:"./assets/Avengers.png",
      TrailerLink: "https://www.youtube.com/embed/tmeOjFno6Do",
      favorite:false
    }
  ]

  updateMovies(update : Movies){
    this.Movies = { ...this.Movies, ...update }
  }

  getMovies() : Movies[]{
    return this.Movies;
  }
  
}
