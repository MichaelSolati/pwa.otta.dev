import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatGridListModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [
    MovieComponent
  ]
})
export class MovieModule { }
