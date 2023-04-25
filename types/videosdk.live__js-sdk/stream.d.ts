export class Stream {
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {"audio" | "video" | "share" | "shareAudio"}
     * @description This represents the type of Stream
     */
    kind: 'audio' | 'video' | 'share' | 'shareAudio';
    /**
     * @type {string}
     * @description This represents the codec of the stream
     */
    codec: string;
    /**
     * @type {MediaStreamTrack}
     * @description This represents the track which can be used to play the audio or video of the participant
     */
    track: MediaStreamTrack;
    /**
     * @description This method can be used to pause the incoming audio stream
     */
    pause(): void;
    /**
     * @description This method can be used to resume the incoming audio stream
     */
    resume(): void;
    get paused(): any;
}
