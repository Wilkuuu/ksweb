import { Component, OnInit } from '@angular/core';
import {MainServie} from '../../service/main-servie.service';

@Component({
  selector: 'app-bh2',
  templateUrl: './bh2.component.html',
  styleUrls: ['./bh2.component.css']
})
export class Bh2Component implements OnInit {
  watermarkStyle: any = {fill: this.mainService.getWatermarkColor(), position: 'absolute', width: '10vh', zIndex: 1, left: '2%'};

  constructor(private mainService: MainServie) { }

  ngOnInit() {
  }

}
