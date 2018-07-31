import moviedb = require('moviedb');

export class TmbdMovieScanner {
    movieDb: any;

    constructor() {
        this.movieDb = moviedb('YOUR API KEY');

        // For testing purposes
        this.movieDb.searchMovie({ query: "Aliens" }, (err: any, movies: any) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            console.log(movies);            
        });
        this.movieDb.movieInfo({ id: 666 }, (err: any, curMovie: any) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            console.log(curMovie.overview);
        });
    }
}