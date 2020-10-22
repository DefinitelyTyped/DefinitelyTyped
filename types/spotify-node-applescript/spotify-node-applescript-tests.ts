// Tests for the type definitions for spotify-node-applescript 1.1
// Project: https://github.com/andrehaveman/spotify-node-applescript#readme
// Definitions by: Mattia Panzeri <https://github.com/panz3r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as spotify from 'spotify-node-applescript';

/**
 * Play a track with Spotify URI.
 */
spotify.playTrack('spotify:track:3AhXZa8sUQht0UEdBJgpGc', () => {
    // track is playing
});

/**
 * Play a track in a context (for example an album).
 */
spotify.playTrackInContext('spotify:track:0R8P9KfGJCDULmlEoBagcO', 'spotify:album:6ZG5lRT77aJ3btmArcykra', () => {
    // Track is playing in context of an album
});

/**
 * Get the current track.
 */
spotify.getTrack((err, track) => {
    /*
    track = {
        artist: 'Bob Dylan',
        album: 'Highway 61 Revisited',
        disc_number: 1,
        duration: 370,
        played count: 0,
        track_number: 1,
        starred: false,
        popularity: 71,
        id: 'spotify:track:3AhXZa8sUQht0UEdBJgpGc',
        name: 'Like A Rolling Stone',
        album_artist: 'Bob Dylan',
        artwork_url: 'http://images.spotify.com/image/e3d720410b4a0770c1fc84bc8eb0f0b76758a358',
        spotify_url: 'spotify:track:3AhXZa8sUQht0UEdBJgpGc' }
    }
    */
});

/**
 * Get player state.
 */
spotify.getState((err, state) => {
    /*
    state = {
        volume: 99,
        position: 232,
        state: 'playing'
    }
    */
});

/**
 * Jump to a specific second of the current song.
 */
spotify.jumpTo(15, () => {
    // Jumped 15th second of the song
});

/**
 * Sets the volume.
 */
spotify.setVolume(42, () => {
    // Set volume to 42%
});

/**
 * Check if Spotify is running.
 */
spotify.isRunning((err, isRunning) => {
    // return player isRunning state
});

/**
 * Is repeating on or off?
 */
spotify.isRepeating((err, repeating) => {
    // return player repeating state
});

/**
 * Sets repeating on or off
 */
spotify.setRepeating(true, () => {
    // Set repeating state to true
});

/**
 * Is shuffling on or off?
 */
spotify.isShuffling((err, shuffling) => {
    // return player shuffling state
});

/**
 * Sets shuffling on or off
 */
spotify.setShuffling(true, () => {
    // Set shuffling state to true
});
