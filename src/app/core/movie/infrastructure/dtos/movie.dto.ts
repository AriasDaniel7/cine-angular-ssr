export interface MovieDTO {
  id: number;
  title: string;
  scoreId: string;
  slug: string;
  originalTitle: string;
  poster: string;
  synopsis: string;
  gender: string;
  dateRelease: string;
  duration: string;
  type: string;
}

export interface MovieResponseDTO {
  message: string;
  data: MovieDTO[];
}
