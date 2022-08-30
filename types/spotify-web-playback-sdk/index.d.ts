// Type definitions for non-npm package spotify-web-playback-sdk 0.1
// Project: https://beta.developer.spotify.com/documentation/web-playback-sdk/reference/
// Definitions by: Festify Dev Team <https://github.com/Festify>
//                 Marcus Weiner <https://github.com/mraerino>
//                 Moritz Gunz <https://github.com/NeoLegends>
//                 Daniel Almaguer <https://github.com/deini>
//                 Hanna Becker <https://github.com/hanna-becker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface Window {
    onSpotifyWebPlaybackSDKReady(): void;
    Spotify: typeof Spotify;
}

declare namespace Spotify {
    interface Entity {
        name: string;
        uri: string;
        url: string;
    }

    interface Album {
        name: string;
        uri: string;
        images: Image[];
    }

    interface Error {
        message: string;
    }

    type ErrorTypes = 'account_error' | 'authentication_error' | 'initialization_error' | 'playback_error';

    interface Image {
        height?: number | null | undefined;
        url: string;
        size?: string | null | undefined;
        width?: number | null | undefined;
    }

    interface PlaybackContextTrack extends Entity {
        artists: Entity[];
        content_type: string;
        estimated_duration: number;
        group: Entity;
        images: Image[];
        uid: string;
    }

    interface PlaybackContextRestrictions {
        pause: string[];
        resume: string[];
        seek: string[];
        skip_next: string[];
        skip_prev: string[];
        toggle_repeat_context: string[];
        toggle_repeat_track: string[];
        toggle_shuffle: string[];
        peek_next: string[];
        peek_prev: string[];
    }

    interface PlaybackContextMetadata extends Entity {
        current_item: PlaybackContextTrack;
        next_items: PlaybackContextTrack[];
        previous_items: PlaybackContextTrack[];
        restrictions: PlaybackContextRestrictions;
        options: {
            repeat_mode: string;
            shuffled: boolean;
        };
    }

    interface PlaybackContext {
        metadata: PlaybackContextMetadata | null;
        uri: string | null;
    }

    interface PlaybackDisallows {
        pausing?: boolean;
        peeking_next?: boolean;
        peeking_prev?: boolean;
        resuming?: boolean;
        seeking?: boolean;
        skipping_next?: boolean;
        skipping_prev?: boolean;
        toggling_repeat_context?: boolean;
        toggling_repeat_track?: boolean;
        toggling_shuffle?: boolean;
    }

    interface PlaybackRestrictions {
        disallow_pausing_reasons?: string[];
        disallow_peeking_next_reasons?: string[];
        disallow_peeking_prev_reasons?: string[];
        disallow_resuming_reasons?: string[];
        disallow_seeking_reasons?: string[];
        disallow_skipping_next_reasons?: string[];
        disallow_skipping_prev_reasons?: string[];
        disallow_toggling_repeat_context_reasons?: string[];
        disallow_toggling_repeat_track_reasons?: string[];
        disallow_toggling_shuffle_reasons?: string[];
    }

    interface PlaybackState {
        context: PlaybackContext;
        disallows: PlaybackDisallows;
        duration: number;
        paused: boolean;
        position: number;
        loading: boolean;
        timestamp: number;
        /**
         * 0: NO_REPEAT
         * 1: ONCE_REPEAT
         * 2: FULL_REPEAT
         */
        repeat_mode: 0 | 1 | 2;
        shuffle: boolean;
        restrictions: PlaybackRestrictions;
        track_window: PlaybackTrackWindow;
        playback_id: string;
        playback_quality: string;
        playback_features: {
            hifi_status: string;
        };
    }

    interface PlaybackTrackWindow {
        current_track: Track;
        previous_tracks: Track[];
        next_tracks: Track[];
    }

    interface PlayerInit {
        name: string;
        getOAuthToken(cb: (token: string) => void): void;
        volume?: number | undefined;
    }

    type ErrorListener = (err: Error) => void;
    type PlaybackInstanceListener = (inst: WebPlaybackInstance) => void;
    type PlaybackStateListener = (s: PlaybackState) => void;
    type EmptyListener = () => void;

    type AddListenerFn =
        & ((event: 'ready' | 'not_ready', cb: PlaybackInstanceListener) => void)
        & ((event: 'autoplay_failed', cb: EmptyListener) => void)
        & ((event: 'player_state_changed', cb: PlaybackStateListener) => void)
        & ((event: ErrorTypes, cb: ErrorListener) => void);

    class Player {
        readonly _options: PlayerInit & {id: string};
        constructor(options: PlayerInit);

        connect(): Promise<boolean>;
        disconnect(): void;
        getCurrentState(): Promise<PlaybackState | null>;
        getVolume(): Promise<number>;
        nextTrack(): Promise<void>;

        addListener: AddListenerFn;
        on: AddListenerFn;

        removeListener(
            event: 'ready' | 'not_ready' | 'player_state_changed' | ErrorTypes,
            cb?: ErrorListener | PlaybackInstanceListener | PlaybackStateListener,
        ): void;

        pause(): Promise<void>;
        previousTrack(): Promise<void>;
        resume(): Promise<void>;
        seek(pos_ms: number): Promise<void>;
        setName(name: string): Promise<void>;
        setVolume(volume: number): Promise<void>;
        togglePlay(): Promise<void>;

        activateElement(): Promise<void>;
    }

    interface Track {
        album: Album;
        artists: Entity[];
        duration_ms: number;
        id: string | null;
        is_playable: boolean;
        name: string;
        uid: string;
        uri: string;
        media_type: 'audio' | 'video';
        type: 'track' | 'episode' | 'ad';
        track_type: 'audio' | 'video';
        linked_from: {
            uri: string | null;
            id: string | null;
        };
    }

    interface WebPlaybackInstance {
        device_id: string;
    }
}
