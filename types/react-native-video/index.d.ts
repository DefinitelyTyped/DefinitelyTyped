// Type definitions for react-native-video 2.0.0
// Project: https://github.com/react-native-community/react-native-video
// Definitions by: HuHuanming <https://github.com/huhuanming>
//                 abrahambotros <https://github.com/abrahambotros>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import {
    ViewProperties
} from 'react-native';

export type OnLoadData = {
  canPlayFastForward: boolean,
  canPlayReverse: boolean,
  canPlaySlowForward: boolean,
  canPlaySlowReverse: boolean,
  canStepBackward: boolean,
  canStepForward: boolean,
  currentTime: number,
  duration: number,
  naturalSize: {
    height: number;
    width: number;
    orientation: 'horizontal' | 'landscape';
  }
};

export type LoadError = {
  error : {
    '': string;
    errorString: string;
  };
}
export interface VideoProperties extends ViewProperties {
    /* Native only */
    src?: any;
    seek?: number;
    fullscreen?: boolean;
    onVideoLoadStart?(): void;
    onVideoLoad?(): void;
    onVideoBuffer?(): void;
    onVideoError?(): void;
    onVideoProgress?(): void;
    onVideoSeek?(): void;
    onVideoEnd?(): void;
    onTimedMetadata?(): void;
    onVideoFullscreenPlayerWillPresent?(): void;
    onVideoFullscreenPlayerDidPresent?(): void;
    onVideoFullscreenPlayerWillDismiss?(): void;
    onVideoFullscreenPlayerDidDismiss?(): void;

    /* Wrapper component */
    // Opaque type returned by require('./video.mp4')
    source: { uri?: string } | number;
    resizeMode?: string;
    poster?: string;
    repeat?: boolean;
    paused?: boolean;
    muted?: boolean;
    volume?: number;
    rate?: number;
    playInBackground?: boolean;
    playWhenInactive?: boolean;
    ignoreSilentSwitch?: 'ignore' | 'obey';
    disableFocus?: boolean;
    controls?: boolean;
    currentTime?: number;
    progressUpdateInterval?: number;
    onLoadStart?(): void;
    onLoad?(data?: OnLoadData): void;
    onBuffer?(): void;
    onError?(error?: LoadError): void;
    onProgress?(data: {
        currentTime: number;
        playableDuration: number,
    }): void;
    onSeek?(): void;
    onEnd?(): void;
    onFullscreenPlayerWillPresent?(): void;
    onFullscreenPlayerDidPresent?(): void;
    onFullscreenPlayerWillDismiss?(): void;
    onFullscreenPlayerDidDismiss?(): void;
    onReadyForDisplay?(): void;
    onPlaybackStalled?(): void;
    onPlaybackResume?(): void;
    onPlaybackRateChange?(): void;
    onAudioFocusChanged?(): void;
    onAudioBecomingNoisy?(): void;

    /* Required by react-native */
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
    rotation?: number;
}

export default class Video extends React.Component<VideoProperties> {
    seek(time: number): void;
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
}
