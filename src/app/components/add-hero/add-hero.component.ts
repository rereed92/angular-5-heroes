import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  heroes: Hero[];
  powers = [];
  newHero = new Hero('', '', '', '');

  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHeroes();
    this.getPowers();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getPowers(): void {
    this.heroService.getPowers()
      .subscribe(powers => this.powers = powers);
  }

  addHero(): void {
    this.newHero.id = (this.newHero.name).toLowerCase().replace(' ', '-');
    this.heroService.addHero(this.newHero)
      .subscribe(hero => {
        this.heroService.emitNewHero(hero);
      });
  }

  goBack(): void {
    this.location.back();
  }

}