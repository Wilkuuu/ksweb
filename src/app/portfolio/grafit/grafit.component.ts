import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimacjaService } from '../../service/animacja.service';
import { MainServie } from '../../service/main-servie.service';

@Component({
    selector: 'app-grafit',
    templateUrl: './grafit.component.html',
    styleUrls: ['./grafit.component.css']
})
export class GrafitComponent implements OnInit {
    watermarkStyle = {fill: '#ffffff', width: '10vh', position: 'absolute'};


    constructor(private route: ActivatedRoute, private animacjaService: AnimacjaService, private mainService: MainServie) {
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
                this.animacjaService.setAnimation(params.animacja);
            }
        );
    }

}
