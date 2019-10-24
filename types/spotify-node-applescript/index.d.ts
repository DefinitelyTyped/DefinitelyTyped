// Type definitions for spotify-node-applescript 1.1
// Project: https://github.com/andrehaveman/spotify-node-applescript#readme
// Definitions by: Mattia Panzeri <https://github.com/panz3r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Play a track with Spotify URI.
 */
export function playTrack(uri: string, callback?: SuccessCallbackFn): void;

export namespace playTrack {
    function __promisify__(uri: string): Promise<void>;
}

/**
 * Play a track in a context (for example an album).
 */
export function playTrackInContext(uri: string, contextUri: string, callback?: SuccessCallbackFn): void;

export namespace playTrackInContext {
    function __promisify__(uri: string, contextUri: string): Promise<void>;
}

/**
 * Get the current track.
 */
export function getTrack(callback: GetTrackCallbackFn): void;

export namespace getTrack {
    function __promisify__(): Promise<TrackInfo>;
}

/**
 * Get player state.
 */
export function getState(callback: StateCallbackFn): void;

export namespace getState {
    function __promisify__(): Promise<SpotifyState>;
}

/**
 * Jump to a specific second of the current song.
 */
export function jumpTo(second: number, callback?: SuccessCallbackFn): void;

export namespace jumpTo {
    function __promisify__(second: number): Promise<void>;
}

/**
 * Resume playing current track.
 */
export function play(callback?: SuccessCallbackFn): void;

export namespace play {
    function __promisify__(): Promise<void>;
}

/**
 * Pause playing track.
 */
export function pause(callback?: SuccessCallbackFn): void;

export namespace pause {
    function __promisify__(): Promise<void>;
}

/**
 * Toggle play.
 */
export function playPause(callback?: SuccessCallbackFn): void;

export namespace playPause {
    function __promisify__(): Promise<void>;
}

/**
 * Play next track.
 */
export function next(callback?: SuccessCallbackFn): void;

export namespace next {
    function __promisify__(): Promise<void>;
}

/**
 * Play previous track.
 */
export function previous(callback?: SuccessCallbackFn): void;

export namespace previous {
    function __promisify__(): Promise<void>;
}

/**
 * Turn volume up.
 */
export function volumeUp(callback?: SuccessCallbackFn): void;

export namespace volumeUp {
    function __promisify__(): Promise<void>;
}

/**
 * Turn volume down.
 */
export function volumeDown(callback?: SuccessCallbackFn): void;

export namespace volumeDown {
    function __promisify__(): Promise<void>;
}

/**
 * Sets the volume.
 */
export function setVolume(volume: number, callback?: SuccessCallbackFn): void;

export namespace setVolume {
    function __promisify__(volume: number): Promise<void>;
}

/**
 * Reduces audio to 0, saving the previous volume.
 */
export function muteVolume(callback?: SuccessCallbackFn): void;

export namespace muteVolume {
    function __promisify__(): Promise<void>;
}

/**
 * Returns audio to original volume.
 */
export function unmuteVolume(callback?: SuccessCallbackFn): void;

export namespace unmuteVolume {
    function __promisify__(): Promise<void>;
}

/**
 * Check if Spotify is running.
 */
export function isRunning(callback?: IsRunningCallbackFn): void;

export namespace isRunning {
    function __promisify__(): Promise<boolean>;
}

/**
 * Is repeating on or off?
 */
export function isRepeating(callback: IsRepeatingCallbackFn): void;

export namespace isRepeating {
    function __promisify__(): Promise<boolean>;
}

/**
 * Sets repeating on or off
 */
export function setRepeating(repeating: boolean, callback?: SuccessCallbackFn): void;

export namespace setRepeating {
    function __promisify__(repeating: boolean): Promise<void>;
}

/**
 * Toggles repeating
 */
export function toggleRepeating(callback?: SuccessCallbackFn): void;

export namespace toggleRepeating {
    function __promisify__(): Promise<void>;
}

/**
 * Is shuffling on or off?
 */
export function isShuffling(callback: IsShufflingCallbackFn): void;

export namespace isShuffling {
    function __promisify__(): Promise<boolean>;
}

/**
 * Sets shuffling on or off
 */
export function setShuffling(shuffling: boolean, callback?: SuccessCallbackFn): void;

export namespace setShuffling {
    function __promisify__(shuffling: boolean): Promise<void>;
}

/**
 * Toggles shuffling
 */
export function toggleShuffling(callback?: SuccessCallbackFn): void;

export namespace toggleShuffling {
    function __promisify__(): Promise<void>;
}

/*~ types available via importing this module */

export interface SpotifyState {
    volume: number;
    position: number;
    state: SpotifyPlayingState;
}

export interface TrackInfo {
    artist: string;
    album: string;
    album_artist: string;
    artwork_url: string;
    disc_number: number;
    duration: number;
    id: string;
    name: string;
    played_count: number;
    popularity: number;
    spotify_url: string;
    starred: boolean;
    track_number: number;
}

export type SpotifyPlayingState = 'playing' | 'paused';

export type SuccessCallbackFn = () => void;

export type GetTrackCallbackFn = (error: string, track: TrackInfo) => void;

export type IsRunningCallbackFn = (error: string, isRunning: boolean) => void;

export type IsRepeatingCallbackFn = (error: string, repeating: boolean) => void;

export type IsShufflingCallbackFn = (error: string, shuffling: boolean) => void;

export type StateCallbackFn = (error: string, state: SpotifyState) => void;
