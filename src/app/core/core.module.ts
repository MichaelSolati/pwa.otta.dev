import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgMeta } from 'ngmeta';

import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService, NgMeta],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return { ngModule: CoreModule, providers: [MoviesService, NgMeta] };
  }
}
