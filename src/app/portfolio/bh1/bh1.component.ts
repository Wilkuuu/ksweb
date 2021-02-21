import { Component, OnInit } from '@angular/core';
import { MainServie } from '../../service/main-servie.service';

@Component({
    selector: 'app-bh1',
    templateUrl: './bh1.component.html',
    styleUrls: ['./bh1.component.css']
})
export class Bh1Component implements OnInit {
    watermarkStyle: any = {fill: this.mainService.getWatermarkColor(), position: 'relative', width: '10vh'};

    constructor(private mainService: MainServie) {

    }

    ngOnInit() {

    }

}
