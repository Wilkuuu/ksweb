import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-dot',
  templateUrl: './tooltip-dot.component.html',
  styleUrls: ['./tooltip-dot.component.css']
})
export class TooltipDotComponent implements OnInit {
  @Input()text = 'Tekst testowy';
  @Input()image = null;
  @Input()orientation = 'right';

  constructor() { }

  ngOnInit() {
    console.warn(this.image);
  }

}
