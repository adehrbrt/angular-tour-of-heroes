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

  heroes: Hero[] = []; // heroes property of an interface array (Hero[]) type, intially declared as empty (= []).

  constructor(private heroService: HeroService) { } // Constructor with the HeroService.

  /**
   * Angular lifecycle hook to conduct a call to the mock-service getHeroes().
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Obtains the mock hero data from the heroService.getHeroes() function.
   */
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
