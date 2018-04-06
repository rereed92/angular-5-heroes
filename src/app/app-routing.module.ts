import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroProfileComponent }  from './components/hero-profile/hero-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'hero/:id', component: HeroProfileComponent },
  { path: 'hero/:id/edit', component: EditHeroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
