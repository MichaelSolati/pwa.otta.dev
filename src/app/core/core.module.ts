import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgMetaModule } from 'ngmeta';

import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgMetaModule.forRoot()
  ],
  providers: [
    MoviesService
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule, providers: [MoviesService] };
  }
}
