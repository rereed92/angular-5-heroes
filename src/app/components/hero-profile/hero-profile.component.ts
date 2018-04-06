import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../../hero';
import { HeroService }  from '../../services/hero.service';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: [ './hero-profile.component.scss' ]
})
export class HeroProfileComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  modal = {
    removeHero: false,
    editHero: false
  }
  // removeHeroModal: boolean = false;
  // editHeroModal: boolean = false;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  removeHero(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .subscribe((hero) => {
        this.heroService.emitRemoveHero(hero)
        this.modalInteraction('removeHero', 'close');
        // this.goBack();
      });
  }

  updateHero(updatedHero: Hero): void {
    this.heroService.updateHero(updatedHero)
      .subscribe(() => {
        this.modalInteraction('editHero', 'close');
        // this.goBack()
      });
  }

  modalInteraction(modalType: string, action: string): void {
    action === 'open' ? this.modal[modalType] = true : this.modal[modalType] = false;
  }

  goBack(): void {
    this.location.back();
  }
}