import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})

export class HeroSearchComponent implements OnInit {
  
  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // Wait 300ms after each keystroke before considering the term.
      distinctUntilChanged(), // Ignore new term if same as previous term.
      switchMap((term: string) => this.heroService.searchHeroes(term)) // Switch to new search observable each time the term changes.
    );
  }

  /**
   * Push a search term into the observable stream.
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
