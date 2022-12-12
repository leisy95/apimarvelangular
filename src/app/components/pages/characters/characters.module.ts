import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterComponent } from '@characters/character.component';
import { FiltroPipe } from '@shared/components/pipes/filtro.pipe';


const myComponents = [
  CharacterDetailsComponent,
  CharacterListComponent,
  CharacterComponent,
  FiltroPipe
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class CharactersModule {}
