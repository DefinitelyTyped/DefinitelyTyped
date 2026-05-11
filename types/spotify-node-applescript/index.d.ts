/**
 * Play a track with Spotify URI.
 */
export function playTrack(uri: string, callback?: SuccessCallbackFn): void;

/**
 * Play a track in a context (for example an album).
 */
export function playTrackInContext(uri: string, contextUri: string, callback?: SuccessCallbackFn): void;

/**
 * Get the current track.
 */
export function getTrack(callback: GetTrackCallbackFn): void;

/**
 * Get player state.
 */
export function getState(callback: StateCallbackFn): void;

/**
 * Jump to a specific second of the current song.
 */
export function jumpTo(second: number, callback?: SuccessCallbackFn): void;

/**
 * Resume playing current track.
 */
export function play(callback?: SuccessCallbackFn): void;

/**
 * Pause playing track.
 */
export function pause(callback?: SuccessCallbackFn): void;

/**
 * Toggle play.
 */
export function playPause(callback?: SuccessCallbackFn): void;

/**
 * Play next track.
 */
export function next(callback?: SuccessCallbackFn): void;

/**
 * Play previous track.
 */
export function previous(callback?: SuccessCallbackFn): void;

/**
 * Turn volume up.
 */
export function volumeUp(callback?: SuccessCallbackFn): void;

/**
 * Turn volume down.
 */
export function volumeDown(callback?: SuccessCallbackFn): void;

/**
 * Sets the volume.
 */
export function setVolume(volume: number, callback?: SuccessCallbackFn): void;

/**
 * Reduces audio to 0, saving the previous volume.
 */
export function muteVolume(callback?: SuccessCallbackFn): void;

/**
 * Returns audio to original volume.
 */
export function unmuteVolume(callback?: SuccessCallbackFn): void;

/**
 * Check if Spotify is running.
 */
export function isRunning(callback?: IsRunningCallbackFn): void;

/**
 * Is repeating on or off?
 */
export function isRepeating(callback: IsRepeatingCallbackFn): void;

/**
 * Sets repeating on or off
 */
export function setRepeating(repeating: boolean, callback?: SuccessCallbackFn): void;

/**
 * Toggles repeating
 */
export function toggleRepeating(callback?: SuccessCallbackFn): void;

/**
 * Is shuffling on or off?
 */
export function isShuffling(callback: IsShufflingCallbackFn): void;

/**
 * Sets shuffling on or off
 */
export function setShuffling(shuffling: boolean, callback?: SuccessCallbackFn): void;

/**
 * Toggles shuffling
 */
export function toggleShuffling(callback?: SuccessCallbackFn): void;

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

export type SpotifyPlayingState = "playing" | "paused";

export type SuccessCallbackFn = () => void;

export type GetTrackCallbackFn = (error: string, track: TrackInfo) => void;

export type IsRunningCallbackFn = (error: string, isRunning: boolean) => void;

export type IsRepeatingCallbackFn = (error: string, repeating: boolean) => void;

export type IsShufflingCallbackFn = (error: string, shuffling: boolean) => void;

export type StateCallbackFn = (error: string, state: SpotifyState) => void;
