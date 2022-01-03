// Type definitions for non-npm package wistia-player-browser 1.0
// Project: https://wistia.com/support/developers/player-api
// Definitions by: Kelly Littlepage <https://github.com/klittlepage>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace WistiaPlayer {
    interface Chapter {
        title: string;
        time: number;
    }

    interface TurnStyleOptions {
        allowSkip?: boolean;
        alwaysShow?: boolean;
        askName?: boolean;
        bottomText?: string;
        buttonBackground?: string;
        errorColor?: string;
        validDomains?: string;
        invalidDomains?: string;
        emailExampleText?: string;
        firstNameExampleText?: string;
        lastNameExampleText?: string;
        sectionIndex?: number;
        time?: number;
        topText?: string;
        videoIndex?: number;
    }

    interface PostRollOptions {
        autoSize?: boolean;
        backgroundOpacity?: number;
        image?: number;
        link?: string;
        on?: boolean;
        raw?: string;
        rewatch?: boolean;
        text?: string;
        time?: number;
    }

    interface Annotation {
        time: number;
        duration: number;
        text: string;
        url?: string;
    }

    interface AnnotationOptions {
        links?: false | Annotation[];
    }

    interface ShareOptions {
        channels?: string;
        pageTitle?: string;
        overrideUrl?: boolean;
        pageUrl?: string;
        downloadType?: 'sd_mp4' | 'hd_mp4' | 'original';
        tweetText?: string;
    }

    interface CaptionOptions {
        onByDefault?: boolean;
        language?: string;
        subtitlesScale?: number;
    }

    interface PluginOptions {
        videoThumbnail?: { clickToPlayButton: boolean };
        'requireEmail-v1?'?: TurnStyleOptions;
        'postRoll-v1'?: PostRollOptions;
        'midrollLink-v1'?: AnnotationOptions;
        share?: ShareOptions;
        'captions-v1'?: CaptionOptions;
    }

    type PlaybackQuality = 224 | 360 | 540 | 720 | 1080 | 3840;

    interface PlayerOptions {
        autoPlay?: boolean | 'muted';
        chaptersOn?: boolean;
        chapterList?: Chapter[];
        controlsVisibleOnLoad?: boolean;
        copyLinkAndThumbnailEnabled?: boolean;
        doNotTrack?: boolean;
        email?: string;
        endVideoBehavior?: 'default' | 'reset' | 'loop';
        fakeFullscreen?: boolean;
        fullscreenButton?: boolean;
        fullscreenOnRotateToLandscape?: boolean;
        googleAnalytics?: boolean;
        muted?: boolean;
        playbackRateControl?: boolean;
        playbar?: boolean;
        playButton?: boolean;
        playerColor?: string;
        playlistLinks?: string;
        playlistLoop?: string;
        playsinline?: boolean;
        playSuspendedOffScreen?: boolean;
        plugin?: PluginOptions;
        preload?: boolean | 'metadata' | 'auto' | 'none';
        qualityControl?: boolean;
        qualityMax?: PlaybackQuality;
        qualityMin?: PlaybackQuality;
        resumable?: boolean | 'auto';
        seo?: boolean;
        settingsControl?: boolean;
        silentAutoPlay?: boolean | 'allow';
        smallPlayButton?: boolean;
        stillUrl?: string;
        time?: string;
        videoFoam?:
            | boolean
            | {
                  minWidth?: number;
                  maxWidth?: number;
                  minHeight?: number;
                  maxHeight?: number;
              };
        volume?: number;
        volumeControl?: boolean;
        wmode?: 'transparent' | 'flash';
    }

    type PlayState = 'beforeplay' | 'playing' | 'paused' | 'ended';

    interface VideoDimensionOptions {
        constrain: boolean;
    }

    type BindCallback = () => void;
    type WithinIntervalCallback = (withinInterval: boolean) => void;
    type CaptionsChangeCallback = (details: { visible: boolean; language: string }) => void;
    type ConversionCallback = (
        type: 'pre-roll-email' | 'mid-roll-email' | 'post-roll-email',
        email: string,
        firstName: string,
        lastName: string,
    ) => void;
    type PercentWatchedCallback = (percent: number, lastPercent: number) => void;
    type PlaybackRateCallback = (playbackRate: number) => void;
    type SecondChangeCallback = (time: number) => void;
    type SeekCallback = (currentTime: number, lastTime: number) => void;
    type SilentPlaybackModeCallback = (isSilentPlaybackMode: boolean) => void;
    type TimeChangeCallback = (time: number) => void;
    type VolumeChangeCallback = (volume: number) => void;

    interface Player {
        addToPlaylist(
            hashId: string,
            options?: PlayerOptions,
            position?: { before?: string; after?: string; index?: number },
        ): void;
        aspect(): number;
        bind(name: 'betweentimes', start: number, end: number, callback: WithinIntervalCallback): void;
        bind(name: 'captionschange', callback: CaptionsChangeCallback): void;
        bind(name: 'conversion', callback: ConversionCallback): void;
        bind(name: 'crosstime', time: number, callback: BindCallback): void;
        bind(
            name:
                | 'beforeremove'
                | 'beforereplace'
                | 'heightchange'
                | 'widthchange'
                | 'lookchange'
                | 'mutechange'
                | 'play'
                | 'pause'
                | 'end',
            callback: BindCallback,
        ): void;
        bind(name: 'percentwatchedchanged', callback: PercentWatchedCallback): void;
        bind(name: 'playbackratechange', callback: PlaybackRateCallback): void;
        bind(name: 'secondchange', callback: SecondChangeCallback): void;
        bind(name: 'seek', callback: SeekCallback): void;
        bind(name: 'silentplaybackmodechange', callback: SilentPlaybackModeCallback): void;
        bind(name: 'timechange', callback: TimeChangeCallback): void;
        bind(name: 'volumechange', callback: VolumeChangeCallback): void;
        duration(): number;
        email(email?: string): string | null;
        embedded(): boolean;
        eventKey(): string;
        hasData(): boolean;
        hashedId(): string;
        height(height: number, options?: VideoDimensionOptions): number;
        isMuted(): boolean;
        look(view?: {
            heading?: number;
            pitch?: number;
            fov?: number;
        }): { heading?: number; pitch?: number; fov?: number } | undefined;
        mute(): void;
        name(): string;
        pause(): void;
        percentWatched(): number;
        play(): void;
        playbackRate(rate: number): void;
        ready(): boolean;
        remove(): void;
        replaceWith(hashId: string, options?: PlayerOptions): void;
        secondsWatched(): number;
        secondsWatchedVector(): number[];
        state(): PlayState;
        time(time?: number): number;
        unbind(name: 'captionschange', callback: BindCallback | CaptionsChangeCallback): void;
        unbind(name: 'conversion', callback: BindCallback | ConversionCallback): void;
        unbind(name: 'crosstime', time: number, callback: BindCallback): void;
        unbind(
            name: 'heightchange' | 'lookchange' | 'mutechange' | 'play' | 'pause' | 'end',
            callback: BindCallback,
        ): void;
        unbind(name: 'percentwatchedchanged', callback: BindCallback | PercentWatchedCallback): void;
        unbind(name: 'playbackratechange', callback: BindCallback | PlaybackRateCallback): void;
        unbind(name: 'secondchange', callback: BindCallback | SecondChangeCallback): void;
        unbind(name: 'seek', callback: BindCallback | SeekCallback): void;
        unbind(name: 'silentplaybackmodechange', callback: BindCallback | SilentPlaybackModeCallback): void;
        unbind(name: 'timechange', callback: BindCallback | TimeChangeCallback): void;
        unbind(name: 'volumechange', callback: BindCallback | VolumeChangeCallback): void;
        unbind(name: 'widthchange', callback: BindCallback | BindCallback): void;
        unmute(): void;
        videoHeight(height: number, options?: VideoDimensionOptions): number;
        videoWidth(width: number, options?: VideoDimensionOptions): number;
        visitorKey(): string;
        volume(volume: number): number;
        width(width: number, options?: VideoDimensionOptions): number;
    }
}
