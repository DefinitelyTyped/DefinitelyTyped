// Type definitions for react-native-video 5.0
// Project: https://github.com/react-native-community/react-native-video, https://github.com/brentvatne/react-native-video
// Definitions by: HuHuanming <https://github.com/huhuanming>
//                 Nekith <https://github.com/Nekith>
//                 Philip Frank <https://github.com/bananer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ViewProps } from 'react-native';

export interface OnLoadData {
    canPlayFastForward: boolean;
    canPlayReverse: boolean;
    canPlaySlowForward: boolean;
    canPlaySlowReverse: boolean;
    canStepBackward: boolean;
    canStepForward: boolean;
    currentTime: number;
    duration: number;
    naturalSize: {
        height: number;
        width: number;
        orientation: 'horizontal' | 'landscape';
    };
}

export interface OnProgressData {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
}

export interface OnBandwidthUpdateData {
    bitrate: number;
}

export interface LoadError {
    error: {
        '': string;
        errorString: string;
    };
}

export interface OnSeekData {
    currentTime: number;
    seekTime: number;
    target?: number;
}

export interface OnPlaybackRateData {
    playbackRate: number;
}

export interface OnPictureInPictureStatusData {
    isActive: boolean;
}

export interface OnExternalPlaybackChangeData {
    isExternalPlaybackActive: boolean;
}

export interface OnBufferData {
    isBuffering: boolean;
}

export const TextTrackType: {
    SRT: 'application/x-subrip';
    TTML: 'application/ttml+xml';
    VTT: 'text/vtt';
};

export enum FilterType {
    NONE = '',
    INVERT = 'CIColorInvert',
    MONOCHROME = 'CIColorMonochrome',
    POSTERIZE = 'CIColorPosterize',
    FALSE = 'CIFalseColor',
    MAXIMUMCOMPONENT = 'CIMaximumComponent',
    MINIMUMCOMPONENT = 'CIMinimumComponent',
    CHROME = 'CIPhotoEffectChrome',
    FADE = 'CIPhotoEffectFade',
    INSTANT = 'CIPhotoEffectInstant',
    MONO = 'CIPhotoEffectMono',
    NOIR = 'CIPhotoEffectNoir',
    PROCESS = 'CIPhotoEffectProcess',
    TONAL = 'CIPhotoEffectTonal',
    TRANSFER = 'CIPhotoEffectTransfer',
    SEPIA = 'CISepiaTone',
}

export interface VideoProperties extends ViewProps {
    filter?: FilterType;
    filterEnable?: boolean;

    /* Native only */
    src?: any;
    seek?: number;
    fullscreen?: boolean;
    fullscreenOrientation?: 'all' | 'landscape' | 'portrait';
    fullscreenAutorotate?: boolean;
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
    source: { uri?: string, headers?: {[key: string]: string } } | number;
    minLoadRetryCount?: number;
    maxBitRate?: number;
    resizeMode?: "stretch" | "contain" | "cover" | "none"; // via Image#resizeMode
    posterResizeMode?: "stretch" | "contain" | "cover" | "none"; // via Image#resizeMode
    poster?: string;
    repeat?: boolean;
    automaticallyWaitsToMinimizeStalling?: boolean;
    paused?: boolean;
    muted?: boolean;
    volume?: number;
    bufferConfig?: {
        minBufferMs?: number;
        maxBufferMs?: number;
        bufferForPlaybackMs?: number;
        bufferForPlaybackAfterRebufferMs?: number;
    };
    stereoPan?: number;
    rate?: number;
    pictureInPicture?: boolean;
    playInBackground?: boolean;
    playWhenInactive?: boolean;
    ignoreSilentSwitch?: 'ignore' | 'obey';
    reportBandwidth?: boolean;
    disableFocus?: boolean;
    controls?: boolean;
    currentTime?: number;
    progressUpdateInterval?: number;
    useTextureView?: boolean;
    hideShutterView?: boolean;
    allowsExternalPlayback?: boolean;
    audioOnly?: boolean;
    preventsDisplaySleepDuringVideoPlayback?: boolean;

    onLoadStart?(): void;
    onLoad?(data: OnLoadData): void;
    onBuffer?(data: OnBufferData): void;
    onError?(error: LoadError): void;
    onProgress?(data: OnProgressData): void;
    onBandwidthUpdate?(data: OnBandwidthUpdateData): void;
    onSeek?(data: OnSeekData): void;
    onEnd?(): void;
    onFullscreenPlayerWillPresent?(): void;
    onFullscreenPlayerDidPresent?(): void;
    onFullscreenPlayerWillDismiss?(): void;
    onFullscreenPlayerDidDismiss?(): void;
    onReadyForDisplay?(): void;
    onPlaybackStalled?(): void;
    onPlaybackResume?(): void;
    onPlaybackRateChange?(data: OnPlaybackRateData): void;
    onAudioFocusChanged?(): void;
    onAudioBecomingNoisy?(): void;
    onPictureInPictureStatusChanged?(data: OnPictureInPictureStatusData): void;
    onRestoreUserInterfaceForPictureInPictureStop?(): void;
    onExternalPlaybackChange?(data: OnExternalPlaybackChangeData): void;
    selectedAudioTrack?: {
        type: 'system' | 'disabled' | 'title' | 'language' | 'index';
        value?: string | number;
    };
    selectedTextTrack?: {
        type: 'system' | 'disabled' | 'title' | 'language' | 'index';
        value?: string | number;
    };
    selectedVideoTrack?: {
        type: 'auto' | 'disabled' | 'resolution' | 'index';
        value?: string | number;
    };
    textTracks?: Array<{
        title?: string;
        language?: string;
        type: 'application/x-subrip' | 'application/ttml+xml' | 'text/vtt';
        uri: string;
    }>;

    /* Required by react-native */
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
    rotation?: number;
}

export default class Video extends React.Component<VideoProperties> {
    seek(time: number, tolerance?: number): void;
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
}
