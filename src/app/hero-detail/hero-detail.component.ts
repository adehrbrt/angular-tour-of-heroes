import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

/**
 * @Component is a decorator in Angular to define the selector, HTML template file and CSS template file.
 */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; //Defines an input area with @input annotation functioning as a decorator to bind hero externally.
  
  constructor() { } // Constructor.

  ngOnInit(): void { }
}
