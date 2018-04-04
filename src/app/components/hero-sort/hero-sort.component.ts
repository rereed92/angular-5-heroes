import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-sort',
  templateUrl: './hero-sort.component.html',
  styleUrls: ['./hero-sort.component.scss']
})
export class HeroSortComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() onSort = new EventEmitter<any>();

  constructor(private heroService: HeroService) { }
  
  options = [];
  sortedHeroes: Hero[];

  ngOnInit() {
    this.getSortOptions();
  }

  onChange(option = '') {
    this.onSort.emit(option);
    // console.log(this.heroes);
    // this.sortedHeroes = this.heroService.sortHeroes('', this.heroes);
    // console.log(this.sortedHeroes);
}

  getSortOptions(): void {
    this.heroService.getSortOptions()
    .subscribe(options => this.options = options);
  }

}
