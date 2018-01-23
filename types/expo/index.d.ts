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

type Axis = number;
type BarCodeReadCallback = (params: { type: string; data: string; }) => void;
type FloatFromZeroToOne = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
type Md5 = string;
type Orientation = 'portrait' | 'landscape';
type RequireSource = ImageRequireSource;
type ResizeModeContain = 'contain';
type ResizeModeCover = 'cover';
type ResizeModeStretch = 'stretch';
type URISource = ImageURISource;

interface HashMap { [key: string]: any; }

/** Access the device accelerometer sensor(s) to respond to changes in acceleration in 3d space. */
declare namespace Accelerometer {
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
declare namespace Amplitude {
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
 * Provides basic sample playback and recording.
 *
 * Note that Expo does not yet support backgrounding, so audio is not available to play in the background of your experience. Audio also automatically stops if headphones / bluetooth audio devices are disconnected.
 */
declare namespace Audio {
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

/**
 * AuthSession
 */
declare namespace AuthSession {
    function startAsync(options: { authUrl: string; returnUrl?: string; }): Promise<
        {
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
export type PlaybackStatus =
    {
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
declare namespace Brightness {
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
declare namespace Constants {
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
declare namespace Contacts {
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
declare namespace DocumentPicker {
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
declare namespace ErrorRecovery {
    function setRecoveryProps(props: HashMap): void;
}

/**
 * Facebook
 */
declare namespace Facebook {
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
declare namespace FacebookAds {
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
 * FaceDetector
 */
declare namespace FaceDetector {
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

/**
 * FileSystem
 */
declare namespace FileSystem {
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
declare namespace Fingerprint {
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
declare namespace Font {
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
declare namespace Google {
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
declare namespace Gyroscope {
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
 * ImageManipulator
 */
declare namespace ImageManipulator {
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
 * Image Picker
 */
declare namespace ImagePicker {
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
declare namespace IntentLauncherAndroid {
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
declare namespace Location {
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
declare namespace Magnetometer {
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
declare namespace Notifications {
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
declare namespace Pedometer {
    function isAvailableAsync(): Promise<boolean>;
    function getStepCountAsync(start: Date, end: Date): Promise<{ steps: number; }>;
    function watchStepCount(callback: (params: { steps: number; }) => void): EventSubscription;
}

/**
 * Permissions
 */
declare namespace Permissions {
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
declare namespace ScreenOrientation {
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
declare namespace SecureStore {
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
declare namespace Segment {
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
declare namespace Speech {
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
declare namespace SQLite {
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
    static Defs: ComponentClass;
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
declare namespace Util {
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

/**
 * Web Browser
 */
declare namespace WebBrowser {
    function openBrowserAsync(url: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
    function openAuthSessionAsync(url: string, redirectUrl?: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
    function dismissBrowser(): Promise<{ type: 'dismissed' }>;
}

declare module '@expo/vector-icons' {
  import { Component } from 'react'
  import { TextStyle } from 'react-native'

  interface BaseIconProps {
    size?: number
    color?: string
    style?: TextStyle
  }

  // Icon names taken from https://github.com/expo/vector-icons/tree/master/vendor/react-native-vector-icons/glyphmaps.
  interface EntypoProps extends BaseIconProps {
    name: '500px' | '500px-with-circle' | 'add-to-list' | 'add-user' | 'address' | 'adjust' | 'air' | 'aircraft' | 'aircraft-landing' | 'aircraft-take-off' | 'align-bottom' | 'align-horizontal-middle' | 'align-left' | 'align-right' | 'align-top' | 'align-vertical-middle' | 'app-store' | 'archive' | 'area-graph' | 'arrow-bold-down' | 'arrow-bold-left' | 'arrow-bold-right' | 'arrow-bold-up' | 'arrow-down' | 'arrow-left' | 'arrow-long-down' | 'arrow-long-left' | 'arrow-long-right' | 'arrow-long-up' | 'arrow-right' | 'arrow-up' | 'arrow-with-circle-down' | 'arrow-with-circle-left' | 'arrow-with-circle-right' | 'arrow-with-circle-up' | 'attachment' | 'awareness-ribbon' | 'back' | 'back-in-time' | 'baidu' | 'bar-graph' | 'basecamp' | 'battery' | 'beamed-note' | 'behance' | 'bell' | 'blackboard' | 'block' | 'book' | 'bookmark' | 'bookmarks' | 'bowl' | 'box' | 'briefcase' | 'browser' | 'brush' | 'bucket' | 'bug' | 'cake' | 'calculator' | 'calendar' | 'camera' | 'ccw' | 'chat' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-small-down' | 'chevron-small-left' | 'chevron-small-right' | 'chevron-small-up' | 'chevron-thin-down' | 'chevron-thin-left' | 'chevron-thin-right' | 'chevron-thin-up' | 'chevron-up' | 'chevron-with-circle-down' | 'chevron-with-circle-left' | 'chevron-with-circle-right' | 'chevron-with-circle-up' | 'circle' | 'circle-with-cross' | 'circle-with-minus' | 'circle-with-plus' | 'circular-graph' | 'clapperboard' | 'classic-computer' | 'clipboard' | 'clock' | 'cloud' | 'code' | 'cog' | 'colours' | 'compass' | 'controller-fast-backward' | 'controller-fast-forward' | 'controller-jump-to-start' | 'controller-next' | 'controller-paus' | 'controller-play' | 'controller-record' | 'controller-stop' | 'controller-volume' | 'copy' | 'creative-cloud' | 'creative-commons' | 'creative-commons-attribution' | 'creative-commons-noderivs' | 'creative-commons-noncommercial-eu' | 'creative-commons-noncommercial-us' | 'creative-commons-public-domain' | 'creative-commons-remix' | 'creative-commons-share' | 'creative-commons-sharealike' | 'credit' | 'credit-card' | 'crop' | 'cross' | 'cup' | 'cw' | 'cycle' | 'database' | 'dial-pad' | 'direction' | 'document' | 'document-landscape' | 'documents' | 'dot-single' | 'dots-three-horizontal' | 'dots-three-vertical' | 'dots-two-horizontal' | 'dots-two-vertical' | 'download' | 'dribbble' | 'dribbble-with-circle' | 'drink' | 'drive' | 'drop' | 'dropbox' | 'edit' | 'email' | 'emoji-flirt' | 'emoji-happy' | 'emoji-neutral' | 'emoji-sad' | 'erase' | 'eraser' | 'evernote' | 'export' | 'eye' | 'eye-with-line' | 'facebook' | 'facebook-with-circle' | 'feather' | 'fingerprint' | 'flag' | 'flash' | 'flashlight' | 'flat-brush' | 'flattr' | 'flickr' | 'flickr-with-circle' | 'flow-branch' | 'flow-cascade' | 'flow-line' | 'flow-parallel' | 'flow-tree' | 'flower' | 'folder' | 'folder-images' | 'folder-music' | 'folder-video' | 'forward' | 'foursquare' | 'funnel' | 'game-controller' | 'gauge' | 'github' | 'github-with-circle' | 'globe' | 'google-' | 'google--with-circle' | 'google-drive' | 'google-hangouts' | 'google-play' | 'graduation-cap' | 'grid' | 'grooveshark' | 'hair-cross' | 'hand' | 'heart' | 'heart-outlined' | 'help' | 'help-with-circle' | 'home' | 'hour-glass' | 'houzz' | 'icloud' | 'image' | 'image-inverted' | 'images' | 'inbox' | 'infinity' | 'info' | 'info-with-circle' | 'instagram' | 'instagram-with-circle' | 'install' | 'key' | 'keyboard' | 'lab-flask' | 'landline' | 'language' | 'laptop' | 'lastfm' | 'lastfm-with-circle' | 'layers' | 'leaf' | 'level-down' | 'level-up' | 'lifebuoy' | 'light-bulb' | 'light-down' | 'light-up' | 'line-graph' | 'link' | 'linkedin' | 'linkedin-with-circle' | 'list' | 'location' | 'location-pin' | 'lock' | 'lock-open' | 'log-out' | 'login' | 'loop' | 'magnet' | 'magnifying-glass' | 'mail' | 'mail-with-circle' | 'man' | 'map' | 'mask' | 'medal' | 'medium' | 'medium-with-circle' | 'megaphone' | 'menu' | 'merge' | 'message' | 'mic' | 'minus' | 'mixi' | 'mobile' | 'modern-mic' | 'moon' | 'mouse' | 'mouse-pointer' | 'music' | 'network' | 'new' | 'new-message' | 'news' | 'newsletter' | 'note' | 'notification' | 'notifications-off' | 'old-mobile' | 'old-phone' | 'onedrive' | 'open-book' | 'palette' | 'paper-plane' | 'paypal' | 'pencil' | 'phone' | 'picasa' | 'pie-chart' | 'pin' | 'pinterest' | 'pinterest-with-circle' | 'plus' | 'popup' | 'power-plug' | 'price-ribbon' | 'price-tag' | 'print' | 'progress-empty' | 'progress-full' | 'progress-one' | 'progress-two' | 'publish' | 'qq' | 'qq-with-circle' | 'quote' | 'radio' | 'raft' | 'raft-with-circle' | 'rainbow' | 'rdio' | 'rdio-with-circle' | 'remove-user' | 'renren' | 'reply' | 'reply-all' | 'resize-100-' | 'resize-full-screen' | 'retweet' | 'rocket' | 'round-brush' | 'rss' | 'ruler' | 'save' | 'scissors' | 'scribd' | 'select-arrows' | 'share' | 'share-alternative' | 'shareable' | 'shield' | 'shop' | 'shopping-bag' | 'shopping-basket' | 'shopping-cart' | 'shuffle' | 'signal' | 'sina-weibo' | 'skype' | 'skype-with-circle' | 'slideshare' | 'smashing' | 'sound' | 'sound-mix' | 'sound-mute' | 'soundcloud' | 'sports-club' | 'spotify' | 'spotify-with-circle' | 'spreadsheet' | 'squared-cross' | 'squared-minus' | 'squared-plus' | 'star' | 'star-outlined' | 'stopwatch' | 'stumbleupon' | 'stumbleupon-with-circle' | 'suitcase' | 'swap' | 'swarm' | 'sweden' | 'switch' | 'tablet' | 'tablet-mobile-combo' | 'tag' | 'text' | 'text-document' | 'text-document-inverted' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'thunder-cloud' | 'ticket' | 'time-slot' | 'tools' | 'traffic-cone' | 'trash' | 'tree' | 'triangle-down' | 'triangle-left' | 'triangle-right' | 'triangle-up' | 'tripadvisor' | 'trophy' | 'tumblr' | 'tumblr-with-circle' | 'tv' | 'twitter' | 'twitter-with-circle' | 'typing' | 'uninstall' | 'unread' | 'untag' | 'upload' | 'upload-to-cloud' | 'user' | 'users' | 'v-card' | 'video' | 'video-camera' | 'vimeo' | 'vimeo-with-circle' | 'vine' | 'vine-with-circle' | 'vinyl' | 'vk' | 'vk-alternitive' | 'vk-with-circle' | 'voicemail' | 'wallet' | 'warning' | 'water' | 'windows-store' | 'xing' | 'xing-with-circle' | 'yelp' | 'youko' | 'youko-with-circle' | 'youtube' | 'youtube-with-circle'
  }

  interface EvilIconsProps extends BaseIconProps {
    name: 'archive' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'bell' | 'calendar' | 'camera' | 'cart' | 'chart' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'clock' | 'close' | 'close-o' | 'comment' | 'credit-card' | 'envelope' | 'exclamation' | 'external-link' | 'eye' | 'gear' | 'heart' | 'image' | 'like' | 'link' | 'location' | 'lock' | 'minus' | 'navicon' | 'paperclip' | 'pencil' | 'play' | 'plus' | 'pointer' | 'question' | 'redo' | 'refresh' | 'retweet' | 'sc-facebook' | 'sc-github' | 'sc-google-plus' | 'sc-instagram' | 'sc-linkedin' | 'sc-odnoklassniki' | 'sc-pinterest' | 'sc-skype' | 'sc-soundcloud' | 'sc-telegram' | 'sc-tumblr' | 'sc-twitter' | 'sc-vimeo' | 'sc-vk' | 'sc-youtube' | 'search' | 'share-apple' | 'share-google' | 'spinner' | 'spinner-2' | 'spinner-3' | 'star' | 'tag' | 'trash' | 'trophy' | 'undo' | 'unlock' | 'user'
  }

  interface FeatherProps extends BaseIconProps {
    name: 'activity' | 'airplay' | 'alert-circle' | 'alert-octagon' | 'alert-triangle' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'aperture' | 'arrow-down' | 'arrow-down-left' | 'arrow-down-right' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-up-left' | 'arrow-up-right' | 'at-sign' | 'award' | 'bar-chart' | 'bar-chart-2' | 'battery' | 'battery-charging' | 'bell' | 'bell-off' | 'bluetooth' | 'bold' | 'book' | 'bookmark' | 'box' | 'briefcase' | 'calendar' | 'camera' | 'camera-off' | 'cast' | 'check' | 'check-circle' | 'check-square' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right' | 'chevrons-up' | 'chrome' | 'circle' | 'clipboard' | 'clock' | 'cloud' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-off' | 'cloud-rain' | 'cloud-snow' | 'codepen' | 'command' | 'compass' | 'copy' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'cpu' | 'credit-card' | 'crop' | 'crosshair' | 'delete' | 'disc' | 'download' | 'download-cloud' | 'droplet' | 'edit' | 'edit-2' | 'edit-3' | 'external-link' | 'eye' | 'eye-off' | 'facebook' | 'fast-forward' | 'feather' | 'file' | 'file-minus' | 'file-plus' | 'file-text' | 'film' | 'filter' | 'flag' | 'folder' | 'github' | 'gitlab' | 'globe' | 'grid' | 'hash' | 'headphones' | 'heart' | 'help-circle' | 'home' | 'image' | 'inbox' | 'info' | 'instagram' | 'italic' | 'layers' | 'layout' | 'life-buoy' | 'link' | 'link-2' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map' | 'map-pin' | 'maximize' | 'maximize-2' | 'menu' | 'message-circle' | 'message-square' | 'mic' | 'mic-off' | 'minimize' | 'minimize-2' | 'minus' | 'minus-circle' | 'minus-square' | 'monitor' | 'moon' | 'more-horizontal' | 'more-vertical' | 'move' | 'music' | 'navigation' | 'navigation-2' | 'octagon' | 'package' | 'paperclip' | 'pause' | 'pause-circle' | 'percent' | 'phone' | 'phone-call' | 'phone-forwarded' | 'phone-incoming' | 'phone-missed' | 'phone-off' | 'phone-outgoing' | 'pie-chart' | 'play' | 'play-circle' | 'plus' | 'plus-circle' | 'plus-square' | 'pocket' | 'power' | 'printer' | 'radio' | 'refresh-ccw' | 'refresh-cw' | 'repeat' | 'rewind' | 'rotate-ccw' | 'rotate-cw' | 'save' | 'scissors' | 'search' | 'server' | 'settings' | 'share' | 'share-2' | 'shield' | 'shopping-cart' | 'shuffle' | 'sidebar' | 'skip-back' | 'skip-forward' | 'slack' | 'slash' | 'sliders' | 'smartphone' | 'speaker' | 'square' | 'star' | 'stop-circle' | 'sun' | 'sunrise' | 'sunset' | 'tablet' | 'tag' | 'target' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'toggle-left' | 'toggle-right' | 'trash' | 'trash-2' | 'trending-down' | 'trending-up' | 'triangle' | 'tv' | 'twitter' | 'type' | 'umbrella' | 'underline' | 'unlock' | 'upload' | 'upload-cloud' | 'user' | 'user-check' | 'user-minus' | 'user-plus' | 'user-x' | 'users' | 'video' | 'video-off' | 'voicemail' | 'volume' | 'volume-1' | 'volume-2' | 'volume-x' | 'watch' | 'wifi' | 'wifi-off' | 'wind' | 'x' | 'x-circle' | 'x-square' | 'zap' | 'zoom-in' | 'zoom-out'
  }

  interface FontAwesomeProps extends BaseIconProps {
    name: 'glass' | 'music' | 'search' | 'envelope-o' | 'heart' | 'star' | 'star-o' | 'user' | 'film' | 'th-large' | 'th' | 'th-list' | 'check' | 'remove' | 'close' | 'times' | 'search-plus' | 'search-minus' | 'power-off' | 'signal' | 'gear' | 'cog' | 'trash-o' | 'home' | 'file-o' | 'clock-o' | 'road' | 'download' | 'arrow-circle-o-down' | 'arrow-circle-o-up' | 'inbox' | 'play-circle-o' | 'rotate-right' | 'repeat' | 'refresh' | 'list-alt' | 'lock' | 'flag' | 'headphones' | 'volume-off' | 'volume-down' | 'volume-up' | 'qrcode' | 'barcode' | 'tag' | 'tags' | 'book' | 'bookmark' | 'print' | 'camera' | 'font' | 'bold' | 'italic' | 'text-height' | 'text-width' | 'align-left' | 'align-center' | 'align-right' | 'align-justify' | 'list' | 'dedent' | 'outdent' | 'indent' | 'video-camera' | 'photo' | 'image' | 'picture-o' | 'pencil' | 'map-marker' | 'adjust' | 'tint' | 'edit' | 'pencil-square-o' | 'share-square-o' | 'check-square-o' | 'arrows' | 'step-backward' | 'fast-backward' | 'backward' | 'play' | 'pause' | 'stop' | 'forward' | 'fast-forward' | 'step-forward' | 'eject' | 'chevron-left' | 'chevron-right' | 'plus-circle' | 'minus-circle' | 'times-circle' | 'check-circle' | 'question-circle' | 'info-circle' | 'crosshairs' | 'times-circle-o' | 'check-circle-o' | 'ban' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-down' | 'mail-forward' | 'share' | 'expand' | 'compress' | 'plus' | 'minus' | 'asterisk' | 'exclamation-circle' | 'gift' | 'leaf' | 'fire' | 'eye' | 'eye-slash' | 'warning' | 'exclamation-triangle' | 'plane' | 'calendar' | 'random' | 'comment' | 'magnet' | 'chevron-up' | 'chevron-down' | 'retweet' | 'shopping-cart' | 'folder' | 'folder-open' | 'arrows-v' | 'arrows-h' | 'bar-chart-o' | 'bar-chart' | 'twitter-square' | 'facebook-square' | 'camera-retro' | 'key' | 'gears' | 'cogs' | 'comments' | 'thumbs-o-up' | 'thumbs-o-down' | 'star-half' | 'heart-o' | 'sign-out' | 'linkedin-square' | 'thumb-tack' | 'external-link' | 'sign-in' | 'trophy' | 'github-square' | 'upload' | 'lemon-o' | 'phone' | 'square-o' | 'bookmark-o' | 'phone-square' | 'twitter' | 'facebook-f' | 'facebook' | 'github' | 'unlock' | 'credit-card' | 'feed' | 'rss' | 'hdd-o' | 'bullhorn' | 'bell' | 'certificate' | 'hand-o-right' | 'hand-o-left' | 'hand-o-up' | 'hand-o-down' | 'arrow-circle-left' | 'arrow-circle-right' | 'arrow-circle-up' | 'arrow-circle-down' | 'globe' | 'wrench' | 'tasks' | 'filter' | 'briefcase' | 'arrows-alt' | 'group' | 'users' | 'chain' | 'link' | 'cloud' | 'flask' | 'cut' | 'scissors' | 'copy' | 'files-o' | 'paperclip' | 'save' | 'floppy-o' | 'square' | 'navicon' | 'reorder' | 'bars' | 'list-ul' | 'list-ol' | 'strikethrough' | 'underline' | 'table' | 'magic' | 'truck' | 'pinterest' | 'pinterest-square' | 'google-plus-square' | 'google-plus' | 'money' | 'caret-down' | 'caret-up' | 'caret-left' | 'caret-right' | 'columns' | 'unsorted' | 'sort' | 'sort-down' | 'sort-desc' | 'sort-up' | 'sort-asc' | 'envelope' | 'linkedin' | 'rotate-left' | 'undo' | 'legal' | 'gavel' | 'dashboard' | 'tachometer' | 'comment-o' | 'comments-o' | 'flash' | 'bolt' | 'sitemap' | 'umbrella' | 'paste' | 'clipboard' | 'lightbulb-o' | 'exchange' | 'cloud-download' | 'cloud-upload' | 'user-md' | 'stethoscope' | 'suitcase' | 'bell-o' | 'coffee' | 'cutlery' | 'file-text-o' | 'building-o' | 'hospital-o' | 'ambulance' | 'medkit' | 'fighter-jet' | 'beer' | 'h-square' | 'plus-square' | 'angle-double-left' | 'angle-double-right' | 'angle-double-up' | 'angle-double-down' | 'angle-left' | 'angle-right' | 'angle-up' | 'angle-down' | 'desktop' | 'laptop' | 'tablet' | 'mobile-phone' | 'mobile' | 'circle-o' | 'quote-left' | 'quote-right' | 'spinner' | 'circle' | 'mail-reply' | 'reply' | 'github-alt' | 'folder-o' | 'folder-open-o' | 'smile-o' | 'frown-o' | 'meh-o' | 'gamepad' | 'keyboard-o' | 'flag-o' | 'flag-checkered' | 'terminal' | 'code' | 'mail-reply-all' | 'reply-all' | 'star-half-empty' | 'star-half-full' | 'star-half-o' | 'location-arrow' | 'crop' | 'code-fork' | 'unlink' | 'chain-broken' | 'question' | 'info' | 'exclamation' | 'superscript' | 'subscript' | 'eraser' | 'puzzle-piece' | 'microphone' | 'microphone-slash' | 'shield' | 'calendar-o' | 'fire-extinguisher' | 'rocket' | 'maxcdn' | 'chevron-circle-left' | 'chevron-circle-right' | 'chevron-circle-up' | 'chevron-circle-down' | 'html5' | 'css3' | 'anchor' | 'unlock-alt' | 'bullseye' | 'ellipsis-h' | 'ellipsis-v' | 'rss-square' | 'play-circle' | 'ticket' | 'minus-square' | 'minus-square-o' | 'level-up' | 'level-down' | 'check-square' | 'pencil-square' | 'external-link-square' | 'share-square' | 'compass' | 'toggle-down' | 'caret-square-o-down' | 'toggle-up' | 'caret-square-o-up' | 'toggle-right' | 'caret-square-o-right' | 'euro' | 'eur' | 'gbp' | 'dollar' | 'usd' | 'rupee' | 'inr' | 'cny' | 'rmb' | 'yen' | 'jpy' | 'ruble' | 'rouble' | 'rub' | 'won' | 'krw' | 'bitcoin' | 'btc' | 'file' | 'file-text' | 'sort-alpha-asc' | 'sort-alpha-desc' | 'sort-amount-asc' | 'sort-amount-desc' | 'sort-numeric-asc' | 'sort-numeric-desc' | 'thumbs-up' | 'thumbs-down' | 'youtube-square' | 'youtube' | 'xing' | 'xing-square' | 'youtube-play' | 'dropbox' | 'stack-overflow' | 'instagram' | 'flickr' | 'adn' | 'bitbucket' | 'bitbucket-square' | 'tumblr' | 'tumblr-square' | 'long-arrow-down' | 'long-arrow-up' | 'long-arrow-left' | 'long-arrow-right' | 'apple' | 'windows' | 'android' | 'linux' | 'dribbble' | 'skype' | 'foursquare' | 'trello' | 'female' | 'male' | 'gittip' | 'gratipay' | 'sun-o' | 'moon-o' | 'archive' | 'bug' | 'vk' | 'weibo' | 'renren' | 'pagelines' | 'stack-exchange' | 'arrow-circle-o-right' | 'arrow-circle-o-left' | 'toggle-left' | 'caret-square-o-left' | 'dot-circle-o' | 'wheelchair' | 'vimeo-square' | 'turkish-lira' | 'try' | 'plus-square-o' | 'space-shuttle' | 'slack' | 'envelope-square' | 'wordpress' | 'openid' | 'institution' | 'bank' | 'university' | 'mortar-board' | 'graduation-cap' | 'yahoo' | 'google' | 'reddit' | 'reddit-square' | 'stumbleupon-circle' | 'stumbleupon' | 'delicious' | 'digg' | 'pied-piper-pp' | 'pied-piper-alt' | 'drupal' | 'joomla' | 'language' | 'fax' | 'building' | 'child' | 'paw' | 'spoon' | 'cube' | 'cubes' | 'behance' | 'behance-square' | 'steam' | 'steam-square' | 'recycle' | 'automobile' | 'car' | 'cab' | 'taxi' | 'tree' | 'spotify' | 'deviantart' | 'soundcloud' | 'database' | 'file-pdf-o' | 'file-word-o' | 'file-excel-o' | 'file-powerpoint-o' | 'file-photo-o' | 'file-picture-o' | 'file-image-o' | 'file-zip-o' | 'file-archive-o' | 'file-sound-o' | 'file-audio-o' | 'file-movie-o' | 'file-video-o' | 'file-code-o' | 'vine' | 'codepen' | 'jsfiddle' | 'life-bouy' | 'life-buoy' | 'life-saver' | 'support' | 'life-ring' | 'circle-o-notch' | 'ra' | 'resistance' | 'rebel' | 'ge' | 'empire' | 'git-square' | 'git' | 'y-combinator-square' | 'yc-square' | 'hacker-news' | 'tencent-weibo' | 'qq' | 'wechat' | 'weixin' | 'send' | 'paper-plane' | 'send-o' | 'paper-plane-o' | 'history' | 'circle-thin' | 'header' | 'paragraph' | 'sliders' | 'share-alt' | 'share-alt-square' | 'bomb' | 'soccer-ball-o' | 'futbol-o' | 'tty' | 'binoculars' | 'plug' | 'slideshare' | 'twitch' | 'yelp' | 'newspaper-o' | 'wifi' | 'calculator' | 'paypal' | 'google-wallet' | 'cc-visa' | 'cc-mastercard' | 'cc-discover' | 'cc-amex' | 'cc-paypal' | 'cc-stripe' | 'bell-slash' | 'bell-slash-o' | 'trash' | 'copyright' | 'at' | 'eyedropper' | 'paint-brush' | 'birthday-cake' | 'area-chart' | 'pie-chart' | 'line-chart' | 'lastfm' | 'lastfm-square' | 'toggle-off' | 'toggle-on' | 'bicycle' | 'bus' | 'ioxhost' | 'angellist' | 'cc' | 'shekel' | 'sheqel' | 'ils' | 'meanpath' | 'buysellads' | 'connectdevelop' | 'dashcube' | 'forumbee' | 'leanpub' | 'sellsy' | 'shirtsinbulk' | 'simplybuilt' | 'skyatlas' | 'cart-plus' | 'cart-arrow-down' | 'diamond' | 'ship' | 'user-secret' | 'motorcycle' | 'street-view' | 'heartbeat' | 'venus' | 'mars' | 'mercury' | 'intersex' | 'transgender' | 'transgender-alt' | 'venus-double' | 'mars-double' | 'venus-mars' | 'mars-stroke' | 'mars-stroke-v' | 'mars-stroke-h' | 'neuter' | 'genderless' | 'facebook-official' | 'pinterest-p' | 'whatsapp' | 'server' | 'user-plus' | 'user-times' | 'hotel' | 'bed' | 'viacoin' | 'train' | 'subway' | 'medium' | 'yc' | 'y-combinator' | 'optin-monster' | 'opencart' | 'expeditedssl' | 'battery-4' | 'battery' | 'battery-full' | 'battery-3' | 'battery-three-quarters' | 'battery-2' | 'battery-half' | 'battery-1' | 'battery-quarter' | 'battery-0' | 'battery-empty' | 'mouse-pointer' | 'i-cursor' | 'object-group' | 'object-ungroup' | 'sticky-note' | 'sticky-note-o' | 'cc-jcb' | 'cc-diners-club' | 'clone' | 'balance-scale' | 'hourglass-o' | 'hourglass-1' | 'hourglass-start' | 'hourglass-2' | 'hourglass-half' | 'hourglass-3' | 'hourglass-end' | 'hourglass' | 'hand-grab-o' | 'hand-rock-o' | 'hand-stop-o' | 'hand-paper-o' | 'hand-scissors-o' | 'hand-lizard-o' | 'hand-spock-o' | 'hand-pointer-o' | 'hand-peace-o' | 'trademark' | 'registered' | 'creative-commons' | 'gg' | 'gg-circle' | 'tripadvisor' | 'odnoklassniki' | 'odnoklassniki-square' | 'get-pocket' | 'wikipedia-w' | 'safari' | 'chrome' | 'firefox' | 'opera' | 'internet-explorer' | 'tv' | 'television' | 'contao' | '500px' | 'amazon' | 'calendar-plus-o' | 'calendar-minus-o' | 'calendar-times-o' | 'calendar-check-o' | 'industry' | 'map-pin' | 'map-signs' | 'map-o' | 'map' | 'commenting' | 'commenting-o' | 'houzz' | 'vimeo' | 'black-tie' | 'fonticons' | 'reddit-alien' | 'edge' | 'credit-card-alt' | 'codiepie' | 'modx' | 'fort-awesome' | 'usb' | 'product-hunt' | 'mixcloud' | 'scribd' | 'pause-circle' | 'pause-circle-o' | 'stop-circle' | 'stop-circle-o' | 'shopping-bag' | 'shopping-basket' | 'hashtag' | 'bluetooth' | 'bluetooth-b' | 'percent' | 'gitlab' | 'wpbeginner' | 'wpforms' | 'envira' | 'universal-access' | 'wheelchair-alt' | 'question-circle-o' | 'blind' | 'audio-description' | 'volume-control-phone' | 'braille' | 'assistive-listening-systems' | 'asl-interpreting' | 'american-sign-language-interpreting' | 'deafness' | 'hard-of-hearing' | 'deaf' | 'glide' | 'glide-g' | 'signing' | 'sign-language' | 'low-vision' | 'viadeo' | 'viadeo-square' | 'snapchat' | 'snapchat-ghost' | 'snapchat-square' | 'pied-piper' | 'first-order' | 'yoast' | 'themeisle' | 'google-plus-circle' | 'google-plus-official' | 'fa' | 'font-awesome' | 'handshake-o' | 'envelope-open' | 'envelope-open-o' | 'linode' | 'address-book' | 'address-book-o' | 'vcard' | 'address-card' | 'vcard-o' | 'address-card-o' | 'user-circle' | 'user-circle-o' | 'user-o' | 'id-badge' | 'drivers-license' | 'id-card' | 'drivers-license-o' | 'id-card-o' | 'quora' | 'free-code-camp' | 'telegram' | 'thermometer-4' | 'thermometer' | 'thermometer-full' | 'thermometer-3' | 'thermometer-three-quarters' | 'thermometer-2' | 'thermometer-half' | 'thermometer-1' | 'thermometer-quarter' | 'thermometer-0' | 'thermometer-empty' | 'shower' | 'bathtub' | 's15' | 'bath' | 'podcast' | 'window-maximize' | 'window-minimize' | 'window-restore' | 'times-rectangle' | 'window-close' | 'times-rectangle-o' | 'window-close-o' | 'bandcamp' | 'grav' | 'etsy' | 'imdb' | 'ravelry' | 'eercast' | 'microchip' | 'snowflake-o' | 'superpowers' | 'wpexplorer' | 'meetup'
  }

  interface FoundationProps extends BaseIconProps {
    name: 'address-book' | 'alert' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'annotate' | 'archive' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrows-compress' | 'arrows-expand' | 'arrows-in' | 'arrows-out' | 'asl' | 'asterisk' | 'at-sign' | 'background-color' | 'battery-empty' | 'battery-full' | 'battery-half' | 'bitcoin-circle' | 'bitcoin' | 'blind' | 'bluetooth' | 'bold' | 'book-bookmark' | 'book' | 'bookmark' | 'braille' | 'burst-new' | 'burst-sale' | 'burst' | 'calendar' | 'camera' | 'check' | 'checkbox' | 'clipboard-notes' | 'clipboard-pencil' | 'clipboard' | 'clock' | 'closed-caption' | 'cloud' | 'comment-minus' | 'comment-quotes' | 'comment-video' | 'comment' | 'comments' | 'compass' | 'contrast' | 'credit-card' | 'crop' | 'crown' | 'css3' | 'database' | 'die-five' | 'die-four' | 'die-one' | 'die-six' | 'die-three' | 'die-two' | 'dislike' | 'dollar-bill' | 'dollar' | 'download' | 'eject' | 'elevator' | 'euro' | 'eye' | 'fast-forward' | 'female-symbol' | 'female' | 'filter' | 'first-aid' | 'flag' | 'folder-add' | 'folder-lock' | 'folder' | 'foot' | 'foundation' | 'graph-bar' | 'graph-horizontal' | 'graph-pie' | 'graph-trend' | 'guide-dog' | 'hearing-aid' | 'heart' | 'home' | 'html5' | 'indent-less' | 'indent-more' | 'info' | 'italic' | 'key' | 'laptop' | 'layout' | 'lightbulb' | 'like' | 'link' | 'list-bullet' | 'list-number' | 'list-thumbnails' | 'list' | 'lock' | 'loop' | 'magnifying-glass' | 'mail' | 'male-female' | 'male-symbol' | 'male' | 'map' | 'marker' | 'megaphone' | 'microphone' | 'minus-circle' | 'minus' | 'mobile-signal' | 'mobile' | 'monitor' | 'mountains' | 'music' | 'next' | 'no-dogs' | 'no-smoking' | 'page-add' | 'page-copy' | 'page-csv' | 'page-delete' | 'page-doc' | 'page-edit' | 'page-export-csv' | 'page-export-doc' | 'page-export-pdf' | 'page-export' | 'page-filled' | 'page-multiple' | 'page-pdf' | 'page-remove' | 'page-search' | 'page' | 'paint-bucket' | 'paperclip' | 'pause' | 'paw' | 'paypal' | 'pencil' | 'photo' | 'play-circle' | 'play-video' | 'play' | 'plus' | 'pound' | 'power' | 'previous' | 'price-tag' | 'pricetag-multiple' | 'print' | 'prohibited' | 'projection-screen' | 'puzzle' | 'quote' | 'record' | 'refresh' | 'results-demographics' | 'results' | 'rewind-ten' | 'rewind' | 'rss' | 'safety-cone' | 'save' | 'share' | 'sheriff-badge' | 'shield' | 'shopping-bag' | 'shopping-cart' | 'shuffle' | 'skull' | 'social-500px' | 'social-adobe' | 'social-amazon' | 'social-android' | 'social-apple' | 'social-behance' | 'social-bing' | 'social-blogger' | 'social-delicious' | 'social-designer-news' | 'social-deviant-art' | 'social-digg' | 'social-dribbble' | 'social-drive' | 'social-dropbox' | 'social-evernote' | 'social-facebook' | 'social-flickr' | 'social-forrst' | 'social-foursquare' | 'social-game-center' | 'social-github' | 'social-google-plus' | 'social-hacker-news' | 'social-hi5' | 'social-instagram' | 'social-joomla' | 'social-lastfm' | 'social-linkedin' | 'social-medium' | 'social-myspace' | 'social-orkut' | 'social-path' | 'social-picasa' | 'social-pinterest' | 'social-rdio' | 'social-reddit' | 'social-skillshare' | 'social-skype' | 'social-smashing-mag' | 'social-snapchat' | 'social-spotify' | 'social-squidoo' | 'social-stack-overflow' | 'social-steam' | 'social-stumbleupon' | 'social-treehouse' | 'social-tumblr' | 'social-twitter' | 'social-vimeo' | 'social-windows' | 'social-xbox' | 'social-yahoo' | 'social-yelp' | 'social-youtube' | 'social-zerply' | 'social-zurb' | 'sound' | 'star' | 'stop' | 'strikethrough' | 'subscript' | 'superscript' | 'tablet-landscape' | 'tablet-portrait' | 'target-two' | 'target' | 'telephone-accessible' | 'telephone' | 'text-color' | 'thumbnails' | 'ticket' | 'torso-business' | 'torso-female' | 'torso' | 'torsos-all-female' | 'torsos-all' | 'torsos-female-male' | 'torsos-male-female' | 'torsos' | 'trash' | 'trees' | 'trophy' | 'underline' | 'universal-access' | 'unlink' | 'unlock' | 'upload-cloud' | 'upload' | 'usb' | 'video' | 'volume-none' | 'volume-strike' | 'volume' | 'web' | 'wheelchair' | 'widget' | 'wrench' | 'x-circle' | 'x' | 'yen' | 'zoom-in' | 'zoom-out'
  }

  interface IoniconsProps extends BaseIconProps {
    name: 'ios-add' | 'ios-add-circle' | 'ios-add-circle-outline' | 'ios-add-outline' | 'ios-alarm' | 'ios-alarm-outline' | 'ios-albums' | 'ios-albums-outline' | 'ios-alert' | 'ios-alert-outline' | 'ios-american-football' | 'ios-american-football-outline' | 'ios-analytics' | 'ios-analytics-outline' | 'ios-aperture' | 'ios-aperture-outline' | 'ios-apps' | 'ios-apps-outline' | 'ios-appstore' | 'ios-appstore-outline' | 'ios-archive' | 'ios-archive-outline' | 'ios-arrow-back' | 'ios-arrow-back-outline' | 'ios-arrow-down' | 'ios-arrow-down-outline' | 'ios-arrow-dropdown' | 'ios-arrow-dropdown-circle' | 'ios-arrow-dropdown-circle-outline' | 'ios-arrow-dropdown-outline' | 'ios-arrow-dropleft' | 'ios-arrow-dropleft-circle' | 'ios-arrow-dropleft-circle-outline' | 'ios-arrow-dropleft-outline' | 'ios-arrow-dropright' | 'ios-arrow-dropright-circle' | 'ios-arrow-dropright-circle-outline' | 'ios-arrow-dropright-outline' | 'ios-arrow-dropup' | 'ios-arrow-dropup-circle' | 'ios-arrow-dropup-circle-outline' | 'ios-arrow-dropup-outline' | 'ios-arrow-forward' | 'ios-arrow-forward-outline' | 'ios-arrow-round-back' | 'ios-arrow-round-back-outline' | 'ios-arrow-round-down' | 'ios-arrow-round-down-outline' | 'ios-arrow-round-forward' | 'ios-arrow-round-forward-outline' | 'ios-arrow-round-up' | 'ios-arrow-round-up-outline' | 'ios-arrow-up' | 'ios-arrow-up-outline' | 'ios-at' | 'ios-at-outline' | 'ios-attach' | 'ios-attach-outline' | 'ios-backspace' | 'ios-backspace-outline' | 'ios-barcode' | 'ios-barcode-outline' | 'ios-baseball' | 'ios-baseball-outline' | 'ios-basket' | 'ios-basket-outline' | 'ios-basketball' | 'ios-basketball-outline' | 'ios-battery-charging' | 'ios-battery-charging-outline' | 'ios-battery-dead' | 'ios-battery-dead-outline' | 'ios-battery-full' | 'ios-battery-full-outline' | 'ios-beaker' | 'ios-beaker-outline' | 'ios-beer' | 'ios-beer-outline' | 'ios-bicycle' | 'ios-bicycle-outline' | 'ios-bluetooth' | 'ios-bluetooth-outline' | 'ios-boat' | 'ios-boat-outline' | 'ios-body' | 'ios-body-outline' | 'ios-bonfire' | 'ios-bonfire-outline' | 'ios-book' | 'ios-book-outline' | 'ios-bookmark' | 'ios-bookmark-outline' | 'ios-bookmarks' | 'ios-bookmarks-outline' | 'ios-bowtie' | 'ios-bowtie-outline' | 'ios-briefcase' | 'ios-briefcase-outline' | 'ios-browsers' | 'ios-browsers-outline' | 'ios-brush' | 'ios-brush-outline' | 'ios-bug' | 'ios-bug-outline' | 'ios-build' | 'ios-build-outline' | 'ios-bulb' | 'ios-bulb-outline' | 'ios-bus' | 'ios-bus-outline' | 'ios-cafe' | 'ios-cafe-outline' | 'ios-calculator' | 'ios-calculator-outline' | 'ios-calendar' | 'ios-calendar-outline' | 'ios-call' | 'ios-call-outline' | 'ios-camera' | 'ios-camera-outline' | 'ios-car' | 'ios-car-outline' | 'ios-card' | 'ios-card-outline' | 'ios-cart' | 'ios-cart-outline' | 'ios-cash' | 'ios-cash-outline' | 'ios-chatboxes' | 'ios-chatboxes-outline' | 'ios-chatbubbles' | 'ios-chatbubbles-outline' | 'ios-checkbox' | 'ios-checkbox-outline' | 'ios-checkmark' | 'ios-checkmark-circle' | 'ios-checkmark-circle-outline' | 'ios-checkmark-outline' | 'ios-clipboard' | 'ios-clipboard-outline' | 'ios-clock' | 'ios-clock-outline' | 'ios-close' | 'ios-close-circle' | 'ios-close-circle-outline' | 'ios-close-outline' | 'ios-closed-captioning' | 'ios-closed-captioning-outline' | 'ios-cloud' | 'ios-cloud-circle' | 'ios-cloud-circle-outline' | 'ios-cloud-done' | 'ios-cloud-done-outline' | 'ios-cloud-download' | 'ios-cloud-download-outline' | 'ios-cloud-outline' | 'ios-cloud-upload' | 'ios-cloud-upload-outline' | 'ios-cloudy' | 'ios-cloudy-night' | 'ios-cloudy-night-outline' | 'ios-cloudy-outline' | 'ios-code' | 'ios-code-download' | 'ios-code-download-outline' | 'ios-code-outline' | 'ios-code-working' | 'ios-code-working-outline' | 'ios-cog' | 'ios-cog-outline' | 'ios-color-fill' | 'ios-color-fill-outline' | 'ios-color-filter' | 'ios-color-filter-outline' | 'ios-color-palette' | 'ios-color-palette-outline' | 'ios-color-wand' | 'ios-color-wand-outline' | 'ios-compass' | 'ios-compass-outline' | 'ios-construct' | 'ios-construct-outline' | 'ios-contact' | 'ios-contact-outline' | 'ios-contacts' | 'ios-contacts-outline' | 'ios-contract' | 'ios-contract-outline' | 'ios-contrast' | 'ios-contrast-outline' | 'ios-copy' | 'ios-copy-outline' | 'ios-create' | 'ios-create-outline' | 'ios-crop' | 'ios-crop-outline' | 'ios-cube' | 'ios-cube-outline' | 'ios-cut' | 'ios-cut-outline' | 'ios-desktop' | 'ios-desktop-outline' | 'ios-disc' | 'ios-disc-outline' | 'ios-document' | 'ios-document-outline' | 'ios-done-all' | 'ios-done-all-outline' | 'ios-download' | 'ios-download-outline' | 'ios-easel' | 'ios-easel-outline' | 'ios-egg' | 'ios-egg-outline' | 'ios-exit' | 'ios-exit-outline' | 'ios-expand' | 'ios-expand-outline' | 'ios-eye' | 'ios-eye-off' | 'ios-eye-off-outline' | 'ios-eye-outline' | 'ios-fastforward' | 'ios-fastforward-outline' | 'ios-female' | 'ios-female-outline' | 'ios-filing' | 'ios-filing-outline' | 'ios-film' | 'ios-film-outline' | 'ios-finger-print' | 'ios-finger-print-outline' | 'ios-flag' | 'ios-flag-outline' | 'ios-flame' | 'ios-flame-outline' | 'ios-flash' | 'ios-flash-outline' | 'ios-flask' | 'ios-flask-outline' | 'ios-flower' | 'ios-flower-outline' | 'ios-folder' | 'ios-folder-open' | 'ios-folder-open-outline' | 'ios-folder-outline' | 'ios-football' | 'ios-football-outline' | 'ios-funnel' | 'ios-funnel-outline' | 'ios-game-controller-a' | 'ios-game-controller-a-outline' | 'ios-game-controller-b' | 'ios-game-controller-b-outline' | 'ios-git-branch' | 'ios-git-branch-outline' | 'ios-git-commit' | 'ios-git-commit-outline' | 'ios-git-compare' | 'ios-git-compare-outline' | 'ios-git-merge' | 'ios-git-merge-outline' | 'ios-git-network' | 'ios-git-network-outline' | 'ios-git-pull-request' | 'ios-git-pull-request-outline' | 'ios-glasses' | 'ios-glasses-outline' | 'ios-globe' | 'ios-globe-outline' | 'ios-grid' | 'ios-grid-outline' | 'ios-hammer' | 'ios-hammer-outline' | 'ios-hand' | 'ios-hand-outline' | 'ios-happy' | 'ios-happy-outline' | 'ios-headset' | 'ios-headset-outline' | 'ios-heart' | 'ios-heart-outline' | 'ios-help' | 'ios-help-buoy' | 'ios-help-buoy-outline' | 'ios-help-circle' | 'ios-help-circle-outline' | 'ios-help-outline' | 'ios-home' | 'ios-home-outline' | 'ios-ice-cream' | 'ios-ice-cream-outline' | 'ios-image' | 'ios-image-outline' | 'ios-images' | 'ios-images-outline' | 'ios-infinite' | 'ios-infinite-outline' | 'ios-information' | 'ios-information-circle' | 'ios-information-circle-outline' | 'ios-information-outline' | 'ios-ionic' | 'ios-ionic-outline' | 'ios-ionitron' | 'ios-ionitron-outline' | 'ios-jet' | 'ios-jet-outline' | 'ios-key' | 'ios-key-outline' | 'ios-keypad' | 'ios-keypad-outline' | 'ios-laptop' | 'ios-laptop-outline' | 'ios-leaf' | 'ios-leaf-outline' | 'ios-link' | 'ios-link-outline' | 'ios-list' | 'ios-list-box' | 'ios-list-box-outline' | 'ios-list-outline' | 'ios-locate' | 'ios-locate-outline' | 'ios-lock' | 'ios-lock-outline' | 'ios-log-in' | 'ios-log-in-outline' | 'ios-log-out' | 'ios-log-out-outline' | 'ios-magnet' | 'ios-magnet-outline' | 'ios-mail' | 'ios-mail-open' | 'ios-mail-open-outline' | 'ios-mail-outline' | 'ios-male' | 'ios-male-outline' | 'ios-man' | 'ios-man-outline' | 'ios-map' | 'ios-map-outline' | 'ios-medal' | 'ios-medal-outline' | 'ios-medical' | 'ios-medical-outline' | 'ios-medkit' | 'ios-medkit-outline' | 'ios-megaphone' | 'ios-megaphone-outline' | 'ios-menu' | 'ios-menu-outline' | 'ios-mic' | 'ios-mic-off' | 'ios-mic-off-outline' | 'ios-mic-outline' | 'ios-microphone' | 'ios-microphone-outline' | 'ios-moon' | 'ios-moon-outline' | 'ios-more' | 'ios-more-outline' | 'ios-move' | 'ios-move-outline' | 'ios-musical-note' | 'ios-musical-note-outline' | 'ios-musical-notes' | 'ios-musical-notes-outline' | 'ios-navigate' | 'ios-navigate-outline' | 'ios-no-smoking' | 'ios-no-smoking-outline' | 'ios-notifications' | 'ios-notifications-off' | 'ios-notifications-off-outline' | 'ios-notifications-outline' | 'ios-nuclear' | 'ios-nuclear-outline' | 'ios-nutrition' | 'ios-nutrition-outline' | 'ios-open' | 'ios-open-outline' | 'ios-options' | 'ios-options-outline' | 'ios-outlet' | 'ios-outlet-outline' | 'ios-paper' | 'ios-paper-outline' | 'ios-paper-plane' | 'ios-paper-plane-outline' | 'ios-partly-sunny' | 'ios-partly-sunny-outline' | 'ios-pause' | 'ios-pause-outline' | 'ios-paw' | 'ios-paw-outline' | 'ios-people' | 'ios-people-outline' | 'ios-person' | 'ios-person-add' | 'ios-person-add-outline' | 'ios-person-outline' | 'ios-phone-landscape' | 'ios-phone-landscape-outline' | 'ios-phone-portrait' | 'ios-phone-portrait-outline' | 'ios-photos' | 'ios-photos-outline' | 'ios-pie' | 'ios-pie-outline' | 'ios-pin' | 'ios-pin-outline' | 'ios-pint' | 'ios-pint-outline' | 'ios-pizza' | 'ios-pizza-outline' | 'ios-plane' | 'ios-plane-outline' | 'ios-planet' | 'ios-planet-outline' | 'ios-play' | 'ios-play-outline' | 'ios-podium' | 'ios-podium-outline' | 'ios-power' | 'ios-power-outline' | 'ios-pricetag' | 'ios-pricetag-outline' | 'ios-pricetags' | 'ios-pricetags-outline' | 'ios-print' | 'ios-print-outline' | 'ios-pulse' | 'ios-pulse-outline' | 'ios-qr-scanner' | 'ios-qr-scanner-outline' | 'ios-quote' | 'ios-quote-outline' | 'ios-radio' | 'ios-radio-button-off' | 'ios-radio-button-off-outline' | 'ios-radio-button-on' | 'ios-radio-button-on-outline' | 'ios-radio-outline' | 'ios-rainy' | 'ios-rainy-outline' | 'ios-recording' | 'ios-recording-outline' | 'ios-redo' | 'ios-redo-outline' | 'ios-refresh' | 'ios-refresh-circle' | 'ios-refresh-circle-outline' | 'ios-refresh-outline' | 'ios-remove' | 'ios-remove-circle' | 'ios-remove-circle-outline' | 'ios-remove-outline' | 'ios-reorder' | 'ios-reorder-outline' | 'ios-repeat' | 'ios-repeat-outline' | 'ios-resize' | 'ios-resize-outline' | 'ios-restaurant' | 'ios-restaurant-outline' | 'ios-return-left' | 'ios-return-left-outline' | 'ios-return-right' | 'ios-return-right-outline' | 'ios-reverse-camera' | 'ios-reverse-camera-outline' | 'ios-rewind' | 'ios-rewind-outline' | 'ios-ribbon' | 'ios-ribbon-outline' | 'ios-rose' | 'ios-rose-outline' | 'ios-sad' | 'ios-sad-outline' | 'ios-school' | 'ios-school-outline' | 'ios-search' | 'ios-search-outline' | 'ios-send' | 'ios-send-outline' | 'ios-settings' | 'ios-settings-outline' | 'ios-share' | 'ios-share-alt' | 'ios-share-alt-outline' | 'ios-share-outline' | 'ios-shirt' | 'ios-shirt-outline' | 'ios-shuffle' | 'ios-shuffle-outline' | 'ios-skip-backward' | 'ios-skip-backward-outline' | 'ios-skip-forward' | 'ios-skip-forward-outline' | 'ios-snow' | 'ios-snow-outline' | 'ios-speedometer' | 'ios-speedometer-outline' | 'ios-square' | 'ios-square-outline' | 'ios-star' | 'ios-star-half' | 'ios-star-half-outline' | 'ios-star-outline' | 'ios-stats' | 'ios-stats-outline' | 'ios-stopwatch' | 'ios-stopwatch-outline' | 'ios-subway' | 'ios-subway-outline' | 'ios-sunny' | 'ios-sunny-outline' | 'ios-swap' | 'ios-swap-outline' | 'ios-switch' | 'ios-switch-outline' | 'ios-sync' | 'ios-sync-outline' | 'ios-tablet-landscape' | 'ios-tablet-landscape-outline' | 'ios-tablet-portrait' | 'ios-tablet-portrait-outline' | 'ios-tennisball' | 'ios-tennisball-outline' | 'ios-text' | 'ios-text-outline' | 'ios-thermometer' | 'ios-thermometer-outline' | 'ios-thumbs-down' | 'ios-thumbs-down-outline' | 'ios-thumbs-up' | 'ios-thumbs-up-outline' | 'ios-thunderstorm' | 'ios-thunderstorm-outline' | 'ios-time' | 'ios-time-outline' | 'ios-timer' | 'ios-timer-outline' | 'ios-train' | 'ios-train-outline' | 'ios-transgender' | 'ios-transgender-outline' | 'ios-trash' | 'ios-trash-outline' | 'ios-trending-down' | 'ios-trending-down-outline' | 'ios-trending-up' | 'ios-trending-up-outline' | 'ios-trophy' | 'ios-trophy-outline' | 'ios-umbrella' | 'ios-umbrella-outline' | 'ios-undo' | 'ios-undo-outline' | 'ios-unlock' | 'ios-unlock-outline' | 'ios-videocam' | 'ios-videocam-outline' | 'ios-volume-down' | 'ios-volume-down-outline' | 'ios-volume-mute' | 'ios-volume-mute-outline' | 'ios-volume-off' | 'ios-volume-off-outline' | 'ios-volume-up' | 'ios-volume-up-outline' | 'ios-walk' | 'ios-walk-outline' | 'ios-warning' | 'ios-warning-outline' | 'ios-watch' | 'ios-watch-outline' | 'ios-water' | 'ios-water-outline' | 'ios-wifi' | 'ios-wifi-outline' | 'ios-wine' | 'ios-wine-outline' | 'ios-woman' | 'ios-woman-outline' | 'logo-android' | 'logo-angular' | 'logo-apple' | 'logo-bitcoin' | 'logo-buffer' | 'logo-chrome' | 'logo-codepen' | 'logo-css3' | 'logo-designernews' | 'logo-dribbble' | 'logo-dropbox' | 'logo-euro' | 'logo-facebook' | 'logo-foursquare' | 'logo-freebsd-devil' | 'logo-github' | 'logo-google' | 'logo-googleplus' | 'logo-hackernews' | 'logo-html5' | 'logo-instagram' | 'logo-javascript' | 'logo-linkedin' | 'logo-markdown' | 'logo-nodejs' | 'logo-octocat' | 'logo-pinterest' | 'logo-playstation' | 'logo-python' | 'logo-reddit' | 'logo-rss' | 'logo-sass' | 'logo-skype' | 'logo-snapchat' | 'logo-steam' | 'logo-tumblr' | 'logo-tux' | 'logo-twitch' | 'logo-twitter' | 'logo-usd' | 'logo-vimeo' | 'logo-whatsapp' | 'logo-windows' | 'logo-wordpress' | 'logo-xbox' | 'logo-yahoo' | 'logo-yen' | 'logo-youtube' | 'md-add' | 'md-add-circle' | 'md-alarm' | 'md-albums' | 'md-alert' | 'md-american-football' | 'md-analytics' | 'md-aperture' | 'md-apps' | 'md-appstore' | 'md-archive' | 'md-arrow-back' | 'md-arrow-down' | 'md-arrow-dropdown' | 'md-arrow-dropdown-circle' | 'md-arrow-dropleft' | 'md-arrow-dropleft-circle' | 'md-arrow-dropright' | 'md-arrow-dropright-circle' | 'md-arrow-dropup' | 'md-arrow-dropup-circle' | 'md-arrow-forward' | 'md-arrow-round-back' | 'md-arrow-round-down' | 'md-arrow-round-forward' | 'md-arrow-round-up' | 'md-arrow-up' | 'md-at' | 'md-attach' | 'md-backspace' | 'md-barcode' | 'md-baseball' | 'md-basket' | 'md-basketball' | 'md-battery-charging' | 'md-battery-dead' | 'md-battery-full' | 'md-beaker' | 'md-beer' | 'md-bicycle' | 'md-bluetooth' | 'md-boat' | 'md-body' | 'md-bonfire' | 'md-book' | 'md-bookmark' | 'md-bookmarks' | 'md-bowtie' | 'md-briefcase' | 'md-browsers' | 'md-brush' | 'md-bug' | 'md-build' | 'md-bulb' | 'md-bus' | 'md-cafe' | 'md-calculator' | 'md-calendar' | 'md-call' | 'md-camera' | 'md-car' | 'md-card' | 'md-cart' | 'md-cash' | 'md-chatboxes' | 'md-chatbubbles' | 'md-checkbox' | 'md-checkbox-outline' | 'md-checkmark' | 'md-checkmark-circle' | 'md-checkmark-circle-outline' | 'md-clipboard' | 'md-clock' | 'md-close' | 'md-close-circle' | 'md-closed-captioning' | 'md-cloud' | 'md-cloud-circle' | 'md-cloud-done' | 'md-cloud-download' | 'md-cloud-outline' | 'md-cloud-upload' | 'md-cloudy' | 'md-cloudy-night' | 'md-code' | 'md-code-download' | 'md-code-working' | 'md-cog' | 'md-color-fill' | 'md-color-filter' | 'md-color-palette' | 'md-color-wand' | 'md-compass' | 'md-construct' | 'md-contact' | 'md-contacts' | 'md-contract' | 'md-contrast' | 'md-copy' | 'md-create' | 'md-crop' | 'md-cube' | 'md-cut' | 'md-desktop' | 'md-disc' | 'md-document' | 'md-done-all' | 'md-download' | 'md-easel' | 'md-egg' | 'md-exit' | 'md-expand' | 'md-eye' | 'md-eye-off' | 'md-fastforward' | 'md-female' | 'md-filing' | 'md-film' | 'md-finger-print' | 'md-flag' | 'md-flame' | 'md-flash' | 'md-flask' | 'md-flower' | 'md-folder' | 'md-folder-open' | 'md-football' | 'md-funnel' | 'md-game-controller-a' | 'md-game-controller-b' | 'md-git-branch' | 'md-git-commit' | 'md-git-compare' | 'md-git-merge' | 'md-git-network' | 'md-git-pull-request' | 'md-glasses' | 'md-globe' | 'md-grid' | 'md-hammer' | 'md-hand' | 'md-happy' | 'md-headset' | 'md-heart' | 'md-heart-outline' | 'md-help' | 'md-help-buoy' | 'md-help-circle' | 'md-home' | 'md-ice-cream' | 'md-image' | 'md-images' | 'md-infinite' | 'md-information' | 'md-information-circle' | 'md-ionic' | 'md-ionitron' | 'md-jet' | 'md-key' | 'md-keypad' | 'md-laptop' | 'md-leaf' | 'md-link' | 'md-list' | 'md-list-box' | 'md-locate' | 'md-lock' | 'md-log-in' | 'md-log-out' | 'md-magnet' | 'md-mail' | 'md-mail-open' | 'md-male' | 'md-man' | 'md-map' | 'md-medal' | 'md-medical' | 'md-medkit' | 'md-megaphone' | 'md-menu' | 'md-mic' | 'md-mic-off' | 'md-microphone' | 'md-moon' | 'md-more' | 'md-move' | 'md-musical-note' | 'md-musical-notes' | 'md-navigate' | 'md-no-smoking' | 'md-notifications' | 'md-notifications-off' | 'md-notifications-outline' | 'md-nuclear' | 'md-nutrition' | 'md-open' | 'md-options' | 'md-outlet' | 'md-paper' | 'md-paper-plane' | 'md-partly-sunny' | 'md-pause' | 'md-paw' | 'md-people' | 'md-person' | 'md-person-add' | 'md-phone-landscape' | 'md-phone-portrait' | 'md-photos' | 'md-pie' | 'md-pin' | 'md-pint' | 'md-pizza' | 'md-plane' | 'md-planet' | 'md-play' | 'md-podium' | 'md-power' | 'md-pricetag' | 'md-pricetags' | 'md-print' | 'md-pulse' | 'md-qr-scanner' | 'md-quote' | 'md-radio' | 'md-radio-button-off' | 'md-radio-button-on' | 'md-rainy' | 'md-recording' | 'md-redo' | 'md-refresh' | 'md-refresh-circle' | 'md-remove' | 'md-remove-circle' | 'md-reorder' | 'md-repeat' | 'md-resize' | 'md-restaurant' | 'md-return-left' | 'md-return-right' | 'md-reverse-camera' | 'md-rewind' | 'md-ribbon' | 'md-rose' | 'md-sad' | 'md-school' | 'md-search' | 'md-send' | 'md-settings' | 'md-share' | 'md-share-alt' | 'md-shirt' | 'md-shuffle' | 'md-skip-backward' | 'md-skip-forward' | 'md-snow' | 'md-speedometer' | 'md-square' | 'md-square-outline' | 'md-star' | 'md-star-half' | 'md-star-outline' | 'md-stats' | 'md-stopwatch' | 'md-subway' | 'md-sunny' | 'md-swap' | 'md-switch' | 'md-sync' | 'md-tablet-landscape' | 'md-tablet-portrait' | 'md-tennisball' | 'md-text' | 'md-thermometer' | 'md-thumbs-down' | 'md-thumbs-up' | 'md-thunderstorm' | 'md-time' | 'md-timer' | 'md-train' | 'md-transgender' | 'md-trash' | 'md-trending-down' | 'md-trending-up' | 'md-trophy' | 'md-umbrella' | 'md-undo' | 'md-unlock' | 'md-videocam' | 'md-volume-down' | 'md-volume-mute' | 'md-volume-off' | 'md-volume-up' | 'md-walk' | 'md-warning' | 'md-watch' | 'md-water' | 'md-wifi' | 'md-wine' | 'md-woman'
  }

  interface MaterialCommunityIconsProps extends BaseIconProps {
    name: 'access-point' | 'access-point-network' | 'account' | 'account-alert' | 'account-box' | 'account-box-outline' | 'account-card-details' | 'account-check' | 'account-circle' | 'account-convert' | 'account-edit' | 'account-key' | 'account-location' | 'account-minus' | 'account-multiple' | 'account-multiple-minus' | 'account-multiple-outline' | 'account-multiple-plus' | 'account-network' | 'account-off' | 'account-outline' | 'account-plus' | 'account-remove' | 'account-search' | 'account-settings' | 'account-settings-variant' | 'account-star' | 'account-switch' | 'adjust' | 'air-conditioner' | 'airballoon' | 'airplane' | 'airplane-landing' | 'airplane-off' | 'airplane-takeoff' | 'airplay' | 'alarm' | 'alarm-bell' | 'alarm-check' | 'alarm-light' | 'alarm-multiple' | 'alarm-off' | 'alarm-plus' | 'alarm-snooze' | 'album' | 'alert' | 'alert-box' | 'alert-circle' | 'alert-circle-outline' | 'alert-decagram' | 'alert-octagon' | 'alert-octagram' | 'alert-outline' | 'all-inclusive' | 'alpha' | 'alphabetical' | 'altimeter' | 'amazon' | 'amazon-clouddrive' | 'ambulance' | 'amplifier' | 'anchor' | 'android' | 'android-debug-bridge' | 'android-head' | 'android-studio' | 'angular' | 'angularjs' | 'animation' | 'apple' | 'apple-finder' | 'apple-ios' | 'apple-keyboard-caps' | 'apple-keyboard-command' | 'apple-keyboard-control' | 'apple-keyboard-option' | 'apple-keyboard-shift' | 'apple-mobileme' | 'apple-safari' | 'application' | 'approval' | 'apps' | 'archive' | 'arrange-bring-forward' | 'arrange-bring-to-front' | 'arrange-send-backward' | 'arrange-send-to-back' | 'arrow-all' | 'arrow-bottom-left' | 'arrow-bottom-right' | 'arrow-collapse' | 'arrow-collapse-all' | 'arrow-collapse-down' | 'arrow-collapse-left' | 'arrow-collapse-right' | 'arrow-collapse-up' | 'arrow-down' | 'arrow-down-bold' | 'arrow-down-bold-box' | 'arrow-down-bold-box-outline' | 'arrow-down-bold-circle' | 'arrow-down-bold-circle-outline' | 'arrow-down-bold-hexagon-outline' | 'arrow-down-box' | 'arrow-down-drop-circle' | 'arrow-down-drop-circle-outline' | 'arrow-down-thick' | 'arrow-expand' | 'arrow-expand-all' | 'arrow-expand-down' | 'arrow-expand-left' | 'arrow-expand-right' | 'arrow-expand-up' | 'arrow-left' | 'arrow-left-bold' | 'arrow-left-bold-box' | 'arrow-left-bold-box-outline' | 'arrow-left-bold-circle' | 'arrow-left-bold-circle-outline' | 'arrow-left-bold-hexagon-outline' | 'arrow-left-box' | 'arrow-left-drop-circle' | 'arrow-left-drop-circle-outline' | 'arrow-left-thick' | 'arrow-right' | 'arrow-right-bold' | 'arrow-right-bold-box' | 'arrow-right-bold-box-outline' | 'arrow-right-bold-circle' | 'arrow-right-bold-circle-outline' | 'arrow-right-bold-hexagon-outline' | 'arrow-right-box' | 'arrow-right-drop-circle' | 'arrow-right-drop-circle-outline' | 'arrow-right-thick' | 'arrow-top-left' | 'arrow-top-right' | 'arrow-up' | 'arrow-up-bold' | 'arrow-up-bold-box' | 'arrow-up-bold-box-outline' | 'arrow-up-bold-circle' | 'arrow-up-bold-circle-outline' | 'arrow-up-bold-hexagon-outline' | 'arrow-up-box' | 'arrow-up-drop-circle' | 'arrow-up-drop-circle-outline' | 'arrow-up-thick' | 'assistant' | 'asterisk' | 'at' | 'atom' | 'attachment' | 'audiobook' | 'auto-fix' | 'auto-upload' | 'autorenew' | 'av-timer' | 'baby' | 'baby-buggy' | 'backburger' | 'backspace' | 'backup-restore' | 'bandcamp' | 'bank' | 'barcode' | 'barcode-scan' | 'barley' | 'barrel' | 'basecamp' | 'basket' | 'basket-fill' | 'basket-unfill' | 'battery' | 'battery-10' | 'battery-20' | 'battery-30' | 'battery-40' | 'battery-50' | 'battery-60' | 'battery-70' | 'battery-80' | 'battery-90' | 'battery-alert' | 'battery-charging' | 'battery-charging-100' | 'battery-charging-20' | 'battery-charging-30' | 'battery-charging-40' | 'battery-charging-60' | 'battery-charging-80' | 'battery-charging-90' | 'battery-minus' | 'battery-negative' | 'battery-outline' | 'battery-plus' | 'battery-positive' | 'battery-unknown' | 'beach' | 'beaker' | 'beats' | 'beer' | 'behance' | 'bell' | 'bell-off' | 'bell-outline' | 'bell-plus' | 'bell-ring' | 'bell-ring-outline' | 'bell-sleep' | 'beta' | 'bible' | 'bike' | 'bing' | 'binoculars' | 'bio' | 'biohazard' | 'bitbucket' | 'black-mesa' | 'blackberry' | 'blender' | 'blinds' | 'block-helper' | 'blogger' | 'bluetooth' | 'bluetooth-audio' | 'bluetooth-connect' | 'bluetooth-off' | 'bluetooth-settings' | 'bluetooth-transfer' | 'blur' | 'blur-linear' | 'blur-off' | 'blur-radial' | 'bomb' | 'bomb-off' | 'bone' | 'book' | 'book-minus' | 'book-multiple' | 'book-multiple-variant' | 'book-open' | 'book-open-page-variant' | 'book-open-variant' | 'book-plus' | 'book-secure' | 'book-unsecure' | 'book-variant' | 'bookmark' | 'bookmark-check' | 'bookmark-music' | 'bookmark-outline' | 'bookmark-plus' | 'bookmark-plus-outline' | 'bookmark-remove' | 'boombox' | 'bootstrap' | 'border-all' | 'border-bottom' | 'border-color' | 'border-horizontal' | 'border-inside' | 'border-left' | 'border-none' | 'border-outside' | 'border-right' | 'border-style' | 'border-top' | 'border-vertical' | 'bow-tie' | 'bowl' | 'bowling' | 'box' | 'box-cutter' | 'box-shadow' | 'bridge' | 'briefcase' | 'briefcase-check' | 'briefcase-download' | 'briefcase-upload' | 'brightness-1' | 'brightness-2' | 'brightness-3' | 'brightness-4' | 'brightness-5' | 'brightness-6' | 'brightness-7' | 'brightness-auto' | 'broom' | 'brush' | 'buffer' | 'bug' | 'bulletin-board' | 'bullhorn' | 'bullseye' | 'burst-mode' | 'bus' | 'bus-articulated-end' | 'bus-articulated-front' | 'bus-double-decker' | 'bus-school' | 'bus-side' | 'cached' | 'cake' | 'cake-layered' | 'cake-variant' | 'calculator' | 'calendar' | 'calendar-blank' | 'calendar-check' | 'calendar-clock' | 'calendar-multiple' | 'calendar-multiple-check' | 'calendar-plus' | 'calendar-question' | 'calendar-range' | 'calendar-remove' | 'calendar-text' | 'calendar-today' | 'call-made' | 'call-merge' | 'call-missed' | 'call-received' | 'call-split' | 'camcorder' | 'camcorder-box' | 'camcorder-box-off' | 'camcorder-off' | 'camera' | 'camera-burst' | 'camera-enhance' | 'camera-front' | 'camera-front-variant' | 'camera-gopro' | 'camera-iris' | 'camera-metering-center' | 'camera-metering-matrix' | 'camera-metering-partial' | 'camera-metering-spot' | 'camera-off' | 'camera-party-mode' | 'camera-rear' | 'camera-rear-variant' | 'camera-switch' | 'camera-timer' | 'cancel' | 'candle' | 'candycane' | 'cannabis' | 'car' | 'car-battery' | 'car-connected' | 'car-convertable' | 'car-estate' | 'car-hatchback' | 'car-pickup' | 'car-side' | 'car-sports' | 'car-wash' | 'caravan' | 'cards' | 'cards-outline' | 'cards-playing-outline' | 'cards-variant' | 'carrot' | 'cart' | 'cart-off' | 'cart-outline' | 'cart-plus' | 'case-sensitive-alt' | 'cash' | 'cash-100' | 'cash-multiple' | 'cash-usd' | 'cast' | 'cast-connected' | 'cast-off' | 'castle' | 'cat' | 'cctv' | 'ceiling-light' | 'cellphone' | 'cellphone-android' | 'cellphone-basic' | 'cellphone-dock' | 'cellphone-iphone' | 'cellphone-link' | 'cellphone-link-off' | 'cellphone-settings' | 'certificate' | 'chair-school' | 'chart-arc' | 'chart-areaspline' | 'chart-bar' | 'chart-bar-stacked' | 'chart-bubble' | 'chart-donut' | 'chart-donut-variant' | 'chart-gantt' | 'chart-histogram' | 'chart-line' | 'chart-line-stacked' | 'chart-line-variant' | 'chart-pie' | 'chart-scatterplot-hexbin' | 'chart-timeline' | 'check' | 'check-all' | 'check-circle' | 'check-circle-outline' | 'checkbox-blank' | 'checkbox-blank-circle' | 'checkbox-blank-circle-outline' | 'checkbox-blank-outline' | 'checkbox-marked' | 'checkbox-marked-circle' | 'checkbox-marked-circle-outline' | 'checkbox-marked-outline' | 'checkbox-multiple-blank' | 'checkbox-multiple-blank-circle' | 'checkbox-multiple-blank-circle-outline' | 'checkbox-multiple-blank-outline' | 'checkbox-multiple-marked' | 'checkbox-multiple-marked-circle' | 'checkbox-multiple-marked-circle-outline' | 'checkbox-multiple-marked-outline' | 'checkerboard' | 'chemical-weapon' | 'chevron-double-down' | 'chevron-double-left' | 'chevron-double-right' | 'chevron-double-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chili-hot' | 'chili-medium' | 'chili-mild' | 'chip' | 'church' | 'circle' | 'circle-outline' | 'cisco-webex' | 'city' | 'clipboard' | 'clipboard-account' | 'clipboard-alert' | 'clipboard-arrow-down' | 'clipboard-arrow-left' | 'clipboard-check' | 'clipboard-flow' | 'clipboard-outline' | 'clipboard-plus' | 'clipboard-text' | 'clippy' | 'clock' | 'clock-alert' | 'clock-end' | 'clock-fast' | 'clock-in' | 'clock-out' | 'clock-start' | 'close' | 'close-box' | 'close-box-outline' | 'close-circle' | 'close-circle-outline' | 'close-network' | 'close-octagon' | 'close-octagon-outline' | 'close-outline' | 'closed-caption' | 'cloud' | 'cloud-braces' | 'cloud-check' | 'cloud-circle' | 'cloud-download' | 'cloud-off-outline' | 'cloud-outline' | 'cloud-print' | 'cloud-print-outline' | 'cloud-sync' | 'cloud-tags' | 'cloud-upload' | 'code-array' | 'code-braces' | 'code-brackets' | 'code-equal' | 'code-greater-than' | 'code-greater-than-or-equal' | 'code-less-than' | 'code-less-than-or-equal' | 'code-not-equal' | 'code-not-equal-variant' | 'code-parentheses' | 'code-string' | 'code-tags' | 'code-tags-check' | 'codepen' | 'coffee' | 'coffee-outline' | 'coffee-to-go' | 'coin' | 'coins' | 'collage' | 'color-helper' | 'comment' | 'comment-account' | 'comment-account-outline' | 'comment-alert' | 'comment-alert-outline' | 'comment-check' | 'comment-check-outline' | 'comment-multiple-outline' | 'comment-outline' | 'comment-plus-outline' | 'comment-processing' | 'comment-processing-outline' | 'comment-question-outline' | 'comment-remove-outline' | 'comment-text' | 'comment-text-outline' | 'compare' | 'compass' | 'compass-outline' | 'console' | 'console-line' | 'contact-mail' | 'contacts' | 'content-copy' | 'content-cut' | 'content-duplicate' | 'content-paste' | 'content-save' | 'content-save-all' | 'content-save-settings' | 'contrast' | 'contrast-box' | 'contrast-circle' | 'cookie' | 'copyright' | 'corn' | 'counter' | 'cow' | 'creation' | 'credit-card' | 'credit-card-multiple' | 'credit-card-off' | 'credit-card-plus' | 'credit-card-scan' | 'crop' | 'crop-free' | 'crop-landscape' | 'crop-portrait' | 'crop-rotate' | 'crop-square' | 'crosshairs' | 'crosshairs-gps' | 'crown' | 'cube' | 'cube-outline' | 'cube-send' | 'cube-unfolded' | 'cup' | 'cup-off' | 'cup-water' | 'currency-btc' | 'currency-chf' | 'currency-cny' | 'currency-eth' | 'currency-eur' | 'currency-gbp' | 'currency-inr' | 'currency-jpy' | 'currency-krw' | 'currency-ngn' | 'currency-rub' | 'currency-sign' | 'currency-try' | 'currency-twd' | 'currency-usd' | 'currency-usd-off' | 'cursor-default' | 'cursor-default-outline' | 'cursor-move' | 'cursor-pointer' | 'cursor-text' | 'database' | 'database-minus' | 'database-plus' | 'debug-step-into' | 'debug-step-out' | 'debug-step-over' | 'decagram' | 'decagram-outline' | 'decimal-decrease' | 'decimal-increase' | 'delete' | 'delete-circle' | 'delete-empty' | 'delete-forever' | 'delete-sweep' | 'delete-variant' | 'delta' | 'deskphone' | 'desktop-classic' | 'desktop-mac' | 'desktop-tower' | 'details' | 'developer-board' | 'deviantart' | 'dialpad' | 'diamond' | 'dice-1' | 'dice-2' | 'dice-3' | 'dice-4' | 'dice-5' | 'dice-6' | 'dice-d10' | 'dice-d20' | 'dice-d4' | 'dice-d6' | 'dice-d8' | 'dice-multiple' | 'dictionary' | 'dip-switch' | 'directions' | 'directions-fork' | 'discord' | 'disk' | 'disk-alert' | 'disqus' | 'disqus-outline' | 'division' | 'division-box' | 'dna' | 'dns' | 'do-not-disturb' | 'do-not-disturb-off' | 'dolby' | 'domain' | 'donkey' | 'dots-horizontal' | 'dots-horizontal-circle' | 'dots-vertical' | 'dots-vertical-circle' | 'douban' | 'download' | 'download-network' | 'drag' | 'drag-horizontal' | 'drag-vertical' | 'drawing' | 'drawing-box' | 'dribbble' | 'dribbble-box' | 'drone' | 'dropbox' | 'drupal' | 'duck' | 'dumbbell' | 'ear-hearing' | 'earth' | 'earth-box' | 'earth-box-off' | 'earth-off' | 'edge' | 'eject' | 'elephant' | 'elevation-decline' | 'elevation-rise' | 'elevator' | 'email' | 'email-alert' | 'email-open' | 'email-open-outline' | 'email-outline' | 'email-secure' | 'email-variant' | 'emby' | 'emoticon' | 'emoticon-cool' | 'emoticon-dead' | 'emoticon-devil' | 'emoticon-excited' | 'emoticon-happy' | 'emoticon-neutral' | 'emoticon-poop' | 'emoticon-sad' | 'emoticon-tongue' | 'engine' | 'engine-outline' | 'equal' | 'equal-box' | 'eraser' | 'eraser-variant' | 'escalator' | 'ethernet' | 'ethernet-cable' | 'ethernet-cable-off' | 'etsy' | 'ev-station' | 'eventbrite' | 'evernote' | 'exclamation' | 'exit-to-app' | 'export' | 'eye' | 'eye-off' | 'eye-off-outline' | 'eye-outline' | 'eyedropper' | 'eyedropper-variant' | 'face' | 'face-profile' | 'facebook' | 'facebook-box' | 'facebook-messenger' | 'factory' | 'fan' | 'fast-forward' | 'fast-forward-outline' | 'fax' | 'feather' | 'ferry' | 'file' | 'file-account' | 'file-chart' | 'file-check' | 'file-cloud' | 'file-delimited' | 'file-document' | 'file-document-box' | 'file-excel' | 'file-excel-box' | 'file-export' | 'file-find' | 'file-hidden' | 'file-image' | 'file-import' | 'file-lock' | 'file-multiple' | 'file-music' | 'file-outline' | 'file-pdf' | 'file-pdf-box' | 'file-plus' | 'file-powerpoint' | 'file-powerpoint-box' | 'file-presentation-box' | 'file-restore' | 'file-send' | 'file-tree' | 'file-video' | 'file-word' | 'file-word-box' | 'file-xml' | 'film' | 'filmstrip' | 'filmstrip-off' | 'filter' | 'filter-outline' | 'filter-remove' | 'filter-remove-outline' | 'filter-variant' | 'find-replace' | 'fingerprint' | 'fire' | 'firefox' | 'fish' | 'flag' | 'flag-checkered' | 'flag-outline' | 'flag-outline-variant' | 'flag-triangle' | 'flag-variant' | 'flash' | 'flash-auto' | 'flash-off' | 'flash-outline' | 'flash-red-eye' | 'flashlight' | 'flashlight-off' | 'flask' | 'flask-empty' | 'flask-empty-outline' | 'flask-outline' | 'flattr' | 'flip-to-back' | 'flip-to-front' | 'floppy' | 'flower' | 'folder' | 'folder-account' | 'folder-download' | 'folder-google-drive' | 'folder-image' | 'folder-lock' | 'folder-lock-open' | 'folder-move' | 'folder-multiple' | 'folder-multiple-image' | 'folder-multiple-outline' | 'folder-open' | 'folder-outline' | 'folder-plus' | 'folder-remove' | 'folder-star' | 'folder-upload' | 'font-awesome' | 'food' | 'food-apple' | 'food-croissant' | 'food-fork-drink' | 'food-off' | 'food-variant' | 'football' | 'football-australian' | 'football-helmet' | 'forklift' | 'format-align-bottom' | 'format-align-center' | 'format-align-justify' | 'format-align-left' | 'format-align-middle' | 'format-align-right' | 'format-align-top' | 'format-annotation-plus' | 'format-bold' | 'format-clear' | 'format-color-fill' | 'format-color-text' | 'format-float-center' | 'format-float-left' | 'format-float-none' | 'format-float-right' | 'format-font' | 'format-header-1' | 'format-header-2' | 'format-header-3' | 'format-header-4' | 'format-header-5' | 'format-header-6' | 'format-header-decrease' | 'format-header-equal' | 'format-header-increase' | 'format-header-pound' | 'format-horizontal-align-center' | 'format-horizontal-align-left' | 'format-horizontal-align-right' | 'format-indent-decrease' | 'format-indent-increase' | 'format-italic' | 'format-line-spacing' | 'format-line-style' | 'format-line-weight' | 'format-list-bulleted' | 'format-list-bulleted-type' | 'format-list-checks' | 'format-list-numbers' | 'format-page-break' | 'format-paint' | 'format-paragraph' | 'format-pilcrow' | 'format-quote-close' | 'format-quote-open' | 'format-rotate-90' | 'format-section' | 'format-size' | 'format-strikethrough' | 'format-strikethrough-variant' | 'format-subscript' | 'format-superscript' | 'format-text' | 'format-textdirection-l-to-r' | 'format-textdirection-r-to-l' | 'format-title' | 'format-underline' | 'format-vertical-align-bottom' | 'format-vertical-align-center' | 'format-vertical-align-top' | 'format-wrap-inline' | 'format-wrap-square' | 'format-wrap-tight' | 'format-wrap-top-bottom' | 'forum' | 'forward' | 'foursquare' | 'fridge' | 'fridge-filled' | 'fridge-filled-bottom' | 'fridge-filled-top' | 'fuel' | 'fullscreen' | 'fullscreen-exit' | 'function' | 'gamepad' | 'gamepad-variant' | 'garage' | 'garage-open' | 'gas-cylinder' | 'gas-station' | 'gate' | 'gauge' | 'gavel' | 'gender-female' | 'gender-male' | 'gender-male-female' | 'gender-transgender' | 'gesture' | 'gesture-double-tap' | 'gesture-swipe-down' | 'gesture-swipe-left' | 'gesture-swipe-right' | 'gesture-swipe-up' | 'gesture-tap' | 'gesture-two-double-tap' | 'gesture-two-tap' | 'ghost' | 'gift' | 'git' | 'github-box' | 'github-circle' | 'github-face' | 'glass-flute' | 'glass-mug' | 'glass-stange' | 'glass-tulip' | 'glassdoor' | 'glasses' | 'gmail' | 'gnome' | 'gondola' | 'google' | 'google-analytics' | 'google-assistant' | 'google-cardboard' | 'google-chrome' | 'google-circles' | 'google-circles-communities' | 'google-circles-extended' | 'google-circles-group' | 'google-controller' | 'google-controller-off' | 'google-drive' | 'google-earth' | 'google-glass' | 'google-keep' | 'google-maps' | 'google-nearby' | 'google-pages' | 'google-photos' | 'google-physical-web' | 'google-play' | 'google-plus' | 'google-plus-box' | 'google-translate' | 'google-wallet' | 'gradient' | 'grease-pencil' | 'grid' | 'grid-large' | 'grid-off' | 'group' | 'guitar-acoustic' | 'guitar-electric' | 'guitar-pick' | 'guitar-pick-outline' | 'hackernews' | 'hamburger' | 'hand-pointing-right' | 'hanger' | 'hangouts' | 'harddisk' | 'headphones' | 'headphones-box' | 'headphones-off' | 'headphones-settings' | 'headset' | 'headset-dock' | 'headset-off' | 'heart' | 'heart-box' | 'heart-box-outline' | 'heart-broken' | 'heart-half' | 'heart-half-full' | 'heart-half-outline' | 'heart-off' | 'heart-outline' | 'heart-pulse' | 'help' | 'help-box' | 'help-circle' | 'help-circle-outline' | 'help-network' | 'hexagon' | 'hexagon-multiple' | 'hexagon-outline' | 'high-definition' | 'highway' | 'history' | 'hololens' | 'home' | 'home-assistant' | 'home-automation' | 'home-circle' | 'home-map-marker' | 'home-modern' | 'home-outline' | 'home-variant' | 'hook' | 'hook-off' | 'hops' | 'hospital' | 'hospital-building' | 'hospital-marker' | 'hotel' | 'houzz' | 'houzz-box' | 'human' | 'human-child' | 'human-female' | 'human-greeting' | 'human-handsdown' | 'human-handsup' | 'human-male' | 'human-male-female' | 'human-pregnant' | 'humble-bundle' | 'image' | 'image-album' | 'image-area' | 'image-area-close' | 'image-broken' | 'image-broken-variant' | 'image-filter' | 'image-filter-black-white' | 'image-filter-center-focus' | 'image-filter-center-focus-weak' | 'image-filter-drama' | 'image-filter-frames' | 'image-filter-hdr' | 'image-filter-none' | 'image-filter-tilt-shift' | 'image-filter-vintage' | 'image-multiple' | 'import' | 'inbox' | 'inbox-arrow-down' | 'inbox-arrow-up' | 'incognito' | 'infinity' | 'information' | 'information-outline' | 'information-variant' | 'instagram' | 'instapaper' | 'internet-explorer' | 'invert-colors' | 'itunes' | 'jeepney' | 'jira' | 'jsfiddle' | 'json' | 'keg' | 'kettle' | 'key' | 'key-change' | 'key-minus' | 'key-plus' | 'key-remove' | 'key-variant' | 'keyboard' | 'keyboard-backspace' | 'keyboard-caps' | 'keyboard-close' | 'keyboard-off' | 'keyboard-return' | 'keyboard-tab' | 'keyboard-variant' | 'kickstarter' | 'kodi' | 'label' | 'label-outline' | 'lambda' | 'lamp' | 'lan' | 'lan-connect' | 'lan-disconnect' | 'lan-pending' | 'language-c' | 'language-cpp' | 'language-csharp' | 'language-css3' | 'language-go' | 'language-html5' | 'language-javascript' | 'language-php' | 'language-python' | 'language-python-text' | 'language-r' | 'language-swift' | 'language-typescript' | 'laptop' | 'laptop-chromebook' | 'laptop-mac' | 'laptop-off' | 'laptop-windows' | 'lastfm' | 'launch' | 'lava-lamp' | 'layers' | 'layers-off' | 'lead-pencil' | 'leaf' | 'led-off' | 'led-on' | 'led-outline' | 'led-strip' | 'led-variant-off' | 'led-variant-on' | 'led-variant-outline' | 'library' | 'library-books' | 'library-music' | 'library-plus' | 'lightbulb' | 'lightbulb-on' | 'lightbulb-on-outline' | 'lightbulb-outline' | 'link' | 'link-off' | 'link-variant' | 'link-variant-off' | 'linkedin' | 'linkedin-box' | 'linux' | 'loading' | 'lock' | 'lock-open' | 'lock-open-outline' | 'lock-outline' | 'lock-pattern' | 'lock-plus' | 'lock-reset' | 'locker' | 'locker-multiple' | 'login' | 'login-variant' | 'logout' | 'logout-variant' | 'looks' | 'loop' | 'loupe' | 'lumx' | 'magnet' | 'magnet-on' | 'magnify' | 'magnify-minus' | 'magnify-minus-outline' | 'magnify-plus' | 'magnify-plus-outline' | 'mail-ru' | 'mailbox' | 'map' | 'map-marker' | 'map-marker-circle' | 'map-marker-minus' | 'map-marker-multiple' | 'map-marker-off' | 'map-marker-outline' | 'map-marker-plus' | 'map-marker-radius' | 'margin' | 'markdown' | 'marker' | 'marker-check' | 'martini' | 'material-ui' | 'math-compass' | 'matrix' | 'maxcdn' | 'medical-bag' | 'medium' | 'memory' | 'menu' | 'menu-down' | 'menu-down-outline' | 'menu-left' | 'menu-right' | 'menu-up' | 'menu-up-outline' | 'message' | 'message-alert' | 'message-bulleted' | 'message-bulleted-off' | 'message-draw' | 'message-image' | 'message-outline' | 'message-plus' | 'message-processing' | 'message-reply' | 'message-reply-text' | 'message-settings' | 'message-settings-variant' | 'message-text' | 'message-text-outline' | 'message-video' | 'meteor' | 'metronome' | 'metronome-tick' | 'micro-sd' | 'microphone' | 'microphone-off' | 'microphone-outline' | 'microphone-settings' | 'microphone-variant' | 'microphone-variant-off' | 'microscope' | 'microsoft' | 'minecraft' | 'minus' | 'minus-box' | 'minus-box-outline' | 'minus-circle' | 'minus-circle-outline' | 'minus-network' | 'mixcloud' | 'mixer' | 'monitor' | 'monitor-multiple' | 'more' | 'motorbike' | 'mouse' | 'mouse-off' | 'mouse-variant' | 'mouse-variant-off' | 'move-resize' | 'move-resize-variant' | 'movie' | 'movie-roll' | 'multiplication' | 'multiplication-box' | 'mushroom' | 'mushroom-outline' | 'music' | 'music-box' | 'music-box-outline' | 'music-circle' | 'music-note' | 'music-note-bluetooth' | 'music-note-bluetooth-off' | 'music-note-eighth' | 'music-note-half' | 'music-note-off' | 'music-note-quarter' | 'music-note-sixteenth' | 'music-note-whole' | 'music-off' | 'nature' | 'nature-people' | 'navigation' | 'near-me' | 'needle' | 'nest-protect' | 'nest-thermostat' | 'netflix' | 'network' | 'new-box' | 'newspaper' | 'nfc' | 'nfc-tap' | 'nfc-variant' | 'ninja' | 'nintendo-switch' | 'nodejs' | 'note' | 'note-multiple' | 'note-multiple-outline' | 'note-outline' | 'note-plus' | 'note-plus-outline' | 'note-text' | 'notification-clear-all' | 'npm' | 'nuke' | 'null' | 'numeric' | 'numeric-0-box' | 'numeric-0-box-multiple-outline' | 'numeric-0-box-outline' | 'numeric-1-box' | 'numeric-1-box-multiple-outline' | 'numeric-1-box-outline' | 'numeric-2-box' | 'numeric-2-box-multiple-outline' | 'numeric-2-box-outline' | 'numeric-3-box' | 'numeric-3-box-multiple-outline' | 'numeric-3-box-outline' | 'numeric-4-box' | 'numeric-4-box-multiple-outline' | 'numeric-4-box-outline' | 'numeric-5-box' | 'numeric-5-box-multiple-outline' | 'numeric-5-box-outline' | 'numeric-6-box' | 'numeric-6-box-multiple-outline' | 'numeric-6-box-outline' | 'numeric-7-box' | 'numeric-7-box-multiple-outline' | 'numeric-7-box-outline' | 'numeric-8-box' | 'numeric-8-box-multiple-outline' | 'numeric-8-box-outline' | 'numeric-9-box' | 'numeric-9-box-multiple-outline' | 'numeric-9-box-outline' | 'numeric-9-plus-box' | 'numeric-9-plus-box-multiple-outline' | 'numeric-9-plus-box-outline' | 'nut' | 'nutrition' | 'oar' | 'octagon' | 'octagon-outline' | 'octagram' | 'octagram-outline' | 'odnoklassniki' | 'office' | 'oil' | 'oil-temperature' | 'omega' | 'onedrive' | 'onenote' | 'opacity' | 'open-in-app' | 'open-in-new' | 'openid' | 'opera' | 'orbit' | 'ornament' | 'ornament-variant' | 'owl' | 'package' | 'package-down' | 'package-up' | 'package-variant' | 'package-variant-closed' | 'page-first' | 'page-last' | 'page-layout-body' | 'page-layout-footer' | 'page-layout-header' | 'page-layout-sidebar-left' | 'page-layout-sidebar-right' | 'palette' | 'palette-advanced' | 'panda' | 'pandora' | 'panorama' | 'panorama-fisheye' | 'panorama-horizontal' | 'panorama-vertical' | 'panorama-wide-angle' | 'paper-cut-vertical' | 'paperclip' | 'parking' | 'passport' | 'pause' | 'pause-circle' | 'pause-circle-outline' | 'pause-octagon' | 'pause-octagon-outline' | 'paw' | 'paw-off' | 'pen' | 'pencil' | 'pencil-box' | 'pencil-box-outline' | 'pencil-circle' | 'pencil-circle-outline' | 'pencil-lock' | 'pencil-off' | 'pentagon' | 'pentagon-outline' | 'percent' | 'periodic-table-co2' | 'periscope' | 'pharmacy' | 'phone' | 'phone-bluetooth' | 'phone-classic' | 'phone-forward' | 'phone-hangup' | 'phone-in-talk' | 'phone-incoming' | 'phone-locked' | 'phone-log' | 'phone-minus' | 'phone-missed' | 'phone-outgoing' | 'phone-paused' | 'phone-plus' | 'phone-settings' | 'phone-voip' | 'pi' | 'pi-box' | 'piano' | 'pig' | 'pill' | 'pillar' | 'pin' | 'pin-off' | 'pine-tree' | 'pine-tree-box' | 'pinterest' | 'pinterest-box' | 'pipe' | 'pipe-disconnected' | 'pistol' | 'pizza' | 'plane-shield' | 'play' | 'play-box-outline' | 'play-circle' | 'play-circle-outline' | 'play-pause' | 'play-protected-content' | 'playlist-check' | 'playlist-minus' | 'playlist-play' | 'playlist-plus' | 'playlist-remove' | 'playstation' | 'plex' | 'plus' | 'plus-box' | 'plus-box-outline' | 'plus-circle' | 'plus-circle-multiple-outline' | 'plus-circle-outline' | 'plus-network' | 'plus-one' | 'plus-outline' | 'pocket' | 'pokeball' | 'polaroid' | 'poll' | 'poll-box' | 'polymer' | 'pool' | 'popcorn' | 'pot' | 'pot-mix' | 'pound' | 'pound-box' | 'power' | 'power-plug' | 'power-plug-off' | 'power-settings' | 'power-socket' | 'power-socket-eu' | 'power-socket-uk' | 'power-socket-us' | 'prescription' | 'presentation' | 'presentation-play' | 'printer' | 'printer-3d' | 'printer-alert' | 'printer-settings' | 'priority-high' | 'priority-low' | 'professional-hexagon' | 'projector' | 'projector-screen' | 'publish' | 'pulse' | 'puzzle' | 'qqchat' | 'qrcode' | 'qrcode-scan' | 'quadcopter' | 'quality-high' | 'quicktime' | 'radar' | 'radiator' | 'radio' | 'radio-handheld' | 'radio-tower' | 'radioactive' | 'radiobox-blank' | 'radiobox-marked' | 'raspberrypi' | 'ray-end' | 'ray-end-arrow' | 'ray-start' | 'ray-start-arrow' | 'ray-start-end' | 'ray-vertex' | 'rdio' | 'react' | 'read' | 'readability' | 'receipt' | 'record' | 'record-rec' | 'recycle' | 'reddit' | 'redo' | 'redo-variant' | 'refresh' | 'regex' | 'relative-scale' | 'reload' | 'remote' | 'rename-box' | 'reorder-horizontal' | 'reorder-vertical' | 'repeat' | 'repeat-off' | 'repeat-once' | 'replay' | 'reply' | 'reply-all' | 'reproduction' | 'resize-bottom-right' | 'responsive' | 'restart' | 'restore' | 'rewind' | 'rewind-outline' | 'rhombus' | 'rhombus-outline' | 'ribbon' | 'rice' | 'ring' | 'road' | 'road-variant' | 'robot' | 'rocket' | 'roomba' | 'rotate-3d' | 'rotate-left' | 'rotate-left-variant' | 'rotate-right' | 'rotate-right-variant' | 'rounded-corner' | 'router-wireless' | 'routes' | 'rowing' | 'rss' | 'rss-box' | 'ruler' | 'run' | 'run-fast' | 'sale' | 'sass' | 'satellite' | 'satellite-variant' | 'saxophone' | 'scale' | 'scale-balance' | 'scale-bathroom' | 'scanner' | 'school' | 'screen-rotation' | 'screen-rotation-lock' | 'screwdriver' | 'script' | 'sd' | 'seal' | 'search-web' | 'seat-flat' | 'seat-flat-angled' | 'seat-individual-suite' | 'seat-legroom-extra' | 'seat-legroom-normal' | 'seat-legroom-reduced' | 'seat-recline-extra' | 'seat-recline-normal' | 'security' | 'security-home' | 'security-network' | 'select' | 'select-all' | 'select-inverse' | 'select-off' | 'selection' | 'selection-off' | 'send' | 'send-secure' | 'serial-port' | 'server' | 'server-minus' | 'server-network' | 'server-network-off' | 'server-off' | 'server-plus' | 'server-remove' | 'server-security' | 'set-all' | 'set-center' | 'set-center-right' | 'set-left' | 'set-left-center' | 'set-left-right' | 'set-none' | 'set-right' | 'settings' | 'settings-box' | 'shape-circle-plus' | 'shape-plus' | 'shape-polygon-plus' | 'shape-rectangle-plus' | 'shape-square-plus' | 'share' | 'share-variant' | 'shield' | 'shield-half-full' | 'shield-outline' | 'shopping' | 'shopping-music' | 'shovel' | 'shovel-off' | 'shredder' | 'shuffle' | 'shuffle-disabled' | 'shuffle-variant' | 'sigma' | 'sigma-lower' | 'sign-caution' | 'sign-direction' | 'sign-text' | 'signal' | 'signal-2g' | 'signal-3g' | 'signal-4g' | 'signal-hspa' | 'signal-hspa-plus' | 'signal-off' | 'signal-variant' | 'silverware' | 'silverware-fork' | 'silverware-spoon' | 'silverware-variant' | 'sim' | 'sim-alert' | 'sim-off' | 'sitemap' | 'skip-backward' | 'skip-forward' | 'skip-next' | 'skip-next-circle' | 'skip-next-circle-outline' | 'skip-previous' | 'skip-previous-circle' | 'skip-previous-circle-outline' | 'skull' | 'skype' | 'skype-business' | 'slack' | 'sleep' | 'sleep-off' | 'smoking' | 'smoking-off' | 'snapchat' | 'snowflake' | 'snowman' | 'soccer' | 'sofa' | 'solid' | 'sort' | 'sort-alphabetical' | 'sort-ascending' | 'sort-descending' | 'sort-numeric' | 'sort-variant' | 'soundcloud' | 'source-branch' | 'source-commit' | 'source-commit-end' | 'source-commit-end-local' | 'source-commit-local' | 'source-commit-next-local' | 'source-commit-start' | 'source-commit-start-next-local' | 'source-fork' | 'source-merge' | 'source-pull' | 'soy-sauce' | 'speaker' | 'speaker-off' | 'speaker-wireless' | 'speedometer' | 'spellcheck' | 'spotify' | 'spotlight' | 'spotlight-beam' | 'spray' | 'square' | 'square-inc' | 'square-inc-cash' | 'square-outline' | 'square-root' | 'stackexchange' | 'stackoverflow' | 'stadium' | 'stairs' | 'standard-definition' | 'star' | 'star-circle' | 'star-half' | 'star-off' | 'star-outline' | 'steam' | 'steering' | 'step-backward' | 'step-backward-2' | 'step-forward' | 'step-forward-2' | 'stethoscope' | 'sticker' | 'sticker-emoji' | 'stocking' | 'stop' | 'stop-circle' | 'stop-circle-outline' | 'store' | 'store-24-hour' | 'stove' | 'subdirectory-arrow-left' | 'subdirectory-arrow-right' | 'subway' | 'subway-variant' | 'summit' | 'sunglasses' | 'surround-sound' | 'surround-sound-2-0' | 'surround-sound-3-1' | 'surround-sound-5-1' | 'surround-sound-7-1' | 'svg' | 'swap-horizontal' | 'swap-vertical' | 'swim' | 'switch' | 'sword' | 'sword-cross' | 'sync' | 'sync-alert' | 'sync-off' | 'tab' | 'tab-plus' | 'tab-unselected' | 'table' | 'table-column-plus-after' | 'table-column-plus-before' | 'table-column-remove' | 'table-column-width' | 'table-edit' | 'table-large' | 'table-row-height' | 'table-row-plus-after' | 'table-row-plus-before' | 'table-row-remove' | 'tablet' | 'tablet-android' | 'tablet-ipad' | 'taco' | 'tag' | 'tag-faces' | 'tag-heart' | 'tag-multiple' | 'tag-outline' | 'tag-plus' | 'tag-remove' | 'tag-text-outline' | 'target' | 'taxi' | 'teamviewer' | 'telegram' | 'television' | 'television-classic' | 'television-guide' | 'temperature-celsius' | 'temperature-fahrenheit' | 'temperature-kelvin' | 'tennis' | 'tent' | 'terrain' | 'test-tube' | 'text-shadow' | 'text-to-speech' | 'text-to-speech-off' | 'textbox' | 'textbox-password' | 'texture' | 'theater' | 'theme-light-dark' | 'thermometer' | 'thermometer-lines' | 'thought-bubble' | 'thought-bubble-outline' | 'thumb-down' | 'thumb-down-outline' | 'thumb-up' | 'thumb-up-outline' | 'thumbs-up-down' | 'ticket' | 'ticket-account' | 'ticket-confirmation' | 'ticket-percent' | 'tie' | 'tilde' | 'timelapse' | 'timer' | 'timer-10' | 'timer-3' | 'timer-off' | 'timer-sand' | 'timer-sand-empty' | 'timer-sand-full' | 'timetable' | 'toggle-switch' | 'toggle-switch-off' | 'tooltip' | 'tooltip-edit' | 'tooltip-image' | 'tooltip-outline' | 'tooltip-outline-plus' | 'tooltip-text' | 'tooth' | 'tor' | 'tower-beach' | 'tower-fire' | 'trackpad' | 'traffic-light' | 'train' | 'tram' | 'transcribe' | 'transcribe-close' | 'transfer' | 'transit-transfer' | 'translate' | 'treasure-chest' | 'tree' | 'trello' | 'trending-down' | 'trending-neutral' | 'trending-up' | 'triangle' | 'triangle-outline' | 'trophy' | 'trophy-award' | 'trophy-outline' | 'trophy-variant' | 'trophy-variant-outline' | 'truck' | 'truck-delivery' | 'truck-fast' | 'truck-trailer' | 'tshirt-crew' | 'tshirt-v' | 'tumblr' | 'tumblr-reblog' | 'tune' | 'tune-vertical' | 'twitch' | 'twitter' | 'twitter-box' | 'twitter-circle' | 'twitter-retweet' | 'uber' | 'ubuntu' | 'ultra-high-definition' | 'umbraco' | 'umbrella' | 'umbrella-outline' | 'undo' | 'undo-variant' | 'unfold-less-horizontal' | 'unfold-less-vertical' | 'unfold-more-horizontal' | 'unfold-more-vertical' | 'ungroup' | 'unity' | 'untappd' | 'update' | 'upload' | 'upload-network' | 'usb' | 'van-passenger' | 'van-utility' | 'vanish' | 'vector-arrange-above' | 'vector-arrange-below' | 'vector-circle' | 'vector-circle-variant' | 'vector-combine' | 'vector-curve' | 'vector-difference' | 'vector-difference-ab' | 'vector-difference-ba' | 'vector-intersection' | 'vector-line' | 'vector-point' | 'vector-polygon' | 'vector-polyline' | 'vector-radius' | 'vector-rectangle' | 'vector-selection' | 'vector-square' | 'vector-triangle' | 'vector-union' | 'verified' | 'vibrate' | 'video' | 'video-3d' | 'video-off' | 'video-switch' | 'view-agenda' | 'view-array' | 'view-carousel' | 'view-column' | 'view-dashboard' | 'view-day' | 'view-grid' | 'view-headline' | 'view-list' | 'view-module' | 'view-parallel' | 'view-quilt' | 'view-sequential' | 'view-stream' | 'view-week' | 'vimeo' | 'vine' | 'violin' | 'visualstudio' | 'vk' | 'vk-box' | 'vk-circle' | 'vlc' | 'voice' | 'voicemail' | 'volume-high' | 'volume-low' | 'volume-medium' | 'volume-minus' | 'volume-mute' | 'volume-off' | 'volume-plus' | 'vpn' | 'walk' | 'wall' | 'wallet' | 'wallet-giftcard' | 'wallet-membership' | 'wallet-travel' | 'wan' | 'washing-machine' | 'watch' | 'watch-export' | 'watch-import' | 'watch-vibrate' | 'water' | 'water-off' | 'water-percent' | 'water-pump' | 'watermark' | 'waves' | 'weather-cloudy' | 'weather-fog' | 'weather-hail' | 'weather-lightning' | 'weather-lightning-rainy' | 'weather-night' | 'weather-partlycloudy' | 'weather-pouring' | 'weather-rainy' | 'weather-snowy' | 'weather-snowy-rainy' | 'weather-sunny' | 'weather-sunset' | 'weather-sunset-down' | 'weather-sunset-up' | 'weather-windy' | 'weather-windy-variant' | 'web' | 'webcam' | 'webhook' | 'webpack' | 'wechat' | 'weight' | 'weight-kilogram' | 'whatsapp' | 'wheelchair-accessibility' | 'white-balance-auto' | 'white-balance-incandescent' | 'white-balance-iridescent' | 'white-balance-sunny' | 'widgets' | 'wifi' | 'wifi-off' | 'wii' | 'wiiu' | 'wikipedia' | 'window-close' | 'window-closed' | 'window-maximize' | 'window-minimize' | 'window-open' | 'window-restore' | 'windows' | 'wordpress' | 'worker' | 'wrap' | 'wrench' | 'wunderlist' | 'xaml' | 'xbox' | 'xbox-controller' | 'xbox-controller-battery-alert' | 'xbox-controller-battery-empty' | 'xbox-controller-battery-full' | 'xbox-controller-battery-low' | 'xbox-controller-battery-medium' | 'xbox-controller-battery-unknown' | 'xbox-controller-off' | 'xda' | 'xing' | 'xing-box' | 'xing-circle' | 'xml' | 'xmpp' | 'yammer' | 'yeast' | 'yelp' | 'yin-yang' | 'youtube-play' | 'zip-box' | 'blank'
  }

  interface MaterialIconsProps extends BaseIconProps {
    name: '3d-rotation' | 'ac-unit' | 'access-alarm' | 'access-alarms' | 'access-time' | 'accessibility' | 'accessible' | 'account-balance' | 'account-balance-wallet' | 'account-box' | 'account-circle' | 'adb' | 'add' | 'add-a-photo' | 'add-alarm' | 'add-alert' | 'add-box' | 'add-circle' | 'add-circle-outline' | 'add-location' | 'add-shopping-cart' | 'add-to-photos' | 'add-to-queue' | 'adjust' | 'airline-seat-flat' | 'airline-seat-flat-angled' | 'airline-seat-individual-suite' | 'airline-seat-legroom-extra' | 'airline-seat-legroom-normal' | 'airline-seat-legroom-reduced' | 'airline-seat-recline-extra' | 'airline-seat-recline-normal' | 'airplanemode-active' | 'airplanemode-inactive' | 'airplay' | 'airport-shuttle' | 'alarm' | 'alarm-add' | 'alarm-off' | 'alarm-on' | 'album' | 'all-inclusive' | 'all-out' | 'android' | 'announcement' | 'apps' | 'archive' | 'arrow-back' | 'arrow-downward' | 'arrow-drop-down' | 'arrow-drop-down-circle' | 'arrow-drop-up' | 'arrow-forward' | 'arrow-upward' | 'art-track' | 'aspect-ratio' | 'assessment' | 'assignment' | 'assignment-ind' | 'assignment-late' | 'assignment-return' | 'assignment-returned' | 'assignment-turned-in' | 'assistant' | 'assistant-photo' | 'attach-file' | 'attach-money' | 'attachment' | 'audiotrack' | 'autorenew' | 'av-timer' | 'backspace' | 'backup' | 'battery-alert' | 'battery-charging-full' | 'battery-full' | 'battery-std' | 'battery-unknown' | 'beach-access' | 'beenhere' | 'block' | 'bluetooth' | 'bluetooth-audio' | 'bluetooth-connected' | 'bluetooth-disabled' | 'bluetooth-searching' | 'blur-circular' | 'blur-linear' | 'blur-off' | 'blur-on' | 'book' | 'bookmark' | 'bookmark-border' | 'border-all' | 'border-bottom' | 'border-clear' | 'border-color' | 'border-horizontal' | 'border-inner' | 'border-left' | 'border-outer' | 'border-right' | 'border-style' | 'border-top' | 'border-vertical' | 'branding-watermark' | 'brightness-1' | 'brightness-2' | 'brightness-3' | 'brightness-4' | 'brightness-5' | 'brightness-6' | 'brightness-7' | 'brightness-auto' | 'brightness-high' | 'brightness-low' | 'brightness-medium' | 'broken-image' | 'brush' | 'bubble-chart' | 'bug-report' | 'build' | 'burst-mode' | 'business' | 'business-center' | 'cached' | 'cake' | 'call' | 'call-end' | 'call-made' | 'call-merge' | 'call-missed' | 'call-missed-outgoing' | 'call-received' | 'call-split' | 'call-to-action' | 'camera' | 'camera-alt' | 'camera-enhance' | 'camera-front' | 'camera-rear' | 'camera-roll' | 'cancel' | 'card-giftcard' | 'card-membership' | 'card-travel' | 'casino' | 'cast' | 'cast-connected' | 'center-focus-strong' | 'center-focus-weak' | 'change-history' | 'chat' | 'chat-bubble' | 'chat-bubble-outline' | 'check' | 'check-box' | 'check-box-outline-blank' | 'check-circle' | 'chevron-left' | 'chevron-right' | 'child-care' | 'child-friendly' | 'chrome-reader-mode' | 'class' | 'clear' | 'clear-all' | 'close' | 'closed-caption' | 'cloud' | 'cloud-circle' | 'cloud-done' | 'cloud-download' | 'cloud-off' | 'cloud-queue' | 'cloud-upload' | 'code' | 'collections' | 'collections-bookmark' | 'color-lens' | 'colorize' | 'comment' | 'compare' | 'compare-arrows' | 'computer' | 'confirmation-number' | 'contact-mail' | 'contact-phone' | 'contacts' | 'content-copy' | 'content-cut' | 'content-paste' | 'control-point' | 'control-point-duplicate' | 'copyright' | 'create' | 'create-new-folder' | 'credit-card' | 'crop' | 'crop-16-9' | 'crop-3-2' | 'crop-5-4' | 'crop-7-5' | 'crop-din' | 'crop-free' | 'crop-landscape' | 'crop-original' | 'crop-portrait' | 'crop-rotate' | 'crop-square' | 'dashboard' | 'data-usage' | 'date-range' | 'dehaze' | 'delete' | 'delete-forever' | 'delete-sweep' | 'description' | 'desktop-mac' | 'desktop-windows' | 'details' | 'developer-board' | 'developer-mode' | 'device-hub' | 'devices' | 'devices-other' | 'dialer-sip' | 'dialpad' | 'directions' | 'directions-bike' | 'directions-boat' | 'directions-bus' | 'directions-car' | 'directions-railway' | 'directions-run' | 'directions-subway' | 'directions-transit' | 'directions-walk' | 'disc-full' | 'dns' | 'do-not-disturb' | 'do-not-disturb-alt' | 'do-not-disturb-off' | 'do-not-disturb-on' | 'dock' | 'domain' | 'done' | 'done-all' | 'donut-large' | 'donut-small' | 'drafts' | 'drag-handle' | 'drive-eta' | 'dvr' | 'edit' | 'edit-location' | 'eject' | 'email' | 'enhanced-encryption' | 'equalizer' | 'error' | 'error-outline' | 'euro-symbol' | 'ev-station' | 'event' | 'event-available' | 'event-busy' | 'event-note' | 'event-seat' | 'exit-to-app' | 'expand-less' | 'expand-more' | 'explicit' | 'explore' | 'exposure' | 'exposure-neg-1' | 'exposure-neg-2' | 'exposure-plus-1' | 'exposure-plus-2' | 'exposure-zero' | 'extension' | 'face' | 'fast-forward' | 'fast-rewind' | 'favorite' | 'favorite-border' | 'featured-play-list' | 'featured-video' | 'feedback' | 'fiber-dvr' | 'fiber-manual-record' | 'fiber-new' | 'fiber-pin' | 'fiber-smart-record' | 'file-download' | 'file-upload' | 'filter' | 'filter-1' | 'filter-2' | 'filter-3' | 'filter-4' | 'filter-5' | 'filter-6' | 'filter-7' | 'filter-8' | 'filter-9' | 'filter-9-plus' | 'filter-b-and-w' | 'filter-center-focus' | 'filter-drama' | 'filter-frames' | 'filter-hdr' | 'filter-list' | 'filter-none' | 'filter-tilt-shift' | 'filter-vintage' | 'find-in-page' | 'find-replace' | 'fingerprint' | 'first-page' | 'fitness-center' | 'flag' | 'flare' | 'flash-auto' | 'flash-off' | 'flash-on' | 'flight' | 'flight-land' | 'flight-takeoff' | 'flip' | 'flip-to-back' | 'flip-to-front' | 'folder' | 'folder-open' | 'folder-shared' | 'folder-special' | 'font-download' | 'format-align-center' | 'format-align-justify' | 'format-align-left' | 'format-align-right' | 'format-bold' | 'format-clear' | 'format-color-fill' | 'format-color-reset' | 'format-color-text' | 'format-indent-decrease' | 'format-indent-increase' | 'format-italic' | 'format-line-spacing' | 'format-list-bulleted' | 'format-list-numbered' | 'format-paint' | 'format-quote' | 'format-shapes' | 'format-size' | 'format-strikethrough' | 'format-textdirection-l-to-r' | 'format-textdirection-r-to-l' | 'format-underlined' | 'forum' | 'forward' | 'forward-10' | 'forward-30' | 'forward-5' | 'free-breakfast' | 'fullscreen' | 'fullscreen-exit' | 'functions' | 'g-translate' | 'gamepad' | 'games' | 'gavel' | 'gesture' | 'get-app' | 'gif' | 'golf-course' | 'gps-fixed' | 'gps-not-fixed' | 'gps-off' | 'grade' | 'gradient' | 'grain' | 'graphic-eq' | 'grid-off' | 'grid-on' | 'group' | 'group-add' | 'group-work' | 'hd' | 'hdr-off' | 'hdr-on' | 'hdr-strong' | 'hdr-weak' | 'headset' | 'headset-mic' | 'healing' | 'hearing' | 'help' | 'help-outline' | 'high-quality' | 'highlight' | 'highlight-off' | 'history' | 'home' | 'hot-tub' | 'hotel' | 'hourglass-empty' | 'hourglass-full' | 'http' | 'https' | 'image' | 'image-aspect-ratio' | 'import-contacts' | 'import-export' | 'important-devices' | 'inbox' | 'indeterminate-check-box' | 'info' | 'info-outline' | 'input' | 'insert-chart' | 'insert-comment' | 'insert-drive-file' | 'insert-emoticon' | 'insert-invitation' | 'insert-link' | 'insert-photo' | 'invert-colors' | 'invert-colors-off' | 'iso' | 'keyboard' | 'keyboard-arrow-down' | 'keyboard-arrow-left' | 'keyboard-arrow-right' | 'keyboard-arrow-up' | 'keyboard-backspace' | 'keyboard-capslock' | 'keyboard-hide' | 'keyboard-return' | 'keyboard-tab' | 'keyboard-voice' | 'kitchen' | 'label' | 'label-outline' | 'landscape' | 'language' | 'laptop' | 'laptop-chromebook' | 'laptop-mac' | 'laptop-windows' | 'last-page' | 'launch' | 'layers' | 'layers-clear' | 'leak-add' | 'leak-remove' | 'lens' | 'library-add' | 'library-books' | 'library-music' | 'lightbulb-outline' | 'line-style' | 'line-weight' | 'linear-scale' | 'link' | 'linked-camera' | 'list' | 'live-help' | 'live-tv' | 'local-activity' | 'local-airport' | 'local-atm' | 'local-bar' | 'local-cafe' | 'local-car-wash' | 'local-convenience-store' | 'local-dining' | 'local-drink' | 'local-florist' | 'local-gas-station' | 'local-grocery-store' | 'local-hospital' | 'local-hotel' | 'local-laundry-service' | 'local-library' | 'local-mall' | 'local-movies' | 'local-offer' | 'local-parking' | 'local-pharmacy' | 'local-phone' | 'local-pizza' | 'local-play' | 'local-post-office' | 'local-printshop' | 'local-see' | 'local-shipping' | 'local-taxi' | 'location-city' | 'location-disabled' | 'location-off' | 'location-on' | 'location-searching' | 'lock' | 'lock-open' | 'lock-outline' | 'looks' | 'looks-3' | 'looks-4' | 'looks-5' | 'looks-6' | 'looks-one' | 'looks-two' | 'loop' | 'loupe' | 'low-priority' | 'loyalty' | 'mail' | 'mail-outline' | 'map' | 'markunread' | 'markunread-mailbox' | 'memory' | 'menu' | 'merge-type' | 'message' | 'mic' | 'mic-none' | 'mic-off' | 'mms' | 'mode-comment' | 'mode-edit' | 'monetization-on' | 'money-off' | 'monochrome-photos' | 'mood' | 'mood-bad' | 'more' | 'more-horiz' | 'more-vert' | 'motorcycle' | 'mouse' | 'move-to-inbox' | 'movie' | 'movie-creation' | 'movie-filter' | 'multiline-chart' | 'music-note' | 'music-video' | 'my-location' | 'nature' | 'nature-people' | 'navigate-before' | 'navigate-next' | 'navigation' | 'near-me' | 'network-cell' | 'network-check' | 'network-locked' | 'network-wifi' | 'new-releases' | 'next-week' | 'nfc' | 'no-encryption' | 'no-sim' | 'not-interested' | 'note' | 'note-add' | 'notifications' | 'notifications-active' | 'notifications-none' | 'notifications-off' | 'notifications-paused' | 'offline-pin' | 'ondemand-video' | 'opacity' | 'open-in-browser' | 'open-in-new' | 'open-with' | 'pages' | 'pageview' | 'palette' | 'pan-tool' | 'panorama' | 'panorama-fish-eye' | 'panorama-horizontal' | 'panorama-vertical' | 'panorama-wide-angle' | 'party-mode' | 'pause' | 'pause-circle-filled' | 'pause-circle-outline' | 'payment' | 'people' | 'people-outline' | 'perm-camera-mic' | 'perm-contact-calendar' | 'perm-data-setting' | 'perm-device-information' | 'perm-identity' | 'perm-media' | 'perm-phone-msg' | 'perm-scan-wifi' | 'person' | 'person-add' | 'person-outline' | 'person-pin' | 'person-pin-circle' | 'personal-video' | 'pets' | 'phone' | 'phone-android' | 'phone-bluetooth-speaker' | 'phone-forwarded' | 'phone-in-talk' | 'phone-iphone' | 'phone-locked' | 'phone-missed' | 'phone-paused' | 'phonelink' | 'phonelink-erase' | 'phonelink-lock' | 'phonelink-off' | 'phonelink-ring' | 'phonelink-setup' | 'photo' | 'photo-album' | 'photo-camera' | 'photo-filter' | 'photo-library' | 'photo-size-select-actual' | 'photo-size-select-large' | 'photo-size-select-small' | 'picture-as-pdf' | 'picture-in-picture' | 'picture-in-picture-alt' | 'pie-chart' | 'pie-chart-outlined' | 'pin-drop' | 'place' | 'play-arrow' | 'play-circle-filled' | 'play-circle-outline' | 'play-for-work' | 'playlist-add' | 'playlist-add-check' | 'playlist-play' | 'plus-one' | 'poll' | 'polymer' | 'pool' | 'portable-wifi-off' | 'portrait' | 'power' | 'power-input' | 'power-settings-new' | 'pregnant-woman' | 'present-to-all' | 'print' | 'priority-high' | 'public' | 'publish' | 'query-builder' | 'question-answer' | 'queue' | 'queue-music' | 'queue-play-next' | 'radio' | 'radio-button-checked' | 'radio-button-unchecked' | 'rate-review' | 'receipt' | 'recent-actors' | 'record-voice-over' | 'redeem' | 'redo' | 'refresh' | 'remove' | 'remove-circle' | 'remove-circle-outline' | 'remove-from-queue' | 'remove-red-eye' | 'remove-shopping-cart' | 'reorder' | 'repeat' | 'repeat-one' | 'replay' | 'replay-10' | 'replay-30' | 'replay-5' | 'reply' | 'reply-all' | 'report' | 'report-problem' | 'restaurant' | 'restaurant-menu' | 'restore' | 'restore-page' | 'ring-volume' | 'room' | 'room-service' | 'rotate-90-degrees-ccw' | 'rotate-left' | 'rotate-right' | 'rounded-corner' | 'router' | 'rowing' | 'rss-feed' | 'rv-hookup' | 'satellite' | 'save' | 'scanner' | 'schedule' | 'school' | 'screen-lock-landscape' | 'screen-lock-portrait' | 'screen-lock-rotation' | 'screen-rotation' | 'screen-share' | 'sd-card' | 'sd-storage' | 'search' | 'security' | 'select-all' | 'send' | 'sentiment-dissatisfied' | 'sentiment-neutral' | 'sentiment-satisfied' | 'sentiment-very-dissatisfied' | 'sentiment-very-satisfied' | 'settings' | 'settings-applications' | 'settings-backup-restore' | 'settings-bluetooth' | 'settings-brightness' | 'settings-cell' | 'settings-ethernet' | 'settings-input-antenna' | 'settings-input-component' | 'settings-input-composite' | 'settings-input-hdmi' | 'settings-input-svideo' | 'settings-overscan' | 'settings-phone' | 'settings-power' | 'settings-remote' | 'settings-system-daydream' | 'settings-voice' | 'share' | 'shop' | 'shop-two' | 'shopping-basket' | 'shopping-cart' | 'short-text' | 'show-chart' | 'shuffle' | 'signal-cellular-4-bar' | 'signal-cellular-connected-no-internet-4-bar' | 'signal-cellular-no-sim' | 'signal-cellular-null' | 'signal-cellular-off' | 'signal-wifi-4-bar' | 'signal-wifi-4-bar-lock' | 'signal-wifi-off' | 'sim-card' | 'sim-card-alert' | 'skip-next' | 'skip-previous' | 'slideshow' | 'slow-motion-video' | 'smartphone' | 'smoke-free' | 'smoking-rooms' | 'sms' | 'sms-failed' | 'snooze' | 'sort' | 'sort-by-alpha' | 'spa' | 'space-bar' | 'speaker' | 'speaker-group' | 'speaker-notes' | 'speaker-notes-off' | 'speaker-phone' | 'spellcheck' | 'star' | 'star-border' | 'star-half' | 'stars' | 'stay-current-landscape' | 'stay-current-portrait' | 'stay-primary-landscape' | 'stay-primary-portrait' | 'stop' | 'stop-screen-share' | 'storage' | 'store' | 'store-mall-directory' | 'straighten' | 'streetview' | 'strikethrough-s' | 'style' | 'subdirectory-arrow-left' | 'subdirectory-arrow-right' | 'subject' | 'subscriptions' | 'subtitles' | 'subway' | 'supervisor-account' | 'surround-sound' | 'swap-calls' | 'swap-horiz' | 'swap-vert' | 'swap-vertical-circle' | 'switch-camera' | 'switch-video' | 'sync' | 'sync-disabled' | 'sync-problem' | 'system-update' | 'system-update-alt' | 'tab' | 'tab-unselected' | 'tablet' | 'tablet-android' | 'tablet-mac' | 'tag-faces' | 'tap-and-play' | 'terrain' | 'text-fields' | 'text-format' | 'textsms' | 'texture' | 'theaters' | 'thumb-down' | 'thumb-up' | 'thumbs-up-down' | 'time-to-leave' | 'timelapse' | 'timeline' | 'timer' | 'timer-10' | 'timer-3' | 'timer-off' | 'title' | 'toc' | 'today' | 'toll' | 'tonality' | 'touch-app' | 'toys' | 'track-changes' | 'traffic' | 'train' | 'tram' | 'transfer-within-a-station' | 'transform' | 'translate' | 'trending-down' | 'trending-flat' | 'trending-up' | 'tune' | 'turned-in' | 'turned-in-not' | 'tv' | 'unarchive' | 'undo' | 'unfold-less' | 'unfold-more' | 'update' | 'usb' | 'verified-user' | 'vertical-align-bottom' | 'vertical-align-center' | 'vertical-align-top' | 'vibration' | 'video-call' | 'video-label' | 'video-library' | 'videocam' | 'videocam-off' | 'videogame-asset' | 'view-agenda' | 'view-array' | 'view-carousel' | 'view-column' | 'view-comfy' | 'view-compact' | 'view-day' | 'view-headline' | 'view-list' | 'view-module' | 'view-quilt' | 'view-stream' | 'view-week' | 'vignette' | 'visibility' | 'visibility-off' | 'voice-chat' | 'voicemail' | 'volume-down' | 'volume-mute' | 'volume-off' | 'volume-up' | 'vpn-key' | 'vpn-lock' | 'wallpaper' | 'warning' | 'watch' | 'watch-later' | 'wb-auto' | 'wb-cloudy' | 'wb-incandescent' | 'wb-iridescent' | 'wb-sunny' | 'wc' | 'web' | 'web-asset' | 'weekend' | 'whatshot' | 'widgets' | 'wifi' | 'wifi-lock' | 'wifi-tethering' | 'work' | 'wrap-text' | 'youtube-searched-for' | 'zoom-in' | 'zoom-out' | 'zoom-out-map'
  }

  interface OcticonsProps extends BaseIconProps {
    name: 'alert' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-small-down' | 'arrow-small-left' | 'arrow-small-right' | 'arrow-small-up' | 'arrow-up' | 'beaker' | 'bell' | 'bold' | 'book' | 'bookmark' | 'briefcase' | 'broadcast' | 'browser' | 'bug' | 'calendar' | 'check' | 'checklist' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle-slash' | 'circuit-board' | 'clippy' | 'clock' | 'cloud-download' | 'cloud-upload' | 'code' | 'comment' | 'comment-discussion' | 'credit-card' | 'dash' | 'dashboard' | 'database' | 'desktop-download' | 'device-camera' | 'device-camera-video' | 'device-desktop' | 'device-mobile' | 'diff' | 'diff-added' | 'diff-ignored' | 'diff-modified' | 'diff-removed' | 'diff-renamed' | 'ellipsis' | 'eye' | 'file' | 'file-binary' | 'file-code' | 'file-directory' | 'file-media' | 'file-pdf' | 'file-submodule' | 'file-symlink-directory' | 'file-symlink-file' | 'file-text' | 'file-zip' | 'flame' | 'fold' | 'gear' | 'gift' | 'gist' | 'gist-secret' | 'git-branch' | 'git-commit' | 'git-compare' | 'git-merge' | 'git-pull-request' | 'globe' | 'grabber' | 'graph' | 'heart' | 'history' | 'home' | 'horizontal-rule' | 'hubot' | 'inbox' | 'info' | 'issue-closed' | 'issue-opened' | 'issue-reopened' | 'italic' | 'jersey' | 'kebab-horizontal' | 'kebab-vertical' | 'key' | 'keyboard' | 'law' | 'light-bulb' | 'link' | 'link-external' | 'list-ordered' | 'list-unordered' | 'location' | 'lock' | 'logo-gist' | 'logo-github' | 'mail' | 'mail-read' | 'mail-reply' | 'mark-github' | 'markdown' | 'megaphone' | 'mention' | 'milestone' | 'mirror' | 'mortar-board' | 'mute' | 'no-newline' | 'note' | 'octoface' | 'organization' | 'package' | 'paintcan' | 'pencil' | 'person' | 'pin' | 'plug' | 'plus' | 'plus-small' | 'primitive-dot' | 'primitive-square' | 'project' | 'pulse' | 'question' | 'quote' | 'radio-tower' | 'reply' | 'repo' | 'repo-clone' | 'repo-force-push' | 'repo-forked' | 'repo-pull' | 'repo-push' | 'rocket' | 'rss' | 'ruby' | 'screen-full' | 'screen-normal' | 'search' | 'server' | 'settings' | 'shield' | 'sign-in' | 'sign-out' | 'smiley' | 'squirrel' | 'star' | 'stop' | 'sync' | 'tag' | 'tasklist' | 'telescope' | 'terminal' | 'text-size' | 'three-bars' | 'thumbsdown' | 'thumbsup' | 'tools' | 'trashcan' | 'triangle-down' | 'triangle-left' | 'triangle-right' | 'triangle-up' | 'unfold' | 'unmute' | 'unverified' | 'verified' | 'versions' | 'watch' | 'x' | 'zap'
  }

  interface SimpleLineIconsProps extends BaseIconProps {
    name: 'user' | 'people' | 'user-female' | 'user-follow' | 'user-following' | 'user-unfollow' | 'login' | 'logout' | 'emotsmile' | 'phone' | 'call-end' | 'call-in' | 'call-out' | 'map' | 'location-pin' | 'direction' | 'directions' | 'compass' | 'layers' | 'menu' | 'list' | 'options-vertical' | 'options' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-up-circle' | 'arrow-left-circle' | 'arrow-right-circle' | 'arrow-down-circle' | 'check' | 'clock' | 'plus' | 'minus' | 'close' | 'event' | 'exclamation' | 'organization' | 'trophy' | 'screen-smartphone' | 'screen-desktop' | 'plane' | 'notebook' | 'mustache' | 'mouse' | 'magnet' | 'energy' | 'disc' | 'cursor' | 'cursor-move' | 'crop' | 'chemistry' | 'speedometer' | 'shield' | 'screen-tablet' | 'magic-wand' | 'hourglass' | 'graduation' | 'ghost' | 'game-controller' | 'fire' | 'eyeglass' | 'envelope-open' | 'envelope-letter' | 'bell' | 'badge' | 'anchor' | 'wallet' | 'vector' | 'speech' | 'puzzle' | 'printer' | 'present' | 'playlist' | 'pin' | 'picture' | 'handbag' | 'globe-alt' | 'globe' | 'folder-alt' | 'folder' | 'film' | 'feed' | 'drop' | 'drawer' | 'docs' | 'doc' | 'diamond' | 'cup' | 'calculator' | 'bubbles' | 'briefcase' | 'book-open' | 'basket-loaded' | 'basket' | 'bag' | 'action-undo' | 'action-redo' | 'wrench' | 'umbrella' | 'trash' | 'tag' | 'support' | 'frame' | 'size-fullscreen' | 'size-actual' | 'shuffle' | 'share-alt' | 'share' | 'rocket' | 'question' | 'pie-chart' | 'pencil' | 'note' | 'loop' | 'home' | 'grid' | 'graph' | 'microphone' | 'music-tone-alt' | 'music-tone' | 'earphones-alt' | 'earphones' | 'equalizer' | 'like' | 'dislike' | 'control-start' | 'control-rewind' | 'control-play' | 'control-pause' | 'control-forward' | 'control-end' | 'volume-1' | 'volume-2' | 'volume-off' | 'calendar' | 'bulb' | 'chart' | 'ban' | 'bubble' | 'camrecorder' | 'camera' | 'cloud-download' | 'cloud-upload' | 'envelope' | 'eye' | 'flag' | 'heart' | 'info' | 'key' | 'link' | 'lock' | 'lock-open' | 'magnifier' | 'magnifier-add' | 'magnifier-remove' | 'paper-clip' | 'paper-plane' | 'power' | 'refresh' | 'reload' | 'settings' | 'star' | 'symbol-female' | 'symbol-male' | 'target' | 'credit-card' | 'paypal' | 'social-tumblr' | 'social-twitter' | 'social-facebook' | 'social-instagram' | 'social-linkedin' | 'social-pinterest' | 'social-github' | 'social-google' | 'social-reddit' | 'social-skype' | 'social-dribbble' | 'social-behance' | 'social-foursqare' | 'social-soundcloud' | 'social-spotify' | 'social-stumbleupon' | 'social-youtube' | 'social-dropbox' | 'social-vkontakte' | 'social-steam'
  }

  interface ZocialProps extends BaseIconProps {
    name: 'acrobat' | 'amazon' | 'android' | 'angellist' | 'aol' | 'appnet' | 'appstore' | 'bitbucket' | 'bitcoin' | 'blogger' | 'buffer' | 'cal' | 'call' | 'cart' | 'chrome' | 'cloudapp' | 'creativecommons' | 'delicious' | 'digg' | 'disqus' | 'dribbble' | 'dropbox' | 'drupal' | 'dwolla' | 'email' | 'eventasaurus' | 'eventbrite' | 'eventful' | 'evernote' | 'facebook' | 'fivehundredpx' | 'flattr' | 'flickr' | 'forrst' | 'foursquare' | 'github' | 'gmail' | 'google' | 'googleplay' | 'googleplus' | 'gowalla' | 'grooveshark' | 'guest' | 'html5' | 'ie' | 'instagram' | 'instapaper' | 'intensedebate' | 'itunes' | 'klout' | 'lanyrd' | 'lastfm' | 'lego' | 'linkedin' | 'lkdto' | 'logmein' | 'macstore' | 'meetup' | 'myspace' | 'ninetyninedesigns' | 'openid' | 'opentable' | 'paypal' | 'persona' | 'pinboard' | 'pinterest' | 'plancast' | 'plurk' | 'pocket' | 'podcast' | 'posterous' | 'print' | 'quora' | 'reddit' | 'rss' | 'scribd' | 'skype' | 'smashing' | 'songkick' | 'soundcloud' | 'spotify' | 'stackoverflow' | 'statusnet' | 'steam' | 'stripe' | 'stumbleupon' | 'tumblr' | 'twitter' | 'viadeo' | 'vimeo' | 'vk' | 'weibo' | 'wikipedia' | 'windows' | 'wordpress' | 'xing' | 'yahoo' | 'ycombinator' | 'yelp' | 'youtube'
  }

  abstract class BaseIconsComponent<Props> extends Component<Props> {
    static Button: any
    static font: any
    static glyphMap: any
  }

  class Entypo extends BaseIconsComponent<EntypoProps> { }
  class EvilIcons extends BaseIconsComponent<EvilIconsProps> { }
  class Feather extends BaseIconsComponent<FeatherProps> { }
  class FontAwesome extends BaseIconsComponent<FontAwesomeProps> { }
  class Foundation extends BaseIconsComponent<FoundationProps> { }
  class Ionicons extends BaseIconsComponent<IoniconsProps> { }
  class MaterialCommunityIcons extends BaseIconsComponent<MaterialCommunityIconsProps> { }
  class MaterialIcons extends BaseIconsComponent<MaterialIconsProps> { }
  class Octicons extends BaseIconsComponent<OcticonsProps> { }
  class SimpleLineIcons extends BaseIconsComponent<SimpleLineIconsProps> { }
  class Zocial extends BaseIconsComponent<ZocialProps> { }
}
