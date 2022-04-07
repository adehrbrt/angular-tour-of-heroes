import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
 @Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  title: string = 'My Heroes'  // title property with string data type (only applies to heroes.component.html).

  heroes: Hero[] = []; // heroes property of an interface array (Hero[]) type, intially declared as empty (= []).

  constructor(private heroService: HeroService) { } // Constructor with the HeroService.

  /**
   * Angular lifecycle hook to conduct a call to the mock-service getHeroes().
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Obtains a hero data via the heroService.getHeroes() function call.
   */
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  /**
   * Add a new hero via the heroService.addHero() function call.
   * @param name 
   * @returns 
   */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  /**
   * Removes a singular hero via the heroService.deleteHero() function call.
   * @param hero 
   */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
