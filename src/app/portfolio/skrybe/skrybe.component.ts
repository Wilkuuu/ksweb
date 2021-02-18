import { Component, OnInit } from '@angular/core';
import { MainServie } from '../../service/main-servie.service';

@Component({
  selector: 'app-skrybe',
  templateUrl: './skrybe.component.html',
  styleUrls: ['./skrybe.component.css']
})
export class SkrybeComponent implements OnInit {
  watermarkStyle: any = {fill: this.mainService.getWatermarkColor(), position: 'relative', width: '10vh', zIndex: 1};

  constructor(private mainService: MainServie) { }

  ngOnInit() {
  }

}
