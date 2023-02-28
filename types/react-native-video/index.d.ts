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
    currentPosition: number;
    currentTime: number;
    duration: number;
    naturalSize: {
        height: number;
        width: number;
        orientation: 'portrait' | 'landscape';
    };
    videoTracks: Array<{
        bitrate: number;
        codecs: string;
        width: number;
        height: number;
        trackId: string;
    }>;
    audioTracks: Array<{
        index: number;
        title: string;
        language: string;
        type: string;
    }>;
    textTracks: Array<{
        index: number;
        title: string;
        language: string;
        type: string;
    }>;
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
    target?: number | undefined;
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

export interface DRMSettings {
  type: DRMType;
  licenseServer?: string | undefined;
  headers?: { [key: string]: string } | undefined;
  contentId?: string | undefined;
  certificateUrl?: string | undefined;
  base64Certificate?: boolean | undefined;
  getLicense?(spcString: string): Promise<string>;
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

export enum DRMType {
  WIDEVINE = 'widevine',
  PLAYREADY = 'playready',
  CLEARKEY = 'clearkey',
  FAIRPLAY = 'fairplay',
}

export interface VideoProperties extends ViewProps {
    filter?: FilterType | undefined;
    filterEnabled?: boolean | undefined;

    /* Native only */
    src?: any;
    seek?: number | undefined;
    fullscreen?: boolean | undefined;
    fullscreenOrientation?: 'all' | 'landscape' | 'portrait' | undefined;
    fullscreenAutorotate?: boolean | undefined;
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
    source: { uri?: string | undefined, headers?: {[key: string]: string } | undefined, type?: string | undefined } | number;
    minLoadRetryCount?: number | undefined;
    maxBitRate?: number | undefined;
    resizeMode?: "stretch" | "contain" | "cover" | "none" | undefined; // via Image#resizeMode
    posterResizeMode?: "stretch" | "contain" | "cover" | "none" | undefined; // via Image#resizeMode
    poster?: string | undefined;
    repeat?: boolean | undefined;
    automaticallyWaitsToMinimizeStalling?: boolean | undefined;
    paused?: boolean | undefined;
    muted?: boolean | undefined;
    volume?: number | undefined;
    bufferConfig?: {
        minBufferMs?: number | undefined;
        maxBufferMs?: number | undefined;
        bufferForPlaybackMs?: number | undefined;
        bufferForPlaybackAfterRebufferMs?: number | undefined;
    } | undefined;
    stereoPan?: number | undefined;
    rate?: number | undefined;
    pictureInPicture?: boolean | undefined;
    playInBackground?: boolean | undefined;
    playWhenInactive?: boolean | undefined;
    ignoreSilentSwitch?: 'ignore' | 'obey' | undefined;
    mixWithOthers?: 'inherit' | 'mix' | 'duck' | undefined;
    reportBandwidth?: boolean | undefined;
    disableFocus?: boolean | undefined;
    controls?: boolean | undefined;
    currentTime?: number | undefined;
    progressUpdateInterval?: number | undefined;
    useTextureView?: boolean | undefined;
    hideShutterView?: boolean | undefined;
    allowsExternalPlayback?: boolean | undefined;
    audioOnly?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    drm?: DRMSettings | undefined;
    preferredForwardBufferDuration?: number | undefined;

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
        value?: string | number | undefined;
    } | undefined;
    selectedTextTrack?: {
        type: 'system' | 'disabled' | 'title' | 'language' | 'index';
        value?: string | number | undefined;
    } | undefined;
    selectedVideoTrack?: {
        type: 'auto' | 'disabled' | 'resolution' | 'index';
        value?: string | number | undefined;
    } | undefined;
    textTracks?: Array<{
        title?: string | undefined;
        language?: string | undefined;
        type: 'application/x-subrip' | 'application/ttml+xml' | 'text/vtt';
        uri: string;
    }> | undefined;

    /* Required by react-native */
    scaleX?: number | undefined;
    scaleY?: number | undefined;
    translateX?: number | undefined;
    translateY?: number | undefined;
    rotation?: number | undefined;
}

export default class Video extends React.Component<VideoProperties> {
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
    restoreUserInterfaceForPictureInPictureStopCompleted(restored: boolean): void;
    save(): Promise<void>;
    seek(time: number, tolerance?: number): void;
}
