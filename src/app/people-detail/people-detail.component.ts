import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../Hero';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent implements OnInit {
  person!: Hero | undefined;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private PeopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.PeopleService.getPerson(id).subscribe(
      (person) => (this.person = person)
    );
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    if (this.person) {
      this.PeopleService.updateHero(this.person).subscribe(() => this.goBack());
    }
  }
}
