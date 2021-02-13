import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnimacjaService } from '../../service/animacja.service';

@Component({
  selector: 'app-grafit',
  templateUrl: './grafit.component.html',
  styleUrls: ['./grafit.component.css']
})
export class GrafitComponent implements OnInit {

  constructor(private route: ActivatedRoute, private animacjaService: AnimacjaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
          this.animacjaService.setAnimation(params.animacja);
        }
     );
  }

}
