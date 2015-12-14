// Type definitions for Apache Cordova Media plugin.
// Project: https://github.com/apache/cordova-plugin-media
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

declare var Media: {
    new (
        src: string,
        mediaSuccess: () => void,
        mediaError?: (error: MediaError) => any,
        mediaStatus?: (status: number) => void): Media;
        //Media statuses
        MEDIA_NONE: number;
        MEDIA_STARTING: number;
        MEDIA_RUNNING: number;
        MEDIA_PAUSED: number;
        MEDIA_STOPPED: number
};

/**
 * This plugin provides the ability to record and play back audio files on a device.
 * NOTE: The current implementation does not adhere to a W3C specification for media capture,
 * and is provided for convenience only. A future implementation will adhere to the latest
 * W3C specification and may deprecate the current APIs.
 */
interface Media {
    /**
     * Returns the current position within an audio file. Also updates the Media object's position parameter.
     * @param mediaSuccess The callback that is passed the current position in seconds.
     * @param mediaError   The callback to execute if an error occurs.
     */
    getCurrentPosition(
        mediaSuccess: (position: number) => void,
        mediaError?: (error: MediaError) => void): void;
    /** Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1. */
    getDuration(): number;
    /** 
     * Starts or resumes playing an audio file.
     * @param iosPlayOptions: iOS options quirks
     */
    play(iosPlayOptions?: IosPlayOptions): void;
    /** Pauses playing an audio file. */
    pause(): void;
    /**
     * Releases the underlying operating system's audio resources. This is particularly important
     * for Android, since there are a finite amount of OpenCore instances for media playback.
     * Applications should call the release function for any Media resource that is no longer needed.
     */
    release(): void;
    /**
     * Sets the current position within an audio file.
     * @param position Position in milliseconds.
     */
    seekTo(position: number): void;
    /**
     * Set the volume for an audio file.
     * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void;
    /** Starts recording an audio file. */
    startRecord(): void;
    /** Stops recording an audio file. */
    stopRecord(): void;
    /** Stops playing an audio file. */
    stop(): void;
    /**
     * The position within the audio playback, in seconds.
     * Not automatically updated during play; call getCurrentPosition to update.
     */
    position: number;
    /** The duration of the media, in seconds. */
    duration: number;
}
/**
 *  iOS optional parameters for media.play
 *  See https://github.com/apache/cordova-plugin-media#ios-quirks
 */
interface IosPlayOptions {
    numberOfLoops?: number;
    playAudioWhenScreenIsLocked?: boolean;
}
