import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/app.html',
    styleUrls: ['app/style.css'],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;

    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router){

    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}