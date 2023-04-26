export class Participant {
    /**
     * @description This represents the participant's ID
     */
    id: string;
    /**
     * @description This represents the participant's name
     */
    displayName: string;
    /**
     * @description This represents the all the Streams that the participant is producing
     *
     */
    streams: Map<string, Stream>;
    /**
     * @description This represents the quality of video being consumed for the participant
     *
     */
    quality: 'low' | 'med' | 'high';
    /**
     * @description This represents if the participant is local or remote
     *
     */
    local: boolean;
    /**
     * @description This represents participant's current pin state
     *
     */
    pinState: {
        cam: boolean;
        share: boolean;
    };
    /**
     * @description This represents participant's current webcam status
     */
    webcamOn: boolean;
    /**
     * @description This represents participant's current mic status
     *
     */
    micOn: boolean;
    /**
     * @description This represents participant's current mode
     *
     */
    mode: 'CONFERENCE' | 'VIEWER';
    /**
     * @description This method can be used to kickout a participant from the meeting
     */
    remove(): void;
    /**
     * @description This method can be used to enable mic of the participant in the meeting
     */
    enableMic(): void;
    /**
     * @description This method can be used to disable mic of the participant in the meeting
     */
    disableMic(): void;
    /**
     * @description This method can be used to enable webcam of the participant in the meeting
     */
    enableWebcam(): void;
    /**
     * @description This method can be used to disable webcam of the participant in the meeting
     */
    disableWebcam(): void;
    /**
     *  @description This method can be used to set the incoming video quality of the participant
     * @param quality
     */
    setQuality(quality: 'low' | 'med' | 'high'): void;
    /**
     * @description This method can be used to set the video quality of the participant based on the size of the viewport it is being displayed in
     * @param width Width of the Viewport in which participant video is shown
     * @param height Height of the Viewport in which participant video is shown
     */
    setViewPort(width: number, height: number): void;

    /**
     * @param type If `SHARE_AND_CAM` is provided, it will pin screenshare and camera of the participant.
     * If `CAM` is provided, it will only pin the participant's camera, If `SHARE` is provided, it will only pin the participant's screen share
     */
    pin(type: 'SHARE_AND_CAM' | 'CAM' | 'SHARE'): void;
    /**
     * @param type   If `SHARE_AND_CAM` is provided, it will unpin screenshare and camera of the participant.
     * If `CAM` is provided, it will only unpin the participant's camera, If `SHARE` is provided, it will only unpin the participant's screen share
     */
    unpin(type: 'SHARE_AND_CAM' | 'CAM' | 'SHARE'): void;
    /**
     * @deprecated
     * @param options
     */
    switchTo({ meetingId, payload, token }: { meetingId: string; payload: string; token: string }): Promise<void>;
    /**
     * @description This method returns the Video Statistics of the participant.
     * To learn more about the video statistics check these [reference](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality)
     */
    getVideoStats(): Promise<
        Array<{
            bitrate: number;
            rtt: number;
            network: string;
            codec: string;
            jitter: number;
            limitation: any;
            totalPackets: number;
            packetsLost: number;
            concealmentEvents: number;
            insertedSamplesForDecelaration: number;
            removedSamplesForAccelaration: number;
            size: any;
            currentSpatialLayer: number;
            currentTemporalLayer: number;
            preferredSpatialLayer: number;
            preferredTemporalLayer: number;
        }>
    >;
    /**
     * @description This method returns the Screen Share Statistics of the participant.
     * To learn more about the video statistics check these [reference](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality)
     */
    getShareStats(): Promise<
        Array<{
            bitrate: number;
            rtt: number;
            network: string;
            codec: string;
            jitter: number;
            limitation: any;
            totalPackets: number;
            packetsLost: number;
            concealmentEvents: number;
            insertedSamplesForDecelaration: number;
            removedSamplesForAccelaration: number;
            size: any;
            currentSpatialLayer: number;
            currentTemporalLayer: number;
            preferredSpatialLayer: number;
            preferredTemporalLayer: number;
        }>
    >;
    /**
     * @description This method returns the Audio Statistics of the participant.
     * To learn more about the video statistics check these [reference](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality)
     */
    getAudioStats(): Promise<
        Array<{
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
        }>
    >;
    consumeMicStreams(): void;
    consumeWebcamStreams(): void;
    stopConsumingWebcamStreams(): void;
    stopConsumingMicStreams(): void;
    /**
     * Add event listener
     * @param eventType Event name to which you want to subscribe.
     * @param listener Callback function which will be triggered when the event happens
     */
    on(
        eventType: 'stream-enabled' | 'stream-disabled' | 'media-status-changed' | 'video-quality-changed',
        listener: (data: any) => void,
    ): void;
    /**
     * Remove event
     * @param eventType Event name to which you want to unsubscribe.
     * @param listener Callback function which was passed while subscribing to the event
     */
    off(
        eventType: 'stream-enabled' | 'stream-disabled' | 'media-status-changed' | 'video-quality-changed',
        listener: (data: any) => void,
    ): void;
}
import { Stream } from './stream';
