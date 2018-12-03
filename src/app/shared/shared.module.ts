import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PosterPipe } from './pipes/poster.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SanitizeBackgroundPipe } from './pipes/sanitize-background.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    PosterPipe,
    NavbarComponent,
    SanitizeBackgroundPipe
  ],
  exports: [
    PosterPipe,
    NavbarComponent,
    SanitizeBackgroundPipe
  ]
})
export class SharedModule { }
