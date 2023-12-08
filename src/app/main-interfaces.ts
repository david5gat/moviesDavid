export interface Main {

}

export interface User {
  firstName: string,
  lastName: string,
  email: string,
  phone: number
  foto: string,
  password: string
}


export interface Movies {
  Title: string
  Description: string
  Rating: number
  Duration: string
  Genre: string
  ReleasedDate: string
  Image: string
  TrailerLink: string
  favorite : boolean
}
