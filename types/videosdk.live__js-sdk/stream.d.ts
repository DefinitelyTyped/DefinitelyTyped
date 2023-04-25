export class Stream {
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {"audio" | "video" | "share" | "shareAudio"}
     */
    kind: "audio" | "video" | "share" | "shareAudio";
    codec: any;
    /**
     * @type {MediaStreamTrack}
     */
    track: MediaStreamTrack;
    pause(): void;
    resume(): void;
    get paused(): any;
}