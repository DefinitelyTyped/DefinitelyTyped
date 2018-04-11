// Type definitions for spotify-web-playback-sdk 0.1
// Project: https://beta.developer.spotify.com/documentation/web-playback-sdk/reference/
// Definitions by: Festify Dev Team <https://github.com/Festify>
//                 Marcus Weiner <https://github.com/mraerino>
//                 Moritz Gunz <https://github.com/NeoLegends>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    onSpotifyWebPlaybackSDKReady(): void;
}

declare namespace Spotify {
    const Player: typeof SpotifyPlayer;

    interface Album {
        uri: string;
        name: string;
        images: Image[];
    }

    interface Artist {
        name: string;
        uri: string;
    }

    interface Error {
        message: string;
    }

    type ErrorTypes = 'account_error' | 'authentication_error' | 'initialization_error' | 'playback_error';

    interface Image {
        url: string;
    }

    interface PlaybackContext {
        metadata: any;
        uri: string | null;
    }

    interface PlaybackDisallows {
        pausing: boolean;
        peeking_next: boolean;
        peeking_prev: boolean;
        resuming: boolean;
        seeking: boolean;
        skipping_next: boolean;
        skipping_prev: boolean;
    }

    interface PlaybackRestrictions {
        disallow_pausing_reasons: string[];
        disallow_peeking_next_reasons: string[];
        disallow_peeking_prev_reasons: string[];
        disallow_resuming_reasons: string[];
        disallow_seeking_reasons: string[];
        disallow_skipping_next_reasons: string[];
        disallow_skipping_prev_reasons: string[];
    }

    interface PlaybackState {
        context: PlaybackContext;
        disallows: PlaybackDisallows;
        duration: number;
        paused: boolean;
        position: number;
        repeat_mode: RepeatMode;
        shuffle: boolean;
        restrictions: PlaybackRestrictions;
        track_window: PlaybackTrackWindow;
    }

    interface PlaybackTrackWindow {
        current_track: Track;
        previous_tracks: Track[];
        next_tracks: Track[];
    }

    interface PlayerInit {
        name: string;
        getOAuthToken(cb: (token: string) => void): void;
        volume?: number;
    }

    enum RepeatMode {
        NO_REPEAT = 0,
        ONCE_REPEAT = 1,
        FULL_REPEAT = 2,
    }

    type ErrorListener = (err: Error) => void;
    type PlaybackInstanceListener = (inst: WebPlaybackInstance) => void;
    type PlaybackStateListener = (s: PlaybackState) => void;

    class SpotifyPlayer {
        constructor(options: PlayerInit);

        connect(): Promise<boolean>;
        disconnect(): void;
        getCurrentState(): Promise<PlaybackState | null>;
        getVolume(): Promise<number>;
        nextTrack(): Promise<void>;

        addListener(event: 'ready', cb: PlaybackInstanceListener): void;
        addListener(event: 'player_state_changed', cb: PlaybackStateListener): void;
        addListener(event: ErrorTypes, cb: ErrorListener): void;
        on(event: 'ready', cb: PlaybackInstanceListener): void;
        on(event: 'player_state_changed', cb: PlaybackStateListener): void;
        on(event: ErrorTypes, cb: ErrorListener): void;

        removeListener(
            event: 'ready' | 'player_state_changed' | ErrorTypes,
            cb?: ErrorListener | PlaybackInstanceListener | PlaybackStateListener,
        ): void;

        pause(): Promise<void>;
        previousTrack(): Promise<void>;
        resume(): Promise<void>;
        seek(pos_ms: number): Promise<void>;
        setVolume(volume: number): Promise<void>;
        togglePlay(): Promise<void>;
    }

    interface Track {
        uri: string;
        id: string | null;
        type: 'track' | 'episode' | 'ad';
        media_type: 'audio' | 'video';
        name: string;
        is_playable: boolean;
        album: Album;
        artists: Artist[];
    }

    interface WebPlaybackInstance {
        device_id: string;
    }
}
