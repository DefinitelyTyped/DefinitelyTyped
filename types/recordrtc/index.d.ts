// Type definitions for recordrtc 5.6
// Project: http://RecordRTC.org/
// Definitions by: Kyle Hensel <https://github.com/k-yle>
//                 moonrailgun <https://github.com/moonrailgun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RecordRTC {
    type State = 'inactive' | 'recording' | 'stopped' | 'paused' | 'destroyed';

    interface Disk {
        audio?: Blob | undefined;
        video?: Blob | undefined;
        gif?: Blob | undefined;
    }

    type MediaStreamKind = 'videoinput' | 'audioinput' | 'audiooutput';

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

    class MultiStreamsMixer {
        constructor(arrayOfMediaStreams: MediaStream[], elementClass: string);
    }

    class MultiStreamRecorder {
        /**
         * MultiStreamRecorder can record multiple videos in single container.
         * @summary Multi-videos recorder.
         * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
         * @example
         * var options = {
         *     mimeType: 'video/webm'
         * }
         * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
         * recorder.record();
         * recorder.stop(function(blob) {
         *     video.src = URL.createObjectURL(blob);
         *
         *     // or
         *     var blob = recorder.blob;
         * });
         * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
         * @param mediaStreams - Array of MediaStreams.
         * @param config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
         */

        constructor(stream?: MediaStream[], config?: any);

        /**
         * This method records all MediaStreams.
         * @example
         * recorder.record();
         */
        record(): void;

        /**
         * This method stops recording MediaStream.
         * @param callback - Callback function, that is used to pass recorded blob back to the callee.
         * @example
         * recorder.stop(function(blob) {
         *     video.src = URL.createObjectURL(blob);
         * });
         */
        stop(callback: (blob: Blob) => void): void;

        /**
         * This method pauses the recording process.
         * @example
         * recorder.pause();
         */
        pause(): void;

        /**
         * This method resumes the recording process.
         * @example
         * recorder.resume();
         */
        resume(): void;

        /**
         * This method resets currently recorded data.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData(): void;

        /**
         * Add extra media-streams to existing recordings.
         * @param mediaStreams - Array of MediaStreams
         * @example
         * recorder.addStreams([newAudioStream, newVideoStream]);
         */
        addStreams(streams: MediaStream[]): void;

        /**
         * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
         * @param mediaStreams - Array of MediaStreams
         * @example
         * recorder.resetVideoStreams([newVideo1, newVideo2]);
         */
        resetVideoStreams(streams: MediaStream[]): void;

        /**
         * Returns MultiStreamsMixer
         * @param mediaStreams - Array of MediaStreams
         * @example
         * let mixer = recorder.getMixer();
         * mixer.appendStreams([newStream]);
         */
        getMixer(): MultiStreamsMixer;
    }

    interface Options {
        type?: 'video' | 'audio' | 'canvas' | 'gif' | undefined;

        recorderType?:
            | MediaStreamRecorder
            | StereoAudioRecorder
            | WebAssemblyRecorder
            | CanvasRecorder
            | GifRecorder
            | WhammyRecorder | undefined;

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
            | 'audio/ogg' | undefined;

        disableLogs?: boolean | undefined;

        /** get intervals based blobs value in milliseconds */
        timeSlice?: number | undefined;

        /** requires `timeSlice` to be set */
        ondataavailable?: ((blob: Blob) => void) | undefined;

        /** auto stop recording if camera stops */
        checkForInactiveTracks?: boolean | undefined;

        /** requires timeSlice above */
        onTimeStamp?: ((timestamp: number, timestamps: number[]) => void) | undefined;

        /** both for audio and video tracks */
        bitsPerSecond?: number | undefined;

        /** only for audio track */
        audioBitsPerSecond?: number | undefined;

        /** only for video track */
        videoBitsPerSecond?: number | undefined;

        /** used by CanvasRecorder and WhammyRecorder, it is kind of a "frameRate" */
        frameInterval?: number | undefined;

        /** if you are recording multiple streams into single file, this helps you see what is being recorded */
        previewStream?: ((stream: MediaStream) => void) | undefined;

        /** used by CanvasRecorder and WhammyRecorder */
        video?: HTMLVideoElement | undefined;

        /** used by CanvasRecorder and WhammyRecorder */
        canvas?: {
            width: number;
            height: number;
        } | undefined;

        /** used by StereoAudioRecorder, the range is 22050 to 96000 (kHz). */
        sampleRate?: number | undefined;

        /** used by StereoAudioRecorder. the range is 22050 to 96000 (kHz). */
        desiredSampRate?: number | undefined;

        /** used by StereoAudioRecorder */
        bufferSize?: 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | undefined;

        /** used by StereoAudioRecorder */
        numberOfAudioChannels?: 1 | 2 | undefined;

        /** used by WebAssemblyRecorder */
        frameRate?: number | undefined;

        /** used by WebAssemblyRecorder */
        bitrate?: number | undefined;

        /** used by MultiStreamRecorder - to access HTMLCanvasElement */
        elementClass?: string | undefined;
    }

    type DiskStorageType = 'audioBlob' | 'videoBlob' | 'gifBlob';
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
    setRecordingDuration(milliSeconds: number): {
        onRecordingStopped: (callback: () => void) => void;
    };
    /** auto stop recording after specific duration */
    setRecordingDuration(milliSeconds: number, onRecordingStopped: () => void): void;

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

    /** @deprecated */
    setAdvertisementArray(webPImages: Array<{ image: string }>): void;

    /** @deprecated clear recorded data */
    clearRecordedData(): void;

    /** clear memory; clear everything */
    destroy(): void;

    /** get recorder's state */
    getState(): string;

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
    static invokeSaveAsDialog(file: Blob | File, fileName?: string): void;

    static getSeekableBlob(inputBlob: Blob, cb: (outputBlob: Blob) => void): void;

    /** returns true if running in an Electron environment */
    static isElectron(): boolean;

    /** DiskStorage is a standalone object used by RecordRTC to store recorded blobs in IndexedDB storage. */
    static DiskStorage: {
        init(): void;
        Fetch(cb: (dataURL: string, type: RecordRTC.DiskStorageType) => void): void;
        Store(data: { [K in RecordRTC.DiskStorageType]?: Blob; }): void;
        onError(error: Error): void;
        dataStoreName: string;
    };
}

export = RecordRTC;
