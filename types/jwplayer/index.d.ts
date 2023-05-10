// Type definitions for JW Player 8.2
// Project: https://github.com/jwplayer/jwplayer
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Tomer Kruvi <https://github.com/kutomer>
//                 Philipp Gürtler <https://github.com/philippguertler>
//                 Daniel McGraw <https://github.com/danielmcgraw>
//                 Be Birchall <https://github.com/bebebebebe>
//                 Daniel Cassidy <https://github.com/djcsdy>
//                 Drew Wyatt <https://github.com/drewwyatt>
//                 Zack Haigh <https://github.com/zetagame>
//                 Ethan Setnik <https://github.com/esetnik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        androidNative: boolean; // Android native browser
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
        newstate: 'buffering';
        oldstate: 'playing' | 'idle';
        reason: 'loading' | 'complete' | 'stalled' | 'error';
        type: 'buffer';
    }

    interface BufferChangeParam {
        duration: number;
        bufferPercent: number;
        position: number;
        currentTime: number;
        seekRange: SeekRange;
        type: 'bufferChange';
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
        currentTrack: number;
        tracks: AudioTrack[];
    }

    interface CaptionsChangedParam {
        tracks: Caption[];
        track: number;
        type: 'captionsChanged';
    }

    interface CaptionsListParam {
        tracks: Caption[];
    }

    interface Caption {
        id: number | string;
        label: string;
    }

    interface AudioTrackChangedParam {
        currentTrack: number;
    }

    interface MetadataParam {
        metadata: any;
    }

    interface ControlsParam {
        controls: boolean;
        type: 'controls';
    }

    interface ErrorParam {
        code: number;
        message: string;
        sourceError: object | null;
        type: 'error';
    }

    interface FullscreenParam {
        fullscreen: boolean;
    }

    interface IdleParam {
        oldstate: 'buffering' | 'playing' | 'paused';
    }

    interface LevelsChangedParam {
        currentQuality: number;
        levels: Level[];
        type: 'levelsChanged';
    }

    interface MuteParam {
        mute: boolean;
        type: 'mute';
    }

    interface VolumeParam {
        volume: number;
        type: 'volume';
    }

    interface PlayParam {
        oldstate: 'buffering' | 'playing';
        viewable: 0 | 1;
    }

    interface PlaylistParam {
        playlist: PlaylistItem[];
    }

    interface PlaylistItemParam {
        index: number;
        item: PlaylistItem;
    }

    interface ReadyParam {
        setupTime: number;
        viewable: 0 | 1;
    }

    interface ResizeParam {
        width: number;
        height: number;
    }

    interface VisualQualityParam extends VisualQuality {
        type: 'visualQuality';
    }

    interface PlaybackRateChangedParam {
        playbackRate: number;
        position: number;
    }

    interface LevelsParam {
        currentQuality: number;
        levels: Level[];
        type: 'levels';
    }

    interface SeekParam {
        currentTime: number;
        duration: number;
        metadata?: {
            currentTime?: number;
        };
        offset: number;
        position: number;
        seekRange: SeekRange;
        type: 'seek';
    }

    interface SeekRange {
        end: number;
        start: number;
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

    interface AudioTrack {
        autoselect?: boolean;
        defaulttrack?: boolean;
        language: string;
        name: string;
    }

    interface CaptionOptions {
        color?: string;
        fontSize?: number;
        fontFamily?: string;
        fontOpacity?: number;
        backgroundColor?: string;
        backgroundOpacity?: number;
        edgeStyle?: 'none' | 'depressed' | 'dropshadow' | 'raised' | 'uniform';
        windowColor?: string;
        windowOpacity?: number;
    }

    interface Level {
        height?: number;
        index?: number;
        label: string;
        width?: number;
        hlsjsIndex?: number;
        level_id?: number | string;
        bitrate?: number;
    }

    interface QualityLevel {
        bitrate: number;
        height: number;
        index?: number;
        label: string;
        width: number;
    }

    interface VisualQuality {
        level: QualityLevel;
        mode: 'auto' | 'manual';
        reason: 'auto' | 'api' | 'initial choice';
    }

    interface PlaylistItem {
        description: string;
        mediaid: string;
        file: string;
        image: string;
        preload: 'metadata' | 'auto' | 'none';
        title: string;
        tracks: Track[];
        sources: [Source];
        allSources: Source[];
    }

    interface Source {
        file: string;
        label: string;
        type: string;
        default: boolean;
    }

    interface Track {
        file: string;
        label?: string;
        kind: 'captions' | 'chapters' | 'thumbnails';
    }

    interface CastParam {
        available: boolean;
        active: boolean;
        deviceName: string;
        type: 'cast';
    }

    interface ViewableParam {
        viewable: 0 | 1;
        type: 'viewable';
    }

    interface WarningParam {
        code: number;
        message: string;
        sourceError: object | null;
        type: 'warning';
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
        metadataCueParsed: MetadataParam;
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
        playbackRateChanged: PlaybackRateChangedParam;
        levels: LevelsParam;
        seek: SeekParam;
        setupError: ErrorParam;
        time: TimeParam;
        warning: WarningParam;
    }

    type NoParamEvent =
        | 'adBlock'
        | 'beforeComplete'
        | 'beforePlay'
        | 'complete'
        | 'displayClick'
        | 'nextClick'
        | 'playlistComplete'
        | 'remove'
        | 'seeked'
        | 'userActive'
        | 'userInactive';

    interface SliderCue {
        begin: number;
        cueType: string;
        text: string;
    }

    interface JWPlayer {
        addButton(icon: string, label: string, handler: () => void, id: string, className?: string): JWPlayer;
        addCues(cues: SliderCue[]): JWPlayer;
        addPlugin(name: string, pluginInstance: any): void;
        getAdBlock(): boolean;
        getAudioTracks(): AudioTrack[];
        getBuffer(): number;
        getCaptionsList(): Caption[];
        getContainer(): HTMLElement;
        getControls(): boolean;
        getCues(): SliderCue[];
        getCurrentAudioTrack(): number;
        getCurrentCaptions(): number;
        getCurrentQuality(): number;
        getDuration(): number;
        getEnvironment(): Environment;
        getFloating(): boolean;
        getFullscreen(): boolean;
        getHeight(): number;
        getMute(): boolean;
        getPercentViewable(): number | void;
        getPlaybackRate(): number;
        getPlaylist(): PlaylistItem[];
        getPlaylistIndex(): number;
        getPlaylistItem(index?: number): PlaylistItem;
        getPlaylistItemPromise(index: number): Promise<PlaylistItem>;
        getPlugin(name: string): any;
        getPosition(): number;
        getQualityLevels(): QualityLevel[];
        getRenderingMode(): string;
        getSafeRegion(): Region;
        getState(): string;
        getViewable(): 0 | 1;
        getVisualQuality(): VisualQuality | undefined;
        getVolume(): number;
        getWidth(): number;
        load(playlist: PlaylistItem[] | string): JWPlayer;
        next(): JWPlayer;
        on<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        on(event: NoParamEvent, callback: () => void): JWPlayer;
        once<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        once(event: NoParamEvent, callback: () => void): JWPlayer;
        off(event: keyof EventParams | NoParamEvent): JWPlayer;
        off(event: NoParamEvent, callback: () => void): JWPlayer;
        off<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        trigger<TEvent extends keyof EventParams>(event: TEvent, args: EventParams[TEvent]): JWPlayer;
        trigger(event: NoParamEvent): JWPlayer;
        pause(state?: boolean): JWPlayer;
        pauseAd(toggle: boolean): void;
        play(state?: boolean): JWPlayer;
        playAd(tag: string | string[]): void;
        playlistItem(index: number): JWPlayer;
        registerPlugin(id: string, target: string, jsPlugin: () => void, swfURL?: string): void;
        remove(): JWPlayer;
        removeButton(id: string): JWPlayer;
        removePlaylistItemCallback(): void;
        resize(width: number | string, height: number): JWPlayer;
        seek(position: number): JWPlayer;
        setAllowFullscreen(allowFullscreen?: boolean): JWPlayer;
        setCaptions(styles: CaptionOptions): JWPlayer;
        setControls(state?: boolean): JWPlayer;
        setCues(cues: SliderCue[]): JWPlayer;
        setCurrentAudioTrack(index: number): void;
        setCurrentCaptions(index: number): void;
        setCurrentQuality(index: number): void;
        setFloating(shouldFloat: boolean): void;
        setFullscreen(state: boolean): void;
        setMute(state?: boolean): JWPlayer;
        setPlaybackRate(rate: number): void;
        setPlaylistItemCallback(
            callback: null | ((item: PlaylistItem, index: number) => void | Promise<PlaylistItem>),
        ): void;
        setup(options: any): JWPlayer;
        setVolume(volume: number): JWPlayer;
        skipAd(): void;
        stop(): JWPlayer;
        stopCasting(): JWPlayer;
    }
}

interface JWPlayerStatic {
    (query?: string | number | Element): jwplayer.JWPlayer;
    key: string;
    version: string;
}

declare const jwplayer: JWPlayerStatic;
