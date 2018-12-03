import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _movieDBUrl = 'https://api.themoviedb.org/3/movie/';
  private _moviesDBUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
  private _movies$: Observable<any[]>;

  constructor(private _http: HttpClient) {
    const query = this._moviesDBUrl + environment.moviedb;
    this._movies$ = this._http.get(query).pipe(map((e: any) => e.results));
  }

  get movies$(): Observable<any[]> {
    return this._movies$;
  }

  public getMovie(id: string): Observable<any> {
    const query = this._movieDBUrl + id + '?api_key=' + environment.moviedb;
    return this._http.get(query);
  }
}
