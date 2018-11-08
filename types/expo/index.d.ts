// Type definitions for expo 30.0
// Project: https://github.com/expo/expo-sdk
// Definitions by: Konstantin Kai <https://github.com/KonstantinKai>
//                 Martynas Kadiša <https://github.com/martynaskadisa>
//                 Jan Aagaard <https://github.com/janaagaard75>
//                 Sergio Sánchez <https://github.com/ssanchezmarc>
//                 Fernando Helwanger <https://github.com/fhelwanger>
//                 Umidbek Karimov <https://github.com/umidbekkarimov>
//                 Moshe Feuchtwanger <https://github.com/moshfeu>
//                 Michael Prokopchuk <https://github.com/prokopcm>
//                 Tina Roh <https://github.com/tinaroh>
//                 Nathan Phillip Brink <https://github.com/binki>
//                 Martin Olsson <https://github.com/mo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { EventSubscription } from 'fbemitter';
import { Component, ComponentClass, Ref, ComponentType } from 'react';
import {
    ColorPropType,
    ImageRequireSource,
    ImageURISource,
    LinkingStatic as ReactNativeLinkingStatic,
    NativeEventEmitter,
    ViewProps,
    ViewStyle,
    Permission,
    StyleProp
} from 'react-native';

export type Axis = number;
export type BarCodeReadCallback = (params: { type: string; data: string; }) => void;
export type Md5 = string;
export type Orientation = 'portrait' | 'landscape';
export type RequireSource = ImageRequireSource;
export type ResizeModeContain = 'contain';
export type ResizeModeCover = 'cover';
export type ResizeModeStretch = 'stretch';
export type URISource = ImageURISource;

export interface HashMap { [key: string]: any; }
export interface StringHashMap { [key: string]: string; }

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
 * Admob
 */
export type AdMobBannerSize =
    | 'banner'
    | 'largeBanner'
    | 'mediumRectangle'
    | 'fullBanner'
    | 'leaderboard'
    | 'smartBannerPortrait'
    | 'smartBannerLandscape';
export interface AdMobBannerProperties extends ViewProps {
    bannerSize?: AdMobBannerSize;
    adUnitID?: string;
    testDeviceID?: string;
    didFailToReceiveAdWithError?(errorDescription: string): void;
    adViewDidReceiveAd?(): void;
    adViewWillPresentScreen?(): void;
    adViewWillDismissScreen?(): void;
    adViewDidDismissScreen?(): void;
    adViewWillLeaveApplication?(): void;
}

export class AdMobBanner extends Component<AdMobBannerProperties> { }
export interface AdMobAppEvent {
    name: string;
    info: string;
}
export interface PublisherBannerProperties extends AdMobBannerProperties {
    onAdMobDispatchAppEvent?(event: AdMobAppEvent): void;
}
export class PublisherBanner extends Component<PublisherBannerProperties> { }

export type AdMobInterstitialEmptyEvent =
    | 'interstitialDidLoad'
    | 'interstitialDidOpen'
    | 'interstitialDidClose'
    | 'interstitialWillLeaveApplication';
export type AdMobInterstitialEvent = AdMobInterstitialEmptyEvent | 'interstitialDidFailToLoad';
export namespace AdMobInterstitial {
    function setAdUnitID(id: string): void;
    function setTestDeviceID(id: string): void;
    function requestAdAsync(): Promise<void>;
    function showAdAsync(): Promise<void>;
    function dismissAdAsync(): Promise<void>;
    function getIsReadyAsync(): Promise<boolean>;
    function addEventListener(event: 'interstitialDidFailToLoad', handler: (error: string) => void): void;
    function addEventListener(event: AdMobInterstitialEmptyEvent, handler: () => void): void;
    function removeEventListener(event: 'interstitialDidFailToLoad', handler: (error: string) => void): void;
    function removeEventListener(event: AdMobInterstitialEmptyEvent, handler: () => void): void;
    function removeAllListeners(): void;
}

export type AdMobRewardedEmptyEvent =
    | 'rewardedVideoDidLoad'
    | 'rewardedVideoDidOpen'
    | 'rewardedVideoDidStart'
    | 'rewardedVideoDidClose'
    | 'rewardedVideoWillLeaveApplication';
export type AdMobRewardedEvent = AdMobRewardedEmptyEvent | 'rewardedVideoDidRewardUser' | 'rewardedVideoDidFailToLoad';
export namespace AdMobRewarded {
    function setAdUnitID(id: string): void;
    function setTestDeviceID(id: string): void;
    function requestAdAsync(): Promise<void>;
    function showAdAsync(): Promise<void>;
    function dismissAdAsync(): Promise<void>;
    function getIsReadyAsync(): Promise<boolean>;
    function addEventListener(event: 'rewardedVideoDidRewardUser', handler: (type: string, amount: number) => void): void;
    function addEventListener(event: 'rewardedVideoDidFailToLoad', handler: (error: string) => void): void;
    function addEventListener(event: AdMobRewardedEmptyEvent, handler: () => void): void;
    function removeEventListener(event: 'rewardedVideoDidRewardUser', handler: (type: string, amount: number) => void): void;
    function removeEventListener(event: 'rewardedVideoDidFailToLoad', handler: (error: string) => void): void;
    function removeEventListener(event: AdMobRewardedEmptyEvent, handler: () => void): void;
    function removeAllListeners(): void;
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

// #region AppLoading
/** The following props are recommended, but optional for the sake of backwards compatibility (they were introduced in SDK21). If you do not provide any props, you are responsible for coordinating loading assets, handling errors, and updating state to unmount the `AppLoading` component. */
export interface AppLoadingProps {
    /** A `function` that returns a `Promise`. The `Promise` should resolve when the app is done loading data and assets. */
    startAsync?: () => Promise<void>;

    /** Required if you provide `startAsync`. Called when `startAsync` resolves or rejects. This should be used to set state and unmount the `AppLoading` component. */
    onFinish?: () => void;

    /** If `startAsync` throws an error, it is caught and passed into the function provided to `onError`. */
    onError?: (error: Error) => void;
}

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

/**
 * AuthSession
 */
export namespace AuthSession {
    type StartAsyncResponse = {
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
    };

    function startAsync(options: { authUrl: string; returnUrl?: string; }): Promise<StartAsyncResponse>;
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
    isLooping?: boolean;
    isMuted?: boolean;
    positionMillis?: number;
    progressUpdateIntervalMillis?: number;
    /** The desired playback rate of the media. This value must be between `0.0` and `32.0`. Only available on Android API version 23 and later and iOS. */
    rate?: number;
    shouldCorrectPitch?: boolean;
    shouldPlay?: boolean;
    /** A number between `0.0` (silence) and `1.0` (maximum volume). */
    volume?: number;
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
export interface BarCodeScannerProps extends ViewProps {
    type?: 'front' | 'back';
    torchMode?: 'on' | 'off';
    barCodeTypes?: string[];
    onBarCodeRead?: BarCodeReadCallback;
}

export class BarCodeScanner extends Component<BarCodeScannerProps> {
    static Constants: {
        TorchMode: {
            on: string;
            off: string
        }
    } & CameraConstants;
}
// #endregion

// #region BlurView
/**
 * BlurView
 */
export interface BlurViewProps extends ViewProps {
    tint: 'light' | 'default' | 'dark';
    intensity: number;
}
export class BlurView extends Component<BlurViewProps> { }
// #endregion

/**
 * An API to get and set screen brightness.
 */
export namespace Brightness {
    /** Sets screen brightness. */
    function setBrightnessAsync(
        /** A number between `0` and `1`, representing the desired screen brightness. */
        brightnessValue: number
    ): Promise<void>;

    /**
     * Gets screen brightness.
     * @returns A Promise that is resolved with a number between `0` and `1`, representing the current screen brightness.
     */
    function getBrightnessAsync(): Promise<number>;

    /**
     * Gets global system screen brightness.
     * @returns A Promise that is resolved with a number between `0` and `1`, representing the current system screen brightness.
     */
    function getSystemBrightnessAsync(): Promise<number>;

    /** Sets global system screen brightness, requires `WRITE_SETTINGS` permissions on Android. */
    function setSystemBrightnessAsync(
        /** A number between `0` and `1`, representing the desired screen brightness. */
        brightnessValue: number
    ): Promise<void>;
}

// #region Camera
/**
 * Camera
 */
export interface PictureOptions {
    quality?: number;
    base64?: boolean;
    exif?: boolean;
    onPictureSaved?: (data: PictureResponse) => void;
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
    takePictureAsync(options?: PictureOptions): Promise<PictureResponse>;
    recordAsync(options: RecordingOptions): Promise<{ uri: string; }>;
    stopRecording(): void;
    getSupportedRatiosAsync(): Promise<string[]>; // Android only
}

export interface CameraProps extends ViewProps {
    autoFocus?: string | number | boolean;
    barCodeTypes?: Array<string | number>;
    faceDetectionClassifications?: number;
    faceDetectionLandmarks?: number;
    faceDetectionMode?: number;
    flashMode?: string | number;
    /** Distance to plane of sharpest focus. A value between `0` and `1`. `0`: infinity focus, `1`: focus as close as possible. Default: `0`. For Android this is available only for some devices and when `useCamera2Api` is set to `true`. */
    focusDepth?: number;
    onBarCodeRead?: BarCodeReadCallback;
    onCameraReady?: () => void;
    onFacesDetected?: (options: { faces: TrackedFaceFeature[] }) => void;
    onMountError?: () => void;
    ratio?: string;
    ref?: Ref<CameraObject>;
    type?: string | number;
    whiteBalance?: string | number;
    /** A value between `0` and `1` being a percentage of device's max zoom. `0`: not zoomed, `1`: maximum zoom. Default: `0`. */
    zoom?: number;
}

export interface CameraConstants {
    readonly Type: {
        back: string;
        front: string;
    };
    readonly FlashMode: {
        on: string;
        off: string;
        auto: string;
        torch: string;
    };
    readonly AutoFocus: {
        on: string;
        off: string;
    };
    readonly WhiteBalance: {
        auto: string;
        sunny: string;
        cloudy: string;
        shadow: string;
        fluorescent: string;
        incandescent: string;
    };
    readonly VideoQuality: {
        [videoQuality: string]: number;
    };
    readonly BarCodeType: {
        aztec: string;
        codabar: string;
        code39: string;
        code93: string;
        code128: string;
        code138: string;
        code39mod43: string;
        datamatrix: string;
        ean13: string;
        ean8: string;
        interleaved2of5: string;
        itf14: string;
        maxicode: string;
        pdf417: string;
        rss14: string;
        rssexpanded: string;
        upc_a: string;
        upc_e: string;
        upc_ean: string;
        qr: string;
    };
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
    const installationId: string;
    const deviceId: string;
    const deviceName: string;
    const deviceYearClass: number;
    const isDevice: boolean;

    interface Platform {
        ios?: {
            platform: string;
            model: string;
            userInterfaceIdiom: string;
            buildNumber: string;
        };
        android?: {
            versionCode: string;
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
            barStyle?: 'light-content' | 'dark-content',
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

    function getWebViewUserAgentAsync(): Promise<string>;
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
    interface Response {
        type: 'cancel' | 'success';
        token?: string;
        expires?: number;
    }
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
 * FaceDetector
 */
export interface Point {
    x: Axis;
    y: Axis;
}

export interface FaceFeature {
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

export interface TrackedFaceFeature extends FaceFeature {
    faceID?: number;
}

export namespace FaceDetector {
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
export namespace LocalAuthentication {
    type LocalAuthenticationResult = {
        success: true
    } | {
        success: false,

        /** Error code in the case where authentication fails. */
        error: string
    };

    /** Determine whether a face or fingerprint scanner is available on the device. */
    function hasHardwareAsync(): Promise<boolean>;

    /** Determine whether the device has saved fingerprints or facial data to use for authentication. */
    function isEnrolledAsync(): Promise<boolean>;

    /**
     * Attempts to authenticate via Fingerprint. Android: When using the fingerprint module on Android, you need to provide a UI component to prompt the user to scan their fingerprint, as the OS has no default alert for it.
     *
     * @param promptMessage A message that is shown alongside the TouchID/FaceID prompt. (iOS only)
     */
    function authenticateAsync(promptMessageIOS?: string): Promise<LocalAuthenticationResult>;

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
export interface ExpoWebGLRenderingContext extends WebGLRenderingContext {
    endFrameEXP(): void;
}

/**
 * A View that acts as an OpenGL ES render target. On mounting, an OpenGL ES
 * context is created. Its drawing buffer is presented as the contents of
 * the View every frame.
 */
export interface GLViewProps extends ViewProps {
    /**
     * A function that will be called when the OpenGL ES context is created.
     * Passes an object with a WebGLRenderingContext interface as an argument.
     */
    onContextCreate(gl: ExpoWebGLRenderingContext): void;

    /** Number of MSAA samples to use on iOS. Defaults to 4. Ignored on Android. */
    msaaSamples?: number;
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
 * ImageManipulator
 */
export namespace ImageManipulator {
    type Action = Resize | Rotate | Flip | Crop;

    interface Resize {
        resize: { width?: number, height?: number };
    }

    interface Rotate {
        rotate: number;
    }

    interface Flip {
        flip?: { vertical?: boolean; horizontal?: boolean };
    }

    interface Crop {
        originX: number;
        originY: number;
        width: number;
        height: number;
    }

    interface ImageResult {
        uri: string;
        width: number;
        height: number;
        base64?: string;
    }

    interface SaveOptions {
        base64?: boolean;
        /** A value in range `0` - `1` specifying compression level of the result image. `1` means no compression and `0` the highest compression. */
        compress?: number;
        format?: 'jpeg' | 'png';
    }

    function manipulate(uri: string, actions: Action[], saveOptions?: SaveOptions): Promise<ImageResult>;
}

/**
 * Image Picker
 */
export namespace ImagePicker {
    interface ImageInfo {
        uri: string;
        width: number;
        height: number;
        type: 'video' | 'image';
        base64?: string;
        exif?: object;
        duration?: number;
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
        base64?: boolean;
        exif?: boolean;
        mediaTypes?: keyof _MediaTypeOptions;
    }

    /**
     * require Permissions.CAMERA_ROLL
     */
    function launchImageLibraryAsync(options?: ImageLibraryOptions): Promise<ImageResult>;

    interface CameraOptions {
        allowsEditing?: boolean;
        aspect?: [number, number];
        quality?: number;
        base64?: boolean;
        exif?: boolean;
    }

    /**
     * require Permissions.CAMERA_ROLL
     */
    function launchCameraAsync(options?: CameraOptions): Promise<ImageResult>;
}

/**
 * IntentLauncherAndroid
 */
export namespace IntentLauncherAndroid {
    const ACTION_ACCESSIBILITY_SETTINGS: 'android.settings.ACCESSIBILITY_SETTINGS';
    const ACTION_APP_NOTIFICATION_REDACTION: 'android.settings.ACTION_APP_NOTIFICATION_REDACTION';
    const ACTION_CONDITION_PROVIDER_SETTINGS: 'android.settings.ACTION_CONDITION_PROVIDER_SETTINGS';
    const ACTION_NOTIFICATION_LISTENER_SETTINGS: 'android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS';
    const ACTION_PRINT_SETTINGS: 'android.settings.ACTION_PRINT_SETTINGS';
    const ACTION_ADD_ACCOUNT_SETTINGS: 'android.settings.ADD_ACCOUNT_SETTINGS';
    const ACTION_AIRPLANE_MODE_SETTINGS: 'android.settings.AIRPLANE_MODE_SETTINGS';
    const ACTION_APN_SETTINGS: 'android.settings.APN_SETTINGS';
    const ACTION_APPLICATION_DETAILS_SETTINGS: 'android.settings.APPLICATION_DETAILS_SETTINGS';
    const ACTION_APPLICATION_DEVELOPMENT_SETTINGS: 'android.settings.APPLICATION_DEVELOPMENT_SETTINGS';
    const ACTION_APPLICATION_SETTINGS: 'android.settings.APPLICATION_SETTINGS';
    const ACTION_APP_NOTIFICATION_SETTINGS: 'android.settings.APP_NOTIFICATION_SETTINGS';
    const ACTION_APP_OPS_SETTINGS: 'android.settings.APP_OPS_SETTINGS';
    const ACTION_BATTERY_SAVER_SETTINGS: 'android.settings.BATTERY_SAVER_SETTINGS';
    const ACTION_BLUETOOTH_SETTINGS: 'android.settings.BLUETOOTH_SETTINGS';
    const ACTION_CAPTIONING_SETTINGS: 'android.settings.CAPTIONING_SETTINGS';
    const ACTION_CAST_SETTINGS: 'android.settings.CAST_SETTINGS';
    const ACTION_DATA_ROAMING_SETTINGS: 'android.settings.DATA_ROAMING_SETTINGS';
    const ACTION_DATE_SETTINGS: 'android.settings.DATE_SETTINGS';
    const ACTION_DEVICE_INFO_SETTINGS: 'android.settings.DEVICE_INFO_SETTINGS';
    const ACTION_DEVICE_NAME: 'android.settings.DEVICE_NAME';
    const ACTION_DISPLAY_SETTINGS: 'android.settings.DISPLAY_SETTINGS';
    const ACTION_DREAM_SETTINGS: 'android.settings.DREAM_SETTINGS';
    const ACTION_HARD_KEYBOARD_SETTINGS: 'android.settings.HARD_KEYBOARD_SETTINGS';
    const ACTION_HOME_SETTINGS: 'android.settings.HOME_SETTINGS';
    const ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS: 'android.settings.IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS';
    const ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS: 'android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS';
    const ACTION_INPUT_METHOD_SETTINGS: 'android.settings.INPUT_METHOD_SETTINGS';
    const ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: 'android.settings.INPUT_METHOD_SUBTYPE_SETTINGS';
    const ACTION_INTERNAL_STORAGE_SETTINGS: 'android.settings.INTERNAL_STORAGE_SETTINGS';
    const ACTION_LOCALE_SETTINGS: 'android.settings.LOCALE_SETTINGS';
    const ACTION_LOCATION_SOURCE_SETTINGS: 'android.settings.LOCATION_SOURCE_SETTINGS';
    const ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: 'android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS';
    const ACTION_MANAGE_APPLICATIONS_SETTINGS: 'android.settings.MANAGE_APPLICATIONS_SETTINGS';
    const ACTION_MANAGE_DEFAULT_APPS_SETTINGS: 'android.settings.MANAGE_DEFAULT_APPS_SETTINGS';
    const ACTION_MEMORY_CARD_SETTINGS: 'android.settings.MEMORY_CARD_SETTINGS';
    const ACTION_MONITORING_CERT_INFO: 'android.settings.MONITORING_CERT_INFO';
    const ACTION_NETWORK_OPERATOR_SETTINGS: 'android.settings.NETWORK_OPERATOR_SETTINGS';
    const ACTION_NFCSHARING_SETTINGS: 'android.settings.NFCSHARING_SETTINGS';
    const ACTION_NFC_PAYMENT_SETTINGS: 'android.settings.NFC_PAYMENT_SETTINGS';
    const ACTION_NFC_SETTINGS: 'android.settings.NFC_SETTINGS';
    const ACTION_NIGHT_DISPLAY_SETTINGS: 'android.settings.NIGHT_DISPLAY_SETTINGS';
    const ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: 'android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS';
    const ACTION_NOTIFICATION_SETTINGS: 'android.settings.NOTIFICATION_SETTINGS';
    const ACTION_PAIRING_SETTINGS: 'android.settings.PAIRING_SETTINGS';
    const ACTION_PRIVACY_SETTINGS: 'android.settings.PRIVACY_SETTINGS';
    const ACTION_QUICK_LAUNCH_SETTINGS: 'android.settings.QUICK_LAUNCH_SETTINGS';
    const ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: 'android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS';
    const ACTION_SECURITY_SETTINGS: 'android.settings.SECURITY_SETTINGS';
    const ACTION_SETTINGS: 'android.settings.SETTINGS';
    const ACTION_SHOW_ADMIN_SUPPORT_DETAILS: 'android.settings.SHOW_ADMIN_SUPPORT_DETAILS';
    const ACTION_SHOW_INPUT_METHOD_PICKER: 'android.settings.SHOW_INPUT_METHOD_PICKER';
    const ACTION_SHOW_REGULATORY_INFO: 'android.settings.SHOW_REGULATORY_INFO';
    const ACTION_SHOW_REMOTE_BUGREPORT_DIALOG: 'android.settings.SHOW_REMOTE_BUGREPORT_DIALOG';
    const ACTION_SOUND_SETTINGS: 'android.settings.SOUND_SETTINGS';
    const ACTION_STORAGE_MANAGER_SETTINGS: 'android.settings.STORAGE_MANAGER_SETTINGS';
    const ACTION_SYNC_SETTINGS: 'android.settings.SYNC_SETTINGS';
    const ACTION_SYSTEM_UPDATE_SETTINGS: 'android.settings.SYSTEM_UPDATE_SETTINGS';
    const ACTION_TETHER_PROVISIONING_UI: 'android.settings.TETHER_PROVISIONING_UI';
    const ACTION_TRUSTED_CREDENTIALS_USER: 'android.settings.TRUSTED_CREDENTIALS_USER';
    const ACTION_USAGE_ACCESS_SETTINGS: 'android.settings.USAGE_ACCESS_SETTINGS';
    const ACTION_USER_DICTIONARY_INSERT: 'android.settings.USER_DICTIONARY_INSERT';
    const ACTION_USER_DICTIONARY_SETTINGS: 'android.settings.USER_DICTIONARY_SETTINGS';
    const ACTION_USER_SETTINGS: 'android.settings.USER_SETTINGS';
    const ACTION_VOICE_CONTROL_AIRPLANE_MODE: 'android.settings.VOICE_CONTROL_AIRPLANE_MODE';
    const ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: 'android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE';
    const ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: 'android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE';
    const ACTION_VOICE_INPUT_SETTINGS: 'android.settings.VOICE_INPUT_SETTINGS';
    const ACTION_VPN_SETTINGS: 'android.settings.VPN_SETTINGS';
    const ACTION_VR_LISTENER_SETTINGS: 'android.settings.VR_LISTENER_SETTINGS';
    const ACTION_WEBVIEW_SETTINGS: 'android.settings.WEBVIEW_SETTINGS';
    const ACTION_WIFI_IP_SETTINGS: 'android.settings.WIFI_IP_SETTINGS';
    const ACTION_WIFI_SETTINGS: 'android.settings.WIFI_SETTINGS';
    const ACTION_WIRELESS_SETTINGS: 'android.settings.WIRELESS_SETTINGS';
    const ACTION_ZEN_MODE_AUTOMATION_SETTINGS: 'android.settings.ZEN_MODE_AUTOMATION_SETTINGS';
    const ACTION_ZEN_MODE_EVENT_RULE_SETTINGS: 'android.settings.ZEN_MODE_EVENT_RULE_SETTINGS';
    const ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS: 'android.settings.ZEN_MODE_EXTERNAL_RULE_SETTINGS';
    const ACTION_ZEN_MODE_PRIORITY_SETTINGS: 'android.settings.ZEN_MODE_PRIORITY_SETTINGS';
    const ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS: 'android.settings.ZEN_MODE_SCHEDULE_RULE_SETTINGS';
    const ACTION_ZEN_MODE_SETTINGS: 'android.settings.ZEN_MODE_SETTINGS';

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
    start?: [number, number];
    end?: [number, number];
    locations?: number[];
    style?: StyleProp<ViewStyle>;
}

export class LinearGradient extends Component<LinearGradientProps> { }
// #endregion

/**
 * Linking
 */
export interface LinkInfo {
    path: string;
    queryParams: Partial<StringHashMap>;
}

export interface LinkingStatic extends ReactNativeLinkingStatic {
    makeUrl(path: string, queryParams?: HashMap): string;
    parse(url: string): LinkInfo;
    parseInitialURLAsync(): Promise<LinkInfo>;
}
export const Linking: LinkingStatic;

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
    function reverseGeocodeAsync(location: LocationProps): Promise<GeocodeData[]>;
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
    function getExpoPushTokenAsync(): Promise<string>;
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
    type PermissionType = 'audioRecording' | 'calendar' |
    'cameraRoll' | 'camera' | 'contacts' | 'location' | 'reminders' |
    'remoteNotifications' | 'systemBrightness' | 'userFacingNotifications';
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

    type RemoteNotificationPermission = 'remoteNotifications';

    const AUDIO_RECORDING: 'audioRecording';
    const CALENDAR: 'calendar';
    const CAMERA_ROLL: 'cameraRoll';
    const CAMERA: 'camera';
    const CONTACTS: 'contacts';
    const LOCATION: 'location';
    const NOTIFICATIONS: RemoteNotificationPermission;
    const REMINDERS = 'reminders';
    const REMOTE_NOTIFICATIONS: RemoteNotificationPermission;
    const SYSTEM_BRIGHTNESS: 'systemBrightness';
    const USER_FACING_NOTIFICATIONS = 'userFacingNotifications';
}

/**
 * Register Root Component
 */
export function registerRootComponent(component: ComponentType): void;

/**
 * ScreenOrientation
 */
export namespace ScreenOrientation {
    interface Orientations {
        ALL: 'ALL';
        ALL_BUT_UPSIDE_DOWN: 'ALL_BUT_UPSIDE_DOWN';
        PORTRAIT: 'PORTRAIT';
        PORTRAIT_UP: 'PORTRAIT_UP';
        PORTRAIT_DOWN: 'PORTRAIT_DOWN';
        LANDSCAPE: 'LANDSCAPE';
        LANDSCAPE_LEFT: 'LANDSCAPE_LEFT';
        LANDSCAPE_RIGHT: 'LANDSCAPE_RIGHT';
    }

    const Orientation: Orientations;

    function allow(orientation: keyof Orientations): void;
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

    /** Available on iOS only */
    function pause(): void;

    /** Available on iOS only */
    function resume(): void;
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
    fillRule?: 'nonzero' | 'evenodd';
    opacity?: number | string;
    stroke?: string;
    strokeWidth?: number | string;
    strokeOpacity?: number | string;
    strokeLinecap?: string;
    strokeLineJoin?: string;
    strokeDasharray?: any[];
    strokeDashoffset?: any;
    transform?: string | object;
    x?: number | string;
    y?: number | string;
    rotate?: number | string;
    rotation?: number | string;
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
    width?: number | string;
    height?: number | string;
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

export class Svg extends Component<{ width: number, height: number, viewBox?: string }> {
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
    style?: StyleProp<ViewStyle>;
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
export namespace WebBrowser {
    function openBrowserAsync(url: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
    function openAuthSessionAsync(url: string, redirectUrl?: string): Promise<{ type: 'cancelled' | 'dismissed' }>;
    function dismissBrowser(): Promise<{ type: 'dismissed' }>;
}

// #region Calendar
/**
 * Calendar
 *
 * Provides an API for interacting with the device’s system calendars, events, reminders, and associated records.
 */
export namespace Calendar {
    interface Calendar {
        /** Internal ID that represents this calendar on the device */
        id?: string;

        /** Visible name of the calendar */
        title?: string;

        sourceId?: string; // iOS

        /** Object representing the source to be used for the calendar */
        source?: Source;

        /** Type of calendar this object represents */
        type?: CalendarType; // iOS

        /** Color used to display this calendar’s events */
        color?: string;

        /** Whether the calendar is used in the Calendar or Reminders OS app */
        entityType?: EntityTypes; // iOS

        /** Boolean value that determines whether this calendar can be modified */
        allowsModifications?: boolean;

        /** Availability types that this calendar supports */
        allowedAvailabilities?: Availability[];

        /** Boolean value indicating whether this is the device’s primary calendar */
        isPrimary?: boolean; // Android

        /** Internal system name of the calendar */
        name?: string; // Android

        /** Name for the account that owns this calendar */
        ownerAccount?: string; // Android

        /** Time zone for the calendar	 */
        timeZone?: string; // Android

        /** Alarm methods that this calendar supports */
        allowedReminders?: AlarmMethod[]; // Android

        /** Attendee types that this calendar supports */
        allowedAttendeeTypes?: AttendeeType[]; // Android

        /** Indicates whether the OS displays events on this calendar */
        isVisible?: boolean; // Android

        /** Indicates whether this calendar is synced and its events stored on the device */
        isSynced?: boolean; // Android

        /** Level of access that the user has for the calendar */
        accessLevel?: CalendarAccessLevel; // Android
    }

    interface Source {
        /** Internal ID that represents this source on the device */
        id?: string; // iOS only ??

        /** Type of account that owns this calendar */
        type?: string;

        /** Name for the account that owns this calendar */
        name?: string;

        /** Whether this source is the local phone account */
        isLocalAccount?: boolean; // Android
    }

    interface Event {
        /** Internal ID that represents this event on the device */
        id?: string;

        /** ID of the calendar that contains this event */
        calendarId?: string;

        /** Visible name of the event */
        title?: string;

        /** Location field of the event	 */
        location?: string;

        /** Date when the event record was created */
        creationDate?: string; // iOS

        /** Date when the event record was last modified */
        lastModifiedDate?: string; // iOS

        /** Time zone the event is scheduled in */
        timeZone?: string;

        /** Time zone for the event end time */
        endTimeZone?: string; // Android

        /** URL for the event */
        url?: string; // iOS

        /** Description or notes saved with the event */
        notes?: string;

        /** Array of Alarm objects which control automated reminders to the user */
        alarms?: Alarm[];

        /** Object representing rules for recurring or repeating events. Null for one-time events. */
        recurrenceRule?: RecurrenceRule;

        /** Date object or string representing the time when the event starts */
        startDate?: string | Date;

        /** Date object or string representing the time when the event ends */
        endDate?: string | Date;

        /** For recurring events, the start date for the first (original) instance of the event */
        originalStartDate?: string; // iOS

        /** Boolean value indicating whether or not the event is a detached (modified) instance of a recurring event */
        isDetached?: boolean; // iOS

        /** Whether the event is displayed as an all-day event on the calendar */
        allDay?: boolean;

        /** The availability setting for the event */
        availability?: Availability; // Availability

        /** Status of the event */
        status?: EventStatus; // Status

        /** Organizer of the event, as an Attendee object */
        organizer?: string; // Organizer - iOS

        /** Email address of the organizer of the event */
        organizerEmail?: string; // Android

        /** User’s access level for the event */
        accessLevel?: EventAccessLevel; // Android,

        /** Whether invited guests can modify the details of the event */
        guestsCanModify?: boolean; // Android,

        /** Whether invited guests can invite other guests */
        guestsCanInviteOthers?: boolean; // Android

        /** Whether invited guests can see other guests */
        guestsCanSeeGuests?: boolean; // Android

        /** For detached (modified) instances of recurring events, the ID of the original recurring event */
        originalId?: string; // Android

        /** For instances of recurring events, volatile ID representing this instance; not guaranteed to always refer to the same instance */
        instanceId?: string; // Android
    }

    interface Attendee {
        /** Internal ID that represents this attendee on the device */
        id?: string; // Android

        /** Indicates whether or not this attendee is the current OS user */
        isCurrentUser?: boolean; // iOS

        /** Displayed name of the attendee */
        name?: string;

        /** Role of the attendee at the event */
        role?: AttendeeRole;

        /** Status of the attendee in relation to the event */
        status?: AttendeeStatus;

        /** Type of the attendee */
        type?: AttendeeType;

        /** URL for the attendee */
        url?: string; // iOS

        /** Email address of the attendee */
        email?: string; // Android
    }

    interface Reminder {
        /** Internal ID that represents this reminder on the device */
        id?: string;

        /** ID of the calendar that contains this reminder */
        calendarId?: string;

        /** Visible name of the reminder */
        title?: string;

        /** Location field of the reminder */
        location?: string;

        /** Date when the reminder record was created */
        creationDate?: string;

        /** Date when the reminder record was last modified */
        lastModifiedDate?: string;

        /** Time zone the reminder is scheduled in */
        timeZone?: string;

        /** URL for the reminder */
        url?: string;

        /** Description or notes saved with the reminder */
        notes?: string;

        /** Array of Alarm objects which control automated alarms to the user about the task */
        alarms?: Alarm[];

        /** Object representing rules for recurring or repeated reminders. Null for one-time tasks. */
        recurrenceRule?: RecurrenceRule;

        /** Date object or string representing the start date of the reminder task */
        startDate?: string;

        /** Date object or string representing the time when the reminder task is due */
        dueDate?: string;

        /** Indicates whether or not the task has been completed */
        completed?: boolean;

        /** Date object or string representing the date of completion, if completed is true */
        completionDate?: string;
    }

    interface Alarm {
        /** Date object or string representing an absolute time the alarm should occur; overrides relativeOffset and structuredLocation if specified alongside either */
        absoluteDate?: string; // iOS

        /** Number of minutes from the startDate of the calendar item that the alarm should occur; use negative values to have the alarm occur before the startDate */
        relativeOffset?: string;
        structuredLocation?: {
            // iOS
            title?: string;
            proximity?: string; // Proximity
            radius?: number;
            coords?: {
                latitude?: number;
                longitude?: number;
            };
        };

        /** Method of alerting the user that this alarm should use; on iOS this is always a notification */
        method?: AlarmMethod; // Method, Android
    }

    interface RecurrenceRule {
        /** How often the calendar item should recur */
        frequency: Frequency; // Frequency

        /** Interval at which the calendar item should recur. For example, an interval: 2 with frequency: DAILY would yield an event that recurs every other day. Defaults to 1 . */
        interval?: number;

        /** Date on which the calendar item should stop recurring; overrides occurrence if both are specified */
        endDate?: string;

        /** Number of times the calendar item should recur before stopping */
        occurrence?: number;
    }

    enum EntityTypes {
        EVENT = 'event',
        REMINDER = 'reminder',
    }

    enum CalendarType {
        LOCAL = 'local',
        CALDAV = 'caldav',
        EXCHANGE = 'exchange',
        SUBSCRIBED = 'subscribed',
        BIRTHDAYS = 'birthdays'
    }

    enum Availability {
        NOT_SUPPORTED = 'notSupported', // iOS
        BUSY = 'busy',
        FREE = 'free',
        TENTATIVE = 'tentative',
        UNAVAILABLE = 'unavailable' // iOS
    }

    enum AlarmMethod {
        ALARM = 'alarm',
        ALERT = 'alert',
        EMAIL = 'email',
        SMS = 'sms',
        DEFAULT = 'default',
    }

    enum AttendeeType {
        UNKNOWN = 'unknown', // iOS
        PERSON = 'person', // iOS
        ROOM = 'room', // iOS
        GROUP = 'group', // iOS
        RESOURCE = 'resource',
        OPTIONAL = 'optional', // Android
        REQUIRED = 'required', // Android
        NONE = 'none' // Android
    }

    enum CalendarAccessLevel {
        CONTRIBUTOR = 'contributor',
        EDITOR = 'editor',
        FREEBUSY = 'freebusy',
        OVERRIDE = 'override',
        OWNER = 'owner',
        READ = 'read',
        RESPOND = 'respond',
        ROOT = 'root',
        NONE = 'none'
    }

    enum EventAccessLevel {
        CONFIDENTIAL = 'confidential',
        PRIVATE = 'private',
        PUBLIC = 'public',
        DEFAULT = 'default'
    }

    enum EventStatus {
        NONE = 'none',
        CONFIRMED = 'confirmed',
        TENTATIVE = 'tentative',
        CANCELED = 'canceled'
    }

    enum AttendeeRole {
        UNKNOWN = 'unknown', // iOS
        REQUIRED = 'required', // iOS
        OPTIONAL = 'optional', // iOS
        CHAIR = 'chair', // iOS
        NON_PARTICIPANT = 'nonParticipant', // iOS
        ATTENDEE = 'attendee', // Android
        ORGANIZER = 'organizer', // Android
        PERFORMER = 'performer', // Android
        SPEAKER = 'speaker', // Android
        NONE = 'none' // Android
    }

    enum AttendeeStatus {
        UNKNOWN = 'unknown', // iOS
        PENDING = 'pending', // iOS
        ACCEPTED = 'accepted',
        DECLINED = 'declined',
        TENTATIVE = 'tentative',
        DELEGATED = 'delegated', // iOS
        COMPLETED = 'completed', // iOS
        IN_PROCESS = 'inProcess', // iOS
        INVITED = 'invited', // Android
        NONE = 'none' // Android
    }

    enum Frequency {
        DAILY = 'daily',
        WEEKLY = 'weekly',
        MONTHLY = 'monthly',
        YEARLY = 'yearly'
    }

    enum ReminderStatus {
        COMPLETED = 'completed',
        INCOMPLETE = 'incomplete'
    }

    interface RecurringEventOptions {
        futureEvents?: boolean;
        instanceStartDate?: string;
    }

    /** Gets an array of calendar objects with details about the different calendars stored on the device. */
    function getCalendarsAsync(
        /** (iOS only) Not required, but if defined, filters the returned calendars to a specific entity type.  */
        entityType?: EntityTypes
    ): Promise<Calendar[]>;

    /** Creates a new calendar on the device, allowing events to be added later and displayed. */
    function createCalendarAsync(details: Calendar): Promise<string>;

    /** Updates the provided details of an existing calendar stored on the device. To remove a property, explicitly set it to null in details */
    function updateCalendarAsync(id: string, details?: Calendar | null): Promise<string>;

    /** Deletes an existing calendar and all associated events/reminders/attendees from the device. Use with caution. */
    function deleteCalendarAsync(id: string): Promise<void>;

    /** Returns all events in a given set of calendars over a specified time period. */
    function getEventsAsync(
        /** Array of IDs of calendars to search for events in. Required. */
        calendarIds: string[],

        /** Beginning of time period to search for events in. Required. */
        startDate: Date,

        /** End of time period to search for events in. Required. */
        endDate: Date
    ): Promise<Event[]>;

    /** Returns a specific event selected by ID. If a specific instance of a recurring event is desired, the start date of this instance must also be provided, as instances of recurring events do not have their own unique and stable IDs on either iOS or Android. */
    function getEventAsync(
        /** ID of the event to return. Required. */
        id: string,

        /** A map of options for recurring events */
        recurringEventOptions?: RecurringEventOptions
    ): Promise<Event>;

    /** Creates a new event on the specified calendar. */
    function createEventAsync(
        /** ID of the calendar to create this event in. Required. */
        calendarId: string,
        details?: Event
    ): Promise<string>;

    /** Updates the provided details of an existing calendar stored on the device. To remove a property, explicitly set it to null in details */
    function updateEventAsync(
        /** ID of the event to be updated. Required. */
        id: string,

        /** A map of properties to be updated  */
        details?: Event | null,

        /** A map of options for recurring events */
        recurrentEventOptions?: RecurringEventOptions
    ): Promise<string>;

    /** Deletes an existing event from the device. Use with caution. */
    function deleteEventAsync(
        /** ID of the event to be deleted. Required. */
        id: string,

        /** A map of options for recurring events */
        recurringEventOptions?: RecurringEventOptions
    ): Promise<void>;

    /** Gets all attendees for a given event (or instance of a recurring event). */
    function getAttendeesForEventAsync(
        /** ID of the event to return attendees for. Required. */
        eventId: string,

        /** A map of options for recurring events */
        recurrentEventOptions?: RecurringEventOptions
    ): Promise<Attendee[]>;

    /** Available on Android only. Creates a new attendee record and adds it to the specified event. Note that if eventId specifies a recurring event, this will add the attendee to every instance of the event. */
    function createAttendeeAsync(
        /**  ID of the event to add this attendee to. Required. */
        eventId: string,

        /** A map of details for the attendee to be created  */
        details?: Attendee
    ): Promise<string>;

    /** Available on Android only. Updates an existing attendee record. To remove a property, explicitly set it to null in details. */
    function updateAttendeeAsync(
        /** ID of the attendee record to be updated. Required. */
        id: string,

        /** A map of properties to be updated  */
        details?: Attendee | null
    ): Promise<string>;

    /** Available on Android only. Deletes an existing attendee record from the device. Use with caution. */
    function deleteAttendeeAsync(id: string): Promise<void>;

    /** Available on iOS only. Returns a list of reminders matching the provided criteria. */
    function getRemindersAsync(
        /**  Array of IDs of calendars to search for reminders in. Required. */
        calendarIds: string[],

        status?: ReminderStatus,

        /** Beginning of time period to search for reminders in. Required if status is defined. */
        startDate?: Date,

        /** End of time period to search for reminders in. Required if status is defined. */
        endDate?: Date
    ): Promise<Reminder[]>;

    /** Available on iOS only. Returns a specific reminder selected by ID. */
    function getReminderAsync(id: string): Promise<Reminder>;

    /** Available on iOS only. Creates a new reminder on the specified calendar. */
    function createReminderAsync(
        /** ID of the calendar to create this reminder in. Required. */
        calendarId: string,

        /** A map of details for the reminder to be created */
        details?: Reminder
    ): Promise<string>;

    /** Available on iOS only. Updates the provided details of an existing reminder stored on the device. To remove a property, explicitly set it to null in details. */
    function updateReminderAsync(
        /** ID of the reminder to be updated. Required. */
        id: string,

        /** A map of properties to be updated */
        details?: Reminder | null
    ): Promise<string>;

    /** Available on iOS only. Deletes an existing reminder from the device. Use with caution. */
    function deleteReminderAsync(id: string): Promise<void>;

    /** Available on iOS only. */
    function getSourcesAsync(): Promise<Source[]>;

    /** Available on iOS only. Returns a specific source selected by ID. */
    function getSourceAsync(id: string): Promise<Source>;

    /** Available on Android only. Sends an intent to open the specified event in the OS Calendar app. */
    function openEventInCalendar(
        /** ID of the event to open. Required. */
        id: string
    ): void;
}
// #endregion

// #region MailComposer
/**
 * An API to compose mails using OS specific UI.
 */
export namespace MailComposer {
    interface ComposeOptions {
        /** An array of e-mail addressess of the recipients. */
        recipients?: string[];

        /** An array of e-mail addressess of the CC recipients. */
        ccRecipients?: string[];

        /** An array of e-mail addressess of the BCC recipients. */
        bccRecipients?: string[];

        /** Subject of the mail. */
        subject?: string;

        /** Body of the mail. */
        body?: string;

        /** Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android. */
        isHtml?: boolean;

        /** An array of app’s internal file uris to attach. */
        attachments?: string[];
    }

    /** Resolves to a promise with object containing status field that could be either sent, saved or cancelled. Android does not provide such info so it always resolves to sent. */
    function composeAsync(
        /** A map defining the data to fill the mail */
        options: ComposeOptions
    ): Promise<{ status: 'sent' | 'saved' | 'cancelled' }>;
}
// #endregion

export namespace Updates {
    namespace EventType {
        /** A new update is available and has started downloading. */
        type DownloadStart = 'downloadStart';
        /** A new update is currently being downloaded and will be stored in the device's cache. */
        type DownloadProgress = 'downloadProgress';
        /** A new update has finished downloading and is now stored in the device's cache. */
        type DownloadFinished = 'downloadFinished';
        /** No updates are available, and the most up-to-date bundle of this experience is already running. */
        type NoUpdateAvailable = 'noUpdateAvailable';
        /** An error occurred trying to fetch the latest update. */
        type Error = 'error';

        /** A new update is available and has started downloading. */
        const DOWNLOAD_STARTED: DownloadStart;
        /** A new update is currently being downloaded and will be stored in the device's cache. */
        const DOWNLOAD_PROGRESS: DownloadProgress;
        /** A new update has finished downloading and is now stored in the device's cache. */
        const DOWNLOAD_FINISHED: DownloadFinished;
        /** No updates are available, and the most up-to-date bundle of this experience is already running. */
        const NO_UPDATE_AVAILABLE: NoUpdateAvailable;
        /** An error occurred trying to fetch the latest update. */
        const ERROR: Error;
    }

    interface UpdateCheck {
        /** True if an update is available, false if you're already running the most up-to-date JS bundle. */
        isAvailable: boolean;
        /** If `isAvailable` is true, the manifest of the available update. Undefined otherwise. */
        manifest?: Constants.Manifest;
    }

    interface UpdateBundle {
        /** True if the fetched bundle is new (i.e. a different version that the what's currently running). */
        isNew: boolean;
        /** Manifest of the fetched update. */
        manifest: Constants.Manifest;
    }

    /** An object that is passed into each event listener when a new version is available. */
    interface UpdateEvent {
        /** Type of the event */
        type: EventType.DownloadStart
            | EventType.DownloadProgress
            | EventType.DownloadFinished
            | EventType.NoUpdateAvailable
            | EventType.Error;
        /** If `type === Expo.Updates.EventType.DOWNLOAD_FINISHED`, the manifest of the newly downloaded update. Undefined otherwise. */
        manifest?: Constants.Manifest;
        /** If `type === Expo.Updates.EventType.ERROR`, the error message. Undefined otherwise. */
        message?: string;
    }

    /** An optional params object passed to fetchUpdateAsync. */
    interface FetchUpdateAsyncParams {
        eventListener: UpdateEventListener;
    }

    type UpdateEventListener = (event: UpdateEvent) => any;

    /**
     * Invokes a callback when updates-related events occur,
     * either on the initial app load or as a result of a call to `Expo.Updates.fetchUpdateAsync`.
     */
    function addListener(listener: UpdateEventListener): EventSubscription;

    /**
     * Check if a new published version of your project is available.
     * Does not actually download the update.
     * Rejects if `updates.enabled` is `false` in app.json.
     */
    function checkForUpdateAsync(): Promise<UpdateCheck>;

    /**
     * Downloads the most recent published version of your experience to the device's local cache.
     * Rejects if `updates.enabled` is `false` in app.json.
     */
    function fetchUpdateAsync(params?: FetchUpdateAsyncParams): Promise<UpdateBundle>;

    /**
     * Immediately reloads the current experience.
     * This will use your app.json updates configuration to fetch and load the newest available JS supported by the device's Expo environment.
     * This is useful for triggering an update of your experience if you have published a new version.
     */
    function reload(): void;

    /**
     * Immediately reloads the current experience using the most recent cached version.
     * This is useful for triggering an update of your experience if you have published and already downloaded a new version.
     */
    function reloadFromCache(): void;
}

// #region MediaLibrary
/**
 * https://docs.expo.io/versions/latest/sdk/media-library
 * Provides access to user's media library
 * Requires Permissions.CAMERA_ROLL permissions.
 */

export namespace MediaLibrary {
  /**
   * Creates an asset from existing file. The most common use case is to save a picture taken by Camera.
   */
  function createAssetAsync(localUri: string): Promise<Asset>;

  /**
   * Fetches a page of assets matching the provided criteria.
   */
  function getAssetsAsync(options: GetAssetsOptions): Promise<GetAssetsResult>;

  /**
   * Provides more informations about an asset, including GPS location, local URI and EXIF metadata.
   */
  function getAssetInfoAsync(asset: string | Asset): Promise<Asset>;

  /**
   * Deletes assets from the library. On iOS it deletes assets from all albums they belong to, while on Android it keeps all copies of them
   * (album is strictly connected to the asset). Also, there is additional dialog on iOS that requires user to confirm this action.
   */
  function deleteAssetsAsync(asset: string[] | Asset[]): Promise<boolean>;

  /**
   * Queries for user-created albums in media gallery.
   */
  function getAlbumsAsync(): Promise<Album[]>;

  /**
   * Queries for an album with a specific name.
   */
  function getAlbumAsync(albumName: string): Promise<Album>;

  /**
   * Creates an album with given name and initial asset.
   * The asset parameter is required on Android, since it's not possible to create empty album on this platform.
   */
  function createAlbumAsync(albumName: string, asset: string | Asset): Promise<Album>;

  /**
   * Adds array of assets to the album.
   * On Android, by default it copies assets from the current album to provided one, however it's also possible to move them by passing false as copyAssets argument.
   * In case they're copied you should keep in mind that getAssetsAsync will return duplicated assets.
   */
  function addAssetsToAlbumAsync(assets: Asset[], album: string | Album, copyAssets?: boolean /* default true */): Promise<boolean>;

  /**
   * Removes given assets from album.
   * On Android, album will be automatically deleted if there are no more assets inside.
   */
  function removeAssetsFromAlbumAsync(assets: Asset[], album: string | Album): Promise<boolean>;

  /**
   * Available on iOS only. Fetches a list of moments, which is a group of assets taken around the same place and time.
   */
  function getMomentsAsync(): Promise<Album[]>;

  enum MediaType {
    audio = 'audio',
    photo = 'photo',
    video = 'video',
    unknow = 'unknow'
  }

  enum SortBy {
    default = 'default',
    id = 'id',
    creationTime = 'creationTime',
    modificationTime = 'modificationTime',
    mediaType = 'mediaType',
    width = 'width',
    height = 'height',
    duration = 'duration'
  }

  // region Asset
  interface AssetAndroid {
    albumId?: string;
  }

  interface AssetIos {
    mediaSubtypes?: MediaType[];
    // *
    orientation: number;
    // *
    isFavorite: boolean;
  }

  interface Asset extends AssetAndroid, AssetIos {
    id: string;
    filename: string;
    uri: string;
    mediaType: string;
    width: number;
    height: number;
    creationTime: number;
    modificationTime: number;
    duration: number;
    // *
    localUri?: string;
    // *
    location?: Location.LocationProps;
    // *
    exif?: object;
  }

  /**
   * These fields can be obtained only by calling getAssetInfoAsync method
   */
  //#endregion

  // #region Album
  interface AlbumIos {
    type?: string;
    // *
    startTime: number;
    // *
    endTime: number;
    // *
    approximateLocation?: Location.LocationProps;
    // *
    locationNames?: string[];
  }

  /**
   * These fields apply only to albums whose type is moment
   */

  interface Album extends AlbumIos {
    id: string;
    title: string;
    assetCount: number;
  }
  // #endregion

  interface GetAssetsOptions {
    first?: number;
    after?: string;
    album?: string | Album;
    sortBy?: SortBy;
    mediaType?: MediaType;
  }

  interface GetAssetsResult {
    assets: Asset[];
    endCursor: string;
    hasNextPage: boolean;
    totalCount: number;
  }
}
// #endregion

// #region Haptic
/**
 * https://docs.expo.io/versions/latest/sdk/haptic
 * Provides haptic feedback for iOS 10+ devices using the Taptic Engine.
 * If this is used in Android the device will use ReactNative.Vibrate instead, it's best to just avoid this.
 */
export namespace Haptic {
  /**
   * Used to let a user know when a selection change has been registered
   */
  function selection(): void;
  function notification(notificationType?: NotificationType): void;
  function impact(impactStyles?: ImpactStyles): void;

  enum ImpactStyles {
    Light = 'light',
    Medium = 'medium',
    Heavy = 'heavy'
  }

  enum NotificationType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
  }
}
// #endregion
