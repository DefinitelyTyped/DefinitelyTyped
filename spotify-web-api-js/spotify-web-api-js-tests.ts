// Test for the type definitions for spotify-web-api-js
// Project: https://github.com/JMPerez/spotify-web-api-js
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This test-file assumes the following two d.ts files to be present.

/// <reference path="./spotify-web-api-js.d.ts" />
/// <reference path="../spotify-api/spotify-api.d.ts" />

var spotify = new SpotifyWebApi();

/**
 * Tests getAlbums
 */
spotify.getAlbums(['1uw3ISK6Khq5xVWF1GWTjt', '5R8N32ocA6RqSxibt4W6x3'], { market: 'DK' })
.then(results => {
    results.albums.forEach(album => {
        album.images.forEach(image => {
            console.log('Image URL: ' + image.url.toUpperCase());
        })
    });
});



/**
 * Tests getAlbum with an error
 */
function albumSearchCallback(error: SpotifyWebApiJs.ErrorObject, results: SpotifyApi.SingleAlbumResponse) {
    console.log(error.status.toString() + " - message is: " + error.statusText);
};

spotify.getAlbum('xxx1uw3ISK6Khq5xVWF1GWTjt', albumSearchCallback);



/**
 * Tests getCategories with a callback
 */
function trackSearchCallback(error: SpotifyWebApiJs.ErrorObject, results: SpotifyApi.TrackSearchResponse) {
    console.log("Found a total of " + results.tracks.total + " tracks");
    var onlyExplicitTracks = results.tracks.items.filter(track => {
        return track.explicit;
    });
    onlyExplicitTracks.forEach(track => console.log(track.name));
};
 
spotify.searchTracks("Love itself", {limit: 5, market: 'DK'}, trackSearchCallback);


/**
 * Tests getting a users public profile
 */
spotify.getUser('physicaltunes')
.then(results => {
    console.log(results.id.toUpperCase(), 
    'Followers: ' + results.followers.total.toString());
});


/**
 * Tests getting top tracks
 */
spotify.getArtistTopTracks('07QEuhtrNmmZ0zEcqE9SF6', 'DK')
.then(results => {
    results.tracks.forEach(track => {
        console.log(track.name, track.artists.shift().name);
    })
});