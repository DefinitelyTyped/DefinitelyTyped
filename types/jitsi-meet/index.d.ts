// Type definitions for non-npm package jitsi-meet 2.0
// Project: https://github.com/jitsi/jitsi-meet
// Definitions by: Tom Price <https://github.com/tomtom5152>
//                 Philipp Katz <https://github.com/qqilihq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

export interface ConfigHosts {
    domain?: string;
    anonymousdomain?: string;
    authdomain?: string;
    call_control?: string;
    focus?: string;
    muc?: string;
}

export interface ConfigTesting {
    disableE2EE?: false;
    p2pTestMode?: false;
    testMode?: false;
    noAutoPlayVideo?: false;
    capScreenshareBitrate?: 0 | 1;
    callStatsThreshold?: number;
}

export interface QualityConstraints {
    ideal?: number;
    min?: number;
    max?: number;
}

export interface DimensionConstraints {
    height?: QualityConstraints;
    width?: QualityConstraints;
}

export interface Constraints {
    video: DimensionConstraints;
}

export interface ConfigDropbox {
    appKey: string;
    redirectURI: string;
}

export interface VideoBitrates {
    low?: number;
    standard?: number;
    high?: number;
}

export interface ConfigVideoQuality {
    disabledCodec?: string;
    preferredCodec?: string;
    maxBitratesVideo?: VideoBitrates;
    minHeightForQualityLvl?: Record<number, string>;
    resizeDesktopForPresenter?: boolean;
}

export interface ConfigRecordingLimit {
    limit?: number;
    appName?: string;
    appURL?: string;
}

export interface STUNServer {
    urls: string;
}

export interface ConfigP2P {
    enabled?: boolean;
    stunServers?: STUNServer[];
    iceTransportPolicy?: string;
    preferH264?: boolean;
    preferredCodec?: string;
    disableH264?: boolean;
    disabledCodec?: string;
    backToP2PDelay?: number;
}

export interface ConfigAnalytics {
    googleAnalyticsTrackingId?: string;
    matomoEndpoint?: string;
    matomoSiteID?: string;
    amplitudeAPPKey?: string;
    rtcstatsEnabled?: boolean;
    rtcstatsEndpoint?: string;
    rtcstatsPolIInterval?: number;
    scriptURLs?: string[];
}

export interface ConfigDeploymentInfo {
    shard?: string;
    region?: string;
    userRegion?: string;
}

export interface ChromeExtensionInfo {
    id?: string;
    path?: string;
}

export interface ChromeExtensionBanner {
    url?: string;
    chromeExtensionsInfo?: ChromeExtensionInfo[];
}

export interface ConfigLocalRecording {
    enabled?: boolean;
    format?: 'ogg' | 'flac' | 'wav';
}

export interface ConfigE2EPing {
    pingInterval?: number;
    analyticsInterval?: number;
}

export interface ConfigDeploymentURLs {
    userDocumentationURL?: string;
    downloadAppsUrl?: string;
}

export interface ConfigRemoteVideoMenu {
    disableKick?: boolean;
}

export interface Config {
    hosts?: ConfigHosts;
    bosh?: string;
    websocket?: string;
    clientNode?: string;
    focusUserJid?: string;

    testing?: ConfigTesting;
    webrtcIceUdpDisable?: boolean;

    webrtcIceTcpDisable?: boolean;

    disableAudioLevels?: boolean;
    audioLevelsInterval?: number;
    enableNoAudioDetection?: boolean;
    enableSaveLogs?: boolean;
    enableNoisyMicDetection?: boolean;
    startAudioOnly?: boolean;
    startAudioMuted?: number;
    startWithAudioMuted?: boolean;
    startSilent?: boolean;

    opusMaxAverageBitrate?: number;
    enableOpusRed?: boolean;
    resolution?: number;
    maxFullResolutionParticipants?: number;
    constraints?: Constraints;
    disableSimulcast?: boolean;
    enableLayerSuspension?: boolean;
    startVideoMuted?: number;
    startWithVideoMuted?: boolean;
    preferH264?: boolean;
    disableH264?: boolean;
    desktopSharingFrameRate?: QualityConstraints;
    startScreenSharing?: boolean;

    fileRecordingsEnabled?: boolean;
    dropbox?: ConfigDropbox;
    fileRecordingsServiceEnabled?: boolean;
    fileRecordingsServiceSharingEnabled?: boolean;
    liveStreamingEnabled?: boolean;
    transcribingEnabled?: boolean;
    autoCaptionOnRecord?: boolean;

    channelLastN?: number;
    lastNLimits?: Record<number, number>;

    videoQuality?: ConfigVideoQuality;
    recordingLimit?: ConfigRecordingLimit;
    disableRtx?: boolean;
    enableTcc?: boolean;
    enableRemb?: boolean;
    enableIceRestart?: boolean;
    minParticipants?: number;
    useTurnUdp?: false;
    openBridgeChannel?: boolean | string;

    hideLobbyButton?: boolean;
    requireDisplayName?: boolean;
    enableWelcomePage?: boolean;
    enableClosePage?: boolean;
    disable1On1Mode?: boolean;
    defaultLanguage?: string;
    disableProfile?: boolean;
    enableUserRolesBasedOnToken?: boolean;
    enableFeaturesBasedOnToken?: boolean;
    lockRoomGuestEnabled?: boolean;
    roomPasswordNumberOfDigits?: false | number;
    noticeMessage?: string;
    enableCalendarIntegration?: boolean;
    prejoinPageEnabled?: boolean;
    enableInsecureRoomNameWarning?: boolean;
    enableAutomaticUrlCopy?: boolean;
    gravatarBaseURL?: string;

    gatherStats?: boolean;
    pcStatsInterval?: number;
    callStatsID?: string;
    callStatsSecret?: string;

    enableDisplayNameInStats?: boolean;
    enableEmailInStats?: boolean;

    disableThirdPartyRequests?: boolean;

    p2p?: ConfigP2P;

    analytics?: ConfigAnalytics;
    apiLogLevels?: string[];

    deploymentInfo?: ConfigDeploymentInfo;
    disableRecordAudioNotification?: boolean;
    chromeExtensionBanner?: ChromeExtensionBanner;

    localRecording?: ConfigLocalRecording;
    e2eping?: ConfigE2EPing;
    _desktopSharingSourceDevice?: string;
    disableDeepLinking?: boolean;
    disableLocalVideoFlip?: boolean;

    disableInviteFunctions?: boolean;
    doNotStoreRoom?: boolean;
    deploymentUrls?: ConfigDeploymentURLs;
    remoteVideoMenu?: ConfigRemoteVideoMenu;
    disableRemoteMute?: boolean;
    brandingDataUrl?: string;
    moderatedRoomServiceUrl?: string;
    hideConferenceTimer?: boolean;
    subject?: string;

    // undocumented from jitsi-meet, type assumed from name;
    _immediateReloadThreshold?: any;
    debug?: boolean;
    debugAudioLevels?: any;
    dialInConfCodeUrl?: string;
    dialInNumbersUrl?: string;
    dialOutAuthUrl?: string;
    dialOutCodesUrl?: string;
    disableRemoteControl?: boolean;
    displayJids?: boolean;
    etherpad_base?: string;
    externalConnectUrl?: string | null;
    firefox_fake_device?: any;
    googleApiApplicationClientID?: any;
    iAmRecorder?: boolean;
    iAmSipGateway?: boolean;
    microsoftApiApplicationClientID?: boolean;
    peopleSearchQueryTypes?: any;
    peopleSearchUrl?: string;
    tokenAuthUrl?: string;

    brandingRoomAlias?: any;

    // undocumented from lib-jitsi-meet, type assumed from name;
    _peerConnStatusOutOfLastNTimeout?: any;
    _peerConnStatusRtcMuteTimeout?: any;
    abTesting?: any;
    avgRtpStatsN?: any;
    callStatsConfIDNamespace?: any;
    callStatsCustomScriptUrl?: any;
    desktopSharingSources?: any;
    disableAEC?: boolean;
    disableAGC?: boolean;
    disableAP?: boolean;
    disableHPF?: boolean;
    disableNS?: boolean;
    enableLipSync?: boolean;
    enableTalkWhileMuted?: boolean;
    forceJVB121Ratio?: boolean;
    hiddenDomain?: any;
    ignoreStartMuted?: boolean;
    nick?: any;
    startBitrate?: any;
}

export interface InterfaceMobileDynamicLink {
    APN?: string;
    APP_CODE?: string;
    CUSTOM_DOMAIN?: any;
    IBI?: string;
    ISI?: string;
}

export interface InterfaceConfig {
    APP_NAME?: string;
    AUDIO_LEVEL_PRIMARY_COLOR?: string;
    AUDIO_LEVEL_SECONDARY_COLOR?: string;
    AUTO_PIN_LATEST_SCREEN_SHARE?: string;
    BRAND_WATERMARK_LINK?: string;

    CLOSE_PAGE_GUEST_HINT?: boolean;
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED?: boolean;
    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT?: number;
    CONNECTION_INDICATOR_DISABLED?: boolean;

    DEFAULT_BACKGROUND?: string;
    DEFAULT_LOCAL_DISPLAY_NAME?: string;
    DEFAULT_LOGO_URL?: string;
    DEFAULT_REMOTE_DISPLAY_NAME?: string;
    DEFAULT_WELCOME_PAGE_LOGO_URL?: string;

    DISABLE_DOMINANT_SPEAKER_INDICATOR?: boolean;
    DISABLE_FOCUS_INDICATOR?: boolean;
    DISABLE_JOIN_LEAVE_NOTIFICATIONS?: boolean;
    DISABLE_PRESENCE_STATUS?: boolean;
    DISABLE_RINGING?: boolean;
    DISABLE_TRANSCRIPTION_SUBTITLES?: boolean;
    DISABLE_VIDEO_BACKGROUND?: boolean;

    DISPLAY_WELCOME_FOOTER?: boolean;
    DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD?: boolean;
    DISPLAY_WELCOME_PAGE_CONTENT?: boolean;
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT?: boolean;
    ENABLE_DIAL_OUT?: boolean;
    ENABLE_FEEDBACK_ANIMATION?: boolean;
    FILM_STRIP_MAX_HEIGHT?: number;
    filmStripOnly?: boolean;
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE?: boolean;
    HIDE_DEEP_LINKING_LOGO?: boolean;
    HIDE_INVITE_MORE_HEADER?: boolean;
    INITIAL_TOOLBAR_TIMEOUT?: number;

    JITSI_WATERMARK_LINK?: string;
    LANG_DETECTION?: boolean;
    LIVE_STREAMING_HELP_LINK?: string;
    LOCAL_THUMBNAIL_RATIO?: number;
    MAXIMUM_ZOOMING_COEFFICIENT?: number;
    MOBILE_APP_PROMO?: boolean;
    NATIVE_APP_NAME?: string;
    OPTIMAL_BROWSERS?: string[];
    POLICY_LOGO?: any;
    PROVIDER_NAME?: string;
    RECENT_LIST_ENABLED?: boolean;
    REMOTE_THUMBNAIL_RATIO?: number;
    SETTINGS_SECTIONS?: Array<'devices' | 'language' | 'moderator' | 'profile' | 'calendar'>;
    SHOW_BRAND_WATERMARK?: boolean;
    SHOW_CHROME_EXTENSION_BANNER?: boolean;

    SHOW_DEEP_LINKING_IMAGE?: boolean;
    SHOW_JITSI_WATERMARK?: boolean;
    SHOW_POWERED_BY?: boolean;
    SHOW_PROMOTIONAL_CLOSE_PAGE?: boolean;
    SHOW_WATERMARK_FOR_GUESTS?: boolean;

    SUPPORT_URL?: string;

    TOOLBAR_ALWAYS_VISIBLE?: boolean;
    TOOLBAR_BUTTONS?: Array<'microphone' | 'camera' | 'closedcaptions' | 'desktop' | 'embedmeeting' | 'fullscreen' |
        'fodeviceselection' | 'hangup' | 'profile' | 'chat' | 'recording' |
        'livestreaming' | 'etherpad' | 'sharedvideo' | 'settings' | 'raisehand' |
        'videoquality' | 'filmstrip' | 'invite' | 'feedback' | 'stats' | 'shortcuts' |
        'tileview' | 'videobackgroundblur' | 'download' | 'help' | 'mute-everyone' | 'security'>;

    TOOLBAR_TIMEOUT?: number;

    UNSUPPORTED_BROWSERS?: string[];
    VERTICAL_FILMSTRIP?: boolean;
    VIDEO_LAYOUT_FIT?: string;
    VIDEO_QUALITY_LABEL_DISABLED?: boolean;
    HIDE_KICK_BUTTON_FOR_GUESTS?: boolean;
    TILE_VIEW_MAX_COLUMNS?: number;

    MOBILE_DOWNLOAD_LINK_ANDROID?: string;
    MOBILE_DOWNLOAD_LINK_F_DROID?: string;
    MOBILE_DOWNLOAD_LINK_IOS?: string;
    MOBILE_DYNAMIC_LINK?: InterfaceMobileDynamicLink;
    APP_SCHEME?: string;
    ANDROID_APP_PACKAGE?: string;

    ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT?: number;
    INDICATOR_FONT_SIZES?: any;
    PHONE_NUMBER_REGEX?: any;
}

export type Invitee = any;

export interface UserInfo {
    email?: string;
    displayName?: string;
}

export interface ExternalAPIOptions {
    roomName?: string;
    width?: string | number;
    height?: string | number;
    parentNode?: Element;
    configOverwrite?: Config;
    interfaceConfigOverwrite?: InterfaceConfig;
    noSSL?: boolean;
    jwt?: string;
    onload?: () => any;
    invitees?: Invitee[];
    devices?: any;
    userInfo?: UserInfo;
}

export interface Device {
    deviceId: string;
    groupId: string;
    kind: string;
    label: string;
}

export interface DeviceMap {
    audioInput?: Device[];
    audioOutput?: Device[];
    videoInput?: Device[];
}

export type ExternalAPICommands =
    'displayName' | 'password' | 'toggleLobby' | 'sendTones' | 'subject' | 'toggleAudio' | 'toggleVideo' |
    'toggleFilmStrip' | 'toggleChat' | 'toggleShareScreen' | 'toggleTileView' | 'hangup' | 'email' | 'avatarUrl' |
    'sendEndpointTextMessage' | 'setLargeVideoParticipant' | 'setVideoQuality' | 'muteEveryone' | 'startRecording' |
    'stopRecording';

export type RecordingMode = 'file' | 'stream';

export interface RecordingOptions {
    mode: RecordingMode;
    dropboxToken?: string;
    shouldShare?: boolean;
    rtmpStreamKey?: string;
    rtmpBroadcastID?: string;
    youtubeStreamKey?: string;
    youtubeBroadcastID?: string;
}

/**
 * Events that can be emitted by ExternalAPI
 */

export interface CameraErrorEvent {
    type: string;
    message: string;
}

export interface AvatarChangedEvent {
    id: string;
    avatarURL: string;
}

export interface AudioAvailabilityChangedEvent {
    available: boolean;
}

export interface AudioMuteStatusChangedEvent {
    muted: boolean;
}

export interface EndpointTextMessageReceivedEvent {
    senderInfo: {
        jid: string;
        id: string;
    };
    eventData: {
        name: string;
        text: string;
    };
}

export interface LargeVideoChangedEvent {
    id: string;
}

export type LogLevels = 'info' | 'error' | 'debug' | 'warn';

export interface LogEvent {
    logLevel: LogLevels;
    args: string;
}

export interface MicErrorEvent {
    type: string;
    message: string;
}

export type ScreenSharingSourceTypes = 'window' | 'screen' | 'proxy' | 'device';

export interface ScreenSharingStatusChangedEvent {
    on: boolean;
    details: {
        sourceType?: ScreenSharingSourceTypes;
    };
}

export interface DominantSpeakerChangedEvent {
    id: string;
}

export interface TileViewChangedEvent {
    enabled: boolean;
}

export interface IncomingMessageEvent {
    from: string;
    nick: string;
    message: string;
}

export interface OutgoingMessageEvent {
    message: string;
}

export interface DisplayNameChangeEvent {
    id: string;
    displayName: string;
}

export interface DeviceListChangedEvent {
    devices: DeviceMap;
}

export interface EmailChangeEvent {
    id: string;
    email: string;
}

export interface FeedbackSubmittedEvent {
    error?: string;
}

export interface FilmstripDisplayChangedEvent {
    visible: boolean;
}

export interface ParticipantJoinedEvent {
    id: string;
    displayName: string;
}

export interface ParticipantKickedOutEvent {
    kicked: {
        id: string;
        local: boolean;
    };
    kicker: {
        id: string;
    };
}

export interface ParticipantLeftEvent {
    id: string;
}

export interface ParticipantRoleChangedEvent {
    id: string;
    role: string;
}

export interface VideoConferenceJoinedEvent {
    roomName: string;
    id: string;
    displayName: string;
    avatarURL: string;
}

export interface VideoConferenceLeftEvent {
    roomName: string;
}

export interface VideoAvailabilityChangedEvent {
    available: boolean;
}

export interface VideoMuteStatusChangedEvent {
    muted: boolean;
}

export interface VideoQualityChangedEvent {
    videoQuality: number; // height resolution of new quality
}

export interface SubjectChangeEvent {
    subject: string;
}

export interface ExternalAPIEventCallbacks {
    cameraError: (e: CameraErrorEvent) => void;
    avatarChanged: (e: AvatarChangedEvent) => void;
    audioAvailabilityChanged: (e: AudioAvailabilityChangedEvent) => void;
    audioMuteStatusChanged: (e: AudioMuteStatusChangedEvent) => void;
    endpointTextMessageReceived: (e: EndpointTextMessageReceivedEvent) => void;
    largeVideoChanged: (e: LargeVideoChangedEvent) => void;
    log: (e: LogEvent) => void;
    micError: (e: MicErrorEvent) => void;
    screenSharingStatusChanged: (e: ScreenSharingStatusChangedEvent) => void;
    dominantSpeakerChanged: (e: DominantSpeakerChangedEvent) => void;
    tileViewChanged: (e: TileViewChangedEvent) => void;
    incomingMessage: (e: IncomingMessageEvent) => void;
    outgoingMessage: (e: OutgoingMessageEvent) => void;
    displayNameChange: (e: DisplayNameChangeEvent) => void;
    deviceListChanged: (e: DeviceListChangedEvent) => void;
    emailChange: (e: EmailChangeEvent) => void;
    feedbackSubmitted: (e: FeedbackSubmittedEvent) => void;
    filmstripDisplayChanged: (e: FilmstripDisplayChangedEvent) => void;
    participantJoined: (e: ParticipantJoinedEvent) => void;
    participantKickedOut: (e: ParticipantKickedOutEvent) => void;
    participantLeft: (e: ParticipantLeftEvent) => void;
    participantRoleChanged: (e: ParticipantRoleChangedEvent) => void;
    passwordRequired: () => void;
    videoConferenceJoined: (e: VideoConferenceJoinedEvent) => void;
    videoConferenceLeft: (e: VideoConferenceLeftEvent) => void;
    videoAvailabilityChanged: (e: VideoAvailabilityChangedEvent) => void;
    videoMuteStatusChanged: (e: VideoMuteStatusChangedEvent) => void;
    videoQualityChanged: (e: VideoQualityChangedEvent) => void;
    readyToClose: () => void;
    subjectChange: (e: SubjectChangeEvent) => void;
    suspendDetected: () => void;
}

export interface TypedEventEmitter<Events, K extends keyof Events> {
    addListener(event: K, listener: Events[K]): this;

    on(event: K, listener: Events[K]): this;

    once(event: K, listener: Events[K]): this;

    removeListener(event: K, listener: Events[K]): this;

    removeAllListeners(event?: K): this;

    setMaxListeners(n: number): this;

    getMaxListeners(): number;

    listeners(event: K): Array<(e: Event) => void>;

    emit(event: K, ...args: any[]): boolean;

    listenerCount(type: K): number;

    // Added in Node 6...
    prependListener(event: K, listener: Events[K]): this;

    prependOnceListener(event: K, listener: Events[K]): this;

    eventNames(): K[];
}

/**
 * @see https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe
 */
export interface JitsiMeetExternalAPI extends TypedEventEmitter<ExternalAPIEventCallbacks, keyof ExternalAPIEventCallbacks> {
    // tslint gets unhappy about a constructor on an interface, but this is what is passed to it
    // constructor(domain: string, options?: ExternalAPIOptions): this;

    captureLargeVideoScreenshot(): Promise<string>;

    getAvailableDevices(): Promise<DeviceMap>;

    getCurrentDevices(): Promise<DeviceMap>;

    getParticipantsInfo(): any;

    getVideoQuality(): any;

    isDeviceListAvailable(): Promise<boolean>;

    isMultipleAudioInputSupported(): Promise<boolean>;

    pinParticipant(participantId: string): void;

    resizeLargeVideo(width: number, height: number): void;

    setAudioInputDevice(deviceLabel: string, deviceId: string): void;

    setAudioOutputDevice(deviceLabel: string, deviceId: string): void;

    setLargeVideoParticipant(participantId: string): void;

    setVideoInputDevice(deviceLabel: string, deviceId: string): void;

    startRecording(options: RecordingOptions): void;

    stopRecording(mode: RecordingMode): void;

    executeCommand(command: ExternalAPICommands, ...arguments: any): void;

    executeCommands(commands: Array<Record<ExternalAPICommands, any[]>>): void;

    getNumberOfParticipants(): number;

    getAvatarURL(participantId: string): string;

    getDisplayName(participantId: string): string;

    getEmail(participantId: string): string;

    getIFrame(): HTMLIFrameElement;

    isAudioMuted(): Promise<boolean>;

    isVideoMuted(): Promise<boolean>;

    isAudioAvailable(): Promise<boolean>;

    isVideoAvailable(): Promise<boolean>;

    invite(invitees: any[]): Promise<null>;

    dispose(): void;
}

export interface JitsiMeetExternalAPIConstructor {
    new(domain: string, options?: ExternalAPIOptions): JitsiMeetExternalAPI;
}

// this helps with `import type Jitsi` declarations as sometimes babel can get upset that the implementation is loaded
// at runtime
export as namespace Jitsi
