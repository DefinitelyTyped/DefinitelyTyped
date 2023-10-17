import { LegacyRef } from "react";

export type PlayerReference = HTMLVideoElement & StaticPlayerInstanceMethods;

export type StateListener = (current: PlayerState, previous: PlayerState) => void;

export interface StaticPlayerInstanceMethods {
    /**
     * Get the redux State.
     */
    getState: () => PlayerState;
    /**
     * Play the video.
     */
    play: () => void;
    /**
     * Pause the video.
     */
    pause: () => void;
    /**
     * Change the video source and re-load the video
     */
    load: () => void;
    /**
     * Add a new text track to the video
     */
    addTextTrack: () => void;
    /**
     * Check if your browser can play different types of videos
     */
    canPlayType: () => void;
    /**
     * Seek video by time (seconds)
     */
    seek: (time: number) => void;
    /**
     * Jump forward x seconds
     */
    forward: (seconds: number) => void;
    /**
     * Jump back x seconds
     */
    replay: (seconds: number) => void;
    /**
     * Enter or exist full screen
     */
    toggleFullscreen: () => void;
    /**
     * Subscribe to the player state changes.
     */
    subscribeToStateChange: (listener: StateListener) => void;
}

export interface PlayerState {
    /**
     * Returns the URL of the current video
     */
    currentSrc: string;
    /**
     * Returns the length of the current video (in seconds)
     */
    duration: number;
    /**
     * Returns the current playback position in the video (in seconds)
     */
    currentTime: number;
    /**
     * Returns the current seeking position in the video (in seconds)
     */
    seekingTime: number;
    /**
     * Returns a TimeRanges object representing the buffered parts of the video
     */
    buffered: Record<any, any>;
    /**
     * Returns whether the player needs to buffer the next frame
     */
    waiting: boolean;
    /**
     * Returns whether the user is currently seeking in the video
     */
    seeking: boolean;
    /**
     * Returns whether the player has been paused
     */
    paused: boolean;
    /**
     * Returns whether the player has been paused by the player itself
     */
    autoPaused: boolean;
    /**
     * Returns whether the playback of the video has ended or not
     */
    ended: boolean;
    /**
     * Returns the speed of the video playback
     */
    playbackRate: number;
    /**
     * Returns whether the video is muted or not
     */
    muted: boolean;
    /**
     * Returns the volume of the video.
     */
    volume: number;
    /**
     * Returns the current ready state of the video
     */
    readyState: number;
    /**
     * Returns the current network state of the video
     */
    networkState: number;
    /**
     * Returns the volume of the video
     */
    videoWidth: number;
    /**
     * Returns the height of the video
     */
    videoHeight: number;
    /**
     * Returns whether the video has been started
     */
    hasStarted: boolean;
    /**
     * Returns whether the user is in activity.
     */
    userActivity: boolean;
    /**
     * Returns whether the player is in activity.
     */
    isActive: boolean;
    /**
     * Returns whether the player is in fullscreen.
     */
    isFullscreen: boolean;
    /**
     * Set the id of the video element.
     */
    videoId: string;
}

export interface PlayerActions {
    /**
     * Get the redux State.
     */
    getState: () => PlayerState;
    /**
     * Play the video.
     */
    play: () => void;
    /**
     * Pause the video.
     */
    pause: () => void;
    /**
     * Change the video source and re-load the video
     */
    load: () => void;
    /**
     * Add a new text track to the video
     */
    addTextTrack: () => void;
    /**
     * Check if your browser can play different types of videos
     */
    canPlayType: () => void;
    /**
     * Seek video by time (seconds)
     */
    seek: (time: number) => void;
    /**
     * Jump forward x seconds
     */
    forward: (seconds: number) => void;
    /**
     * Jump back x seconds
     */
    replay: (seconds: number) => void;
    /**
     * Enter or exist full screen
     */
    toggleFullscreen: () => void;
    /**
     * Subscribe to the player state changes.
     */
    subscribeToStateChange: (listener: StateListener) => void;
}

export interface PlayerProps {
    ref?: LegacyRef<PlayerReference> | undefined;
    /**
     * In fluid mode, it’s 100% wide all the time, the height will be
     * calculated by the video's ratio.
     */
    fluid?: boolean;
    /**
     * The width value of video, could be an number or percent or auto.
     * (This attribute is effective only if you set fluid as false)
     */
    width?: number;
    /**
     * The height value of video, could be an number or percent or auto.
     * (This attribute is effective only if you set fluid as false)
     */
    height?: number;
    /**
     * The URL of the video to embed. This is optional; you may instead
     * use the <source> element within the Player block to specify the
     * video to embed.
     */
    src?: string;
    /**
     * A URL indicating a poster frame to show until the user plays or
     * seeks. If this attribute isn't specified, nothing is displayed
     * until the first frame is available; then the first frame is shown
     * as the poster frame.
     */
    poster?: string;
    /**
     * This enumerated attribute is intended to provide a hint to the
     * browser about what the author thinks will lead to the best user
     * experience. It may have one of the following values:
     *
     * - none: indicates that the video should not be preloaded.
     * - metadata: indicates that only video metadata should be preloaded.
     * - auto: indicates that both video and audio should be preloaded.
     * (even if the user is not interacting with the video)
     */
    preload?: "none" | "metadata" | "auto";
    /**
     * A Boolean attribute which indicates the default setting of the audio
     * contained in the video. If set, the audio will be initially silenced.
     * Its default value is false, meaning that the audio will be played when
     * the video is played.
     */
    muted?: boolean;
    /**
     * [iOS only] Determines whether HTML5 videos play inline or use the native
     * full-screen controller.
     */
    playsInline?: boolean;
    /**
     * The aspect ratio is the width of the video divided by its height.
     * Possible values:
     *
     * - auto
     * - 16:9
     * - 4:3
     */
    aspectRatio?: string;
    /**
     * If specified, the video automatically begins to play back as soon as
     * it can do so without stopping to finish loading the data.
     */
    autoPlay?: boolean;

    /**
     * Seek the Video at A Specific Time On Load
     */
    startTime?: number;

    children?: React.ReactNode;
}

export interface ShortcutItem {
    /**
     * The key code for the shortcut.
     */
    keyCode: number;
    /**
     * Defines if the action fires when the CTRL
     * key is pressed.
     */
    ctrl: boolean;
    /**
     * The function to control the player when
     * the shortcut is pressed.
     */
    handle: (state: PlayerState, actions: PlayerActions) => void;
}

export interface ShortcutProps {
    /**
     * Allow click to play/pause, default: `true`
     */
    clickable?: boolean;
    /**
     * Allow double click to toggle fullscreen state, default: `true`
     */
    dblclickable?: boolean;
    /**
     * Add your own shortcuts
     */
    shortcuts?: ShortcutItem[];
}

export interface PosterImageProps {
    /**
     * A URL indicating a poster frame to show until the user plays or
     * seeks. If this attribute isn't specified, nothing is displayed
     * until the first frame is available; then the first frame is shown
     * as the poster frame.
     */
    poster: string;
}

export interface ControlBarProps {
    /**
     * Hide the control bar automatically after the player is inactive,
     * default: `true`
     */
    autoHide?: boolean;
    /**
     * The waiting time for auto hide after player is inactive (in milliseconds),
     * default: `3000`
     */
    autoHideTime?: number;
    /**
     * Do not render default controls, only use custom ones provided as children
     * of `<ControlBar>`
     */
    disableDefaultControls?: boolean;
    /**
     * Do not render the control bar if set it to true, default: `false`
     */
    disableCompletely?: boolean;

    className?: string;

    children?: React.ReactNode;
}

export interface ReplayControlProps {
    /**
     * How many seconds to go forward, default: `10`
     */
    seconds?: 5 | 10 | 30;
}

export interface BigPlayButtonProps {
    /**
     * Determines the position of the big play button.
     */
    position?: "center" | "left" | "left-top" | "left-bottom" | "right" | "right-top" | "right-bottom";
    className?: string;
}

export interface ForwardControlProps {
    /**
     * How many seconds to go forward, default: `10`
     */
    seconds?: 5 | 10 | 30;
}

export interface VolumeMenuButtonProps {
    /**
     * The direction where Volume Bar popup, default: `false`
     */
    vertical?: boolean;
}

export interface PlaybackRateMenuButtonProps {
    /**
     * The direction where Volume Bar popup, default:
     * `[2, 1.5, 1.25, 1, 0.5, 0.25]`
     */
    rates?: number[];
}

/**
 * ### Component - Player
 *
 * Player is the root component of the Video-React player. All the others
 * components should be in this component.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/player
 */
export function Player(props: PlayerProps): JSX.Element;

/**
 * ### Component - Shortcut
 *
 * Using keyboard shortcut to control the player.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/shortcut
 */
export function Shortcut(props: ShortcutProps): JSX.Element;

/**
 * ### Component - BigPlayButton
 *
 * Initial play button. Shows before the video has played. The hiding of the
 * big play button is done via CSS and player states.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/big-play-button
 */
export function BigPlayButton(props: BigPlayButtonProps): JSX.Element;

/**
 * ### Component - PosterImage
 *
 * The PosterImage specifies an image to be shown while the video is downloading,
 * or until the user hits the play button. If this is not included, the first
 * frame of the video will be used instead.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/poster-image
 */
export function PosterImage(props: PosterImageProps): JSX.Element;

/**
 * ### Component - LoadingSpinner
 *
 * There would be a loading spinner to display before the video is loaded.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/loading-spinner
 */
export function LoadingSpinner(): JSX.Element;

/**
 * ### Component - ControlBar
 *
 * The HTML5 video's control bar is hidden, the player offers a customizable
 * control bar to allow the user to control video playback, including volume,
 * seeking, and pause/resume playback.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/control-bar
 */
export function ControlBar(props: ControlBarProps): JSX.Element;

/**
 * ### Component - PlayToggle
 *
 * A button component to toggle between play and pause.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/play-toggle
 */
export function PlayToggle(): JSX.Element;

/**
 * ### Component - ReplayControl
 *
 * A button in control bar to go forward 5/10/30 seconds.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/replay-control
 */
export function ReplayControl(props: ReplayControlProps): JSX.Element;

/**
 * ### Component - VolumeMenuButton
 *
 * A button in control bar to go forward 5/10/30 seconds.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/volume-menu-button
 */
export function ForwardControl(props: ForwardControlProps): JSX.Element;

/**
 * ### Component - VolumeMenuButton
 *
 * Button for volume popup.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/volume-menu-button
 */
export function VolumeMenuButton(props: VolumeMenuButtonProps): JSX.Element;

export interface ClosedCaptionButtonProps extends ControlBarControlProps {
    actions?: any;
    offMenuText?: string;
    showOffMenu?: boolean;
    kinds?: string[];
}
/**
 * ### Component - ClosedCaptionButton
 *
 * There is an example on how to add a ClosedCaption button component
 * into Video-React Player:
 *
 * #### Reference
 *
 * https://video-react.js.org/components/closed-caption-button
 */
export function ClosedCaptionButton(props: ClosedCaptionButtonProps): JSX.Element;

/**
 * ### Component - PlaybackRateMenuButton
 *
 * The dropdown menu to control the playback rates.
 *
 * #### Reference
 *
 * https://video-react.js.org/components/playback-rate-menu-button
 */
export function PlaybackRateMenuButton(props: PlaybackRateMenuButtonProps): JSX.Element;

/**
 * CurrentTimeDisplay, TimeDivider, DurationDisplay, ProgressControl
 *
 * Components that can be optionally included in the ControlBar to customize it.
 *
 * Reference: https://video-react.js.org/customize/enable-disable-components/
 */

export interface ControlBarControlProps {
    order?: number;
    className?: string;
    player?: typeof Player;
}

export function CurrentTimeDisplay(props: ControlBarControlProps): JSX.Element;

export function DurationDisplay(props: ControlBarControlProps): JSX.Element;

export function ProgressControl(props: ControlBarControlProps): JSX.Element;

export interface TimeDividerProps extends ControlBarControlProps {
    separator?: string;
}
export function TimeDivider(props: TimeDividerProps): JSX.Element;

export interface FullScreenToggleProps extends ControlBarControlProps {
    actions: any;
}
export function FullscreenToggle(props: FullScreenToggleProps): JSX.Element;
