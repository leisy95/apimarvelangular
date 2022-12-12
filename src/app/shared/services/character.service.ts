import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
public name = "nameStartsWith="
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(environment.urlMarvel + '?&ts=' + environment.ts + '&apikey=' + environment.publicKey + '&hash=' + environment.hash + '&limit=100')
  }

  searchCharacter(name: string): Observable<Character>  {
    let nombre = encodeURIComponent(name);
    return this.http.get<Character>(environment.urlMarvel+ '?' + this.name + nombre + '&ts=' + environment.ts + '&apikey=' + environment.publicKey + '&hash=' + environment.hash)
  }

  getDetails(id: number){
     return this.http.get<Character>(environment.urlMarvel + '/' + 	id + '?&ts=' + environment.ts + '&apikey=' + environment.publicKey + '&hash=' + environment.hash );
   }
}
