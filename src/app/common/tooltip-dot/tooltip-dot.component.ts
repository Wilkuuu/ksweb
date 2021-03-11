import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-dot',
  templateUrl: './tooltip-dot.component.html',
  styleUrls: ['./tooltip-dot.component.scss']
})
export class TooltipDotComponent implements OnInit {
  @Input()text = 'Tekst testowy';
  @Input()image = null;
  @Input()direction = 'topRight';

  orientation = {
    topRight: 'nice-info--top-right',
    topLeft: 'nice-info--top-left',
    bottomLeft: 'nice-info--bottom-left',
    bottomRight: 'nice-info--bottom-right',
  };

  constructor() {
    // const points = document.getElementsByClassName('nice-info__point');
    // const cssClasses = [
    //   'nice-info--bottom-left',
    //   'nice-info--bottom-right',
    //   'nice-info--top-left',
    //   'nice-info--top-right',
    // ];
    // Array.from(points).forEach(element => {
    //   element.addEventListener('click', () => {
    //     const classIndex = cssClasses.findIndex(cssClass => element.classList.contains(cssClass));
    //     cssClasses.forEach(cssClass => element.classList.remove(cssClass));
    //     const cssClass = classIndex < 3 ? cssClasses[classIndex + 1] :  cssClasses[0];
    //     element.classList.add(cssClass);
    //   });
    // });
  }

  ngOnInit() {
  }

}
