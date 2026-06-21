export type TmdbDetailsResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  rating: number;
  status: string;
  trailer: string;
  country: string;
  original_language: string;
  genres: Genre[];
  imdb_id: string;
  cast: CastMember[];
  seasons: SeasonsType[];
  images: Images;
};
export type SeasonsType = {
  season_number: number;
  name: string;
  episode_count: number;
};
export type Genre = {
  id: number;
  name: string;
};
export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};
export type Images = {
  backdrops: ImageItem[];
  posters: ImageItem[];
  logos: ImageItem[];
};
export type ImageItem = {
  aspect_ratio: number;
  height: number;
  width: number;
  iso_3166_1: string | null;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
};
