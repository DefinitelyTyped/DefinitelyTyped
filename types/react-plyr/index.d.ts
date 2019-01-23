// Type definitions for react-plyr 2.1.1
// Project: https://github.com/xDae/react-plyr
// Definitions by: baorv <https://github.com/baorv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {Component} from "react";
import Player from "plyr";

interface Props {
    type?: "youtube" | "vimeo" | "video" | "audio";
    className?: string;
    videoId?: string;
    url?: string;

    onReady?: (player?: Player) => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnd?: () => void;
    onLoadedData?: () => void;
    onSeeked?: (time?: number) => void;
    onTimeUpdate?: (time?: number) => void;
    onEnterFullscreen?: () => void;
    onExitFullscreen?: () => void;
    onVolumeChange?: ({muted: boolean, volume: number}) => void;
    onCaptionsEnabled?: () => void;
    onCaptionsDisabled?: () => void;

    enabled?: boolean;
    title?: string;
    debug?: boolean;
    autoplay?: boolean;
    autopause?: boolean;
    seekTime?: number;
    volume?: number;
    muted?: boolean;
    duration?: number;
    displayDuration?: boolean;
    invertTime?: boolean;
    toggleInvert?: boolean;
    ratio?: string;
    clickToPlay?: boolean;
    hideControls?: boolean;
    resetOnEnd?: boolean;
    disableContextMenu?: boolean;
    loadSprite?: boolean;
    iconPrefix?: string;
    iconUrl?: string;
    blankVideo?: string;
    quality?: {
        default?: string | number;
        option?: string[] | number[];
    };
    loop?: {
        active?: boolean
    };
    speed?: {
        selected?: number;
        options?: number[]
    };
    keyboard?: {
        focused?: boolean;
        global?: boolean
    };
    tooltips?: {
        controls?: boolean;
        seek?: boolean
    }
    captions?: {
        active?: boolean;
        language?: string
    };
    fullscreen?: {
        enabled?: boolean;
        fallback?: boolean;
        iosNative?: boolean
    };
    storage?: {
        enabled?: boolean;
        key?: string
    };
    controls?: string[];
    settings?: string[];

    poster?: string;
    sources?: Array<{
        src: string.isRequired;
        type: string.isRequired;
        size?: string;
    }>;
    captions?: Array<{
        kind?: string;
        label?: string;
        src: string.isRequired;
        srclang?: string;
        default?: boolean;
        key?: PropTypes.any;
    }>;
}

declare class Plyr extends Component<Props> {
    public getType(): any

    public play()

    public pause()

    public togglePlay()

    public stop()

    public restart()

    public rewind(time: number)

    public forward(time: number)

    public getCurrentTime(): number

    public setCurrentTime(time: number)

    public getDuration(): number

    public getVolume(): number

    public isMuted(): boolean

    public isPaused(): boolean

    public toggleMute()

    public setMuted(muted?: boolean)

    public increaseVolume(step: boolean)

    public decreaseVolume(step: boolean)

    public setVolume(amount: boolean)

    public enterFullscreen()

    public exitFullscreen()

    public toggleFullscreen()

}

export default Plyr;
