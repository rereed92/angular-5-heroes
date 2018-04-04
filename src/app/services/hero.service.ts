import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private sortUrl = 'api/sortOptions';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes'))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getSortOptions(): Observable<any> {
    return this.http.get(this.sortUrl)
      .pipe(
        tap(sortOptions => this.log(`fetched sort types`)),
        catchError(this.handleError('getSortOptions'))
      )
  }

  sortHeroes(option: string, heroes: any) {
    const sortBy = option.split('-')[0];
    const sortOrder = option.split('-')[1];
    return heroes.sort(this.sort(sortBy, sortOrder === 'asc' ? true : false));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes'))
    );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation') {
    return (error: any) => {
      let errorMessage = `${operation} failed: ${error.message}`;
      console.error(`${errorMessage}:`, error)
      return Observable.throw(errorMessage);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private sort(prop: string, asc: boolean = true) {  
    return function(a, b) {  
      if (a[prop] > b[prop]) {  
          return asc ? 1 : -1  
      } else if (a[prop] < b[prop]) {  
          return asc ? -1 : 1;
      }  
      return 0;  
    }  
  }
}