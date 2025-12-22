import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '@core/movie/application/services/movie.service';
import { Carousel } from '@home/components/carousel/carousel';

@Component({
  selector: 'home-page',
  imports: [Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly movieService = inject(MovieService);

  moviesResource = this.movieService.getMoviesCarouselResource();
}
