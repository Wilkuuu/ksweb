import { Component, OnInit } from '@angular/core';
import { MainServie } from '../../service/main-servie.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  watermarkStyle: any = {fill: this.mainService.getWatermarkColor(), position: 'absolute', width: '10vh', zIndex: 1, left: '4%'};

  constructor(private mainService: MainServie) { }

  ngOnInit() {
  }

}
