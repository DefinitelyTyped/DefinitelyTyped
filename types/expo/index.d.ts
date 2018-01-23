// Type definitions for expo 24.0
// Project: https://github.com/expo/expo-sdk
// Definitions by: Konstantin Kai <https://github.com/KonstantinKai>
//                 Martynas Kadiša <https://github.com/martynaskadisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventSubscription } from 'fbemitter';
import { Component, ComponentClass, Ref } from 'react';
import {
    ViewStyle,
    ViewProperties,
    ColorPropType,
    ImageURISource,
    NativeEventEmitter,
    ImageRequireSource
} from 'react-native';

export type URISource = ImageURISource;
export type RequireSource = ImageRequireSource;
export type ResizeModeContain = 'contain';
export type ResizeModeCover = 'cover';
export type ResizeModeStretch = 'stretch';
export type Orientation = 'portrait' | 'landscape';
export type Axis = number;
export interface HashMap { [key: string]: any; }
export type FloatFromZeroToOne = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
export type BarCodeReadCallback = (params: { type: string; data: string; }) => void;
export type Md5 = string;

/**
 * Accelerometer
 */
export namespace Accelerometer {
    interface AccelerometerObject {
        x: Axis;
        y: Axis;
        z: Axis;
    }

    function addListener(listener: (obj: AccelerometerObject) => any): EventSubscription;
    function removeAllListeners(): void;
    function setUpdateInterval(intervalMs: number): void;
}

/**
 * Amplitude
 */
export namespace Amplitude {
    function initialize(apiKey: string): void;
    function setUserId(userId: string): void;
    function setUserProperties(userProperties: HashMap): void;
    function clearUserProperties(): void;
    function logEvent(eventName: string): void;
    function logEventWithProperties(eventName: string, properties: HashMap): void;
    function setGroup(groupType: string, groupNames: HashMap): void;
}

/**
 * Asset
 */
export class Asset {
    constructor({ name, type, hash, uri, width, height }: {
        name: string;
        type: string;
        hash: string;
        uri: string;
        width?: number;
        height?: number;
    });
    name: string;
    type: string;
    hash: string;
    uri: string;
    localUri: string;
    width?: number;
    height?: number;

    downloading: boolean;
    downloaded: boolean;
    downloadCallbacks: Array<{ resolve: () => any, reject: (e?: any) => any }>;

    downloadAsync(): Promise<void>;

    static fromModule(module: RequireSource): Asset;
    static loadAsync(module: RequireSource[] | RequireSource): Promise<void>;
}

/**
 * AuthSession
 */
export namespace AuthSession {
    function startAsync(options: { authUrl: string; returnUrl?: string; }): Promise<{
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

/**
 * AV
 */
export type PlaybackStatus = {
    isLoaded: false;
    androidImplementation?: string;
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

export type Source = string | RequireSource | Asset;

export class PlaybackObject {
    loadAsync(source: Source, initialStatus?: PlaybackStatusToSet, downloadFirst?: boolean): Promise<PlaybackStatus>;
    unloadAsync(): Promise<PlaybackStatus>;
    getStatusAsync(): Promise<PlaybackStatus>;
    setOnPlaybackStatusUpdate(onPlaybackStatusUpdate: (status: PlaybackStatus) => void): void;
    setStatusAsync(status: PlaybackStatusToSet): Promise<PlaybackStatus>;
    playAsync(): Promise<PlaybackStatus>;
    playFromPositionAsync(positionMillis: number): Promise<PlaybackStatus>;
    pauseAsync(): Promise<PlaybackStatus>;
    stopAsync(): Promise<PlaybackStatus>;
    setPositionAsync(positionMillis: number): Promise<PlaybackStatus>;
    setRateAsync(rate: number, shouldCorrectPitch: boolean): Promise<PlaybackStatus>;
    setVolumeAsync(volume: number): Promise<PlaybackStatus>;
    setIsMutedAsync(isMuted: boolean): Promise<PlaybackStatus>;
    setIsLoopingAsync(isLooping: boolean): Promise<PlaybackStatus>;
    setProgressUpdateIntervalAsync(progressUpdateIntervalMillis: number): Promise<PlaybackStatus>;
}

export namespace Audio {
    enum InterruptionModeIOS {
        INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = 0,
        INTERRUPTION_MODE_IOS_DO_NOT_MIX = 1,
        INTERRUPTION_MODE_IOS_DUCK_OTHERS = 2
    }

    enum InterruptionModeAndroid {
        INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = 1,
        INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = 2
    }

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

    interface AudioMode {
        playsInSilentModeIOS: boolean;
        allowsRecordingIOS: boolean;
        interruptionModeIOS: InterruptionModeIOS;
        shouldDuckAndroid: boolean;
        interruptionModeAndroid: InterruptionModeAndroid;
    }

    function setIsEnabledAsync(value: boolean): Promise<void>;
    function setAudioModeAsync(mode: AudioMode): Promise<void>;

    class Sound extends PlaybackObject {
        constructor();

        static create(
            source: Source,
            initialStatus?: PlaybackStatusToSet,
            onPlaybackStatusUpdate?: ((status: PlaybackStatus) => void) | null,
            downloadFirst?: boolean
        ): Promise<{ sound: Sound, status: PlaybackStatus }>;
    }

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

    class Recording {
        constructor();

        getStatusAsync(): Promise<RecordingStatus>;
        setOnRecordingStatusUpdate(onRecordingStatusUpdate: (status: RecordingStatus) => void): void;
        setProgressUpdateInterval(miliss: number): void;
        prepareToRecordAsync(options: Recording): Promise<RecordingStatus>;
        isPreparedToRecord(): boolean;
        startAsync(): Promise<RecordingStatus>;
        pauseAsync(): Promise<RecordingStatus>;
        stopAndUnloadAsync(): Promise<RecordingStatus>;
        getURI(): string | undefined;
        createNewLoadedSound(initialStatus: PlaybackStatusToSet, onPlaybackStatusUpdate: (status: PlaybackStatus) => void): Promise<{ sound: Sound, status: PlaybackStatus }>;
    }
}

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
    source?: Source | null;
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

/**
 * AppLoading
 */
export type AppLoadingProperties = {
    startAsync: () => Promise<void>;
    onFinish: () => void;
    onError?: (error: Error) => void;
} | {
    startAsync: null;
    onFinish: null;
    onError?: null;
};
export class AppLoading extends Component<AppLoadingProperties> { }

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

/**
 * BlurView
 */
export interface BlurViewProps extends ViewProperties {
    tint: 'light' | 'default' | 'dark';
    intensity: number;
}
export class BlurView extends Component<BlurViewProps> { }

/**
 * Brightness
 */
export namespace Brightness {
    function setBrightnessAsync(brightnessValue: FloatFromZeroToOne): Promise<void>;
    function getBrightnessAsync(): Promise<FloatFromZeroToOne>;
    function getSystemBrightnessAsync(): Promise<FloatFromZeroToOne>;
    function setSystemBrightnessAsync(brightnessValue: FloatFromZeroToOne): Promise<void>;
}

/**
 * Camera
 */
export interface TakePictureOptions {
    quality?: number;
    base64?: boolean;
    exif?: boolean;
}
export interface PictureResponse {
    uri: string;
    width: number;
    height: number;
    exif: string;
    base64: string;
}
export interface RecordOptions {
    quality?: string;
    maxDuration?: number;
    maxFileSize?: number;
    mute?: boolean;
}
export class CameraObject {
    takePictureAsync(options: TakePictureOptions): Promise<PictureResponse>;
    recordAsync(options: RecordOptions): Promise<{ uri: string; }>;
    stopRecording(): void;
    getSupportedRatiosAsync(): Promise<string[]>; // Android only
}
export interface CameraProperties extends ViewProperties {
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
export interface CameraConstants {
    readonly Type: string;
    readonly FlashMode: string;
    readonly AutoFocus: string;
    readonly WhiteBalance: string;
    readonly VideoQuality: string;
    readonly BarCodeType: string;
}
export class Camera extends Component<CameraProperties> {
    static readonly Constants: CameraConstants;
}

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

/**
 * Fingerprint
 */
export namespace Fingerprint {
    type FingerprintAuthenticationResult = { success: true } | { success: false, error: string };

    function hasHardwareAsync(): Promise<boolean>;
    function isEnrolledAsync(): Promise<boolean>;
    function authenticateAsync(promptMessageIOS?: string): Promise<FingerprintAuthenticationResult>;
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

/**
 * GLView
 */
export interface GLViewProps extends ViewProperties {
    onContextCreate(): void;
    msaaSamples: number;
}
export class GLView extends Component<GLViewProps, { msaaSamples: number }> { }

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

/**
 * Gyroscope
 */
export namespace Gyroscope {
    interface GyroscopeObject {
        x: Axis;
        y: Axis;
        z: Axis;
    }

    function addListener(listener: (obj: GyroscopeObject) => any): EventSubscription;
    function removeAllListeners(): void;
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
    static Defs: ComponentClass<{ }>;
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

/**
 * Util
 */
export namespace Util {
    function getCurrentDeviceCountryAsync(): Promise<number>;
    function getCurrentLocaleAsync(): Promise<string>;
    function getCurrentTimeZoneAsync(): Promise<string>;
    function reload(): void;
    function addNewVersionListenerExperimental(listener: (event: {
        manifest: object;
    }) => void): { remove(): void; }; // Android only
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
    interface Face {
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
        faces: Face[];
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

    interface Options {
        mode?: keyof Mode;
        detectLandmarks?: keyof Landmarks;
        runClassifications?: keyof Classifications;
    }

    function detectFaces(uri: string, options?: Options): Promise<DetectFaceResult>;
}
