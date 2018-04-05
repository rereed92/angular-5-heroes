import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    heroService.newHeroEmitted$.subscribe(
      hero => {
          this.heroes.push(hero);
      });

    heroService.removeHeroEmitted$.subscribe(
      hero => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  onSort(option: string) {
    this.heroes = this.heroService.sortHeroes(option, this.heroes);
  }

}