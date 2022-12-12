import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control-lg"
      placeholder="Search..."
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}

  onSearch(search: string): void{
    console.log(search);

     if (search && search.length > 0) {
       this.router.navigate(['/character-list'],{
         queryParams: { q: search },
       });
     }
  }
}
