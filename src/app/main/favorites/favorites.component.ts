import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/main-interfaces';
import { DblocalstorageService } from '../../services/localstore/dblocalstorage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  constructor(private DblocalstorageService:DblocalstorageService){

  }

  Movies! : Movies[] 

  async ngOnInit() {
    this.Movies = this.DblocalstorageService.getfavoritesMovies()
    console.log(this.Movies);
  }
  

}
