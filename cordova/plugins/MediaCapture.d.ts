// Type definitions for Apache Cordova MediaCapture plugin.
// Project: https://github.com/apache/cordova-plugin-media-capture
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Navigator {
    device: Device;
}

interface Device {
    capture: Capture;
}

/** This plugin provides access to the device's audio, image, and video capture capabilities. */
interface Capture {
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param onSuccess Executes when the capture operation finishes with an array
     *                  of MediaFile objects describing each captured audio clip file.
     * @param onError   Executes, if the user terminates the operation before an audio clip is captured,
     *                  with a CaptureError object, featuring the CaptureError.CAPTURE_NO_MEDIA_FILES error code.
     * @param options   Encapsulates audio capture configuration options.
     */
    captureAudio(
            onSuccess: (mediaFiles: MediaFile[]) => void,
            onError: (error: CaptureError) => void,
            options?: AudioOptions): void ;
    /**
     * Start the camera application and return information about captured image files.
     * @param onSuccess Executes when the capture operation finishes with an array
     *                  of MediaFile objects describing each captured image clip file.
     * @param onError   Executes, if the user terminates the operation before an audio clip is captured,
     *                  with a CaptureError object, featuring the CaptureError.CAPTURE_NO_MEDIA_FILES error code.
     * @param options   Encapsulates audio capture configuration options.
     */
    captureImage(
            onSuccess: (mediaFiles: MediaFile[]) => void,
            onError: (error: CaptureError) => void,
            options?: ImageOptions): void ;
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param onSuccess Executes when the capture operation finishes with an array
     *                  of MediaFile objects describing each captured video clip file.
     * @param onError   Executes, if the user terminates the operation before an audio clip is captured,
     *                  with a CaptureError object, featuring the CaptureError.CAPTURE_NO_MEDIA_FILES error code.
     * @param options   Encapsulates audio capture configuration options.
     */
    captureVideo(
            onSuccess: (mediaFiles: MediaFile[]) => void,
            onError: (error: CaptureError) => void,
            options?: VideoOptions): void ;
    /** The audio recording formats supported by the device. */
    supportedAudioModes: ConfigurationData[];
    /** The recording image sizes and formats supported by the device. */
    supportedImageModes: ConfigurationData[];
    /** The recording video resolutions and formats supported by the device. */
    supportedVideoModes: ConfigurationData[];
}

/** Encapsulates properties of a media capture file. */
interface MediaFile {
    /** The name of the file, without path information. */
    name: string;
    /** The full path of the file, including the name. */
    fullPath: string;
    /** The file's mime type */
    type: string;
    /** The date and time when the file was last modified. */
    lastModifiedDate: Date;
    /** The size of the file, in bytes. */
    size: number;
    /**
     * Retrieves format information about the media capture file.
     * @param successCallback Invoked with a MediaFileData object when successful.
     * @param errorCallback   Invoked if the attempt fails, this function. 
     */
    getFormatData(
        successCallback: (data: MediaFileData) => void,
        errorCallback?: () => void): void;
}

/** Encapsulates format information about a media file. */
interface MediaFileData {
    /** The actual format of the audio and video content. */
    codecs: string;
    /** The average bitrate of the content. The value is zero for images. */
    bitrate: number;
    /** The height of the image or video in pixels. The value is zero for audio clips. */
    height: number;
    /** The width of the image or video in pixels. The value is zero for audio clips. */
    width: number;
    /** The length of the video or sound clip in seconds. The value is zero for images. */
    duration: number;
}

/** Encapsulates the error code resulting from a failed media capture operation. */
interface CaptureError {
    /**
     * One of the pre-defined error codes listed below.
     *     CaptureError.CAPTURE_INTERNAL_ERR
     *         The camera or microphone failed to capture image or sound.
     *     CaptureError.CAPTURE_APPLICATION_BUSY
     *         The camera or audio capture application is currently serving another capture request.
     *     CaptureError.CAPTURE_INVALID_ARGUMENT
     *         Invalid use of the API (e.g., the value of limit is less than one).
     *     CaptureError.CAPTURE_NO_MEDIA_FILES
     *         The user exits the camera or audio capture application before capturing anything.
     *     CaptureError.CAPTURE_NOT_SUPPORTED
     *         The requested capture operation is not supported.
     */
    code: number;
    message: string;
}

declare var CaptureError: {
    /** Constructor for CaptureError  */
    new (code: number, message: string): CaptureError;
    CAPTURE_INTERNAL_ERR: number;
    CAPTURE_APPLICATION_BUSY: number;
    CAPTURE_INVALID_ARGUMENT: number;
    CAPTURE_NO_MEDIA_FILES: number;
    CAPTURE_NOT_SUPPORTED: number;
}

/** Encapsulates audio capture configuration options. */
interface AudioOptions {
    /**
     * The maximum number of audio clips the device's user can capture in a single
     * capture operation. The value must be greater than or equal to 1.
     */
    limit?: number;
    /** The maximum duration of a audio clip, in seconds. */
    duration?: number;
}

/** Encapsulates image capture configuration options. */
interface ImageOptions {
    /**
     * The maximum number of images the user can capture in a single capture operation.
     * The value must be greater than or equal to 1 (defaults to 1).
     */
    limit?: number;
}

/** Encapsulates video capture configuration options. */
interface VideoOptions {
    /**
     * The maximum number of video clips the device's user can capture in a single
     * capture operation. The value must be greater than or equal to 1.
     */
    limit?: number;
    /** The maximum duration of a video clip, in seconds. */
    duration?: number;
}

/** Encapsulates a set of media capture parameters that a device supports. */
interface ConfigurationData {
    /** The ASCII-encoded lowercase string representing the media type. */
    type: string;
    /** The height of the image or video in pixels. The value is zero for sound clips. */
    height: number;
    /** The width of the image or video in pixels. The value is zero for sound clips. */
    width: number;
}