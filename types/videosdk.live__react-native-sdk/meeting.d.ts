import { MediaStream } from './mediaStream';

export class Meeting {
    /**
     * @description
     *  This represents the meetingId
     */
    id: string;
    /**
     * @description
     *  This represents the `participantId` of the active speaker in the meeting
     */
    activeSpeakerId?: string;
    /**
     * @description
     *  This represents the `participantId` of the active presenter in the meeting
     */
    activePresenterId?: string;
    /**
     *  @description
     *  This represents the `participantId` of the main participant in the meeting
     */
    mainParticipantId: string;
    /**
     * @deprecated
     */
    connections: Map<string, Connection>;
    /**
     * @description
     *  These represents the `Participant` object for the local participant
     */
    localParticipant: Participant;
    /**
     * @description
     *  These represents the Map of all the Participant objects except local participant
     */
    participants: Map<string, Participant>;
    /**
     * @description These represents the current state of the meeting Livestream
     */
    livestreamState: 'LIVESTREAM_STOPPED' | 'LIVESTREAM_STARTING' | 'LIVESTREAM_STARTED' | 'LIVESTREAM_STOPPING';
    /**
     * @description These represents the current state of the meeting recording
     */
    recordingState: 'RECORDING_STOPPED' | 'RECORDING_STARTING' | 'RECORDING_STARTED' | 'RECORDING_STOPPING';
    /**
     * @description These represents the current state of the meeting HLS
     *
     */
    hlsState: 'HLS_STOPPED' | 'HLS_STARTING' | 'HLS_STARTED' | 'HLS_STOPPING';
    /**
     * @description These object will provide the URLs to play the HLS streams
     */
    hlsUrls: {
        downstreamUrl?: string;
        playbackHlsUrl?: string;
        livestreamUrl?: string;
    };
    /**
     * @description These object will contain all the messages send using the `sendChatMessage` method
     */
    messages: Array<{
        message: string;
        senderId: string;
        senderName: string;
        timestamp: Date;
        topic: string;
    }>;

    /**
     * @description These method is used to join the meeting
     */
    join(): void;

    /**
     * @description These method is used to change the participant mode between CONFERENCE and VIEWER
     */
    changeMode(mode: 'CONFERENCE' | 'VIEWER'): void;

    /**
     * @description These method is used to leave the meeting for local participant
     */
    leave(): void;

    /**
     * @description These method is used to end the meeting for all participants
     */
    end(): void;

    /**
     * @param participantId `participantId` for which entry is to be responed
     * @param decision `true` if the participant is allowed to join the meeting else `false`
     */
    respondEntry(participantId: string, decision: boolean): void;
    /**
     * @description returns all the pinned participants in the meeting
     */
    get pinnedParticipants(): Map<string, Participant>;

    /**
     * @description Mute the mic of local participant and stop broadcasting audio
     */
    muteMic(): void;

    /**
     * @param customAudioTrack You can pass your own custom audio track here.
     * To learn more checkour this [reference](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-audio-track)
     * @description unmute the mic of local participant and start broadcasting audio
     */
    unmuteMic(customAudioTrack?: MediaStream): void;

    /**
     *
     * @description This method is used to stop boradcasting the video to other participants
     */
    disableWebcam(): void;

    /**
     * @param customVideoTrack You can pass your own custom video track here.
     * To learn more checkour this [reference](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)
     * @description This method will turn on the webcam of local participant and start broadcasting video
     */
    enableWebcam(customVideoTrack?: MediaStream): void;
    /**
     * @description This method is used to stop boradcasting the screenshare to other participants
     */
    disableScreenShare(): void;
    /**
     * @param customScreenSharingTrack You can pass your own custom screen share track here.
     * To learn more checkour this [reference](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-screen-share-track)
     * @description This method will start broadcasting participants screen share
     *
     */
    enableScreenShare(customScreenSharingTrack?: MediaStream): void;

    /**
     * @deprecated
     * @param text Message which is to be send to all participants in th meeting
     */
    sendChatMessage(text: string): void;

    /**
     * @param webhookUrl
     *         Webhook URL which will be called by VideoSDK when the recording state gets changed
     * @param awsDirPath?
     *          awsDirPath represents the Directory you want to store your recording if you have configured your own S3 storage
     *
     * @param config Config can be used to configure the HLS stream
     * @param config.layout.type These represents the layout which is to used in the HLS
     * @param config.layout.priority These defines the priority of participants to be considered while composing HLS
     * @param config.layout.gridSize These defines the maximum number of participants in the grid
     * @param config.theme These defines the color theme of the HLS livestream
     * @param config.mode These defines the mode of the HLS livestream as only audio or vidoe and audio both
     * @param config.quality These defines the quality of the HLS livestream
     */
    startRecording(
        webhookUrl: string,
        awsDirPath: string,
        config: {
            layout: {
                type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
                priority: 'SPEAKER' | 'PIN';
                gridSize: number;
            };
            theme: 'DARK' | 'LIGHT' | 'DEFAULT';
            mode: 'video-and-audio' | 'audio';
            quality: 'low' | 'med' | 'high';
        },
    ): void;

    /**
     * @description This method is used to stop the meeting recording
     */
    stopRecording(): void;

    /**
     * These method is used to start the meeting RTMP to provided output
     * @param outputs These defines the array of outputs to which the RTMP has to be broadcasted
     * @param config Config can be used to configure the HLS stream
     * @param config.layout.type These represents the layout which is to used in the HLS
     * @param config.layout.priority These defines the priority of participants to be considered while composing HLS
     * @param config.layout.gridSize These defines the maximum number of participants in the grid
     * @param config.theme These defines the color theme of the RTMP livestream
     */
    startLivestream(
        outputs: Array<{
            url: string;
            streamKey: string;
        }>,
        config?: {
            layout: {
                type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
                priority: 'SPEAKER' | 'PIN';
                gridSize: number;
            };
            theme: 'DARK' | 'LIGHT' | 'DEFAULT';
        },
    ): void;

    /**
     * @description This method is used to stop the meeting livestream
     */
    stopLivestream(): void;

    /**
     * These method is used to start the meeting HLS
     * @param config Config can be used to configure the HLS stream
     * @param config.layout.type These represents the layout which is to used in the HLS
     * @param config.layout.priority These defines the priority of participants to be considered while composing HLS
     * @param config.layout.gridSize These defines the maximum number of participants in the grid
     * @param config.theme These defines the color theme of the HLS livestream
     * @param config.mode These defines the mode of the HLS livestream as only audio or vidoe and audio both
     * @param config.quality These defines the quality of the HLS livestream
     */
    startHls(config?: {
        layout: {
            type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
            priority: 'SPEAKER' | 'PIN';
            gridSize: number;
        };
        theme: 'DARK' | 'LIGHT' | 'DEFAULT';
        mode: 'video-and-audio' | 'audio';
        quality: 'low' | 'med' | 'high';
    }): Promise<void>;

    /**
     * @description This method is used to stop the meeting HLS
     */
    stopHls(): void;

    /**
     * @description This method returns all the available mics
     */
    getMics(): Promise<
        Array<{
            deviceId: string;
            label: string;
        }>
    >;

    /**
     * @description This method returns all the available webcams
     */
    getWebcams(): Promise<
        Array<{
            deviceId: string;
            label: string;
            facingMode: 'front' | 'environment';
        }>
    >;

    /**
     *
     * @param object These can be the  `deviceId` to which the mic input has to be changed or
     * you can pass the audio stream to this method which will be used for the audio broadcast
     */
    changeMic(object: string | MediaStream): void;

    /**
     *
     * @param object These can be the  `deviceId` to which the webcam input has to be changed or
     * you can pass the video stream to this method which will be used for the video broadcast
     */
    changeWebcam(object: string | MediaStream): void;

    /**
     * @param stream This method will be used to replace the provided stream with current webcam stream
     */
    replaceWebcamStream(stream: MediaStream): void;

    /**
     *
     * @param quality This method will be used set the webcam quality to be used.
     */
    setWebcamQuality(quality: 'low' | 'med' | 'high'): void;

    /**
     * Used for internal purpose
     */
    startWhiteboard(): void;

    /**
     * Used for internal purpose
     */
    stopWhiteboard(): void;

    /**
     * @deprecated
     * @param options
     */
    startVideo({ link }: { link: string }): void;
    /**
     * @deprecated
     */
    stopVideo(): void;
    /**
     * @deprecated
     */
    resumeVideo(): void;
    refreshConnection(): void;
    /**
     * @deprecated
     * @param options
     */
    pauseVideo({ currentTime }: { currentTime: number }): void;
    /**
     * @deprecated
     * @param options
     */
    seekVideo({ currentTime }: { currentTime: number }): void;
    pubSub: {
        /**
         * Publish message to a topic
         *
         * @param topic Topic to which the message will be published
         * @param message This will be the actual message which has to be send
         * @param options This will define other options like `persist` which will decide if the message has to be stored or not
         */
        publish: (
            topic: string,
            message: string,
            options: {
                persist: boolean;
            },
        ) => Promise<void>;
        /**
         * Subscribe to message on a topic
         *
         * @param topic Topic to which you want to subscribe
         * @param callback Callback function which will be triggered when a new message is received
         */
        subscribe: (
            topic: string,
            callback: (message: {
                id: string;
                message: string;
                senderId: string;
                senderName: string;
                timestamp: string;
                topic: string;
            }) => void,
        ) => Promise<
            Array<{
                id: string;
                message: string;
                senderId: string;
                senderName: string;
                timestamp: string;
                topic: string;
            }>
        >;
        /**
         * Unsubscribe from messages on a topic
         *
         * @param topic Topic to which you want to stop getting message for
         * @param callback Callback function which was passed which subscribing to the topic
         */
        unsubscribe: (
            topic: string,
            callback: (message: {
                id: string;
                message: string;
                senderId: string;
                senderName: string;
                timestamp: string;
                topic: string;
            }) => void,
        ) => Promise<void>;
    };
    /**
     * @deprecated
     * @param options
     */
    connectTo({ meetingId, payload }: { meetingId: string; payload: string }): Promise<void>;
    /**
     * Add event listener
     * @param eventType Event name to which you want to subscribe.
     * @param listener Callback function which will be triggered when the event happens
     */
    on(
        eventType:
            | 'participant-joined'
            | 'participant-left'
            | 'speaker-changed'
            | 'presenter-changed'
            | 'main-participant-changed'
            | 'entry-requested'
            | 'entry-responded'
            | 'recording-started'
            | 'recording-stopped'
            | 'livestream-started'
            | 'livestream-stopped'
            | 'hls-started'
            | 'hls-stopped'
            | 'stream-enabled'
            | 'stream-disabled'
            | 'whiteboard-started'
            | 'whiteboard-stopped'
            | 'meeting-joined'
            | 'meeting-left'
            | 'video-state-changed'
            | 'video-seeked'
            | 'mic-requested'
            | 'webcam-requested'
            | 'pin-state-changed'
            | 'connection-open'
            | 'connection-close'
            | 'switch-meeting',
        listener: (data: any) => void,
    ): void;
    /**
     * Remove event listener
     * @param eventType Event name to which you want to unsubscribe.
     * @param listener Callback function which was passed while subscribing to the event
     */
    off(
        eventType:
            | 'participant-joined'
            | 'participant-left'
            | 'speaker-changed'
            | 'presenter-changed'
            | 'main-participant-changed'
            | 'entry-requested'
            | 'entry-responded'
            | 'recording-started'
            | 'recording-stopped'
            | 'livestream-started'
            | 'livestream-stopped'
            | 'hls-started'
            | 'hls-stopped'
            | 'stream-enabled'
            | 'stream-disabled'
            | 'whiteboard-started'
            | 'whiteboard-stopped'
            | 'meeting-joined'
            | 'meeting-left'
            | 'video-state-changed'
            | 'video-seeked'
            | 'mic-requested'
            | 'webcam-requested'
            | 'pin-state-changed'
            | 'connection-open'
            | 'connection-close'
            | 'switch-meeting',
        listener: (data: any) => void,
    ): void;
}

import { Participant } from './participant';
import { Connection } from './connection';
