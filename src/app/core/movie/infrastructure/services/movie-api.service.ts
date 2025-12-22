import { inject, Injectable, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { MovieResponseDTO } from '../dtos/movie.dto';
import { delay, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.apiExternalUrl;

  getMoviesCarouselResource() {
    return resource({
      loader: () => firstValueFrom(this.http.get<MovieResponseDTO>(this.API_URL).pipe(delay(1000))),
    });
  }
}
