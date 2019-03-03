// Type definitions for JW Player 8.3
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

    type RequiredConfiguration = {
        readonly file: string;
    } | {
        readonly playlist: PlaylistConfiguration;
    };

    type Configuration = RequiredConfiguration & {
        readonly image?: string;
        readonly title?: string;
        readonly description?: string;
        readonly mediaid?: string;
        readonly type?: SourceType;
        readonly mute?: boolean;
        readonly autostart?: string;
        readonly nextupoffset?: number;
        readonly repeat?: boolean;
        readonly abouttext?: string;
        readonly aboutlink?: string;
        readonly playbackRateControls?: boolean;
        readonly playbackRates?: ReadonlyArray<number>;
        readonly defaultBandwidthEstimate?: number;
        readonly controls?: boolean;
        readonly aspectratio?: string;
        readonly height?: number;
        readonly width?: number;
        readonly displaytitle?: boolean;
        readonly displaydescription?: boolean;
        readonly stretching?: "uniform" | "exactfit" | "fill" | "none";
        readonly nextUpDisplay?: boolean;
        readonly qualityLabels?: {
            readonly [quality: number]: string
        },
        readonly displayPlaybackLabel?: boolean;
        readonly base?: string;
        readonly preload?: "none" | "metadata" | "auto";
        readonly flashplayer?: string;
        readonly hlsjsdefault?: boolean;
        readonly liveTimeout?: number;
        readonly cast?: {
            customAppId?: string;
        };
        readonly skin?: {
            readonly controlbar?: {
                readonly text: string;
                readonly icons: string;
                readonly iconsActive: string;
                readonly background: string;
                readonly progress: string;
            };
            readonly timeslider?: {
                readonly rail: string;
            };
            readonly menus?: {
                readonly text?: string;
                readonly textActive?: string;
                readonly background?: string;
            };
            readonly tooltips?: {
                readonly text?: string;
                readonly background?: string;
            };
            /** @deprecated Obsolete since JW Player 8, but still supported. */
            readonly active?: string;
            /** @deprecated Obsolete since JW Player 8, but still supported. */
            readonly inactive?: string;
            /** @deprecated Obsolete since JW Player 8, but still supported. */
            readonly background?: string;
        } | {
            readonly url?: string;
            readonly name?: string;
        };
        readonly renderCaptionsNatively?: boolean;
        readonly captions?: {
            readonly color?: string;
            readonly fontSize?: number;
            readonly fontFamily?: string;
            readonly fontOpacity?: number;
            readonly backgroundColor?: string;
            readonly backgroundOpacity?: number;
            readonly edgeStyle?: "none" | "dropshadow" | "raised" | "depressed" | "uniform";
            readonly windowColor?: string;
            readonly windowOpacity?: number;
        };
        readonly logo?: {
            readonly file?: string;
            readonly hide?: boolean;
            readonly link?: string;
            readonly margin?: number;
            readonly position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "control-bar";
        };
        readonly sharing?: {
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            link?: string;
            code?: string;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            heading?: string;
            sites?: ReadonlyArray<"facebook" | "twitter" | "interest" | "email" | "tumbler" | "googleplus" | "reddit" | "linkedin">;
        };
        readonly ga?: {
            readonly label?: string;
        };
        readonly related?: {
            readonly file: string;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly autoplaymessage?: string;
            readonly autoplaytimer?: number;
            readonly displayMode?: "overlay" | "shelf" | "shelfWidget";
            readonly onclick?: "play" | "link";
            readonly oncomplete?: "hide" | "show" | "autoplay";
            readonly selector?: string;
        };
        readonly advertising?: {
            readonly client: "vast" | "googima" | "freewheel";
            readonly adscheduleid?: string;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly admessage?: string;
            readonly autoplayadsmuted?: boolean;
            readonly bids?: {
                readonly bidders?: ReadonlyArray<{
                    readonly id?: string;
                    readonly name?: "Facebook" | "SpotX";
                }>;
                readonly settings?: {
                    readonly mediationLayerAdServer: "jwp" | "jwpspotx" | "dfp" | "jwpdfp";
                    readonly bidTimeout?: number;
                    readonly floorPriceCents?: number;
                    readonly floorPriceCurrency?: string;
                };
                readonly bidOnBreaks?: number;
            };
            readonly companiondiv?: {
                readonly height?: number;
                readonly width?: number;
                readonly id?: string;
            };
            readonly conditionaladoptout?: boolean;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly cuetext?: string;
            readonly creativeTimeout?: number;
            readonly forceNonLinearFullSlot?: boolean;
            readonly freewheel?: {
                adManagerURL?: string;
            };
            readonly loadVideoTimeout?: number;
            readonly locale?: string;
            readonly maxRedirects?: number;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly podmessage?: string;
            readonly preloadAds?: boolean;
            readonly requestTimeout?: number;
            readonly rules?: {
                readonly startOn?: number;
                readonly frequency?: number;
                readonly startOnSeek?: "pre" | "none";
                readonly timeBetweenAds?: number;
            };
            readonly schedule?: {
                readonly custParams?: object;
                readonly offset?: string | number;
                readonly tag?: string | ReadonlyArray<string>;
                readonly type?: "linear" | "nonlinear";
                readonly vastxml?: string;
            };
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly skipmessage?: string;
            readonly skipoffset?: number;
            /** @deprecated Starting with JW Player 8.6.0, use the intl object to set this property. */
            readonly skiptext?: string;
            readonly tag?: string | ReadonlyArray<string>;
            readonly vastLoadTimeout?: number;
            readonly vpaidcontrols?: boolean;
            readonly vpaidmode?: "disabled" | "enabled" | "insecure";
        }
        readonly drm?: DrmConfiguration;
    };

    type SourceType = "aac" | "mp4" | "f4v" | "m4v" | "mov" | "mp3" | "mpeg" | "ogv" | "oga" | "vorbis" | "webm" | "f4a" | "m3u8" | "m3u" | "hls";

    type PlaylistConfiguration = string | ReadonlyArray<MediaConfiguration>;

    type RequiredMediaConfiguration = {
        readonly file: string;
    } | {
        readonly sources: ReadonlyArray<SourceConfiguration>;
    };

    type MediaConfiguration = RequiredMediaConfiguration & {
        readonly withCredentials?: boolean;
        readonly title?: string;
        readonly description?: string;
        readonly image?: string;
        readonly mediaid?: string;
        readonly recommendations?: string;
        readonly starttime?: number;
        readonly minDvrWindow?: number;
        readonly tracks?: ReadonlyArray<TrackConfiguration>;
        readonly adschedule?: {
            readonly [name: string]: {
                readonly offset: number;
                readonly tag: string;
            }
        };
        readonly stereomode?: "monoscopic" | "stereoscopicTopBottom" | "stereoscopicLeftRight";
    };

    interface SourceConfiguration {
        readonly file: string;
        readonly label?: string;
        readonly type?: SourceType;
        readonly default?: boolean;
        readonly drm?: DrmConfiguration;
        readonly onXhrOpen?: (xhr: XMLHttpRequest, url: string) => void;
    }

    interface TrackConfiguration {
        readonly file: string;
        readonly kind?: "captions" | "chapters" | "thumbnails";
        readonly label?: string;
        readonly default?: boolean;
    }

    interface DrmConfiguration {
        readonly playready?: {
            readonly url: string;
            readonly headers?: ReadonlyArray<Header>;
            readonly licenseRequestFilter?: (request: any) => void;
            readonly licenseResponseFilter?: (response: any) => void;
        };
        readonly widevine?: {
            readonly url: string;
            readonly serverCertificateUrl?: string;
            readonly headers?: ReadonlyArray<Header>;
            readonly licenseRequestFilter?: (request: any) => void;
            readonly licenseResponseFilter?: (response: any) => void;
        };
        readonly fairplay?: {
            readonly certificateUrl: string;
            readonly processSpcUrl: string | (() => string);
            readonly extractContentId?: (initDataUri: string) => string;
            readonly licenseRequestHeaders?: ReadonlyArray<Header>;
            readonly licenseResponseType?: "arraybuffer" | "blob" | "json" | "text";
            readonly licenseRequestMessage?: (message: any) => any;
            readonly extractKey?: (ckc: any) => any;
            readonly licenseRequestFilter?: (request: any) => void;
            readonly licenseResponseFilter?: (response: any) => void;
        };
        readonly clearkey?: {
            readonly key: string;
            readonly keyId: string;
        };
        readonly intl?: {
            readonly [lang: string]: {
                readonly advertising?: {
                    readonly admessage?: string;
                    readonly cuetext?: string;
                    readonly loadingAd?: string;
                    readonly podmessage?: string;
                    readonly skipmessage?: string;
                    readonly skiptext?: string;
                };
                readonly airplay?: string;
                readonly audioTracks?: string;
                readonly auto?: string;
                readonly buffer?: string;
                readonly cast?: string;
                readonly cc?: string;
                readonly close?: string;
                readonly errors?: {
                    readonly badConnection?: string;
                    readonly cantLoadPlayer?: string;
                    readonly cantPlayInBrowser?: string;
                    readonly cantPlayVideo?: string;
                    readonly errorCode?: string;
                    readonly liveStreamDown?: string;
                    readonly protectedContent?: string;
                    readonly technicalError?: string;
                };
                readonly exitFullscreen?: string;
                readonly fullscreen?: string;
                readonly hd?: string;
                readonly liveBroadcast?: string;
                readonly logo?: string;
                readonly mute?: string;
                readonly next?: string;
                readonly nextUp?: string;
                readonly notLive?: string;
                readonly off?: string;
                readonly pause?: string;
                readonly play?: string;
                readonly playback?: string;
                readonly playbackRates?: string;
                readonly player?: string;
                readonly playlist?: string;
                readonly poweredBy?: string;
                readonly prev?: string;
                readonly related?: {
                    readonly autoplaymessage?: string;
                    readonly heading?: string;
                };
                readonly replay?: string;
                readonly settings?: string;
                readonly sharing?: {
                    readonly copied?: string;
                    readonly email?: string;
                    readonly embed?: string;
                    readonly heading?: string;
                    readonly link?: string;
                };
                readonly slider?: string;
                readonly stop?: string;
                readonly unmute?: string;
                readonly videoInfo?: string;
                readonly volume?: string;
                readonly volumeSlider?: string;
            };
        };
    }

    interface Header {
        readonly name: string;
        readonly value: string;
    }

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
        setup(options: Configuration): JWPlayer;
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
