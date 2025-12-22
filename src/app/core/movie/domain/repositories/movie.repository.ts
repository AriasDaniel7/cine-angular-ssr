import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Signal } from '@angular/core';

export abstract class MovieRepository {
  abstract getMoviesCarousel(): Observable<Movie[]>;
  abstract getMoviesCarouselResource(): {
    value: Signal<Movie[]>;
    isLoading: Signal<boolean>;
    error: Signal<unknown>;
    reload: () => void;
  };
}
