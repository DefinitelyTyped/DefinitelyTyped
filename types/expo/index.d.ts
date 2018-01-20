// Type definitions for expo 24.0
// Project: https://github.com/expo/expo-sdk
// Definitions by: Konstantin Kai <https://github.com/KonstantinKai>
//                 Martynas Kadiša <https://github.com/martynaskadisa>
//                 Jan Aagaard <https://github.com/janaagaard75>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventSubscription } from 'fbemitter';
import { Component, ComponentClass, Ref } from 'react';
import {
    ColorPropType,
    ImageRequireSource,
    ImageURISource,
    NativeEventEmitter,
    ViewProperties,
    ViewStyle
} from 'react-native';

declare module 'expo' {
    type URISource = ImageURISource;
    type RequireSource = ImageRequireSource;
    type ResizeModeContain = 'contain';
    type ResizeModeCover = 'cover';
    type ResizeModeStretch = 'stretch';
    type Orientation = 'portrait' | 'landscape';
    type Axis = number;
    interface HashMap { [key: string]: any; }
    type FloatFromZeroToOne = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
    type BarCodeReadCallback = (params: { type: string; data: string; }) => void;
    type Md5 = string;

    /** Access the device accelerometer sensor(s) to respond to changes in acceleration in 3d space. */
    export namespace Accelerometer {
        interface AccelerometerObject {
            x: Axis;
            y: Axis;
            z: Axis;
        }

        /**
         * Subscribe for updates to the accelerometer.
         * @param listener A callback that is invoked when an accelerometer update is available. When invoked, the listener is provided a single argumument that is an object containing keys x, y, z.
         * @returns An EventSubscription object that you can call remove() on when you would like to unsubscribe the listener.
         */
        function addListener(listener: (obj: AccelerometerObject) => any): EventSubscription;

        /** Remove all listeners. */
        function removeAllListeners(): void;

        /**
         * Subscribe for updates to the accelerometer.
         * @param intervalMs Desired interval in milliseconds between accelerometer updates.
         */
        function setUpdateInterval(intervalMs: number): void;
    }

    /**
     * Provides access to Amplitude mobile analytics which basically lets you log various events to the Cloud. This module wraps Amplitude’s iOS and Android SDKs.
     *
     * Note: Session tracking may not work correctly when running Experiences in the main Expo app. It will work correctly if you create a standalone app.
     */
    export namespace Amplitude {
        /** Initializes Amplitude with your Amplitude API key. */
        function initialize(apiKey: string): void;

        /** Assign a user ID to the current user. If you don’t have a system for user IDs you don’t need to call this. */
        function setUserId(userId: string): void;

        /** Set properties for the current user. */
        function setUserProperties(userProperties: HashMap): void;

        /** Clear properties set by `setUserProperties()`. */
        function clearUserProperties(): void;

        /** Log an event to Amplitude. */
        function logEvent(eventName: string): void;

        /** Log an event to Amplitude with custom properties. */
        function logEventWithProperties(
            eventName: string,

            /** A map of custom properties. */
            properties: HashMap
        ): void;

        /** Add the current user to a group. */
        function setGroup(
            /** The group name, e.g. `'sports'`. */
            groupType: string,

            /** An array of group names, e.g. `['tennis', 'soccer']`. */
            groupNames: string[]
        ): void;
    }

    /** This module provides an interface to Expo’s asset system. An asset is any file that lives alongside the source code of your app that the app needs at runtime. Examples include images, fonts and sounds. Expo’s asset system integrates with React Native’s, so that you can refer to files with require('path/to/file'). This is how you refer to static image files in React Native for use in an Image component, for example. */
    export class Asset {
        constructor({ name, type, hash, uri, width, height }: {
            name: string;
            type: string;
            hash: string;
            uri: string;
            width?: number;
            height?: number;
        });

        /** The MD5 hash of the asset’s data. */
        hash: Md5;

        /** The name of the asset file without the extension. Also without the part from @ onward in the filename (used to specify scale factor for images). */
        name: string;

        /** The extension of the asset filename. */
        type: string;

        /** A URI that points to the asset’s data on the remote server. When running the published version of your app, this refers to the the location on Expo’s asset server where Expo has stored your asset. When running the app from XDE during development, this URI points to XDE’s server running on your computer and the asset is served directly from your computer. */
        uri: string;

        /** If the asset has been downloaded (by calling `downloadAsync()`), the `file://` URI pointing to the local file on the device that contains the asset data. */
        localUri: string;

        /** If the asset is an image, the width of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present. */
        width?: number;

        /** If the asset is an image, the height of the image data divided by the scale factor. The scale factor is the number after `@` in the filename, or `1` if not present. */
        height?: number;

        downloading: boolean;
        downloaded: boolean;
        downloadCallbacks: Array<{ resolve: () => any, reject: (e?: any) => any }>;

        /** Downloads the asset data to a local file in the device’s cache directory. Once the returned promise is fulfilled without error, the localUri field of this asset points to a local file containing the asset data. The asset is only downloaded if an up-to-date local file for the asset isn’t already present due to an earlier download. */
        downloadAsync(): Promise<void>;

        /** Returns the `Expo.Asset` instance representing an asset given its module. */
        static fromModule(module: RequireSource): Asset;

        /**
         * A helper that wraps `Expo.Asset.fromModule(module).downloadAsync` for convenience.
         * @param moduleIds An array of `require('path/to/file')`. Can also be just one module without an Array.
         */
        static loadAsync(module: RequireSource[] | RequireSource): Promise<void>;
    }

    /**
     * AuthSession
     */
    export namespace AuthSession {
        function startAsync(options: { authUrl: string; returnUrl: string; }): Promise<{
            type: 'cancel';
        } | {
                type: 'dismissed';
            } | {
                type: 'success';
                params: HashMap;
                event: HashMap;
            } | {
                type: 'error';
                params: HashMap;
                errorCode: string;
                event: HashMap;
            }>;
        function dismiss(): void;
        function getRedirectUrl(): string;
    }

    // #region AV
    /**
     * AV
     */
    export type PlaybackStatus = {
        isLoaded: false;
        androidImplementation?: string;

        /** Populated exactly once when an error forces the object to unload. */
        error?: string;
    } | {
            isLoaded: true;
            androidImplementation?: string;
            uri: string;
            progressUpdateIntervalMillis: number;
            durationMillis?: number;
            positionMillis: number;
            playableDurationMillis?: number;
            shouldPlay: boolean;
            isPlaying: boolean;
            isBuffering: boolean;
            rate: number;
            shouldCorrectPitch: boolean;
            volume: number;
            isMuted: boolean;
            isLooping: boolean;

            /** True exactly once when the track plays to finish. */
            didJustFinish: boolean;
        };

    export interface PlaybackStatusToSet {
        androidImplementation?: string;
        progressUpdateIntervalMillis?: number;
        positionMillis?: number;
        shouldPlay?: boolean;
        rate?: FloatFromZeroToOne;
        shouldCorrectPitch?: boolean;
        volume?: FloatFromZeroToOne;
        isMuted?: boolean;
        isLooping?: boolean;
    }

    export type PlaybackSource = RequireSource | { uri: string } | Asset;

    export class PlaybackObject {
        /**
         * Gets the `PlaybackStatus` of the `playbackObject`.
         *
         * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject`.
         */
        getStatusAsync(): Promise<PlaybackStatus>;

        /**
         * Loads the media from source into memory and prepares it for playing. This must be called before calling setStatusAsync() or any of the convenience set status methods. This method can only be called if the playbackObject is in an unloaded state.
         *
         * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once it is loaded, or rejects if loading failed. The `Promise` will also reject if the `playbackObject` was already loaded. See below for details on `PlaybackStatus`.
         */
        loadAsync(
            /**
             * The source of the media. The following forms are supported:
             * - A dictionary of the form `{ uri: 'http://path/to/file' }` with a network URL pointing to a media file on the web.
             * - `require('path/to/file')` for a media file asset in the source code directory.
             * - An `Expo.Asset object` for a media file asset.
             */
            source: PlaybackSource,

            /** The initial intended `PlaybackStatusToSet` of the `playbackObject`, whose values will override the default initial playback status. This value defaults to `{}` if no parameter is passed. See below for details on `PlaybackStatusToSet` and the default initial playback status. */
            initialStatus?: PlaybackStatusToSet,

            /** If set to `true`, the system will attempt to download the resource to the device before loading. This value defaults to true. Note that at the moment, this will only work for sources of the form `require('path/to/file')` or `Expo.Asset` objects. */
            downloadFirst?: boolean
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: false })`. */
        pauseAsync(): Promise<PlaybackStatus>;

        /**
         * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: true })`.
         *
         * Playback may not start immediately after calling this function for reasons such as buffering. Make sure to update your UI based on the `isPlaying` and `isBuffering` properties of the `PlaybackStatus`.
         */
        playAsync(): Promise<PlaybackStatus>;

        /**
         * This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: true, positionMillis: millis })`.
         *
         * Playback may not start immediately after calling this function for reasons such as buffering. Make sure to update your UI based on the isPlaying and `isBuffering` properties of the `PlaybackStatus`.
         */
        playFromPositionAsync(
            /** The desired position of playback in milliseconds. */
            positionMillis: number,

            /** This is equivalent to `playbackObject.setStatusAsync({ positionMillis: millis, seekMillisToleranceBefore: toleranceMillisBefore, seekMillisToleranceAfter: toleranceMillisAfter })`. The tolerances are used only on iOS. */
            tolerances?: {
                toleranceMillisBefore: number,
                toleranceMillisAfter: number
            }
        ): Promise<PlaybackStatus>;

        /**
         * Replays the item. When using `playFromPositionAsync(0)` the item is seeked to the position at `0` ms. On iOS this method uses internal implementation of the player and is able to play the item from the beginning immediately.
         *
         * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once the new status has been set successfully, or rejects if setting the new status failed.
         */
        replayAsync(
            /** The new `PlaybackStatusToSet` of the `playbackObject`, whose values will override the current playback status. */
            status: PlaybackStatusToSet
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ isLooping: value })`. */
        setIsLoopingAsync(
            /** A boolean describing if the media should play once (`false`) or loop indefinitely (`true`). */
            isLooping: boolean
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ isMuted: value })`. */
        setIsMutedAsync(
            /**  A boolean describing if the audio of this media should be muted. */
            isMuted: boolean
        ): Promise<PlaybackStatus>;

        /**
         * Sets a function to be called regularly with the `PlaybackStatus` of the `playbackObject`. See below for details on `PlaybackStatus` and an example use case of this function.
         *
         * `onPlaybackStatusUpdate` will be called whenever a call to the API for this `playbackObject` completes (such as `setStatusAsync()`, `getStatusAsync()`, or `unloadAsync()`), and will also be called at regular intervals while the media is in the loaded state. Set `progressUpdateIntervalMillis` via `setStatusAsync()` or `setProgressUpdateIntervalAsync()` to modify the interval with which `onPlaybackStatusUpdate` is called while loaded.
         */
        setOnPlaybackStatusUpdate(
            /** A function taking a single parameter `PlaybackStatus`. */
            onPlaybackStatusUpdate?: (status: PlaybackStatus) => void
        ): void;

        /** This is equivalent to `playbackObject.setStatusAsync({ positionMillis: millis })`. */
        setPositionAsync(
            positionMillis: number,

            /** This is equivalent to `playbackObject.setStatusAsync({ positionMillis: millis, seekMillisToleranceBefore: toleranceMillisBefore, seekMillisToleranceAfter: toleranceMillisAfter })`. The tolerances are used only on iOS. */
            tolerances?: {
                toleranceMillisBefore: number,
                toleranceMillisAfter: number
            }
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ progressUpdateIntervalMillis: millis })`. */
        setProgressUpdateIntervalAsync(
            /** The new minimum interval in milliseconds between calls of `onPlaybackStatusUpdate`. */
            progressUpdateIntervalMillis: number
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ rate: value, shouldCorrectPitch: shouldCorrectPitch })`. */
        setRateAsync(
            /** The desired playback rate of the media. This value must be between `0.0` and `32.0`. Only available on Android API version 23 and later and iOS. */
            rate: number,

            /** A boolean describing if we should correct the pitch for a changed rate. If set to `true`, the pitch of the audio will be corrected (so a rate different than `1.0` will timestretch the audio). */
            shouldCorrectPitch: boolean
        ): Promise<PlaybackStatus>;

        /** Sets a new `PlaybackStatusToSet` on the `playbackObject`. This method can only be called if the media has been loaded. Return a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once the new status has been set successfully, or rejects if setting the new status failed. */
        setStatusAsync(
            /** The new `PlaybackStatusToSet` of the `playbackObject`, whose values will override the current playback status. */
            status: PlaybackStatusToSet
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ volume: value })`. */
        setVolumeAsync(
            /** A number between `0.0` (silence) and `1.0` (maximum volume). */
            volume: number
        ): Promise<PlaybackStatus>;

        /** This is equivalent to `playbackObject.setStatusAsync({ shouldPlay: false, positionMillis: 0 })`. */
        stopAsync(): Promise<PlaybackStatus>;

        /**
         * Unloads the media from memory. `loadAsync()` must be called again in order to be able to play the media.
         *
         * Returns a `Promise` that is fulfilled with the `PlaybackStatus` of the `playbackObject` once it is unloaded, or rejects if unloading failed. See below for details on `PlaybackStatus`.
         */
        unloadAsync(): Promise<PlaybackStatus>;
    }
    // #endregion

    /**
     * Provides basic sample playback and recording.
     *
     * Note that Expo does not yet support backgrounding, so audio is not available to play in the background of your experience. Audio also automatically stops if headphones / bluetooth audio devices are disconnected.
     */
    export namespace Audio {
        enum InterruptionModeIos {
            /** This is the default option. If this option is set, your experience’s audio is mixed with audio playing in background apps. */
            INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = 0,

            /** If this option is set, your experience’s audio interrupts audio from other apps. */
            INTERRUPTION_MODE_IOS_DO_NOT_MIX = 1,

            /** If this option is set, your experience’s audio lowers the volume ("ducks") of audio from other apps while your audio plays. */
            INTERRUPTION_MODE_IOS_DUCK_OTHERS = 2
        }

        const INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS: 0;
        const INTERRUPTION_MODE_IOS_DO_NOT_MIX: 1;
        const INTERRUPTION_MODE_IOS_DUCK_OTHERS: 2;

        enum InterruptionModeAndroid {
            /** If this option is set, your experience’s audio interrupts audio from other apps. */
            INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = 1,

            /** This is the default option. If this option is set, your experience’s audio lowers the volume ("ducks") of audio from other apps while your audio plays. */
            INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = 2
        }

        const INTERRUPTION_MODE_ANDROID_DO_NOT_MIX: 1;
        const INTERRUPTION_MODE_ANDROID_DUCK_OTHERS: 2;

        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT: 0;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP: 1;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4: 2;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB: 3;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB: 4;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF: 5;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS: 6;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP: 7;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS: 8;
        const RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM: 9;

        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT: 0;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB: 1;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB: 2;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC: 3;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC: 4;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD: 5;
        const RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS: 6;

        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM: 'lpcm';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3: 'ac-3';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3: 'cac3';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4: 'ima4';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC: 'aac ';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP: 'celp';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC: 'hvxc';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ: 'twvq';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3: 'MAC3';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6: 'MAC6';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW: 'ulaw';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW: 'alaw';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN: 'QDMC';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2: 'QDM2';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM: 'Qclp';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1: '.mp1';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2: '.mp2';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3: '.mp3';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS: 'alac';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE: 'aach';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD: 'aacl';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD: 'aace';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR: 'aacf';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2: 'aacg';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2: 'aacp';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL: 'aacs';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR: 'samr';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB: 'sawb';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE: 'AUDB';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC: 'ilbc';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA: 0x6d730011;
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM: 0x6d730031;
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3: 'aes3';
        const RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3: 'ec-3';

        const RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN: 0;
        const RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW: 0x20;
        const RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM: 0x40;
        const RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH: 0x60;
        const RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX: 0x7f;

        const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT: 0;
        const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE: 1;
        const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED: 2;
        const RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE: 3;

        type RecordingStatus = {
            canRecord: false,
            isDoneRecording: false
        } | {
                canRecord: true,
                isRecording: boolean,
                durationMillis: number
            } | {
                canRecord: false,
                isDoneRecording: true,
                durationMillis: number
            };

        const RECORDING_OPTIONS_PRESET_HIGH_QUALITY: RecordingOptions;
        const RECORDING_OPTIONS_PRESET_LOW_QUALITY: RecordingOptions;

        interface RecordingOptions {
            android: {
                extension: string;
                outputFormat: number;
                audioEncoder: number;
                sampleRate?: number;
                numberOfChannels?: number;
                bitRate?: number;
                maxFileSize?: number;
            };
            ios: {
                extension: string;
                outputFormat?: string | number;
                audioQuality: number;
                sampleRate: number;
                numberOfChannels: number;
                bitRate: number;
                bitRateStrategy?: number;
                bitDepthHint?: number;
                linearPCMBitDepth?: number;
                linearPCMIsBigEndian?: boolean;
                linearPCMIsFloat?: boolean;
            };
        }

        interface AudioMode {
            /** Boolean selecting if your experience’s audio should play in silent mode on iOS. This value defaults to `false`. */
            playsInSilentModeIOS: boolean;

            /** Boolean selecting if recording is enabled on iOS. This value defaults to `false`. NOTE: when this flag is set to true, playback may be routed to the phone receiver instead of to the speaker. */
            allowsRecordingIOS: boolean;

            /** Enum selecting how your experience’s audio should interact with the audio from other apps on iOS. */
            interruptionModeIOS: InterruptionModeIos;

            /** Boolean selecting if your experience’s audio should automatically be lowered in volume ("duck") if audio from another app interrupts your experience. This value defaults to true. If false, audio from other apps will pause your audio. */
            shouldDuckAndroid: boolean;

            /** an enum selecting how your experience’s audio should interact with the audio from other apps on Android: */
            interruptionModeAndroid: InterruptionModeAndroid;
        }

        function setIsEnabledAsync(value: boolean): Promise<void>;
        function setAudioModeAsync(mode: AudioMode): Promise<void>;

        /** This class represents a sound corresponding to an Asset or URL. */
        class Sound extends PlaybackObject {
            constructor();

            /**
             * Creates and loads a sound from source, with optional `initialStatus`, `onPlaybackStatusUpdate`, and `downloadFirst`.
             *
             * @returns A `Promise` that is rejected if creation failed, or fulfilled with the following dictionary if creation succeeded:
             * - `sound`: The newly created and loaded Sound object.
             * - `status`: The PlaybackStatus of the Sound object. See the AV documentation for further information.
             */
            static create(
                /**
                 * The source of the sound. The following forms are supported:
                 *
                 * - A dictionary of the form `{ uri: 'http://path/to/file' }` with a network URL pointing to an audio file on the web.
                 * - `require('path/to/file')` for an audio file asset in the source code directory.
                 * - An `Expo.Asset` object for an audio file asset.
                 */
                source: PlaybackSource,

                /** The initial intended PlaybackStatusToSet of the sound, whose values will override the default initial playback status. This value defaults to `{}` if no parameter is passed. */
                initialStatus?: PlaybackStatusToSet,

                /** A function taking a single parameter PlaybackStatus. This value defaults to `null` if no parameter is passed. */
                onPlaybackStatusUpdate?: ((status: PlaybackStatus) => void) | null,

                /** If set to true, the system will attempt to download the resource to the device before loading. This value defaults to `true`. Note that at the moment, this will only work for `source`s of the form `require('path/to/file')` or `Asset` objects. */
                downloadFirst?: boolean
            ): Promise<{ sound: Sound, status: PlaybackStatus }>;
        }

        class Recording {
            constructor();

            /** Gets the `status` of the `Recording`. */
            getStatusAsync(): Promise<RecordingStatus>;

            /** Sets a function to be called regularly with the `status` of the `Recording`. */
            setOnRecordingStatusUpdate(onRecordingStatusUpdate?: (status: RecordingStatus) => void): void;

            /** Sets the interval with which onRecordingStatusUpdate is called while the recording can record. This value defaults to 500 milliseconds. */
            setProgressUpdateInterval(progressUpdateIntervalMillis: number): void;

            /** Loads the recorder into memory and prepares it for recording. This must be called before calling `startAsync()`. This method can only be called if the `Recording` instance has never yet been prepared. */
            prepareToRecordAsync(
                /** Options for the recording, including sample rate, bitrate, channels, format, encoder, and extension. If no options are passed to `prepareToRecordAsync()`, the recorder will be created with options `Expo.Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY`. */
                options?: RecordingOptions
            ): Promise<RecordingStatus>;

            /** Begins recording. This method can only be called if the `Recording` has been prepared. */
            startAsync(): Promise<RecordingStatus>;

            /**
             * Pauses recording. This method can only be called if the Recording has been prepared.
             *
             * NOTE: This is only available on Android API version 24 and later.
             */
            pauseAsync(): Promise<RecordingStatus>;

            /** Stops the recording and deallocates the recorder from memory. This reverts the Recording instance to an unprepared state, and another Recording instance must be created in order to record again. This method can only be called if the `Recording` has been prepared. */
            stopAndUnloadAsync(): Promise<RecordingStatus>;

            /**
             * Gets the local URI of the Recording. Note that this will only succeed once the Recording is prepared to record.
             *
             * @returns A string with the local URI of the `Recording`, or `null` if the `Recording` is not prepared to record.
             */
            getURI(): string | null | undefined;

            /**
             * Creates and loads a new `Sound` object to play back the `Recording`. Note that this will only succeed once the `Recording` is done recording (once `stopAndUnloadAsync()` has been called).
             *
             * @returns A Promise that is rejected if creation failed, or fulfilled with the following dictionary if creation succeeded:
             * - `sound`: the newly created and loaded Sound object.
             * - `status`: the PlaybackStatus of the Sound object.
             */
            createNewLoadedSound(
                /** The initial intended `PlaybackStatusToSet` of the sound, whose values will override the default initial playback status. This value defaults to `{}` if no parameter is passed. */
                initialStatus?: PlaybackStatusToSet,

                /** A function taking a single parameter `PlaybackStatus`. This value defaults to `null` if no parameter is passed. */
                onPlaybackStatusUpdate?: ((status: PlaybackStatus) => void) | null
            ): Promise<{ sound: Sound, status: PlaybackStatus }>;
        }
    }

    // #region Video
    /**
     * Expo Video
     */
    export interface NaturalSize {
        width: number;
        height: number;
        orientation: Orientation;
    }

    export interface ReadyForDisplayEvent {
        naturalSize: NaturalSize;
        status: PlaybackStatus;
    }

    export enum FullscreenUpdateVariants {
        IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = 0,
        IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = 1,
        IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = 2,
        IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = 3
    }

    export interface FullscreenUpdateEvent {
        fullscreenUpdate: FullscreenUpdateVariants;
        status: PlaybackStatus;
    }

    export interface VideoProps {
        source?: PlaybackSource | null;
        posterSource?: URISource | RequireSource;

        resizeMode?: ResizeModeContain | ResizeModeCover | ResizeModeStretch;
        useNativeControls?: boolean;
        usePoster?: boolean;

        onPlaybackStatusUpdate?: (status: PlaybackStatus) => void;
        onReadyForDisplay?: (event: ReadyForDisplayEvent) => void;
        onIOSFullscreenUpdate?: (event: FullscreenUpdateEvent) => void;

        onLoadStart?: () => void;
        onLoad?: (status: PlaybackStatus) => void;
        onError?: (error: string) => void;

        status?: PlaybackStatusToSet;
        progressUpdateIntervalMillis?: number;
        positionMillis?: number;
        shouldPlay?: boolean;
        rate?: number;
        shouldCorrectPitch?: boolean;
        volume?: number;
        isMuted?: boolean;
        isLooping?: boolean;

        scaleX?: number;
        scaleY?: number;
        translateX?: number;
        translateY?: number;
        rotation?: number;
        ref?: Ref<PlaybackObject>;
    }

    export interface VideoState {
        showPoster: boolean;
    }

    export class Video extends Component<VideoProps, VideoState> {
        static RESIZE_MODE_CONTAIN: ResizeModeContain;
        static RESIZE_MODE_COVER: ResizeModeCover;
        static RESIZE_MODE_STRETCH: ResizeModeStretch;
        static IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
        static IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
        static IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
        static IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS: FullscreenUpdateVariants.IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS;
    }
    // #endregion

    // #region AppLoading
    /** The following props are recommended, but optional for the sake of backwards compatibility (they were introduced in SDK21). If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the `AppLoading` component. */
    export type AppLoadingProps = {
        /** A `function` that returns a `Promise`. The `Promise` should resolve when the app is done loading data and assets. */
        startAsync: () => Promise<void>;

        /** Required if you provide `startAsync`. Called when `startAsync` resolves or rejects. This should be used to set state and unmount the `AppLoading` component. */
        onFinish: () => void;

        /** If `startAsync` throws an error, it is caught and passed into the function provided to `onError`. */
        onError?: (error: Error) => void;
    } | {
            startAsync: null;
            onFinish: null;
            onError?: null;
        };

    /**
     * A React component that tells Expo to keep the app loading screen open if it is the first and only component rendered in your app. When it is removed, the loading screen will disappear and your app will be visible.
     *
     * This is incredibly useful to let you download and cache fonts, logo and icon images and other assets that you want to be sure the user has on their device for an optimal experience before rendering they start using the app.
     */
    export class AppLoading extends Component<AppLoadingProps> { }
    // #endregion AppLoading

    // #region BarCodeScanner
    /**
     * BarCodeScanner
     */
    export interface BarCodeScannerProps extends ViewProperties {
        type?: 'front' | 'back';
        torchMode?: 'on' | 'off';
        barCodeTypes?: string[];
        onBarCodeRead?: BarCodeReadCallback;
    }

    export class BarCodeScanner extends Component<BarCodeScannerProps> { }
    // #endregion

    // #region BlurView
    /**
     * BlurView
     */
    export interface BlurViewProps extends ViewProperties {
        tint: 'light' | 'default' | 'dark';
        intensity: number;
    }
    export class BlurView extends Component<BlurViewProps> { }
    // #endregion

    /**
     * Brightness
     */
    export namespace Brightness {
        function setBrightnessAsync(brightnessValue: FloatFromZeroToOne): Promise<void>;
        function getBrightnessAsync(): Promise<FloatFromZeroToOne>;
        function getSystemBrightnessAsync(): Promise<FloatFromZeroToOne>;
        function setSystemBrightnessAsync(brightnessValue: FloatFromZeroToOne): Promise<void>;
    }

    // #region Camera
    /**
     * Camera
     */
    interface PictureOptions {
        quality?: number;
    }
    export interface PictureResponse {
        uri: string;
        width: number;
        height: number;
        exif: string;
        base64: string;
    }
    export interface RecordingOptions {
        quality?: string | number;
        maxDuration?: number;
        maxFileSize?: number;
    }
    export class CameraObject {
        takePictureAsync(options: PictureOptions): Promise<PictureResponse>;
        recordAsync(options: RecordingOptions): Promise<{ uri: string; }>;
        stopRecording(): void;
        getSupportedRatiosAsync(): Promise<string[]>; // Android only
    }
    export interface CameraProps extends ViewProperties {
        flashMode?: string | number;
        type?: string | number;
        ratio?: string;
        autoFocus?: string | number | boolean;
        focusDepth?: FloatFromZeroToOne;
        zoom?: FloatFromZeroToOne;
        whiteBalance?: string | number;
        barCodeTypes?: string[];
        onCameraReady?: () => void;
        onMountError?: () => void;
        onBarCodeRead?: BarCodeReadCallback;
        ref?: Ref<CameraObject>;
    }
    interface CameraConstants {
        readonly Type: string;
        readonly FlashMode: string;
        readonly AutoFocus: string;
        readonly WhiteBalance: string;
        readonly VideoQuality: string;
        readonly BarCodeType: string;
    }
    export class Camera extends Component<CameraProps> {
        static readonly Constants: CameraConstants;
    }
    // #endregion

    /**
     * Constants
     */
    export namespace Constants {
        const appOwnership: 'expo' | 'standalone' | 'guest';
        const expoVersion: string;
        const deviceId: string;
        const deviceName: string;
        const deviceYearClass: number;
        const isDevice: boolean;

        interface Platform {
            ios: {
                platform: string;
                model: string;
                userInterfaceIdiom: string;
            };
        }
        const platform: Platform;
        const sessionId: string;
        const statusBarHeight: number;
        const systemFonts: string[];

        interface Manifest {
            name: string;
            description?: string;
            slug?: string;
            sdkVersion?: string;
            version?: string;
            orientation?: Orientation;
            primaryColor?: string;
            privacy?: 'public' | 'unlisted';
            scheme?: string;
            icon?: string;
            platforms?: string[];
            githubUrl?: string;
            notification?: {
                icon?: string,
                color?: string,
                androidMode?: 'default' | 'collapse',
                androidCollapsedTitle?: string
            };
            loading?: {
                icon?: string,
                exponentIconColor?: 'white' | 'blue',
                exponentIconGrayscale?: 1 | 0,
                backgroundImage?: string,
                backgroundColor?: string,
                hideExponentText?: boolean
            };
            appKey?: string;
            androidStatusBar?: {
                barStyle?: 'lignt-content' | 'dark-content',
                backgroundColor?: string
            };
            androidShowExponentNotificationInShellApp?: boolean;
            extra?: {
                [propName: string]: any
            };
            rnCliPath?: any;
            entryPoint?: string;
            packagerOpts?: {
                hostType?: string,
                dev?: boolean,
                strict?: boolean,
                minify?: boolean,
                urlType?: string,
                urlRandomness?: string,
                lanType?: string,
                [propName: string]: any
            };
            ignoreNodeModulesValidation?: any;
            nodeModulesPath?: string;
            ios?: {
                bundleIdentifier?: string,
                buildNumber?: string,
                config?: {
                    usesNonExemptEncryption?: boolean,
                    googleSignIn?: {
                        reservedClientId: string
                    }
                },
                supportsTablet?: boolean,
                infoPlist?: any
            };
            android?: {
                package?: string,
                versionCode?: string,
                config?: {
                    fabric?: {
                        apiKey: string,
                        buildSecret: string
                    },
                    googleMaps?: {
                        apiKey: string
                    },
                    googleSignIn?: {
                        apiKey: string,
                        certificateHash: string
                    }
                }
            };
            facebookScheme?: any;
            facebookAppId?: string;
            facebookDisplayName?: string;
            splash?: {
                backgroundColor?: string;
                resizeMode?: ResizeModeContain | ResizeModeCover;
                image?: string;
            };
            assetBundlePatterns?: string[];
            releaseChannel: string;
            [propName: string]: any;
        }
        const manifest: Manifest;
        const linkingUri: string;
    }

    /**
     * Contacts
     */
    export namespace Contacts {
        type PhoneNumbers = 'phoneNumbers';
        type Emails = 'emails';
        type Addresses = 'addresses';
        type Image = 'image';
        type Thumbnail = 'thumbnail';
        type Note = 'note';
        type Birthday = 'birthday';
        type NonGregorianBirthday = 'nonGregorianBirthday';
        type NamePrefix = 'namePrefix';
        type NameSuffix = 'nameSuffix';
        type PhoneticFirstName = 'phoneticFirstName';
        type PhoneticMiddleName = 'phoneticMiddleName';
        type PhoneticLastName = 'phoneticLastName';
        type SocialProfiles = 'socialProfiles';
        type InstantMessageAddresses = 'instantMessageAddresses';
        type UrlAddresses = 'urlAddresses';
        type Dates = 'dates';
        type Relationships = 'relationships';

        const PHONE_NUMBERS: PhoneNumbers;
        const EMAILS: Emails;
        const ADDRESSES: Addresses;
        const IMAGE: Image;
        const THUMBNAIL: Thumbnail;
        const NOTE: Note;
        const BIRTHDAY: Birthday;
        const NON_GREGORIAN_BIRTHDAY: NonGregorianBirthday;
        const NAME_PREFIX: NamePrefix;
        const NAME_SUFFIX: NameSuffix;
        const PHONETIC_FIRST_NAME: PhoneticFirstName;
        const PHONETIC_MIDDLE_NAME: PhoneticMiddleName;
        const PHONETIC_LAST_NAME: PhoneticLastName;
        const SOCIAL_PROFILES: SocialProfiles;
        const IM_ADDRESSES: InstantMessageAddresses;
        const URLS: UrlAddresses;
        const DATES: Dates;
        const RELATIONSHIPS: Relationships;

        type FieldType = PhoneNumbers | Emails | Addresses | Image | Thumbnail |
            Note | Birthday | NonGregorianBirthday | NamePrefix | NameSuffix |
            PhoneticFirstName | PhoneticMiddleName | PhoneticLastName | SocialProfiles |
            InstantMessageAddresses | UrlAddresses | Dates | Relationships;

        interface Options {
            pageSize?: number;
            pageOffset?: number;
            fields?: FieldType[];
        }

        interface Contact {
            id: string;
            contactType: string;
            name: string;
            firstName?: string;
            middleName?: string;
            lastName?: string;
            previousLastName?: string;
            namePrefix?: string;
            nameSuffix?: string;
            nickname?: string;
            phoneticFirstName?: string;
            phoneticMiddleName?: string;
            phoneticLastName?: string;
            emails?: Array<{
                email?: string;
                primary?: boolean;
                label: string;
                id: string;
            }>;
            phoneNumbers?: Array<{
                number?: string;
                primary?: boolean;
                digits?: string;
                countryCode?: string;
                label: string;
                id: string;
            }>;
            addresses?: Array<{
                street?: string;
                city?: string;
                country?: string;
                region?: string;
                neighborhood?: string;
                postalCode?: string;
                poBox?: string;
                isoCountryCode?: string;
                label: string;
                id: string;
            }>;
            socialProfiles?: Array<{
                service?: string;
                localizedProfile?: string;
                url?: string;
                username?: string;
                userId?: string;
                label: string;
                id: string;
            }>;
            instantMessageAddresses?: Array<{
                service?: string;
                username?: string;
                localizedService?: string;
                label: string;
                id: string;
            }>;
            urls?: {
                label: string;
                url?: string;
                id: string;
            };
            company?: string;
            jobTitle?: string;
            department?: string;
            imageAvailable?: boolean;
            image?: {
                uri?: string;
            };
            thumbnail?: {
                uri?: string;
            };
            note?: string;
            dates?: Array<{
                day?: number;
                month?: number;
                year?: number;
                id: string;
                label: string;
            }>;
            relationships?: Array<{
                label: string;
                name?: string;
                id: string;
            }>;
        }

        interface Response {
            data: Contact[];
            total: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        }

        function getContactsAsync(options: Options): Promise<Response>;
        function getContactByIdAsync(options: { id?: string; fields?: FieldType[] }): Promise<Contact>;
    }

    /**
     * DocumentPicker
     */
    export namespace DocumentPicker {
        interface Options {
            type?: string;
        }
        type Response = {
            type: 'success';
            uri: string;
            name: string;
            size: number;
        } | {
                type: 'cancel';
            };

        function getDocumentAsync(options?: Options): Promise<Response>;
    }

    /**
     * ErrorRecovery
     */
    export namespace ErrorRecovery {
        function setRecoveryProps(props: HashMap): void;
    }

    /**
     * Facebook
     */
    export namespace Facebook {
        interface Options {
            permissions?: string[];
            behavior?: 'web' | 'native' | 'browser' | 'system';
        }
        type Response = {
            type: 'success';
            token: string;
            expires: number;
        } | {
                type: 'cancel';
            };
        function logInWithReadPermissionsAsync(appId: string, options?: Options): Promise<Response>;
    }

    /**
     * Facebook Ads
     */
    export namespace FacebookAds {
        /**
         * Interstitial Ads
         */
        namespace InterstitialAdManager {
            function showAd(placementId: string): Promise<boolean>;
        }

        /**
         * Native Ads
         */
        type MediaCachePolicy = 'none' | 'icon' | 'image' | 'all';
        class NativeAdsManager {
            constructor(placementId: string, numberOfAdsToRequest?: number);
            disableAutoRefresh(): void;
            setMediaCachePolicy(cachePolicy: MediaCachePolicy): void;
        }

        function withNativeAd(component: Component<{
            icon?: string;
            coverImage?: string;
            title?: string;
            subtitle?: string;
            description?: string;
            callToActionText?: string;
            socialContext?: string;
        }>): Component<{ adsManager: NativeAdsManager }, { ad: any, canRequestAds: boolean }>;

        /**
         * Banner View
         */
        type AdType = 'large' | 'rectangle' | 'standard';

        interface BannerViewProps {
            type: AdType;
            placementId: string;
            onPress: () => void;
            onError: () => void;
        }

        class BannerView extends Component<BannerViewProps> { }

        /**
         * Ad Settings
         */
        namespace AdSettings {
            const currentDeviceHash: string;
            function addTestDevice(device: string): void;
            function clearTestDevices(): void;
            type SDKLogLevel = 'none' | 'debug' | 'verbose' | 'warning' | 'error' | 'notification';
            function setLogLevel(logLevel: SDKLogLevel): void;
            function setIsChildDirected(isDirected: boolean): void;
            function setMediationService(mediationService: string): void;
            function setUrlPrefix(urlPrefix: string): void;
        }
    }

    /**
     * FileSystem
     */
    export namespace FileSystem {
        type FileInfo = {
            exists: true;
            isDirectory: boolean;
            uri: string;
            size: number;
            modificationTime: number;
            md5?: Md5;
        } | {
                exists: false;
                isDirectory: false;
            };

        interface DownloadResult {
            uri: string;
            status: number;
            headers: { [name: string]: string };
            md5?: Md5;
        }

        const documentDirectory: string;
        const cacheDirectory: string;

        function getInfoAsync(fileUri: string, options?: { md5?: string, size?: boolean; }): Promise<FileInfo>;
        function readAsStringAsync(fileUri: string): Promise<string>;
        function writeAsStringAsync(fileUri: string, contents: string): Promise<void>;
        function deleteAsync(fileUri: string, options?: { idempotent: boolean; }): Promise<void>;
        function moveAsync(options: { from: string, to: string; }): Promise<void>;
        function copyAsync(options: { from: string, to: string; }): Promise<void>;
        function makeDirectoryAsync(dirUri: string, options?: { intermediates: boolean }): Promise<void>;
        function readDirectoryAsync(dirUri: string): Promise<string[]>;
        function downloadAsync(uri: string, fileUri: string, options?: { md5?: boolean; }): Promise<DownloadResult>;
        function createDownloadResumable(
            uri: string,
            fileUri: string,
            options?: DownloadOptions,
            callback?: (totalBytesWritten: number, totalBytesExpectedToWrite: number) => void,
            resumeData?: string | null
        ): DownloadResumable;

        interface PauseResult {
            url: string;
            fileUri: string;
            options: { md5: boolean; };
            resumeData: string;
        }

        interface DownloadOptions {
            md5?: boolean;
            headers?: { [name: string]: string };
        }

        interface DownloadProgressData {
            totalBytesWritten: number;
            totalBytesExpectedToWrite: number;
        }

        type DownloadProgressCallback = (data: DownloadProgressData) => void;

        class DownloadResumable {
            constructor(
                url: string,
                fileUri: string,
                options: DownloadOptions,
                callback?: DownloadProgressCallback,
                resumeData?: string
            );

            downloadAsync(): Promise<DownloadResult>;
            pauseAsync(): Promise<PauseResult>;
            resumeAsync(): Promise<DownloadResult>;
            savable(): PauseResult;
        }
    }

    /** Use TouchID/FaceID (iOS) or the Fingerprint API (Android) to authenticate the user with a fingerprint scan. */
    export namespace Fingerprint {
        type FingerprintAuthenticationResult = {
            success: true
        } | {
                success: false,

                /** Error code in the case where authentication fails. */
                error: string
            };

        /** Determine whether the Fingerprint scanner is available on the device. */
        function hasHardwareAsync(): Promise<boolean>;

        /** Determine whether the device has saved fingerprints to use for authentication. */
        function isEnrolledAsync(): Promise<boolean>;

        /**
         * Attempts to authenticate via Fingerprint. Android: When using the fingerprint module on Android, you need to provide a UI component to prompt the user to scan their fingerprint, as the OS has no default alert for it.
         *
         * @param promptMessage A message that is shown alongside the TouchID/FaceID prompt. (iOS only)
         */
        function authenticateAsync(promptMessageIOS?: string): Promise<FingerprintAuthenticationResult>;

        /** Cancels the fingerprint authentication flow. (Android only) */
        function cancelAuthenticate(): void;
    }

    /**
     * Font
     */
    export namespace Font {
        interface FontMap {
            [name: string]: RequireSource;
        }

        function loadAsync(name: string, url: string): Promise<void>;
        function loadAsync(map: FontMap): Promise<void>;
    }

    // #region GLView
    /**
     * GLView
     */
    export interface GLViewProps extends ViewProperties {
        onContextCreate(): void;
        msaaSamples: number;
    }
    export class GLView extends Component<GLViewProps, { msaaSamples: number }> { }
    // #endregion

    /**
     * Google
     */
    export namespace Google {
        interface LogInConfig {
            androidClientId?: string;
            androidStandaloneAppClientId?: string;
            iosClientId?: string;
            iosStandaloneAppClientId?: string;
            webClientId?: string;
            behavior?: 'system' | 'web';
            scopes?: string[];
        }

        type LogInResult = {
            type: 'cancel';
        } | {
                type: 'success';
                accessToken: string;
                idToken?: string;
                refreshToken?: string;
                serverAuthCode?: string;
                user: {
                    id: string;
                    name: string;
                    givenName: string;
                    familyName: string;
                    photoUrl?: string;
                    email?: string;
                }
            };

        function logInAsync(config: LogInConfig): Promise<LogInResult>;
    }

    /** Access the device gyroscope sensor to respond to changes in rotation in 3d space. */
    export namespace Gyroscope {
        interface GyroscopeObject {
            x: Axis;
            y: Axis;
            z: Axis;
        }

        /** A callback that is invoked when an gyroscope update is available. */
        function addListener(listener: (obj: GyroscopeObject) => any): EventSubscription;

        /** Remove all listeners. */
        function removeAllListeners(): void;

        /** Subscribe for updates to the gyroscope. */
        function setUpdateInterval(intervalMs: number): void;
    }

    /**
     * Image Picker
     */
    export namespace ImagePicker {
        interface ImageInfo {
            uri: string;
            width: number;
            height: number;
        }

        type ImageResult = { cancelled: true } | ({ cancelled: false } & ImageInfo);

        interface _MediaTypeOptions {
            All: 'All';
            Videos: 'Videos';
            Images: 'Images';
        }

        const MediaTypeOptions: _MediaTypeOptions;

        interface ImageLibraryOptions {
            allowsEditing?: boolean;
            aspect?: [number, number];
            quality?: number;
            mediaTypes?: keyof _MediaTypeOptions;
        }

        function launchImageLibraryAsync(options?: ImageLibraryOptions): Promise<ImageResult>;

        interface CameraOptions {
            allowsEditing?: boolean;
            aspect?: [number, number];
            quality?: number;
        }
        function launchCameraAsync(options?: CameraOptions): Promise<ImageResult>;
    }

    /**
     * IntentLauncherAndroid
     */
    export namespace IntentLauncherAndroid {
        const ACTION_ACCESSIBILITY_SETTINGS: string;
        const ACTION_APP_NOTIFICATION_REDACTION: string;
        const ACTION_CONDITION_PROVIDER_SETTINGS: string;
        const ACTION_NOTIFICATION_LISTENER_SETTINGS: string;
        const ACTION_PRINT_SETTINGS: string;
        const ACTION_ADD_ACCOUNT_SETTINGS: string;
        const ACTION_AIRPLANE_MODE_SETTINGS: string;
        const ACTION_APN_SETTINGS: string;
        const ACTION_APPLICATION_DETAILS_SETTINGS: string;
        const ACTION_APPLICATION_DEVELOPMENT_SETTINGS: string;
        const ACTION_APPLICATION_SETTINGS: string;
        const ACTION_APP_NOTIFICATION_SETTINGS: string;
        const ACTION_APP_OPS_SETTINGS: string;
        const ACTION_BATTERY_SAVER_SETTINGS: string;
        const ACTION_BLUETOOTH_SETTINGS: string;
        const ACTION_CAPTIONING_SETTINGS: string;
        const ACTION_CAST_SETTINGS: string;
        const ACTION_DATA_ROAMING_SETTINGS: string;
        const ACTION_DATE_SETTINGS: string;
        const ACTION_DEVICE_INFO_SETTINGS: string;
        const ACTION_DEVICE_NAME: string;
        const ACTION_DISPLAY_SETTINGS: string;
        const ACTION_DREAM_SETTINGS: string;
        const ACTION_HARD_KEYBOARD_SETTINGS: string;
        const ACTION_HOME_SETTINGS: string;
        const ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS: string;
        const ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: string;
        const ACTION_INPUT_METHOD_SETTINGS: string;
        const ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: string;
        const ACTION_INTERNAL_STORAGE_SETTINGS: string;
        const ACTION_LOCALE_SETTINGS: string;
        const ACTION_LOCATION_SOURCE_SETTINGS: string;
        const ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: string;
        const ACTION_MANAGE_APPLICATIONS_SETTINGS: string;
        const ACTION_MANAGE_DEFAULT_APPS_SETTINGS: string;
        const ACTION_MEMORY_CARD_SETTINGS: string;
        const ACTION_MONITORING_CERT_INFO: string;
        const ACTION_NETWORK_OPERATOR_SETTINGS: string;
        const ACTION_NFCSHARING_SETTINGS: string;
        const ACTION_NFC_PAYMENT_SETTINGS: string;
        const ACTION_NFC_SETTINGS: string;
        const ACTION_NIGHT_DISPLAY_SETTINGS: string;
        const ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: string;
        const ACTION_NOTIFICATION_SETTINGS: string;
        const ACTION_PAIRING_SETTINGS: string;
        const ACTION_PRIVACY_SETTINGS: string;
        const ACTION_QUICK_LAUNCH_SETTINGS: string;
        const ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: string;
        const ACTION_SECURITY_SETTINGS: string;
        const ACTION_SETTINGS: string;
        const ACTION_SHOW_ADMIN_SUPPORT_DETAILS: string;
        const ACTION_SHOW_INPUT_METHOD_PICKER: string;
        const ACTION_SHOW_REGULATORY_INFO: string;
        const ACTION_SHOW_REMOTE_BUGREPORT_DIALOG: string;
        const ACTION_SOUND_SETTINGS: string;
        const ACTION_STORAGE_MANAGER_SETTINGS: string;
        const ACTION_SYNC_SETTINGS: string;
        const ACTION_SYSTEM_UPDATE_SETTINGS: string;
        const ACTION_TETHER_PROVISIONING_UI: string;
        const ACTION_TRUSTED_CREDENTIALS_USER: string;
        const ACTION_USAGE_ACCESS_SETTINGS: string;
        const ACTION_USER_DICTIONARY_INSERT: string;
        const ACTION_USER_DICTIONARY_SETTINGS: string;
        const ACTION_USER_SETTINGS: string;
        const ACTION_VOICE_CONTROL_AIRPLANE_MODE: string;
        const ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: string;
        const ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: string;
        const ACTION_VOICE_INPUT_SETTINGS: string;
        const ACTION_VPN_SETTINGS: string;
        const ACTION_VR_LISTENER_SETTINGS: string;
        const ACTION_WEBVIEW_SETTINGS: string;
        const ACTION_WIFI_IP_SETTINGS: string;
        const ACTION_WIFI_SETTINGS: string;
        const ACTION_WIRELESS_SETTINGS: string;
        const ACTION_ZEN_MODE_AUTOMATION_SETTINGS: string;
        const ACTION_ZEN_MODE_EVENT_RULE_SETTINGS: string;
        const ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS: string;
        const ACTION_ZEN_MODE_PRIORITY_SETTINGS: string;
        const ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS: string;
        const ACTION_ZEN_MODE_SETTINGS: string;

        function startActivityAsync(activity: string, data?: HashMap): Promise<boolean>;
    }

    /**
     * KeepAwake
     */
    export class KeepAwake extends Component {
        static activate(): void;
        static deactivate(): void;
    }

    // #region LinearGradient
    /**
     * LinearGradient
     */
    export interface LinearGradientProps {
        colors: string[];
        start: [number, number];
        end: [number, number];
        locations: number[];
    }

    export class LinearGradient extends Component<LinearGradientProps> { }
    // #endregion

    /**
     * Location
     */
    export namespace Location {
        interface LocationOptions {
            enableHighAccuracy?: boolean;
            timeInterval?: number;
            distanceInterval?: number;
        }

        interface LocationProps {
            latitude: number;
            longitude: number;
        }

        interface Coords extends LocationProps {
            altitude: number;
            accuracy: number;
        }

        interface LocationData {
            coords: {
                heading: number;
                speed: number
            } & Coords;
            timestamp: number;
        }

        interface ProviderStatus {
            locationServicesEnabled: boolean;
            gpsAvailable?: boolean;
            networkAvailable?: boolean;
            passiveAvailable?: boolean;
        }

        interface HeadingStatus {
            magHeading: number;
            trueHeading: number;
            accuracy: number;
        }

        interface GeocodeData {
            city: string;
            street: string;
            region: string;
            postalCode: string;
            country: string;
            name: string;
        }

        type LocationCallback = (data: LocationData) => void;

        function getCurrentPositionAsync(options: LocationOptions): Promise<LocationData>;
        function watchPositionAsync(options: LocationOptions, callback: LocationCallback): EventSubscription;
        function getProviderStatusAsync(): Promise<ProviderStatus>;
        function getHeadingAsync(): Promise<HeadingStatus>;
        function watchHeadingAsync(callback: (status: HeadingStatus) => void): EventSubscription;
        function geocodeAsync(address: string): Promise<Coords>;
        function reverseGeocodeAsync(location: LocationProps): Promise<GeocodeData>;
        function setApiKey(key: string): void;
    }

    /**
     * Magnetometer
     */
    export namespace Magnetometer {
        interface MagnetometerObject {
            x: Axis;
            y: Axis;
            z: Axis;
        }

        function addListener(listener: (obj: MagnetometerObject) => any): EventSubscription;
        function removeAllListeners(): void;
        function setUpdateInterval(intervalMs: number): void;
    }

    /**
     * Notifications
     */
    export namespace Notifications {
        interface Notification {
            origin: 'selected' | 'received';
            data: any;
            remote: boolean;
            isMultiple: boolean;
        }

        interface LocalNotification {
            title: string;
            body?: string;
            data?: any;
            ios?: {
                sound?: boolean
            };
            android?: {
                sound?: boolean;
                icon?: string;
                color?: string;
                priority?: 'min' | 'low' | 'high' | 'max';
                sticky?: boolean;
                vibrate?: boolean | number[];
                link?: string;
            };
        }

        type LocalNotificationId = string | number;

        function addListener(listener: (notification: Notification) => any): EventSubscription;
        function getExponentPushTokenAsync(): Promise<string>;
        function presentLocalNotificationAsync(localNotification: LocalNotification): Promise<LocalNotificationId>;
        function scheduleLocalNotificationAsync(
            localNotification: LocalNotification,
            schedulingOptions: { time: Date | number, repeat?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' }
        ): Promise<LocalNotificationId>;
        function dismissNotificationAsync(localNotificationId: LocalNotificationId): Promise<void>;
        function dismissAllNotificationsAsync(): Promise<void>;
        function cancelScheduledNotificationAsync(localNotificationId: LocalNotificationId): Promise<void>;
        function cancelAllScheduledNotificationsAsync(): Promise<void>;
        function getBadgeNumberAsync(): Promise<number>;
        function setBadgeNumberAsync(number: number): Promise<void>;
    }

    /**
     * Pedometer
     */
    export namespace Pedometer {
        function isAvailableAsync(): Promise<boolean>;
        function getStepCountAsync(start: Date, end: Date): Promise<{ steps: number; }>;
        function watchStepCount(callback: (params: { steps: number; }) => void): EventSubscription;
    }

    /**
     * Permissions
     */
    export namespace Permissions {
        type PermissionType = 'remoteNotifications' | 'location' |
            'camera' | 'contacts' | 'audioRecording';
        type PermissionStatus = 'undetermined' | 'granted' | 'denied';
        type PermissionExpires = 'never';
        interface PermissionDetailsLocationIOS {
            scope: 'whenInUse' | 'always';
        }
        interface PermissionDetailsLocationAndroid {
            scope: 'fine' | 'coarse' | 'none';
        }
        interface PermissionResponse {
            status: PermissionStatus;
            expires: PermissionExpires;
            ios?: PermissionDetailsLocationIOS;
            android?: PermissionDetailsLocationAndroid;
        }

        function getAsync(type: PermissionType): Promise<PermissionResponse>;
        function askAsync(type: PermissionType): Promise<PermissionResponse>;

        const CAMERA: string;
        const CAMERA_ROLL: string;
        const AUDIO_RECORDING: string;
        const LOCATION: string;
        const REMOTE_NOTIFICATIONS: string;
        const NOTIFICATIONS: string;
        const CONTACTS: string;
    }

    /**
     * Register Root Component
     */
    export function registerRootComponent(component: Component): Component;

    /**
     * ScreenOrientation
     */
    export namespace ScreenOrientation {
        interface Orientation {
            ALL: 'ALL';
            ALL_BUT_UPSIDE_DOWN: 'ALL_BUT_UPSIDE_DOWN';
            PORTRAIT: 'PORTRAIT';
            PORTRAIT_UP: 'PORTRAIT_UP';
            PORTRAIT_DOWN: 'PORTRAIT_DOWN';
            LANDSCAPE: 'LANDSCAPE';
            LANDSCAPE_LEFT: 'LANDSCAPE_LEFT';
            LANDSCAPE_RIGHT: 'LANDSCAPE_RIGHT';
        }
        const Orientation: Orientation;
        function allow(orientation: string): void;
    }

    /**
     * SecureStore
     */
    export namespace SecureStore {
        interface SecureStoreOptions {
            keychainService?: string;
            keychainAccessible?: number;
        }
        function setItemAsync(key: string, value: string, options?: SecureStoreOptions): Promise<void>;
        function getItemAsync(key: string, options?: SecureStoreOptions): Promise<string | null>;
        function deleteItemAsync(key: string, options?: SecureStoreOptions): Promise<void>;
    }

    /**
     * Segment
     */
    export namespace Segment {
        function initialize(keys: {
            androidWriteKey: string;
            iosWriteKey: string;
        }): void;
        function identify(userId: string): void;
        function identifyWithTraits(userId: string, traits: object): void;
        function track(event: string): void;
        function reset(): void;
        function trackWithProperties(event: string, properties: object): void;
        function screen(screenName: string): void;
        function screenWithProperties(screenName: string, properties: object): void;
        function flush(): void;
    }

    /**
     * Speech
     */
    export namespace Speech {
        interface SpeechOptions {
            language?: string;
            pitch?: number;
            rate?: number;
            onStart?: () => void;
            onStopped?: () => void;
            onDone?: () => void;
            onError?: (error: string) => void;
        }

        function speak(text: string, options?: SpeechOptions): void;
        function stop(): void;
        function isSpeakingAsync(): Promise<boolean>;
    }

    /**
     * SQLite
     */
    export namespace SQLite {
        type Error = any;

        interface Database {
            transaction(
                callback: (transaction: Transaction) => any,
                error?: (error: Error) => any,     // TODO def of error
                success?: () => any
            ): void;
        }

        interface Transaction {
            executeSql(
                sqlStatement: string,
                arguments?: string[] | number[],
                success?: (transaction: Transaction, resultSet: ResultSet) => any,
                error?: (transaction: Transaction, error: Error) => any
            ): void;
        }

        interface ResultSet {
            insertId: number;
            rowAffected: number;
            rows: {
                length: number;
                item: (index: number) => any;
                _array: HashMap[];
            };
        }

        function openDatabase(
            name: string | {
                name: string,
                version?: string,
                description?: string,
                size?: number,
                callback?: () => any
            },
            version?: string,
            description?: string,
            size?: number,
            callback?: () => any
        ): any;
    }

    // #region Svg
    /**
     * Svg
     */
    export interface SvgCommonProps {
        fill?: string;
        fillOpacity?: number | string;
        stroke?: string;
        strokeWidth?: number | string;
        strokeOpacity?: number | string;
        strokeLinecap?: string;
        strokeLineJoin?: string;
        strokeDasharray?: any[];
        strokeDashoffset?: any;
        x?: number | string;
        y?: number | string;
        rotate?: number | string;
        scale?: number | string;
        origin?: number | string;
        originX?: number | string;
        originY?: number | string;
        id?: string;
        disabled?: boolean;
        onPress?: () => any;
        onPressIn?: () => any;
        onPressOut?: () => any;
        onLongPress?: () => any;
        delayPressIn?: number;
        delayPressOut?: number;
        delayLongPress?: number;
    }

    export interface SvgRectProps extends SvgCommonProps {
        width: number | string;
        height: number | string;
    }

    export interface SvgCircleProps extends SvgCommonProps {
        cx: number | string;
        cy: number | string;
        r: number | string;
    }

    export interface SvgEllipseProps extends SvgCommonProps {
        cx: number | string;
        cy: number | string;
        rx: number | string;
        ry: number | string;
    }

    export interface SvgLineProps extends SvgCommonProps {
        x1: number | string;
        y1: number | string;
        x2: number | string;
        y2: number | string;
    }

    export interface SvgPolyProps extends SvgCommonProps {
        points: string;
    }

    export interface SvgPathProps extends SvgCommonProps {
        d: string;
    }

    export interface SvgTextProps extends SvgCommonProps {
        textAnchor?: string;
        fontSize?: number | string;
        fontWeight?: string;
    }

    export interface SvgTSpanProps extends SvgTextProps {
        dx?: string;
        dy?: string;
    }

    export interface SvgTextPathProps extends SvgCommonProps {
        href?: string;
        startOffset?: string;
    }

    export interface SvgUseProps extends SvgCommonProps {
        href: string;
        x: number | string;
        y: number | string;
    }

    export interface SvgSymbolProps extends SvgCommonProps {
        viewBox: string;
        width: number | string;
        height: number | string;
    }

    export interface SvgLinearGradientProps extends SvgCommonProps {
        x1: number | string;
        x2: number | string;
        y1: number | string;
        y2: number | string;
    }

    export interface SvgRadialGradientProps extends SvgCommonProps {
        cx: number | string;
        cy: number | string;
        rx: number | string;
        ry: number | string;
        fx: number | string;
        fy: number | string;
        gradientUnits?: string;
    }

    export interface SvgStopProps extends SvgCommonProps {
        offset?: string;
        stopColor?: string;
        stopOpacity?: string;
    }

    export class Svg extends Component<{ width: number, height: number }> {
        static Circle: ComponentClass<SvgCircleProps>;
        static ClipPath: ComponentClass<SvgCommonProps>;
        static Defs: ComponentClass<{}>;
        static Ellipse: ComponentClass<SvgEllipseProps>;
        static G: ComponentClass<SvgCommonProps>;
        static Line: ComponentClass<SvgLineProps>;
        static LinearGradient: ComponentClass<SvgLinearGradientProps>;
        static Path: ComponentClass<SvgPathProps>;
        static Polygon: ComponentClass<SvgPolyProps>;
        static Polyline: ComponentClass<SvgPolyProps>;
        static RadialGradient: ComponentClass<SvgRadialGradientProps>;
        static Rect: ComponentClass<SvgRectProps>;
        static Stop: ComponentClass<SvgStopProps>;
        static Symbol: ComponentClass<SvgSymbolProps>;
        static Text: ComponentClass<SvgTextProps>;
        static TextPath: ComponentClass<SvgTextPathProps>;
        static TSpan: ComponentClass<SvgTSpanProps>;
        static Use: ComponentClass<SvgUseProps>;
    }
    // #endregion

    /**
     * Take Snapshot
     */
    export function takeSnapshotAsync(
        view?: (number | React.ReactElement<any>),
        options?: {
            width?: number,
            height?: number,
            format?: 'png' | 'jpg' | 'jpeg' | 'webm',
            quality?: number,
            result?: 'file' | 'base64' | 'data-uri',
        }
    ): Promise<string>;

    /** Helpful utility functions that don’t fit anywhere else, including some localization and internationalization methods. */
    export namespace Util {
        /** Returns the current device country code. */
        function getCurrentDeviceCountryAsync(): Promise<string>;

        /** Returns the current device locale as a string. */
        function getCurrentLocaleAsync(): Promise<string>;

        /** Returns the current device time zone name. */
        function getCurrentTimeZoneAsync(): Promise<string>;

        /** Reloads the current experience. This will fetch and load the newest available JavaScript supported by the device’s Expo environment. This is useful for triggering an update of your experience if you have published a new version. */
        function reload(): void;

        /** _Android only_. Invokes a callback when a new version of your app is successfully downloaded in the background. */
        function addNewVersionListenerExperimental(listener: (event: {
            manifest: object;
        }) => void): { remove(): void; };
    }

    /**
     * Web Browser
     */
    export namespace WebBrowser {
        function openBrowserAsync(url: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
        function openAuthSessionAsync(url: string, redirectUrl?: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
        function dismissBrowser(): Promise<{ type: 'dismissed' }>;
    }

    /**
     * ImageManipulator
     */
    export namespace ImageManipulator {
        interface ImageResult {
            uri: string;
            width: number;
            height: number;
            base64?: string;
        }
        interface SaveOptions {
            base64?: boolean;
            compress?: FloatFromZeroToOne;
            format?: 'jpeg' | 'png';
        }
        interface CropParameters {
            originX: number;
            originY: number;
            width: number;
            height: number;
        }
        interface ImageManipulationOptions {
            resize?: { width?: number; height?: number };
            rotate?: number;
            flip?: { vertical?: boolean; horizontal?: boolean };
            crop?: CropParameters;
        }
        function manipulate(uri: string, actions: ImageManipulationOptions, saveOptions?: SaveOptions): Promise<ImageResult>;
    }

    /**
     * FaceDetector
     */
    export namespace FaceDetector {
        interface Point {
            x: Axis;
            y: Axis;
        }
        interface FaceFeature {
            bounds: {
                size: {
                    width: number;
                    height: number;
                },
                origin: Point;
            };
            smilingProbability?: number;
            leftEarPosition?: Point;
            rightEarPosition?: Point;
            leftEyePosition?: Point;
            leftEyeOpenProbability?: number;
            rightEyePosition?: Point;
            rightEyeOpenProbability?: number;
            leftCheekPosition?: Point;
            rightCheekPosition?: Point;
            leftMouthPosition?: Point;
            mouthPosition?: Point;
            rightMouthPosition?: Point;
            bottomMouthPosition?: Point;
            noseBasePosition?: Point;
            yawAngle?: number;
            rollAngle?: number;
        }
        interface DetectFaceResult {
            faces: FaceFeature[];
            image: {
                uri: string;
                width: number;
                height: number;
                orientation: number;
            };
        }
        interface Mode {
            fast: 'fast';
            accurate: 'accurate';
        }
        interface _Shared {
            all: 'all';
            none: 'none';
        }
        type Landmarks = _Shared;
        type Classifications = _Shared;
        interface _Constants {
            Mode: Mode;
            Landmarks: Landmarks;
            Classifications: Classifications;
        }

        const Constants: _Constants;

        interface DetectionOptions {
            mode?: keyof Mode;
            detectLandmarks?: keyof Landmarks;
            runClassifications?: keyof Classifications;
        }

        function detectFaces(uri: string, options?: DetectionOptions): Promise<DetectFaceResult>;
    }
}
