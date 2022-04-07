import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  /**
   * Specific declarations required so Angular knows what and where components are.
   */
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  /**
   * Required for Angular functionality
   */
  imports: [
    BrowserModule, // Browser DOM based support.
    AppRoutingModule, // Routing to diffrent components.
    FormsModule // Form based attributes (e.g. input box).
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
