import { computed, inject, Injectable } from '@angular/core';
import { Movie } from '@core/movie/domain/models/movie.model';
import { MovieRepository } from '@core/movie/domain/repositories/movie.repository';
import { MovieApiService } from '../services/movie-api.service';
import { MovieMapper } from '../mappers/movie.mapper';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieRepositoryImpl extends MovieRepository {
  private readonly movieApiService = inject(MovieApiService);
  private readonly movieMapper = inject(MovieMapper);

  // Mantener por compatibilidad (aunque no se use actualmente)
  getMoviesCarousel(): Observable<Movie[]> {
    throw new Error('Use getMoviesCarouselResource() instead for SSR support');
  }

  getMoviesCarouselResource() {
    const resource = this.movieApiService.getMoviesCarouselResource();

    return {
      value: computed(() => {
        const dto = resource.value();
        return dto ? this.movieMapper.toMovie(dto) : [];
      }),
      isLoading: resource.isLoading,
      error: resource.error,
      reload: resource.reload,
    };
  }
}
