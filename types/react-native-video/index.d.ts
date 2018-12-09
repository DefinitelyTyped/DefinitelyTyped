// Type definitions for react-native-video 3.1
// Project: https://github.com/react-native-community/react-native-video
// Definitions by: HuHuanming <https://github.com/huhuanming>
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

export interface LoadError {
  error: {
    '': string;
    errorString: string;
  };
}

export const TextTrackType: {
  SRT: 'application/x-subrip';
  TTML: 'application/ttml+xml';
  VTT: 'text/vtt';
};

export interface VideoProperties extends ViewProps {
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
  useTextureView?: boolean;
  allowsExternalPlayback?: boolean;

  onLoadStart?(): void;
  onLoad?(data: OnLoadData): void;
  onBuffer?(): void;
  onError?(error: LoadError): void;
  onProgress?(data: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
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
  selectedTextTrack?: {
    type: 'system' | 'disabled' | 'title' | 'language' | 'index';
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
