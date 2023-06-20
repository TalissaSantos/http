import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      { id: 1, name: 'Ada Lovelace' },
      { id: 2, name: 'Carol Shaw' },
      { id: 3, name: 'Grace Hopper' },
      { id: 4, name: 'Jean Sammet' },
      { id: 5, name: 'Karen Sparck Jones' },
      { id: 6, name: 'Radia Perlman' },
      { id: 7, name: 'Frances Allen' },
    ];
    return { people };
  }
}
