import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/**
 * @Injectable denotes a decorator that participates in the dependency injection system
 * with the service output being accessible in other components (as required).
 */
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * Assigns a const value for the mock-data of HEROES.
   * Adds a message to the messageService stating heroes have been fetched.
   * @returns heroes
   */
   getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /**
   * Assigns a const value for a singular selected from mock-data of HEROES.
   * Adds a message to the messageService statings a single hero has been fetched.
   * @param id 
   * @returns hero
   */
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}