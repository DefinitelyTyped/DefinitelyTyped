import { Component } from "react";

interface OnVolumeChangeParam {
    muted: boolean;
    volume: number;
}

interface Props {
    type?: "youtube" | "vimeo" | "video" | "audio" | undefined;
    className?: string | undefined;
    videoId?: string | undefined;
    url?: string | undefined;

    onReady?: ((player?: any) => void) | undefined;
    onPlay?: (() => void) | undefined;
    onPause?: (() => void) | undefined;
    onEnd?: (() => void) | undefined;
    onLoadedData?: (() => void) | undefined;
    onSeeked?: ((time?: number) => void) | undefined;
    onTimeUpdate?: ((time?: number) => void) | undefined;
    onEnterFullscreen?: (() => void) | undefined;
    onExitFullscreen?: (() => void) | undefined;
    onVolumeChange?: ((params: OnVolumeChangeParam) => void) | undefined;
    onCaptionsEnabled?: (() => void) | undefined;
    onCaptionsDisabled?: (() => void) | undefined;

    enabled?: boolean | undefined;
    title?: string | undefined;
    debug?: boolean | undefined;
    autoplay?: boolean | undefined;
    autopause?: boolean | undefined;
    seekTime?: number | undefined;
    volume?: number | undefined;
    muted?: boolean | undefined;
    duration?: number | undefined;
    displayDuration?: boolean | undefined;
    invertTime?: boolean | undefined;
    toggleInvert?: boolean | undefined;
    ratio?: string | undefined;
    clickToPlay?: boolean | undefined;
    hideControls?: boolean | undefined;
    resetOnEnd?: boolean | undefined;
    disableContextMenu?: boolean | undefined;
    loadSprite?: boolean | undefined;
    iconPrefix?: string | undefined;
    iconUrl?: string | undefined;
    blankVideo?: string | undefined;
    quality?: {
        default?: string | number | undefined;
        option?: string[] | number[] | undefined;
    } | undefined;
    loop?: {
        active?: boolean | undefined;
    } | undefined;
    speed?: {
        selected?: number | undefined;
        options?: number[] | undefined;
    } | undefined;
    keyboard?: {
        focused?: boolean | undefined;
        global?: boolean | undefined;
    } | undefined;
    tooltips?: {
        controls?: boolean | undefined;
        seek?: boolean | undefined;
    } | undefined;
    fullscreen?: {
        enabled?: boolean | undefined;
        fallback?: boolean | undefined;
        iosNative?: boolean | undefined;
    } | undefined;
    storage?: {
        enabled?: boolean | undefined;
        key?: string | undefined;
    } | undefined;
    controls?: string[] | undefined;
    settings?: string[] | undefined;

    poster?: string | undefined;
    sources?:
        | Array<{
            src: string;
            type: string;
            size?: string | undefined;
        }>
        | undefined;
    captions?:
        | Array<{
            kind?: string | undefined;
            label?: string | undefined;
            src: string;
            srclang?: string | undefined;
            default?: boolean | undefined;
            key?: any;
        }>
        | undefined;
}

declare class Plyr extends Component<Props> {
    getType(): any;

    play(): void;

    pause(): void;

    togglePlay(): void;

    stop(): void;

    restart(): void;

    rewind(time: number): void;

    forward(time: number): void;

    getCurrentTime(): number;

    setCurrentTime(time: number): void;

    getDuration(): number;

    getVolume(): number;

    isMuted(): boolean;

    isPaused(): boolean;

    toggleMute(): void;

    setMuted(muted?: boolean): void;

    increaseVolume(step: boolean): void;

    decreaseVolume(step: boolean): void;

    setVolume(amount: boolean): void;

    enterFullscreen(): void;

    exitFullscreen(): void;

    toggleFullscreen(): void;
}
export default Plyr;
