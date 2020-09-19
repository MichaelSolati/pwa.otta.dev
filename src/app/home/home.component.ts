import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgMeta } from 'ngmeta';
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
  constructor(private _ms: MoviesService, private _ngmeta: NgMeta) { }

  ngOnInit() {
    this._ngmeta.setAll({
      title: environment.title,
      description: environment.description
    });
  }

  get movies$(): Observable<any[]> {
    return this._ms.movies$;
  }
}
