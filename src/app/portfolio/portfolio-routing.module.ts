import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { Bh1Component } from './bh1/bh1.component';
import { GrafitComponent } from './grafit/grafit.component';

const routes: Routes = [
    {path: '', redirectTo: '/#dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
