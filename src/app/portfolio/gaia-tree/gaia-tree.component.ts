import { Component, OnInit } from '@angular/core';
import { MainServie } from '../../service/main-servie.service';

@Component({
    selector: 'app-gaia-tree',
    templateUrl: './gaia-tree.component.html',
    styleUrls: ['./gaia-tree.component.css']
})
export class GaiaTreeComponent implements OnInit {
    watermarkStyle: any = {
        fill: this.mainService.getWatermarkColor(),
        position: 'relative',
        width: '10vh',
        zIndex: 1,
        animation: this.mainService.getWatermarkAnimation()
    };

    constructor(private mainService: MainServie) {
    }

    ngOnInit() {
    }

}
