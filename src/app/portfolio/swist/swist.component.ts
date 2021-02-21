import { Component, OnInit } from '@angular/core';
import { MainServie } from '../../service/main-servie.service';

@Component({
    selector: 'app-swist',
    templateUrl: './swist.component.html',
    styleUrls: ['./swist.component.css']
})
export class SwistComponent implements OnInit {
    watermarkStyle: any = {fill: this.mainService.getWatermarkColor(), position: 'absolute', width: '10vh', zIndex: 1, left: '2%'};

    constructor(private mainService: MainServie) {
    }

    ngOnInit() {

    }

}
