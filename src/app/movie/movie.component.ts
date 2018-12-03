import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgMetaService } from 'ngmeta';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  private _idSubscription: Subscription;
  private _movie: any;

  constructor(private _ms: MoviesService, private _route: ActivatedRoute, private _ngmeta: NgMetaService) { }

  ngOnInit() {
    this._idSubscription = this._route.params.subscribe((params: any) => {
      this._ms.getMovie(params.id).pipe((first())).subscribe(e => {
        this._movie = e;
        this._ngmeta.setHead({
          title: e.title + ' | ' + environment.title,
          meta: [
            { attribute: 'name', type: 'description', content: e.overview }
          ]
        });
      });
    });
  }

  ngOnDestroy() {
    this._idSubscription.unsubscribe();
  }

  get movie(): any {
    return this._movie;
  }

  public star(count: number, average: number): boolean {
    const stars: number = Math.round(average);
    const active: number = count * 2;
    return (active <= stars);
  }
}
