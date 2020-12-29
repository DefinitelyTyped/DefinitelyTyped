// Type definitions for recordrtc 5.6
// Project: http://RecordRTC.org/
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RecordRTC {
    type State = 'inactive' | 'recording' | 'stopped' | 'paused' | 'destroyed';

    interface Disk {
        audio?: Blob;
        video?: Blob;
        gif?: Blob;
    }

    type MediaStreamKind = "videoinput" | "audioinput" | "audiooutput";

    /* tslint:disable:no-unnecessary-class */
    class MediaStreamRecorder {
        constructor(mediaStream: any, config: any);
    }
    class StereoAudioRecorder {
        constructor(mediaStream: any, config: any);
    }
    class CanvasRecorder {
        constructor(htmlElement: any, config: any);
    }
    class WhammyRecorder {
        constructor(mediaStream: any, config: any);
    }
    class GifRecorder {
        constructor(mediaStream: any, config: any);
    }
    class WebAssemblyRecorder {
        constructor(stream: any, config: any);
    }

    interface Options {
        type?: 'video' | 'audio' | 'canvas' | 'gif';

        recorderType?: MediaStreamRecorder | StereoAudioRecorder | WebAssemblyRecorder | CanvasRecorder | GifRecorder | WhammyRecorder;

        mimeType?:
            | 'audio/webm'
            | 'audio/webm;codecs=pcm'
            | 'video/mp4'
            | 'video/webm'
            | 'video/webm;codecs=vp9'
            | 'video/webm;codecs=vp8'
            | 'video/webm;codecs=h264'
            | 'video/x-matroska;codecs=avc1'
            | 'video/mpeg'
            | 'audio/wav'
            | 'audio/ogg';

        disableLogs?: boolean;

        /** get intervals based blobs value in milliseconds */
        timeSlice?: number;

        /** requires `timeSlice` to be set */
        ondataavailable?: (blob: Blob) => void;

        /** auto stop recording if camera stops */
        checkForInactiveTracks?: boolean;

        /** requires timeSlice above */
        onTimeStamp?: (timestamp: number, timestamps: number[]) => void;

        /** both for audio and video tracks */
        bitsPerSecond?: number;

        /** only for audio track */
        audioBitsPerSecond?: number;

        /** only for video track */
        videoBitsPerSecond?: number;

        /** used by CanvasRecorder and WhammyRecorder, it is kind of a "frameRate" */
        frameInterval?: number;

        /** if you are recording multiple streams into single file, this helps you see what is being recorded */
        previewStream?: (stream: MediaStream) => void;

        /** used by CanvasRecorder and WhammyRecorder */
        video?: HTMLVideoElement;

        /** used by CanvasRecorder and WhammyRecorder */
        canvas?: {
            width: number;
            height: number;
        };

        /** used by StereoAudioRecorder, the range is 22050 to 96000 (kHz). */
        sampleRate?: number;

        /** used by StereoAudioRecorder. the range is 22050 to 96000 (kHz). */
        desiredSampRate?: number;

        /** used by StereoAudioRecorder */
        bufferSize?: 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;

        /** used by StereoAudioRecorder */
        numberOfAudioChannels?: 1 | 2;

        /** used by WebAssemblyRecorder */
        frameRate?: number;

        /** used by WebAssemblyRecorder */
        bitrate?: number;

        /** used by MultiStreamRecorder - to access HTMLCanvasElement */
        elementClass?: string;
    }
}

declare class RecordRTC {
    constructor(stream: MediaStream | HTMLCanvasElement | HTMLVideoElement | HTMLElement, options?: RecordRTC.Options);

    /** start the recording */
    startRecording(): void;

    /** stop the recording. Call `getBlob` from inside callback function */
    stopRecording(cb?: () => void): void;

    /** pause the recording */
    pauseRecording(): void;

    /** resume the recording */
    resumeRecording(): void;

    /** auto stop recording after specific duration */
    setRecordingDuration(): void;

    /** reset recorder states and remove the data */
    reset(): void;

    /** invoke save as dialog */
    save(fileName: string): void;

    /** returns recorded Blob */
    getBlob(): Blob;

    /** returns Blob-URL */
    toURL(): string;

    /** returns Data-URL */
    getDataURL(): string;

    /** returns internal recorder */
    getInternalRecorder(): void;

    /** @deprecated initialize the recorder */
    initRecorder(): void;

    /** fired if recorder's state changes */
    onStateChanged(cb: (state: RecordRTC.State) => void): void;

    /** write recorded blob into indexed-db storage */
    writeToDisk(options: RecordRTC.Disk): void;

    /** get recorded blob from indexded-db storage */
    getFromDisk(type: 'all' | keyof RecordRTC.Disk, cb: (dataURL: string, type: keyof RecordRTC.Disk) => void): void;

    getTracks: (stream: MediaStream, kind: RecordRTC.MediaStreamKind) => MediaStreamTrack[];

    getSeekableBlob: (inputBlob: Blob, cb: (outputBlob: Blob) => void) => void;

    /** @deprecated */
    setAdvertisementArray(webPImages: Array<{ image: string }>): void;

    /** @deprecated clear recorded data */
    clearRecordedData(): void;

    /** clear memory; clear everything */
    destroy(): void;

    /** get recorder's state */
    getState(): void;

    /** recorder's state */
    readonly state: string;

    /** recorded blob property */
    readonly blob: Blob;

    /** array buffer; useful only for StereoAudioRecorder */
    readonly buffer: ArrayBuffer;

    /** RecordRTC version */
    readonly version: string;

    /** useful only for StereoAudioRecorder */
    readonly bufferSize: number;

    /** useful only for StereoAudioRecorder */
    readonly sampleRate: number;

    //
    // static helpers
    //

    /** RecordRTC version */
    static version: string;

    /** Given a number of bytes, this returns a human-readable string, e.g. 1.23 MB */
    static bytesToSize(size: number): string;

    /** invokes the browser's Save-As dialog */
    static invokeSaveAsDialog(file: Blob | File, fileName: string): void;
}

export = RecordRTC;
