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
