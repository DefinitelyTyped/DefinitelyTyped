// Type definitions for react-native-video-player 0.10
// Project: https://github.com/cornedor/react-native-video-player.git
// Definitions by: Junseong Park <https://github.com/Kweiza>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { VideoProperties } from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface VideoPlayerProps {
    video?: { uri?: string, mainVer?: number, patchVer?: number } | number;
    thumbnail?: ImageSourcePropType;
    endThumbnail?: ImageSourcePropType;
    videoWidth?: number;
    videoHeight?: number;
    duration?: number;
    autoplay?: boolean;
    paused?: boolean;
    defaultMuted?: boolean;
    muted?: boolean;
    style?: StyleProp<ViewStyle>;
    controlsTimeout?: number;
    disableControlsAutoHide?: boolean;
    disableFullscreen?: boolean;
    loop?: boolean;
    resizeMode?: 'stretch' | 'contain' | 'cover' | 'none';
    hideControlsOnStart?: boolean;
    endWithThumbnail?: boolean;
    disableSeek?: boolean;
    pauseOnPress?: boolean;
    fullScreenOnLongPress?: boolean;
    customStyles?: {
        wrapper?: StyleProp<ViewStyle>;
        video?: StyleProp<ViewStyle>;
        videoWrapper?: StyleProp<ViewStyle>;
        controls?: StyleProp<ViewStyle>;
        playControl?: StyleProp<ViewStyle>;
        controlButton?: StyleProp<ViewStyle>;
        controlIcon?: StyleProp<TextStyle>;
        playIcon?: StyleProp<TextStyle>;
        seekBar?: StyleProp<ViewStyle>;
        seekBarFullWidth?: StyleProp<ViewStyle>;
        seekBarProgress?: StyleProp<ViewStyle>;
        seekBarKnob?: StyleProp<ViewStyle>;
        seekBarKnobSeeking?: StyleProp<ViewStyle>;
        seekBarBackground?: StyleProp<ViewStyle>;
        thumbnail?: StyleProp<ImageStyle>;
        playButton?: StyleProp<ViewStyle>;
        playArrow?: StyleProp<TextStyle>;
    };
    onEnd?: (event: any) => any;
    onProgress?: (event: any) => any;
    onLoad?: (event: any) => any;
    onStart?: () => any;
    onPlayPress?: () => any;
    onHideControls?: () => any;
    onShowControls?: () => any;
    onMutePress?: () => any;
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
