export class Meeting {
    /**
     * @type {string}
     * @description
     *  This represents the meetingId
     */
    readonly id: string;
    /**
     * @type {string | undefined}
     * @description
     *  This represents the `participantId` of the active speaker in the meeting
     */
    readonly activeSpeakerId?: string;
    /**
     * @type {string | undefined}
     * @description
     *  This represents the `participantId` of the active presenter in the meeting
     */
    readonly activePresenterId?: string;
    /**
     * @type {string}
     */
    readonly mainParticipantId: string;
    /**
     * @type {Map<string, Connection>}
     */
    readonly connections: Map<string, Connection>;
    /**
     * @type {Participant}
     * @description
     *  These represents the `Participant` object for the local participant
     */
    readonly localParticipant: Participant;
    /**
     * @type {Map<string, Participant>}
     * @description
     *  These represents the Map of all the Participant objects except local participant
     */
    readonly participants: Map<string, Participant>;
    /**
     * @type {string}
     * @description These represents the current state of the meeting Livestream
     */
    readonly livestreamState: "LIVESTREAM_STOPPED" | "LIVESTREAM_STARTING"| "LIVESTREAM_STARTED" | "LIVESTREAM_STOPPING";
    /**
     * @type {string}
     * @description These represents the current state of the meeting recording
     */
    readonly recordingState:  "RECORDING_STOPPED" | "RECORDING_STARTING"| "RECORDING_STARTED" | "RECORDING_STOPPING";
    /**
     * @type {string}
     * @description These represents the current state of the meeting HLS
     * 
     */
    readonly hlsState:   "HLS_STOPPED" | "HLS_STARTING"| "HLS_STARTED" | "HLS_STOPPING";
    /**
     * @type {Object}
     * @description These object will provide the URLs to play the HLS streams
     */
    readonly hlsUrls: {
        downstreamUrl?: string, 
        playbackHlsUrl?: string,
        livestreamUrl?: string 
    };
    /**
     * @type {Object}
     * @description These object will contain all the messages send using the `sendChatMessage` method
     */
    messages: {
        message: string,
        senderId: string,
        senderName: string,
        timestamp: Date,
        topic: string,
    }[];

    /**
     * @description These method is used to join the meeting
     */
    join(): void;

    /**
     * @description These method is used to change the participant mode between CONFERENCE and VIEWER
     */
    changeMode(mode: "CONFERENCE" | "VIEWER"): void;

    /**
     * @description These method is used to leave the meeting for local participant
     */
    leave(): void;

    /**
     * @description These method is used to end the meeting for all participants
     */
    end(): void;

    /**
     * @param {string} participantId `participantId` for which entry is to be responed
     * @param {boolean} decision `true` if the participant is allowed to join the meeting else `false`
     */
    respondEntry(participantId: string, decision: boolean): void;
    /**
     * @returns {Map<string, Participant>}
     * @description returns all the pinned participants in the meeting
     */
    get pinnedParticipants(): Map<string, Participant>;

    /**
     * @description Mute the mic of local participant and stop broadcasting audio
     */
    muteMic(): void;
    /**
     * @param {MediaStream} customAudioTrack 
     * @description unmute the mic of local participant and start broadcasting audio
     * 
     */
    unmuteMic(customAudioTrack?: MediaStream | undefined ): void;
    /**
     *
     * @param {MediaStream | undefined} customAudioTrack?
     * @returns
     */
    disableWebcam(): void;
    /**
     * @param {MediaStream | undefined} customVideoTrack?
     */
    enableWebcam(customVideoTrack?: MediaStream | undefined): void;
    /**
     * @param {MediaStream | undefined} customVideoTrack?
     */
    disableScreenShare(): void;
    /**
     *  @param {MediaStream | undefined}customScreenSharingTrack?
     */
    enableScreenShare(customScreenSharingTrack?: MediaStream | undefined): void;
    /**
     *  @param {MediaStream | undefined}customScreenSharingTrack?
     */
    /**
     * @deprecated
     * @param {string} text
     */
    sendChatMessage(text: string): void;
    /**
     * @param {string} webhookUrl
     *         Webhook URL which will be called by VideoSDK when the recording state gets changed
     * @param {string} awsDirPath?
     * @param {{layout: { type: "GRID" | "SPOTLIGHT" | "SIDEBAR" , priority: "SPEAKER" | "PIN", gridSize: number}}} config?
     */
    startRecording(webhookUrl: string, awsDirPath: string, config: {
        layout: {
            type: "GRID" | "SPOTLIGHT" | "SIDEBAR";
            priority: "SPEAKER" | "PIN";
            gridSize: number;
        };
    }): void;
    stopRecording(): void;
    /**
     * @param {{layout: { type: "GRID" | "SPOTLIGHT" | "SIDEBAR" , priority: "SPEAKER" | "PIN", gridSize: number}}} config?
     * @param {Array<{url : string, streamKey: string}>} outputs
     */
    startLivestream(outputs: Array<{
        url: string;
        streamKey: string;
    }>, config: {
        layout: {
            type: "GRID" | "SPOTLIGHT" | "SIDEBAR";
            priority: "SPEAKER" | "PIN";
            gridSize: number;
        };
    }): void;
    stopLivestream(): void;
    /**
     * @param {{layout: { type: "GRID" | "SPOTLIGHT" | "SIDEBAR" , priority: "SPEAKER" | "PIN", gridSize: number}}} config?
     */
    startHls(config: {
        layout: {
            type: "GRID" | "SPOTLIGHT" | "SIDEBAR";
            priority: "SPEAKER" | "PIN";
            gridSize: number;
        };
    }): Promise<void>;
    stopHls(): void;
    getMics(): Promise<{
        deviceId: string;
        label: string;
    }[]>;
    getWebcams(): Promise<{
        deviceId: string;
        label: string;
        facingMode: "front" | "environment";
    }[]>;
    /**
     *
     * @param {string | MediaStream } object
     */
    changeMic(object: string | MediaStream): void;
    /**
     *
     * @param {string | MediaStream } object
     */
    changeWebcam(object: string | MediaStream): void;
    /**
     *
     * @param { MediaStream } stream
     */
    replaceWebcamStream(stream: MediaStream): void;
    /**
     *
     * @param {"low" | "med" | "high"} quality
     */
    setWebcamQuality(quality: "low" | "med" | "high"): void;
    startWhiteboard(): void;
    stopWhiteboard(): void;
    /**
     *
     * @param {{link: string}} options
     */
    startVideo({ link }: {
        link: string;
    }): void;
    stopVideo(): void;
    resumeVideo(): void;
    refreshConnection(): void;
    /**
     *
     * @param {{currentTime: number}} options
     */
    pauseVideo({ currentTime }: {
        currentTime: number;
    }): void;
    /**
     *
     * @param {{currentTime: number}} options
     */
    seekVideo({ currentTime }: {
        currentTime: number;
    }): void;
    pubSub: {
        /**
         * Publish message to a topic
         *
         * @param {String} topic
         * @param {String} message
         * @param {{ persist: boolean }} options
         * @param {Object} payload
         */
        publish: (topic: string, message: string, options: {
            persist: boolean;
        }, payload: any) => Promise<void>;
        /**
         * Subscribe to message on a topic
         *
         * @param {String} topic
         * @param {Function} callback
         */
        subscribe: (topic: string, callback: Function) => Promise<any>;
        /**
         * Unsubscribe from messages on a topic
         *
         * @param {String} topic
         * @param {Function} callback
         */
        unsubscribe: (topic: string, callback: Function) => Promise<void>;
    };
    /**
     *
     * @param {{meetingId: string, payload: string}} options
     */
    connectTo({ meetingId, payload }: {
        meetingId: string;
        payload: string;
    }): Promise<void>;
    /**
     * Add event listener
     * @param { EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_SPEAKER_CHANGED | EV_PRESENTER_CHANGED | EV_MAIN_PARTICIPANT_CHANGED | EV_ENTRY_REQUESTED | EV_ENTRY_RESPONDED |       EV_RECORDING_STARTED | EV_RECORDING_STOPPED |      EV_LIVESTREAM_STARTED | EV_LIVESTREAM_STOPPED |       EV_HLS_STARTED | EV_HLS_STOPPED |       EV_STREAM_ENABLED | EV_STREAM_DISABLED |       EV_WHITEBOARD_STARTED | EV_WHITEBOARD_STOPPED |       EV_MEETING_JOINED | EV_MEETING_LEFT |      EV_VIDEO_STATE_CHANGED | EV_VIDEO_SEEKED |       EV_MIC_REQUESTED | EV_WEBCAM_REQUESTED |      EV_PIN_STATE_CHANGED | EV_CONNECTION_OPEN | EV_CONNECTION_CLOSE |    EV_SWITCH_MEETING } eventType
     * @param {Function} listener Callback function
     */
    on(eventType: "participant-joined" | "participant-left" | "speaker-changed" | "presenter-changed" | "main-participant-changed" | "entry-requested" | "entry-responded" | "recording-started" | "recording-stopped" | "livestream-started" | "livestream-stopped" | "hls-started" | "hls-stopped" | "stream-enabled" | "stream-disabled" | "whiteboard-started" | "whiteboard-stopped" | "meeting-joined" | "meeting-left" | "video-state-changed" | "video-seeked" | "mic-requested" | "webcam-requested" | "pin-state-changed" | "connection-open" | "connection-close" | "switch-meeting", listener: Function): void;
    /**
     * Add event listener
     * @param { EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_SPEAKER_CHANGED | EV_PRESENTER_CHANGED | EV_MAIN_PARTICIPANT_CHANGED | EV_ENTRY_REQUESTED | EV_ENTRY_RESPONDED |       EV_RECORDING_STARTED | EV_RECORDING_STOPPED |      EV_LIVESTREAM_STARTED | EV_LIVESTREAM_STOPPED |       EV_HLS_STARTED | EV_HLS_STOPPED |       EV_STREAM_ENABLED | EV_STREAM_DISABLED |       EV_WHITEBOARD_STARTED | EV_WHITEBOARD_STOPPED |       EV_MEETING_JOINED | EV_MEETING_LEFT |      EV_VIDEO_STATE_CHANGED | EV_VIDEO_SEEKED |       EV_MIC_REQUESTED | EV_WEBCAM_REQUESTED |      EV_PIN_STATE_CHANGED | EV_CONNECTION_OPEN | EV_CONNECTION_CLOSE |    EV_SWITCH_MEETING } eventType
     * @param {Function} listener Callback function
     */
    off(eventType: "participant-joined" | "participant-left" | "speaker-changed" | "presenter-changed" | "main-participant-changed" | "entry-requested" | "entry-responded" | "recording-started" | "recording-stopped" | "livestream-started" | "livestream-stopped" | "hls-started" | "hls-stopped" | "stream-enabled" | "stream-disabled" | "whiteboard-started" | "whiteboard-stopped" | "meeting-joined" | "meeting-left" | "video-state-changed" | "video-seeked" | "mic-requested" | "webcam-requested" | "pin-state-changed" | "connection-open" | "connection-close" | "switch-meeting", listener: Function): void;
}

import { Participant } from "./participant";
import { EventEmitter } from "events";
import { Connection } from "./connection";