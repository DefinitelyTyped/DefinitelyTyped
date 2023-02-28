// Type definitions for react-native-video-player 0.10
// Project: https://github.com/cornedor/react-native-video-player.git
// Definitions by: Junseong Park <https://github.com/Kweiza>
//                 mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { VideoProperties } from 'react-native-video';

export interface VideoPlayerProps extends Omit<VideoProperties, 'source'> {
    video?: { uri?: string | undefined, mainVer?: number | undefined, patchVer?: number | undefined } | number | undefined;
    thumbnail?: ImageSourcePropType | undefined;
    endThumbnail?: ImageSourcePropType | undefined;
    videoWidth?: number | undefined;
    videoHeight?: number | undefined;
    duration?: number | undefined;
    showDuration?: boolean;
    autoplay?: boolean | undefined;
    defaultMuted?: boolean | undefined;
    muted?: boolean | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    controlsTimeout?: number | undefined;
    disableControlsAutoHide?: boolean | undefined;
    disableFullscreen?: boolean | undefined;
    loop?: boolean | undefined;
    hideControlsOnStart?: boolean | undefined;
    endWithThumbnail?: boolean | undefined;
    disableSeek?: boolean | undefined;
    pauseOnPress?: boolean | undefined;
    fullScreenOnLongPress?: boolean | undefined;
    customStyles?: {
        wrapper?: StyleProp<ViewStyle> | undefined;
        video?: StyleProp<ViewStyle> | undefined;
        videoWrapper?: StyleProp<ViewStyle> | undefined;
        controls?: StyleProp<ViewStyle> | undefined;
        playControl?: StyleProp<ViewStyle> | undefined;
        controlButton?: StyleProp<ViewStyle> | undefined;
        controlIcon?: StyleProp<TextStyle> | undefined;
        playIcon?: StyleProp<TextStyle> | undefined;
        seekBar?: StyleProp<ViewStyle> | undefined;
        seekBarFullWidth?: StyleProp<ViewStyle> | undefined;
        seekBarProgress?: StyleProp<ViewStyle> | undefined;
        seekBarKnob?: StyleProp<ViewStyle> | undefined;
        seekBarKnobSeeking?: StyleProp<ViewStyle> | undefined;
        seekBarBackground?: StyleProp<ViewStyle> | undefined;
        thumbnail?: StyleProp<ImageStyle> | undefined;
        playButton?: StyleProp<ViewStyle> | undefined;
        playArrow?: StyleProp<TextStyle> | undefined;
    } | undefined;
    onStart?: (() => any) | undefined;
    onPlayPress?: (() => any) | undefined;
    onHideControls?: (() => any) | undefined;
    onShowControls?: (() => any) | undefined;
    onMutePress?: (() => any) | undefined;
}

export interface VideoPlayerState {
    isStarted: boolean;
    isPlaying: boolean;
    hasEnded: boolean;
    width: number;
    progress: number;
    isMuted: boolean;
    isControlsVisible: boolean;
    duration: number;
    isSeeking: boolean;
}

export default class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {
    constructor(props: object);

    private seekBarWidth: number;
    private wasPlayingBeforeSeek: boolean;
    private seekTouchStart: number;
    private seekProgressStart: number;

    private onLayout: (event: any) => any;
    private onStartPress: () => any;
    private onProgress: (event: any) => any;
    private onEnd: (event: any) => any;
    private onLoad: (event: any) => any;
    private onPlayPress: () => any;
    private onMutePress: () => any;
    private getSizeStyles: () => any;
    private hideControls: () => any;
    private showControls: () => any;
    private onToggleFullScreen: () => any;
    private onSeekBarLayout: (event: any) => any;
    private onSeekGrant: (event: any) => any;
    private onSeekRelease: () => any;
    private onSeek: (event: any) => any;

    seek: (t: number) => any;
    stop: () => any;
    pause: () => any;
    resume: () => any;
}
