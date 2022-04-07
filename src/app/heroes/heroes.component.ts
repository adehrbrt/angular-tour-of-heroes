import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = []; // heroes property of an interface array (Hero[]) type, intially declared as empty (= []).

  constructor(private heroService: HeroService, private messageService: MessageService) { } // Constructor with HeroService and MessageService.

  /**
   * Utilise the Angular lifecycle hook to conduct a call to the mock-service.
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Select a hero.
   * Updates the message service to provide the id of the hero selected.
   * @param hero 
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  /**
   * Obtains the mock hero data from the heroService.getHeroes() function.
   */
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
