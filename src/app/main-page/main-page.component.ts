import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive: ElementRef;

  config;
  fullpage_api;
  pages = ['dashboard', 'grafit', 'bh1', 'bh2', 'swist', 'skrybe', 'gaia-tree', 'galeria', 'o-mnie']
  constructor(private renderer: Renderer2) {

    this.config = {
      licenseKey: '',
      menu: '#menu',
      sectionsColor: [],
      anchors: this.pages,
      navigation: true,
      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
