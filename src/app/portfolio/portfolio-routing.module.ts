import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { Bh1Component } from './bh1/bh1.component';
import { GrafitComponent } from './grafit/grafit.component';

const routes: Routes = [
    {path: '', redirectTo: 'grafit', pathMatch: 'full'},
    {path: 'bh1', component: Bh1Component},
    {
        path: 'grafit', component: GrafitComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
