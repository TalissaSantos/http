import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

import { Hero } from './Hero';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleUrl = 'api/people';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getPersonUrl(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.peopleUrl);
  }

  getPeople(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.peopleUrl)
      .pipe(catchError(this.handleError<Hero[]>('GETPEOPLE', [])));
  }

  getPerson(id: number): Observable<Hero> {
    const url = `${this.peopleUrl}/${id}`;
    return this.httpClient.get<Hero>(url).pipe(
      tap((_) => console.log(`O Id encontrado foi ${id}`)),
      catchError(this.handleError<Hero>(`GETPERSON ID ${id}`))
    );
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(this.peopleUrl, hero, this.httpOptions).pipe(
      tap((_) => console.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addPerson(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.peopleUrl, hero, this.httpOptions)
      .pipe(
        tap((newPerson: Hero) =>
          console.log(`O id adicionado foi ${newPerson.id}`)
        ),
        catchError(this.handleError<Hero>('addPerson'))
      );
  }

  deletePerson(id: number): Observable<Hero> {
    const url = `${this.peopleUrl}/${id}`;

    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => console.log(`O id da pessoa exclida  id=${id}`)),
      catchError(this.handleError<Hero>('deletePerson'))
    );
  }

  searchPerson(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.peopleUrl}/?name=${term}`).pipe(
      tap((person) =>
        person.length
          ? console.log(`Pessoa encontrada"${term}"`)
          : console.log(`Não há pessoa com esse nome "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchPerson', []))
    );
  }
}
