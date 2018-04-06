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
import { AboutComponent } from './components/about/about.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

import { ButtonComponent } from './common/button/button.component';
import { ModalComponent } from './common/modal/modal.component';

import { HeroService }          from './services/hero.service';
import { MessageService }       from './services/message.service';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,

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
    AboutComponent,
    AddHeroComponent,
    EditHeroComponent,
    ModalComponent,
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }