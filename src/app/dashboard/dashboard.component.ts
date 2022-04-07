import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  title: string = 'Top Heroes' // title property with string data type (only applies to dashboard.component.html).

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
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
