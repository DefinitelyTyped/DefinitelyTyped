// Type definitions for MovieDB
// Project: https://github.com/danzajdband/moviedb
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Ghost module for Types
declare module MovieDB {
    export interface IMovieDB {
        searchMovie(params: SearchOptions, callback: (err: any, movies: SearchResults) => void): void;
        movieInfo(options: InfoOptions, callback: (err: any, curMovie: Movie) => void): void;

        // More methods TBD: 
        // https://github.com/danzajdband/moviedb#available-methods
    }

    export interface SearchOptions {
        query: string;
    }

    export interface InfoOptions {
        id: number;
    }

    export interface SearchResults {
        page: number;
        results: SearchResult[];
        total_Pages: number;
        total_results: number;
    }

    export interface SearchResult {
        adult: boolean;
        backdrop_path: string;
        id: number;
        original_title: string;
        release_date: Date;
        poster_path: string;
        popularity: number;
        title: string;
        vote_average: number;
        vote_count: number;
    }

    export interface Movie {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: any;
        budget: number;
        genres: Genre[];
        homepage: string;
        id: number;
        imdb_id: number;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: ProductionCompany[];
        production_countries: ProductionCountry[];
        release_date: Date;
        revenue: number;
        runtime: number;
        spoken_languages: SpokenLanguage[];
        status: string;
        tagline: string;
        title: string;
        vote_average: number;
        vote_count: number;
    }

    export interface Genre {
        id: number;
        name: string;
    }

    export interface ProductionCompany {
        id: number;
        name: string;
    }

    export interface ProductionCountry {
        iso_3166_1: number;
        name: string;
    }

    export interface SpokenLanguage {
        iso_639_1: number;
        name: string;
    }
}

declare module 'moviedb' {
    function apiKeyAcceptor(key: string): MovieDB.IMovieDB;
    export = apiKeyAcceptor;
}