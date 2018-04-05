import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroProfileComponent }  from './components/hero-profile/hero-profile.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';
import { HeroSortComponent } from './components/hero-sort/hero-sort.component';
import { MessagesComponent }    from './components/messages/messages.component';

import { ButtonComponent } from './common/button/button.component';

import { HeroService }          from './services/hero.service';
import { MessageService }       from './services/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroProfileComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroSortComponent,
    ButtonComponent,
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }