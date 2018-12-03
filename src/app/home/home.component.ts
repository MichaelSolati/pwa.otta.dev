import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgMetaService } from 'ngmeta';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private _ms: MoviesService, private _ngmeta: NgMetaService) { }

  ngOnInit() {
    this._ngmeta.setHead({
      title: environment.title,
      meta: [
        { attribute: 'name', type: 'description', content: environment.description }
      ]
    });
  }

  get movies$(): Observable<any[]> {
    return this._ms.movies$;
  }
}
