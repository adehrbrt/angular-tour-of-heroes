import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

/**
 * @Injectable denotes a decorator that participates in the dependency injection system
 * with the service output being accessible in other components (as required).
 */
@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  /**
   * Create a localised in memory database for heroes.
   * @returns heroes
   */
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Dr Nice' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];

    return {heroes};
  }

  /**
   * Overrides the genId method to ensure that a hero always has an id.
   * If the heroes array is empty, the method below returns the initial 
   * number (1). if the heroes array is not empty, the method below returns 
   * the highest hero id + 1.
   * @param heroes 
   * @returns 
   */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
