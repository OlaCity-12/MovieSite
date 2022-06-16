import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { Movie } from '../interface/movie.interface';
import { Response } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private baseUrl = 'https://api.themoviedb.org/3/';
  private discoverUrl =
    'discover/movie?api_key=451d88a809ebf8ea7fa57524596de142&page=';
  private page = 1;

  private readonly movieApi: string = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  getMovielist(): Observable<any> {
    return this.http
      .get<any>([this.baseUrl, this.discoverUrl, this.page].join(''))
      .pipe(map((response) => this.processResponse(response)));
  }

  getMovieDetails(id: any): Observable<any> {
    return this.http.get<any>(
      `${this.movieApi}/${id}?api_key=451d88a809ebf8ea7fa57524596de142&language=en-US`
    );
  }

  private processResponse(data: Response): Response {
    return {
      results: data.results.map(
        (movie: any) =>
          <Movie>{
            id: movie.id,
            title: movie.title,
            backdrop_path: movie.backdrop_path,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
          }
      ),
    };
  }
}
