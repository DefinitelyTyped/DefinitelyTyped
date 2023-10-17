// = Notes =
//
// == Versioning ==
//
// The Deezer JavaScript SDK is not versioned (confirmed by support).
// Definitions reflect SDK as of mid-April 2019.
// So, semantic versioning mandates version 0.0.*.
//
// == Doc ==
//
// Not using @see tags because they are not supported by TSDoc (https://microsoft.github.io/tsdoc/).
//
// == Usage ==
//
// There may be other ways, but this works for an Angular project:
//
// 1. Add Deezer library to a script tag, as described in https://developers.deezer.com/sdk/javascript.
//
// 2. Add
//
// "devDependencies": {
//     ...
//  "@types/deezer-sdk": "...",
//  ...
// }
//
// to package.json.
//
// 3. Add
//
// /// <reference types="@types/youtube"/>
//
// to the beginning of app.module.ts.

/**
 * See: {@link https://developers.deezer.com/sdk/javascript | Introduction}
 */
declare const DZ: DeezerSdk.DZ;

/**
 * See: {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}
 */
// The client may want to set this, so we have to disable a rule:
// eslint-disable-next-line @definitelytyped/prefer-declare-function
declare let dzAsyncInit: () => void;

/**
 * See: {@link https://developers.deezer.com/sdk/javascript | Deezer Javascript SDK}
 */
declare namespace DeezerSdk {
    /**
     * See: {@link https://developers.deezer.com/sdk/javascript | Introduction}
     */
    interface DZ {
        /**
         * Allows you to load and play tracks from your page.
         *
         * Before using the player, you must define PlayerOptions when initializing init(InitOptions).
         *
         * The Deezer web player requires Flash (for stream encryption purposes), the minimum required version
         * is Flash Player 10.1. On mobile, the player will automatically fall back to 30-second previews.
         *
         * See:\
         * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}\
         * {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        readonly player: Player;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
         */
        readonly Event: Event;

        /**
         * Initialize the JavaScript SDK in your page.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}
         */
        init(options: InitOptions): void;

        /**
         * Allows you to interact with the DZ.player object.
         *
         * To interact with the player, it needs to be loaded first otherwise you'll get an error message.
         * Once the player is loaded, the DZ.ready method is executed and you can use it to perform your
         * player actions.
         *
         * The DZ.ready methods accepts a function as argument that will be executed as soon as the
         * DZ.player object is loaded.
         *
         * Another way to make sure that the player is loaded before interacting with it is to use the
         * onload option when initializing the player with the DZ.init method.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready}
         */
        ready(callback: (sdkOptions: SdkOptions) => void): void;

        /**
         * Make calls to the Deezer API.
         *
         * See:\
         * {@link https://developers.deezer.com/sdk/javascript/api | DZ.api}\
         * {@link https://developers.deezer.com/api | API}
         */
        api(path: string, callback: (response: any) => void): void;
        api(path: string, method: HttpMethod, callback: (response: any) => void): void;
        api(path: string, method: HttpMethod, data: any, callback: (response: any) => void): void;

        /**
         * Prompt the user to connect on Deezer, and to authorize you application.
         *
         * The DZ.login method opens up a modal window. Since most browsers block pop-up windows unless they
         * are initiated from a user event, we advise you to call DZ.login from a JavaScript onclick event.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/login | DZ.login}
         */
        login(callback: (response: LoginResponse) => void): void;

        /**
         * Destroy the current user session.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/logout | DZ.logout}
         */
        logout(callback?: () => void): void;

        /**
         * Determine if a user is logged in and connected to your app.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
         */
        getLoginStatus(callback: (loginStatus: LoginStatus) => void): void;
    }

    /**
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/init | DZ.init}\
     * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}
     */
    interface InitOptions {
        readonly appId: string;
        readonly channelUrl: string;
        readonly player?: PlayerOptions | undefined;
    }

    /**
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/player | Initialize a player}\
     * {@link https://developers.deezer.com/musicplugins/player | Widget player}
     */
    interface PlayerOptions {
        /**
         * The ID of the div that will contain the widget player
         *
         * To implement a Deezer-like player, set this to the ID attribute of HTML div you want to load
         * the widget player in.
         *
         * An invisible player allows you to create your own UI and JavaScript events.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        readonly container?: string | undefined;

        /**
         * Whether to display the playlist from the player
         *
         * Default: true
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        readonly playlist?: boolean | undefined;

        /**
         * The layout format of the widget
         *
         * Default: classic
         *
         * See:\
         * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
         * {@link https://developers.deezer.com/musicplugins/player | Widget player}
         */
        readonly format?: WidgetFormat | undefined;

        /**
         * The general layout of the widget
         *
         * Default: dark
         *
         * See:\
         * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
         * {@link https://developers.deezer.com/musicplugins/player | Widget player}
         */
        readonly layout?: WidgetLayout | undefined;

        /**
         * The general color of the widget. Has to be a hexadecimal value without the #.
         *
         * Default: 1990DB
         *
         * See:\
         * {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}\
         * {@link https://developers.deezer.com/musicplugins/player | Widget player}
         */
        readonly color?: string | undefined;

        /**
         * The width of the player in pixels
         *
         * Default: 100%
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        readonly width?: number | undefined;

        /**
         * The height of the player in pixels
         *
         * Default: 100%
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        readonly height?: number | undefined;

        /**
         * The layout size of the widget
         *
         * Default: medium
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        readonly size?: WidgetSize | undefined;

        /**
         * The callback function executed after the player has loaded.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
         */
        onload?: ((state: PlayerState) => void) | undefined;
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    type WidgetFormat = "square" | "classic";

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    type WidgetLayout = "light" | "dark";

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    type WidgetSize = "small" | "medium" | "big";

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player#options | Player options}
     */
    interface PlayerState {
        readonly muted: boolean;
        readonly repeat: number;
        readonly shuffle: boolean;
        readonly volume: number;
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready}
     */
    interface SdkOptions {
        readonly token: {
            readonly access_token: string;
            readonly expire: string;
        };
        /**
         * In addition to the PlayerState properties,
         * {@link https://developers.deezer.com/sdk/javascript/ready | DZ.ready} also documents the
         * property current_track, but the author of this comment was not able no retrieve it.
         */
        readonly player: PlayerState;
    }

    /**
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/api | DZ.api}\
     * {@link https://developers.deezer.com/api | API}
     */
    type HttpMethod = "GET" | "POST" | "DELETE";

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/login | DZ.login}
     */
    interface LoginResponse {
        authResponse: {
            accessToken: string;
            expire: string;
        };
        status: "connected" | "not_authorized";
        userID: string;
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
     */
    interface LoginStatus {
        status: ConnectionStatus;
        authResponse: {
            accessToken: string;
            expire: string;
            userID: string;
        };
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/getloginstatus | DZ.getLoginStatus}
     */
    type ConnectionStatus = "connected" | "notConnected" | "unknown" | "not_authorized";

    /**
     * See:
     * {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     * {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
     * {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    interface Player {
        // #region Load tracks to a player

        // There may be more overloads possible, but the defined ones should suffice for all
        // practical purposes.

        /**
         * Load and play a track or list of tracks into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playTracks(
            trackIds: ReadonlyArray<string>,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playTracks(
            trackIds: ReadonlyArray<string>,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playTracks(
            trackIds: ReadonlyArray<string>,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playTracks(
            trackIds: ReadonlyArray<string>,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play an album into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playAlbum(
            albumId: number,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playAlbum(
            albumId: number,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playAlbum(
            albumId: number,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playAlbum(
            albumId: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play a playlist into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playPlaylist(
            playlistId: number,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPlaylist(
            playlistId: number,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPlaylist(
            playlistId: number,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPlaylist(
            playlistId: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play a podcast into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playPodcast(
            podcastId: number,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPodcast(
            podcastId: number,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPodcast(
            podcastId: number,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playPodcast(
            podcastId: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play an episode or a list of episodes into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playEpisodes(
            episodeIds: ReadonlyArray<string>,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playEpisodes(
            episodeIds: ReadonlyArray<string>,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playEpisodes(
            episodeIds: ReadonlyArray<string>,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playEpisodes(
            episodeIds: ReadonlyArray<string>,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play a radio into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playRadio(
            id: number,
            radioType?: RadioType,
            autoplay?: boolean,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playRadio(
            id: number,
            radioType?: RadioType,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playRadio(
            id: number,
            radioType?: RadioType,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * The official docs for this method are incomplete, but the existing docs and a
         * {@link https://github.com/deezer/javascript-samples/blob/master/player_basic.html | usage example}
         * suggest the same parameters as in {@link playRadio},
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playSmartRadio(
            id: number,
            radioType?: RadioType,
            autoplay?: boolean,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playSmartRadio(
            id: number,
            radioType?: RadioType,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playSmartRadio(
            id: number,
            radioType?: RadioType,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Load and play external MP3 sources into the current player.
         *
         * @param autoplay Whether to start playing the queue when the player has loaded.
         * Default: true. Setting this to false will cancel the expected behavior of the offset parameter.
         * @param index The index of the first track to play in the list
         * @param offset The position in seconds where to start playing the track
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        playExternalTracks(
            mp3Sources: ReadonlyArray<Mp3Source>,
            autoplay?: boolean,
            index?: number,
            offset?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playExternalTracks(
            mp3Sources: ReadonlyArray<Mp3Source>,
            autoplay?: boolean,
            index?: number,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playExternalTracks(
            mp3Sources: ReadonlyArray<Mp3Source>,
            autoplay?: boolean,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;
        playExternalTracks(
            mp3Sources: ReadonlyArray<Mp3Source>,
            onTracksLoaded?: (playQueue: PlayQueue) => void,
        ): void;

        /**
         * Append a track to the queue of the current player.
         *
         * To remove a track from the queue, you will need to reset the queue using the playTracks method.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
         */
        addToQueue(trackIds: ReadonlyArray<string>, onTracksLoaded?: (playQueue: PlayQueue) => void): void;

        // #endregion

        // #region Control a player

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        play(): void;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        pause(): void;

        /**
         * Tell the player to read the next track.
         *
         * The behavior of this method will depend on the RepeatMode of the player.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        next(): void;

        /**
         * Tell the player to read the previous track.
         *
         * The behavior of this method will depend on the RepeatMode of the player.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        prev(): void;

        /**
         * Set the position of the reader head in the currently playing track.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        seek(positionPercentFloat: number): void;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        setVolume(volumePercentInt: number): void;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        setMute(mute: boolean): void;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        setShuffle(shuffle: boolean): void;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        setRepeat(repeatMode: RepeatMode): void;

        /**
         * Set the order of the current list of tracks.
         *
         * Attention, this method does not add or remove tracks from the play queue.
         * Use the addToQueue method to add a track or the playTracks method to remove a track by resetting
         * the play queue.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        changeTrackOrder(trackIds: ReadonlyArray<string>): void;

        /**
         * Hide the queue and current track information.
         *
         * @param trackInfo Replaces the current track information.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}
         */
        setBlindTestMode(
            blindTestMode: boolean,
            trackInfo?: {
                title: string;
                artist: string;
                cover: string;
            },
        ): void;

        // #endregion

        // #region The player properties

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        isPlaying(): boolean;

        /**
         * Get the tracks in the queue of the player.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getTrackList(): Track[];

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getCurrentTrack(): Track;

        /**
         * Get the position in the queue of the currently playing track.
         *
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getCurrentIndex(): number;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getVolume(): number;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getShuffle(): boolean;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getRepeat(): RepeatMode;

        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
         */
        getMute(): boolean;

        // #endregion
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    type RadioType = "radio" | "artist" | "user";

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    interface PlayQueue {
        readonly tracks: Track[];
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/loadtracks | Load tracks to a player}
     */
    interface Mp3Source {
        readonly url: string;
        readonly title: string;
        readonly artist: string;
    }

    /**
     * 0: No repeat\
     * 1: Repeat all\
     * 2: Repeat one
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/controls | Control a player}\
     * {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    type RepeatMode = 0 | 1 | 2;

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    interface Track {
        readonly id: string;
        /** Duration in seconds (int) */
        readonly duration: number;
        readonly title: string;
        readonly artist: Artist;
        readonly album: Album;
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    interface Artist {
        readonly id: string;
        readonly name: string;
    }

    /**
     * See: {@link https://developers.deezer.com/sdk/javascript/player_object | The player properties}
     */
    interface Album {
        readonly id: string;
        readonly title: string;
    }

    // #region Player Events

    /**
     * Allows you to listen to all player-related events.
     *
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/events | List of events}\
     * {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
     */
    interface Event {
        /**
         * See: {@link https://developers.deezer.com/sdk/javascript/events | List of events}
         */
        subscribe(
            event: "player_loaded" | "player_play" | "player_paused" | "tracklist_changed",
            callback: () => void,
        ): void;
        subscribe(
            event: "player_position",
            callback: (positionSecondsFloat_durationSecondsInt: [number, number]) => void,
        ): void;
        subscribe(event: "player_buffering", callback: (loadedPercentInt: number) => void): void;
        subscribe(event: "volume_changed", callback: (volumePercentInt: number) => void): void;
        subscribe(event: "shuffle_changed", callback: (shuffle: boolean) => void): void;
        subscribe(event: "repeat_changed", callback: (repeatMode: RepeatMode) => void): void;
        subscribe(event: "mute_changed", callback: (mute: boolean) => void): void;
        subscribe(event: "track_end", callback: (trackPosition: number) => void): void;
        subscribe(
            event: "current_track",
            callback: (currentTrackInfo: { index: number; track: Track }) => void,
        ): void;
    }

    /**
     * See:\
     * {@link https://developers.deezer.com/sdk/javascript/events | List of events}\
     * {@link https://developers.deezer.com/sdk/javascript/events-subscribe | Subscribe to an event}
     *
     * @remarks
     * This type is not needed to define the other types, but users may find it useful
     * in some situations anyway.
     */
    type PlayerEvent =
        | "player_loaded"
        | "player_play"
        | "player_paused"
        | "player_position"
        | "player_buffering"
        | "volume_changed"
        | "shuffle_changed"
        | "repeat_changed"
        | "mute_changed"
        | "tracklist_changed"
        | "track_end"
        | "current_track";

    // #endregion
}
