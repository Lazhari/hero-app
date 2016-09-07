import {Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/hero-detail.html',
    styleUrls: ['./app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(private HeroService: HeroService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.HeroService.getHero(id)
                .then(hero => this.hero = hero);
        }) 
    }

    goBack(): void {
        window.history.back();
    }
}