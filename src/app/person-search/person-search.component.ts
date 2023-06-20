import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

import { Hero } from '../Hero';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss'],
})
export class PersonSearchComponent implements OnInit {
  people$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people$ = this.searchTerms.pipe(
      // Faz com que seja aguardado 330 ms a cada letra digitada
      debounceTime(300),
      // ignora letras iguais
      distinctUntilChanged(),
      // faz a pesqisa a cada letra digitada
      switchMap((term: string) => this.peopleService.searchPerson(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
