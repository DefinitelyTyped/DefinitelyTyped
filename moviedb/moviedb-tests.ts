
/// <reference path="./moviedb.d.ts"/>

import moviedb = require('moviedb');

export class TmbdMovieScanner {
    movieDb: MovieDB.IMovieDB;

    constructor() {
        this.movieDb = moviedb('YOUR API KEY');

        // For testing purposes
        this.movieDb.searchMovie({ query: "Aliens" }, (err, movies) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            console.log(movies);            
        });
        this.movieDb.movieInfo({ id: 666 }, (err, curMovie) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            console.log(curMovie.overview);
        });
    }
}