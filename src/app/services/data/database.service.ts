import { Injectable } from '@angular/core';
import { User } from 'src/app/main-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  users : User[] = [
    {
    firstName: "David",
    lastName: "ortiz",
    email: "david54gt@gmail.com",
    phone: 3197142970,
    foto: "foto24rgrt6y45rg4554rDavid",
    password: "12345DAVID"
  },
  {
    firstName: "juan",
    lastName: "montañes",
    email: "montañes@gmail.com",
    phone: 3193147850,
    foto: "foto24rgrt6y45rg4554rmontañes",
    password: "12345JUAN"
  },
  ]

}
