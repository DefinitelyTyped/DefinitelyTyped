// Type definitions for JW Player 8.2
// Project: https://github.com/jwplayer/jwplayer
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Tomer Kruvi <https://github.com/kutomer>
//                 Philipp Gürtler <https://github.com/philippguertler>
//                 Daniel McGraw <https://github.com/danielmcgraw>
//                 Benjamin Dobson <https://github.com/bpdsw>
//                 Be Birchall <https://github.com/bebebebebe>
//                 Daniel Cassidy <https://github.com/djcsdy>
//                 Drew Wyatt <https://github.com/drewwyatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

declare namespace jwplayer {
    interface Version {
        version: string;
        major: number;
        minor: number;
    }

    interface Browser {
        chrome: boolean;
        edge: boolean;
        facebook: boolean;
        firefox: boolean;
        ie: boolean;
        msie: boolean;
        safari: boolean;
        version: Version;
    }

    interface OS {
        android: boolean;
        androidNative: boolean;   // Android native browser
        iOS: boolean;
        mobile: boolean;
        mac: boolean;
        iPad: boolean;
        iPhone: boolean;
        windows: boolean;
        version: Version;
    }

    interface Features {
        flash: boolean;
        flashVersion: number;
        iframe: boolean;
    }

    interface Environment {
        Browser: Browser;
        OS: OS;
        Features: Features;
    }

    interface AdProgressParam {
        client: 'vast' | 'googima';
        creativetype: string;
        tag: string;
    }

    interface AdCompanionsParam {
        companions: any[];
        tag: string;
    }

    interface AdErrorParam {
        message: string;
        tag: string;
    }

    interface AdRequestParam {
        adposition: 'pre' | 'mid' | 'post';
        client: 'vast' | 'googima';
        offset: 'pre' | 'mid' | 'post';
        tag: string;
    }

    interface AdImpressionParam {
        adposition: 'pre' | 'mid' | 'post';
        adsystem: string;
        adtitle: string;
        clickThroughUrl: string;
        client: 'vast' | 'googima';
        creativetype: string;
        linear: string;
        mediafile: any;
        tag: string;
        vastversion: number;
        wrapper: any[];
    }

    interface AdScheduleParam {
        tag: string;
        client: string;
        adbreaks: object[];
    }

    interface AdStartedParam {
        creativetype: string;
        tag: string;
    }

    interface AdPlayParam {
        creativetype: string;
        newstate: string;
        oldstate: string;
        tag: string;
    }

    interface BufferParam {
        newstate: string;
        oldstate: string;
        reason: 'loading' | 'complete' | 'stalled' | 'error';
    }

    interface BufferChangeParam {
        duration: number;
        bufferPercent: number;
        position: number;
        metadata: any;
    }

    interface AdTimeParam {
        client: 'vast' | 'googima';
        creativetype: string;
        duration: number;
        position: number;
        sequence: number;
        tag: string;
    }

    interface AudioTracksParam {
        levels: any[];
    }

    interface CaptionsChangedParam {
        currentTrack: number;
    }

    interface CaptionsListParam {
        tracks: any[];
    }

    interface AudioTrackChangedParam {
        currentTrack: number;
    }

    interface MetadataParam {
        metadata: any;
    }

    interface ControlsParam {
        controls: boolean;
    }

    interface ErrorParam {
        message: string;
    }

    interface FullscreenParam {
        fullscreen: boolean;
    }

    interface IdleParam {
        oldstate: 'buffering' | 'playing' | 'paused';
    }

    interface LevelsChangedParam {
        currentQuality: number;
    }

    interface MuteParam {
        mute: boolean;
    }

    interface VolumeParam {
        volume: boolean;
    }

    interface PlayParam {
        oldstate: 'buffering' | 'playing';
        viewable: 0 | 1;
    }

    interface PlaylistParam {
        playlist: any[];
    }

    interface PlaylistItemParam {
        index: number;
        item: any;
    }

    interface ReadyParam {
        setupTime: number;
        viewable: 0 | 1;
    }

    interface ResizeParam {
        width: number;
        height: number;
    }

    interface VisualQualityParam {
        mode: string;
        label: string;
        reason: string;
    }

    interface LevelsParam {
        width: number;
        levels: any[];
    }

    interface SeekParam {
        position: number;
        offset: number;
    }

    interface TimeParam {
        duration: number;
        position: number;
        viewable: 0 | 1;
    }

    interface FirstFrameParam {
        loadTime: number;
        viewable: 0 | 1;
    }

    type EventCallback<T> = (param: T) => void;

    interface Region {
        x: 0; // x and y will always be 0 according to https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayergetsaferegion
        y: 0;
        width: number;
        height: number;
    }

    interface CaptionOptions {
        color: string;
        fontSize: number;
        fontFamily: string;
        fontOpacity: number;
        backgroundColor: string;
        backgroundOpacity: number;
        edgeStyle: string;
        windowColor: string;
        windowOpacity: number;
    }

    interface Level {
        bitrate: number;
        height: number;
        width: number;
        label: string;
    }

    interface QualityLevel {
        mode: 'auto' | 'manual';
        level: Level;
        reason: 'auto' | 'api' | 'initial choice';
    }

    interface CastParam {
        available: boolean;
        active: boolean;
        deviceName: string;
        type: 'cast';
    }

    interface EventParams {
        adClick: AdProgressParam;
        adCompanions: AdCompanionsParam;
        adComplete: AdProgressParam;
        adSkipped: AdProgressParam;
        adError: AdErrorParam;
        adRequest: AdRequestParam;
        adSchedule: AdScheduleParam;
        adStarted: AdStartedParam;
        adImpression: AdImpressionParam;
        adPlay: AdPlayParam;
        adPause: AdPlayParam;
        adTime: AdTimeParam;
        cast: CastParam;
        meta: MetadataParam;
        audioTracks: AudioTracksParam;
        audioTrackChanged: AudioTrackChangedParam;
        firstFrame: FirstFrameParam;
        buffer: BufferParam;
        bufferChange: BufferChangeParam;
        captionsChanged: CaptionsChangedParam;
        captionsList: CaptionsListParam;
        controls: ControlsParam;
        error: ErrorParam;
        fullscreen: FullscreenParam;
        idle: IdleParam;
        levelsChanged: LevelsChangedParam;
        mute: MuteParam;
        volume: VolumeParam;
        pause: PlayParam;
        play: PlayParam;
        playlist: PlaylistParam;
        playlistItem: PlaylistItemParam;
        ready: ReadyParam;
        resize: ResizeParam;
        visualQuality: VisualQualityParam;
        levels: LevelsParam;
        seek: SeekParam;
        setupError: ErrorParam;
        time: TimeParam;
    }

    type NoParamEvent = 'adBlock' | 'beforeComplete' | 'complete' | 'beforePlay' | 'displayClick' | 'playlistComplete'
            | 'seeked' | 'remove';

    interface JWPlayer {
        addButton(icon: string, label: string, handler: () => void, id: string): void;
        getAudioTracks(): any[];
        getBuffer(): number;
        getCaptionsList(): any[];
        getControls(): boolean;
        getCurrentAudioTrack(): number;
        getCurrentCaptions(): number;
        getCurrentQuality(): number;
        getDuration(): number;
        getHeight(): number;
        getFullscreen(): boolean;
        getMute(): boolean;
        getPlaylist(): any[];
        getPlaylistIndex(): number;
        getPlaylistItem(index?: number): any;
        getPosition(): number;
        getQualityLevels(): any[];
        getRenderingMode(): string;
        getSafeRegion(): Region;
        getState(): string;
        getVolume(): number;
        getContainer(): HTMLElement;
        getEnvironment(): Environment;
        getWidth(): number;
        getVisualQuality(): QualityLevel | undefined;
        load(playlist: any[] | string): void;
        on<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): void;
        on(event: NoParamEvent, callback: () => void): void;
        once<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): void;
        once(event: NoParamEvent, callback: () => void): void;
        off(event: keyof EventParams | NoParamEvent): void;
        off(event: NoParamEvent, callback: () => void): void;
        off<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): void;
        trigger<TEvent extends keyof EventParams>(event: TEvent, args: EventParams[TEvent]): void;
        trigger(event: NoParamEvent): void;
        pause(state?: boolean): void;
        play(state?: boolean): void;
        playAd(tag: string): void;
        playlistItem(index: number): void;
        registerPlugin(id: string, target: string, jsPlugin: () => void, swfURL?: string): void;
        remove(): void;
        removeButton(id: string): void;
        resize(width: number, height: number): void;
        seek(position: number): void;
        setControls(controls: boolean): void;
        setCurrentAudioTrack(index: number): void;
        setCurrentCaptions(index: number): void;
        setCurrentQuality(index: number): void;
        setFullscreen(state: boolean): void;
        setMute(state?: boolean): void;
        setup(options: any): JWPlayer;
        setVolume(volume: number): void;
        setCaptions(options: CaptionOptions): void;
        stop(): void;
    }

    interface JWPlayerStatic {
        (query?: string | number | Element): JWPlayer;
        key: string;
        version: string;
    }
}

declare const jwplayer: jwplayer.JWPlayerStatic;
