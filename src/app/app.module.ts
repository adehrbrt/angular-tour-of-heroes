import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  /**
   * Specific declarations required so Angular knows what and where components are.
   */
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  /**
   * Required for Angular functionality
   */
  imports: [
    BrowserModule, // Browser DOM based support.
    AppRoutingModule, // Routing to diffrent components.
    FormsModule, // Form based attributes (e.g. input box).
    HttpClientModule, // Allows the application to perform Hyper Text Transfer Protocol calls (client side).

    /**
     * The HttpClientInMemoryWebApiModule module intercepts HTTP requests
     * and returns simulated server responses.
     * Remove it when a real server is ready to receive requests.
     */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
