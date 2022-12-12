import { Component, OnInit } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  public page: number = 0;
  public search: string = '';

  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchCharacter();
    //this.getAllCharacters();
  }

  searchCharacter() {
    this.route.queryParams.subscribe((params) => {
      if (this.search == '') {
        this.getAllCharacters();
      }
       this.search = params['q'];
       this.searchAllCharacters();
    });
  }

  getAllCharacters(): void {
    this.characterSvc.getCharacters().subscribe((data: any) => {
      const results = data.data.results;
      this.characters = [...this.characters, ...results];
      console.log('result All Characters ->', this.characters);
    });
  }

  searchAllCharacters() {
    this.characterSvc.searchCharacter(this.search).subscribe((data: any) => {
      if (data?.data?.results?.length) {
        const results = data.data.results;
        this.characters = [...results];
      } else {
        this.characters = [];
      }
      console.log('result->', this.characters);
    });
  }
  nextPage() {
    this.page += 5;
  }
  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }
}
