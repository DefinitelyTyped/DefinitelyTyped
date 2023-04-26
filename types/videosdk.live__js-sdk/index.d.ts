// Type definitions for @videosdk.live/js-sdk 0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Rajan Surani <https://github.com/rajansurani>
//                 Ahmed Bhesaniya <https://github.com/ahmedbhesaniya97>
//                 Zujo Now <https://github.com/zujonow> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace VideoSDK {
    const Constants: {
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
     * Configure SDK with token.
     * @param token
     * - You can generate a token in two ways:
     *
     * 1. **Temporary Token** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the temporary token from there.
     * 2. **Server** : You can setup JWT in backend and make an API call to get the token from your server.
     * ---
     */
    function config(token: string): void;
    /**
     * @param meetingId -
     * - Unique Id of the meeting where that participant will be joining.
     *
     * - It will be in the format of xxx-yyy-zzz and will be generated using the [VideoSDK's Room API](https://docs.videosdk.live/api-reference/realtime-communication/create-room).
     * ---
     * @param name - Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.
     * ---
     * @param micEnabled - Whether mic of the participant will be on while joining the meeting. If it is set to false,
     * then mic of that participant will be disabled by default, but can be enabled or disabled later.
     * ---
     * @param webcamEnabled - Whether webcam of the participant will be on while joining the meeting. If it is set to false,
     * then webcam of that participant will be disabled by default, but can be enabled or disabled later.
     * ---
     * @param participantId - You can specify your custom participantId here.
     * ---
     * @param multiStream - Sets wheather to send multi resoultion streams while publishing video. Please refere thi link for more understanding
     * [What is multiStream ?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#what-is-multistream)
     * ---
     * @param maxResolution - You can specify your custom participantId here.
     * ---
     * @param mode -
     *
     * - There are 2 types of modes:
     *
     * - **CONFERENCE**: Both audio and video streams will be produced and consumed in this mode.
     *
     * - **VIEWER**: Audio and video streams will not be produced or consumed in this mode.
     *
     * - defaultValue : **CONFERENCE**
     *
     * ---
     *
     * @param customCameraVideoTrack - Set the initial custom video track using different encoding parameters, camera facing mode, and optimization mode.
     * ---
     * @param customMicrophoneAudioTrack - Set the initial custom audio track using different encoding parameters and optimization mode.
     * ---
     *
     */
    function initMeeting({
        meetingId,
        customCameraVideoTrack,
        customMicrophoneAudioTrack,
        autoConsume,
        preferredProtocol,
        mode,
        multiStream,
        participantId,
        name,
        micEnabled,
        webcamEnabled,
        maxResolution,
        chatEnabled,
        useSpartialLayerAnalytics,
    }: {
        meetingId: string;
        autoConsume?: boolean;
        preferredProtocol?: 'UDP_ONLY' | 'UDP_OVER_TCP';
        participantId?: string;
        name: string;
        micEnabled: boolean;
        webcamEnabled: boolean;
        chatEnabled?: boolean;
        maxResolution?: 'hd' | 'sd';
        customCameraVideoTrack?: MediaStream | undefined;
        customMicrophoneAudioTrack?: MediaStream | undefined;
        useSpartialLayerAnalytics?: boolean;
        mode?: 'CONFERENCE' | 'VIEWER';
        multiStream?: boolean;
    }): Meeting;
    /**
     * @param cameraId - It will be the id of the camera from which the video should be captured.
     * ---
     * @param encoderConfig - This will accept the resolution (height x width) of video you want to capture.
     * You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters)
     *
     * #### Example : `h360p_w640p`, `h720p_w1280p`, `h1080p_w1440p`
     * ---
     * @param facingMode - For Mobile browser It will specifiy whether to use front or back camera for the video track.
     *
     * #### Values : `front`, `environment`
     * ---
     * @param optimizationMode - It will specifiy the optimization mode for the video track being generated.
     *
     * #### Values : `motion`, `text`, `detail`
     *
     * ---
     * @param multiStream - It will specifiy if the stream should send multiple resolution layers or single resolution layer. Please refere thi link for more understanding
     * [What is multiStream ?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#what-is-multistream)
     * ---
     *
     * **Code Example**
     * ```js
     * import VideoSDK from "@videosdk.live/js-sdk";
     *
     *  let customTrack = await VideoSDK.createCameraVideoTrack({
     *    cameraId:"camera-id" // OPTIONAL
     *    optimizationMode: "motion", // "text" | "detail",  Default : "motion"
     *    encoderConfig: "h480p_w640p", // "h540p_w960p" | "h720p_w1280p" ... // Default : "h360p_w640p"
     *    facingMode: "environment", // "front",  Default : "environment"
     *    multiStream:true // false,  Default : true
     *  });
     * ```
     */
    function createCameraVideoTrack({
        cameraId,
        encoderConfig,
        facingMode,
        optimizationMode,
        multiStream,
    }: {
        cameraId?: string | undefined;
        encoderConfig?:
            | 'h90p_w160p'
            | 'h180p_w320p'
            | 'h216p_w384p'
            | 'h360p_w640p'
            | 'h540p_w960p'
            | 'h720p_w1280p'
            | 'h1080p_w1920p'
            | 'h1440p_w2560p'
            | 'h2160p_w3840p'
            | 'h120p_w160p'
            | 'h180p_w240p'
            | 'h240p_w320p'
            | 'h360p_w480p'
            | 'h480p_w640p'
            | 'h540p_w720p'
            | 'h720p_w960p'
            | 'h1080p_w1440p'
            | 'h1440p_w1920p'
            | undefined;
        facingMode?: 'front' | 'environment' | undefined;
        optimizationMode?: 'text' | 'motion' | 'detail' | undefined;
        multiStream?: boolean;
    }): Promise<MediaStream>;
    /**
     * @param encoderConfig - This will accept the  height & FPS of video you want to capture.
     * You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters)
     *
     * #### Example : `h360p_30fps`, `h720p_5fps`, `h720p_15fps`, `h1080p_15fps`, `h1080p_30fps`
     * ---
     * @param optimizationMode - It will specifiy the optimization mode for the video track being generated.
     *
     * #### Values : `motion`, `text`, `detail`
     * ---
     * @param withAudio - It will specifiy to use screen share with audio or not
     *
     * #### Values : `enable`, `disable`
     * ---
     *
     * **Code Example**
     * ```js
     * import VideoSDK from "@videosdk.live/js-sdk";
     *
     *  let customTrack = await VideoSDK.createCameraVideoTrack({
     *    optimizationMode: "motion", // "text" | "detail",  Default : "motion"
     *    encoderConfig: "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`
     *    withAudio:'enable' // `disable`,  Default : `disable`
     *  });
     * ```
     */
    function createScreenShareVideoTrack({
        encoderConfig,
        optimizationMode,
        withAudio,
    }: {
        encoderConfig?: 'h360p_30fps' | 'h720p_5fps' | 'h720p_15fps' | 'h1080p_15fps' | 'h1080p_30fps' | undefined;
        optimizationMode?: 'text' | 'motion' | 'detail' | undefined;
        withAudio?: 'enable' | 'disable';
    }): Promise<MediaStream>;

    /**
     * @param microphoneId - It will be the id of the mic from which the audio should be captured.
     * ---
     * @param encoderConfig - This will accept the voice profile you want to capture. You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters-1)
     *
     * #### Example : `speech_standard`, `high_quality`, `music_standard`,
     * ---
     * @param noiseConfig - You can provide different noise configuration
     * ---
     * @param noiseConfig.noiseSuppression - It is used to improve the quality of audio by removing background noise that can interfere with the clarity of speech.
     * ---
     * @param noiseConfig.echoCancellation - It is used to remove unwanted echoes from voice.
     * ---
     * @param noiseConfig.autoGainControl - It is used to maintain a consistent level of loudness or amplitude in a voice.
     * ---
     *
     * **Code Example**
     * ```js
     * import VideoSDK from "@videosdk.live/js-sdk";
     *
     * let customTrack = await VideoSDK.createMicrophoneAudioTrack({
     *  microphoneId : 'mic-id' // OPTIONAL
     *  encoderConfig: "speech_standard", // `high_quality` | `music_standard`,  Default : `speech_standard`
     *  noiseConfig: {
     *    noiseSuppression: true,
     *    echoCancellation: true,
     *    autoGainControl: true,
     *  },
     * });
     * ```
     */
    function createMicrophoneAudioTrack({
        noiseConfig,
        encoderConfig,
        microphoneId,
    }: {
        noiseConfig?:
            | {
                  echoCancellation: boolean;
                  autoGainControl: boolean;
                  noiseSuppression: boolean;
              }
            | undefined;
        encoderConfig?:
            | 'speech_low_quality'
            | 'speech_standard'
            | 'music_standard'
            | 'standard_stereo'
            | 'high_quality'
            | 'high_quality_stereo'
            | undefined;
        microphoneId?: string | undefined;
    }): Promise<MediaStream>;
}

import { Connection } from './connection';
import { ConnectionMeeting } from './connectionMeeting';
import { ConnectionParticipant } from './connectionParticipant';
import { Meeting } from './meeting';
import { Participant } from './participant';
import { Stream } from './stream';
export { Meeting, Participant, Connection, ConnectionMeeting, ConnectionParticipant, Stream };
export const ZujoSDK: typeof VideoSDK;
