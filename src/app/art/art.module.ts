import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './art.component';

@NgModule({
  declarations: [BoardComponent, ArtComponent],
  imports: [
    CommonModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
