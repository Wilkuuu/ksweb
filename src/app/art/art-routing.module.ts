import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './art.component';

const routes: Routes = [
  {path: '', component: ArtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
