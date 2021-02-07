import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule'},
    {path: 'art', loadChildren: './art/art.module#ArtModule'},
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
