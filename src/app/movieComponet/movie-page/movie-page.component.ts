import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  response: any

  baseImageUrl = 'http://image.tmdb.org/t/p/w185';
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getMovielist().subscribe((results: any) => {
      console.log(results);
      this.response = results;
    });
  }

}
