import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../../hero';
import { HeroService }  from '../../services/hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  @Input() hero: Hero;

  powers = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getPowers();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getPowers(): void {
    this.heroService.getPowers()
      .subscribe(powers => this.powers = powers);
  }

  updateHero(updatedHero: Hero): void {
    this.heroService.updateHero(updatedHero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
