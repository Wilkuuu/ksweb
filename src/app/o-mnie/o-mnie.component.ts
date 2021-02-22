import { Component, OnInit } from '@angular/core';
import { MainServie } from '../service/main-servie.service';

@Component({
    selector: 'app-o-mnie',
    templateUrl: './o-mnie.component.html',
    styleUrls: ['./o-mnie.component.css']
})
export class OMnieComponent implements OnInit {
    watermarkStyle: any = {
        fill: this.mainService.getWatermarkColor(true),
        position: 'absolute',
        width: '10vh',
        zIndex: 1,
        animation: this.mainService.getWatermarkAnimation()
    };
    contactIcon = {
        marginLeft: '2%',
        fill: '#707070',
    };

    constructor(private mainService: MainServie) {
    }

    ngOnInit() {
    }

}
