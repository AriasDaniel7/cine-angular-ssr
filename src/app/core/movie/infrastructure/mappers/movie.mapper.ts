import { Injectable } from '@angular/core';
import { MovieDTO, MovieResponseDTO } from '../dtos/movie.dto';
import { Movie } from '@core/movie/domain/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieMapper {
  toMovie(dto: MovieResponseDTO): Movie[] {
    return dto.data.map((movieDto) => this.mapSingleMovie(movieDto));
  }

  private mapSingleMovie(dto: MovieDTO): Movie {
    return {
      id: dto.id,
      title: dto.title,
      scoreId: dto.scoreId,
      slug: dto.slug,
      originalTitle: dto.originalTitle,
      poster: dto.poster,
      synopsis: dto.synopsis,
      gender: dto.gender,
      dateRelease: dto.dateRelease,
      duration: dto.duration,
      type: dto.type,
    };
  }
}
