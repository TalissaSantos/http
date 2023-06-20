import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Hero[] = [];

  personSelected!: Hero;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.peopleService
      .getPeople()
      .subscribe((person) => (this.people = person));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.peopleService.addPerson({ name } as Hero).subscribe((hero) => {
      this.people.push(hero);
    });
  }

  delete(people: Hero): void {
    this.people = this.people.filter((h) => h !== people);

    this.peopleService.deletePerson(people.id).subscribe();
  }
}
