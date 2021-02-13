import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { PortfolioModule } from './portfolio/portfolio.module';
import { OMnieComponent } from './o-mnie/o-mnie.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GaiaTreeComponent } from './portfolio/gaia-tree/gaia-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    OMnieComponent,
    MainPageComponent,
    GaiaTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
