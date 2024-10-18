import { ReactElement } from "react";

export type VideoRecorderMimeTypes =
    | "video/webm;codecs=\"vp8|opus\""
    | "video/webm;codecs=h264"
    | "video/webm;codecs=vp9"
    | "video/webm"
    | "video/mp4";

export interface VideoActionsProps {
    isVideoInputSupported: boolean;
    isInlineRecordingSupported: boolean;
    thereWasAnError: boolean;
    isRecording: boolean;
    isCameraOn: boolean;
    streamIsReady: boolean;
    isConnecting: boolean;
    isRunningCountdown: boolean;
    countdownTime: number;
    timeLimit: number;
    showReplayControls: boolean;
    replayVideoAutoplayAndLoopOff: boolean;
    isReplayingVideo: boolean;
    useVideoInput: boolean;

    onTurnOnCamera?: () => any;
    onTurnOffCamera?: () => any;
    onOpenVideoInput?: () => any;
    onStartRecording?: () => any;
    onStopRecording?: () => any;
    onPauseRecording?: () => any;
    onResumeRecording?: () => any;
    onStopReplaying?: () => any;
    onConfirm?: () => any;
}

export interface ReactVideoRecorderProps {
    /** Whether or not to start the camera initially */
    isOnInitially?: boolean;
    /** Whether or not to display the video flipped (makes sense for user facing camera) */
    isFlipped?: boolean;
    /** Pass this if you want to force a specific mime-type for the video */
    mimeType?: VideoRecorderMimeTypes;
    /** How much time to wait until it starts recording (in ms) */
    countdownTime?: number;
    /** Use this if you want to set a time limit for the video (in ms) */
    timeLimit?: number;
    /** Use this if you want to show play/pause/etc. controls on the replay video */
    showReplayControls?: boolean;
    /** Use this to turn off autoplay and looping of the replay video. It is recommended to also showReplayControls in order to play */
    replayVideoAutoplayAndLoopOff?: boolean;
    /** Use this if you want to customize the constraints passed to getUserMedia() */
    constraints?: {
        audio: any;
        video: any;
    };
    chunkSize?: number;
    dataAvailableTimeout?: number;
    useVideoInput?: boolean;

    renderDisconnectedView?: (props: any) => ReactElement;
    renderLoadingView?: (props: any) => ReactElement;
    renderVideoInputView?: (props: any) => ReactElement;
    renderUnsupportedView?: (props: any) => ReactElement;
    renderErrorView?: (props: any) => ReactElement;
    renderActions?: (props: VideoActionsProps) => ReactElement;

    onCameraOn?: () => any;
    onTurnOnCamera?: () => any;
    onTurnOffCamera?: () => any;
    onStartRecording?: () => any;
    onStopRecording?: () => any;
    onPauseRecording?: () => any;
    onRecordingComplete?: (videoBlob: any) => void;

    onResumeRecording?: () => any;
    onOpenVideoInput?: () => any;
    onStopReplaying?: () => any;
    onError?: (error: Error) => any;
}

export const ReactVideoRecorder: React.FunctionComponent<ReactVideoRecorderProps>;
