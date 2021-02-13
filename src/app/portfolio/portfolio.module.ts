import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrafitComponent } from './grafit/grafit.component';
import { Bh1Component } from './bh1/bh1.component';
import { Bh2Component } from './bh2/bh2.component';
import { SwistComponent } from './swist/swist.component';
import { HopsyComponent } from './hopsy/hopsy.component';
import { SkrybeComponent } from './skrybe/skrybe.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
    declarations: [GrafitComponent, Bh1Component, Bh2Component, SwistComponent, HopsyComponent, SkrybeComponent, PortfolioComponent, GaleriaComponent],
    exports: [
        PortfolioComponent,
        GrafitComponent,
        Bh1Component,
        Bh2Component,
        SwistComponent,
        SkrybeComponent,
        GaleriaComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule
    ]
})
export class PortfolioModule { }
