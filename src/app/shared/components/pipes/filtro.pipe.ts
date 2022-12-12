import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( characters: Character[], page: number = 0): Character[] {

    // if (search.length == 0)

     return characters.slice(page, page + 12);

      //  const filterCharacters = characters.filter( char => char.name.includes(search));
      //  return filterCharacters.slice(page, page + 10);
   }

}
