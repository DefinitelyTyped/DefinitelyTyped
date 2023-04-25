// Type definitions for @videosdk.live/js-sdk 0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Rajan Surani <https://github.com/zujonow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="../webrtc" />

interface MeetingData{
    meetingId: string,
autoConsume?: boolean,
preferredProtocol?: "UDP_ONLY" | "UDP_OVER_TCP",
participantId?:string,
name:string,
micEnabled:boolean,
webcamEnabled:boolean,
chatEnabled?: boolean,
maxResolution?:"hd" | "sd",
customCameraVideoTrack?: MediaStream | undefined
customMicrophoneAudioTrack?: MediaStream | undefined,
useSpartialLayerAnalytics?: boolean
mode?: "CONFERENCE" | "VIEWER",
multiStream?: boolean
}

export class VideoSDK {
    static Constants: {
        errors: {
            INVALID_API_KEY: number;
            INVALID_TOKEN: number;
            INVALID_MEETING_ID: number;
            INVALID_PARTICIPANT_ID: number;
            DUPLICATE_PARTICIPANT: number;
            ACCOUNT_DEACTIVATED: number;
            ACCOUNT_DISCONTINUED: number;
            INVALID_PERMISSIONS: number;
            MAX_PARTCIPANT_REACHED: number;
            MAX_SPEAKER_REACHED: number;
            START_RECORDING_FAILED: number;
            STOP_RECORDING_FAILED: number;
            START_LIVESTREAM_FAILED: number;
            STOP_LIVESTREAM_FAILED: number;
            INVALID_LIVESTREAM_CONFIG: number;
            START_HLS_FAILED: number;
            STOP_HLS_FAILED: number;
            RECORDING_FAILED: number;
            LIVESTREAM_FAILED: number;
            HLS_FAILED: number;
            ERROR_GET_VIDEO_MEDIA: number;
            ERROR_GET_AUDIO_MEDIA: number;
            ERROR_GET_DISPLAY_MEDIA: number;
            ERROR_GET_VIDEO_MEDIA_PERMISSION_DENIED: number;
            ERROR_GET_AUDIO_MEDIA_PERMISSION_DENIED: number;
            ERROR_GET_DISPLAY_MEDIA_PERMISSION_DENIED: number;
        };
        recordingEvents: {
            RECORDING_STARTING: string;
            RECORDING_STARTED: string;
            RECORDING_STOPPING: string;
            RECORDING_STOPPED: string;
        };
        livestreamEvents: {
            LIVESTREAM_STARTING: string;
            LIVESTREAM_STARTED: string;
            LIVESTREAM_STOPPING: string;
            LIVESTREAM_STOPPED: string;
        };
        hlsEvents: {
            HLS_STARTING: string;
            HLS_STARTED: string;
            HLS_PLAYABLE: string;
            HLS_STOPPING: string;
            HLS_STOPPED: string;
        };
        modes: {
            CONFERENCE: string;
            VIEWER: string;
        };
    };
    /**
     * Configure SDK with apiKey.
     * @param {string} apiKey
     */
    static config(apiKey: string): void;
    /**
     * Initialize meeting and local video stream.
     * @param {{
     *  meetingId: string,
     *  autoConsume?: boolean,
     *  preferredProtocol?: "UDP_ONLY" | "UDP_OVER_TCP",
     *  participantId?:string,
     *  name:string,
     *  micEnabled:boolean,
     *  webcamEnabled:boolean,
     *  chatEnabled?: boolean,
     *  maxResolution?:"hd" | "sd",
     *  customCameraVideoTrack?: MediaStream | undefined
     *  customMicrophoneAudioTrack?: MediaStream | undefined,
     *  useSpartialLayerAnalytics?: boolean
     *  mode?: "CONFERENCE" | "VIEWER",
     *  multiStream?: boolean
     * }}
     * @returns {Meeting}
     */
    static initMeeting({ meetingId, customCameraVideoTrack, customMicrophoneAudioTrack, autoConsume, preferredProtocol, mode, multiStream, participantId, name, micEnabled, webcamEnabled, maxResolution, chatEnabled, useSpartialLayerAnalytics, }: {
        meetingId: string;
        autoConsume?: boolean;
        preferredProtocol?: "UDP_ONLY" | "UDP_OVER_TCP";
        participantId?: string;
        name: string;
        micEnabled: boolean;
        webcamEnabled: boolean;
        chatEnabled?: boolean;
        maxResolution?: "hd" | "sd";
        customCameraVideoTrack?: MediaStream | undefined;
        customMicrophoneAudioTrack?: MediaStream | undefined;
        useSpartialLayerAnalytics?: boolean;
        mode?: "CONFERENCE" | "VIEWER";
        multiStream?: boolean;
    }): Meeting;
    /**
     *
     * For media API refer this doc
     * https://www.w3.org/TR/mediacapture-streams/#def-constraint-sampleRate
     */
    /**
     * @param cameraId
     * @param encoderConfig 
     *      
     */
    static createCameraVideoTrack({ cameraId, encoderConfig, facingMode, optimizationMode, multiStream, }: {
        cameraId?: string | undefined;
        encoderConfig?: "h90p_w160p" | "h180p_w320p" | "h216p_w384p" | "h360p_w640p" | "h540p_w960p" | "h720p_w1280p" | "h1080p_w1920p" | "h1440p_w2560p" | "h2160p_w3840p" | "h120p_w160p" | "h180p_w240p" | "h240p_w320p" | "h360p_w480p" | "h480p_w640p" | "h540p_w720p" | "h720p_w960p" | "h1080p_w1440p" | "h1440p_w1920p" | undefined;
        facingMode?: "front" | "environment" | undefined;
        optimizationMode?: "text" | "motion" | "detail" | undefined;
        multiStream?: boolean;
    }): Promise<MediaStream>;
    /**
     * @param {{
     *  encoderConfig?: "h360p_30fps" | "h720p_5fps" | "h720p_15fps"
     *       | "h1080p_15fps" | "h1080p_30fps" | undefined,
     *  optimizationMode?: "text"| "motion" | "detail" | undefined
     *  withAudio?: "enable" | "disable"
     * }}
     */
    static createScreenShareVideoTrack({ encoderConfig, optimizationMode, withAudio, }: {
        encoderConfig?: "h360p_30fps" | "h720p_5fps" | "h720p_15fps" | "h1080p_15fps" | "h1080p_30fps" | undefined;
        optimizationMode?: "text" | "motion" | "detail" | undefined;
        withAudio?: "enable" | "disable";
    }): Promise<MediaStream>;
    /**
     * @param {{
     *  noiseConfig?: {
     *    echoCancellation: boolean,
     *    autoGainControl: boolean,
     *    noiseSuppression: boolean
     *  } | undefined,
     *  encoderConfig?: "speech_low_quality"
     *     | "speech_standard" | "music_standard"
     *     | "standard_stereo" | "high_quality"
     *     | "high_quality_stereo" | undefined
     *  microphoneId?: string | undefined
     * }}
     */
    static createMicrophoneAudioTrack({ noiseConfig, encoderConfig, microphoneId, }: {
        noiseConfig?: {
            echoCancellation: boolean;
            autoGainControl: boolean;
            noiseSuppression: boolean;
        } | undefined;
        encoderConfig?: "speech_low_quality" | "speech_standard" | "music_standard" | "standard_stereo" | "high_quality" | "high_quality_stereo" | undefined;
        microphoneId?: string | undefined;
    }): Promise<MediaStream>;
}

import {Meeting} from "./meeting";
export const ZujoSDK: typeof VideoSDK;