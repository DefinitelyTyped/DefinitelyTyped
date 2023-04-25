export class Participant {
    /**
     * Create a new participant with details from peer
     * @param {any} peer
     */
    constructor(peer: any);
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {string}
     */
    displayName: string;
    /**
     * @type {Map<string, Stream>}
     */
    streams: Map<string, Stream>;
    /**
     * @type {"low" | "med" | "high"}
     */
    quality: "low" | "med" | "high";
    /**
     * @type {boolean}
     */
    local: boolean;
    /**
     * @type {{cam:boolean, share: boolean}}
     */
    pinState: {
        cam: boolean;
        share: boolean;
    };
    /**
     * @type {boolean}
     */
    webcamOn: boolean;
    /**
     * @type {boolean}
     */
    micOn: boolean;
    /**
     * @type {"CONFERENCE" | "VIEWER"}
     */
    mode: "CONFERENCE" | "VIEWER";
    eventEmitter: EventEmitter;
    _setPinState(obj: any): void;
    remove(): void;
    enableMic(): void;
    disableMic(): void;
    enableWebcam(): void;
    disableWebcam(): void;
    addStream(stream: any): void;
    updateStream(stream: any): void;
    deleteStream(streamId: any): Stream;
    updateParticipantMediaState(kind: any, state: any): void;
    videoQualityChanged(prevQuality: any, currentQuality: any): void;
    /**
     *
     * @param {"low" | "med" | 'high'} quality
     */
    setQuality(quality: "low" | "med" | 'high'): void;
    /**
     *
     * @param {number} width
     * @param {number} height
     */
    setViewPort(width: number, height: number): void;
    /**
     * @param {"SHARE_AND_CAM" | "CAM" | "SHARE"} type
     */
    pin(type: "SHARE_AND_CAM" | "CAM" | "SHARE"): void;
    /**
     * @param {"SHARE_AND_CAM" | "CAM" | "SHARE"} type
     */
    unpin(type: "SHARE_AND_CAM" | "CAM" | "SHARE"): void;
    /**
     *@param {{meetingId: string, payload: string, token:string }} options
     */
    switchTo({ meetingId, payload, token }: {
        meetingId: string;
        payload: string;
        token: string;
    }): Promise<void>;
    getVideoStats(): Promise<[{
        bitrate: number;
        roundTripTime: number;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        network: string;
        codec: string;
        limitaion: any;
        size: any;
    }] | [{
        bitrate: number;
        rtt: number;
        network: string;
        codec: string;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        concealmentEvents: number;
        insertedSamplesForDecelaration: number;
        removedSamplesForAccelaration: number;
        size: any;
    }]>;
    getShareStats(): Promise<[{
        bitrate: number;
        rtt: number;
        network: string;
        codec: string;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        concealmentEvents: number;
        insertedSamplesForDecelaration: number;
        removedSamplesForAccelaration: number;
        size: any;
    }] | [{
        bitrate: number;
        roundTripTime: number;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        network: string;
        codec: string;
        limitaion: any;
        size: any;
    }]>;
    getAudioStats(): Promise<[{
        bitrate: number;
        rtt: number;
        network: string;
        codec: string;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        concealmentEvents: number;
        insertedSamplesForDecelaration: number;
        removedSamplesForAccelaration: number;
        size: any;
    }] | [{
        bitrate: number;
        roundTripTime: number;
        jitter: number;
        totalPackets: number;
        packetsLost: number;
        network: string;
        codec: string;
    }]>;
    consumeMicStreams(): void;
    consumeWebcamStreams(): void;
    stopConsumingWebcamStreams(): void;
    stopConsumingMicStreams(): void;
    /**
     * Add event listener
     * @param {EV_STREAM_ENABLED | EV_STREAM_DISABLED | EV_MEDIA_STATUS_CHANGED} eventType
     * @param {Function} listener Callback function
     */
    on(eventType: "stream-enabled" | "stream-disabled" | "media-status-changed", listener: Function): void;
    /**
     * Remove event listener
     * @param {EV_STREAM_ENABLED | EV_STREAM_DISABLED | EV_MEDIA_STATUS_CHANGED} eventType
     * @param {Function} listener Callback function
     */
    off(eventType: "stream-enabled" | "stream-disabled" | "media-status-changed", listener: Function): void;
}
import { Stream } from "./stream";
import { EventEmitter } from "events";