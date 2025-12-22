import { inject, Injectable } from '@angular/core';
import { MovieRepositoryImpl } from '@core/movie/infrastructure/repositories/movie.repository.impl';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly movieRepository = inject(MovieRepositoryImpl);

  getMoviesCarouselResource() {
    return this.movieRepository.getMoviesCarouselResource();
  }
}
