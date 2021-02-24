import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimacjaService } from '../../service/animacja.service';
import { MainServie } from '../../service/main-servie.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-grafit',
    templateUrl: './grafit.component.html',
    styleUrls: ['./grafit.component.css']
})
export class GrafitComponent implements OnInit {
    watermarkStyle = {
        fill: this.getWatermarkColor(),
        width: '10vh',
        position: 'absolute',
        zIndex: 1,
        animation: this.mainService.getWatermarkAnimation()
    };

    description = `I have started cooperation with GrafIT brand from the very beginning,
    including invention of brand’s name. I created the name basing on programmers jargon and
    reffering to ‘brilliant code’. I also planned company’s color, logo and business cards.
    As an addition to whole set I designed signboard for GrafIT’s potential headquarters.`;

    constructor(private route: ActivatedRoute, private animacjaService: AnimacjaService, private mainService: MainServie) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
                this.animacjaService.setAnimation(params.animacja);
            }
        );
    }

    getWatermarkColor() {
        if ($(window).height() <= 800) {
            return this.mainService.getWatermarkColor();
        } else {
            return this.mainService.getWatermarkColor(true);

        }
    }


}
