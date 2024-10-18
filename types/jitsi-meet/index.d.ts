export interface ConfigHosts {
    domain?: string | undefined;
    anonymousdomain?: string | undefined;
    authdomain?: string | undefined;
    call_control?: string | undefined;
    focus?: string | undefined;
    muc?: string | undefined;
}

export interface ConfigTesting {
    disableE2EE?: false | undefined;
    p2pTestMode?: false | undefined;
    testMode?: false | undefined;
    noAutoPlayVideo?: false | undefined;
    capScreenshareBitrate?: 0 | 1 | undefined;
    callStatsThreshold?: number | undefined;
}

export interface QualityConstraints {
    ideal?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
}

export interface DimensionConstraints {
    height?: QualityConstraints | undefined;
    width?: QualityConstraints | undefined;
}

export interface Constraints {
    video: DimensionConstraints;
}

export interface ConfigDropbox {
    appKey: string;
    redirectURI: string;
}

export interface VideoBitrates {
    low?: number | undefined;
    standard?: number | undefined;
    high?: number | undefined;
}

export interface ConfigVideoQuality {
    disabledCodec?: string | undefined;
    preferredCodec?: string | undefined;
    maxBitratesVideo?: VideoBitrates | undefined;
    minHeightForQualityLvl?: Record<number, string> | undefined;
    resizeDesktopForPresenter?: boolean | undefined;
}

export interface ConfigRecordingLimit {
    limit?: number | undefined;
    appName?: string | undefined;
    appURL?: string | undefined;
}

export interface STUNServer {
    urls: string;
}

export interface ConfigP2P {
    enabled?: boolean | undefined;
    stunServers?: STUNServer[] | undefined;
    iceTransportPolicy?: string | undefined;
    preferH264?: boolean | undefined;
    preferredCodec?: string | undefined;
    disableH264?: boolean | undefined;
    disabledCodec?: string | undefined;
    backToP2PDelay?: number | undefined;
}

export interface ConfigAnalytics {
    googleAnalyticsTrackingId?: string | undefined;
    matomoEndpoint?: string | undefined;
    matomoSiteID?: string | undefined;
    amplitudeAPPKey?: string | undefined;
    rtcstatsEnabled?: boolean | undefined;
    rtcstatsEndpoint?: string | undefined;
    rtcstatsPolIInterval?: number | undefined;
    scriptURLs?: string[] | undefined;
}

export interface ConfigDeploymentInfo {
    shard?: string | undefined;
    region?: string | undefined;
    userRegion?: string | undefined;
}

export interface ChromeExtensionInfo {
    id?: string | undefined;
    path?: string | undefined;
}

export interface ChromeExtensionBanner {
    url?: string | undefined;
    chromeExtensionsInfo?: ChromeExtensionInfo[] | undefined;
}

export interface ConfigLocalRecording {
    enabled?: boolean | undefined;
    format?: "ogg" | "flac" | "wav" | undefined;
}

export interface ConfigE2EPing {
    pingInterval?: number | undefined;
    analyticsInterval?: number | undefined;
}

export interface ConfigDeploymentURLs {
    userDocumentationURL?: string | undefined;
    downloadAppsUrl?: string | undefined;
}

export interface ConfigRemoteVideoMenu {
    disableKick?: boolean | undefined;
}

export interface Config {
    hosts?: ConfigHosts | undefined;
    bosh?: string | undefined;
    websocket?: string | undefined;
    clientNode?: string | undefined;
    focusUserJid?: string | undefined;

    testing?: ConfigTesting | undefined;
    webrtcIceUdpDisable?: boolean | undefined;

    webrtcIceTcpDisable?: boolean | undefined;

    disableAudioLevels?: boolean | undefined;
    audioLevelsInterval?: number | undefined;
    enableNoAudioDetection?: boolean | undefined;
    enableSaveLogs?: boolean | undefined;
    enableNoisyMicDetection?: boolean | undefined;
    startAudioOnly?: boolean | undefined;
    startAudioMuted?: number | undefined;
    startWithAudioMuted?: boolean | undefined;
    startSilent?: boolean | undefined;

    opusMaxAverageBitrate?: number | undefined;
    enableOpusRed?: boolean | undefined;
    resolution?: number | undefined;
    maxFullResolutionParticipants?: number | undefined;
    constraints?: Constraints | undefined;
    disableSimulcast?: boolean | undefined;
    enableLayerSuspension?: boolean | undefined;
    startVideoMuted?: number | undefined;
    startWithVideoMuted?: boolean | undefined;
    preferH264?: boolean | undefined;
    disableH264?: boolean | undefined;
    desktopSharingFrameRate?: QualityConstraints | undefined;
    startScreenSharing?: boolean | undefined;

    fileRecordingsEnabled?: boolean | undefined;
    dropbox?: ConfigDropbox | undefined;
    fileRecordingsServiceEnabled?: boolean | undefined;
    fileRecordingsServiceSharingEnabled?: boolean | undefined;
    liveStreamingEnabled?: boolean | undefined;
    transcribingEnabled?: boolean | undefined;
    autoCaptionOnRecord?: boolean | undefined;

    channelLastN?: number | undefined;
    lastNLimits?: Record<number, number> | undefined;

    videoQuality?: ConfigVideoQuality | undefined;
    recordingLimit?: ConfigRecordingLimit | undefined;
    disableRtx?: boolean | undefined;
    enableTcc?: boolean | undefined;
    enableRemb?: boolean | undefined;
    enableIceRestart?: boolean | undefined;
    minParticipants?: number | undefined;
    useTurnUdp?: false | undefined;
    openBridgeChannel?: boolean | string | undefined;

    hideLobbyButton?: boolean | undefined;
    requireDisplayName?: boolean | undefined;
    enableWelcomePage?: boolean | undefined;
    enableClosePage?: boolean | undefined;
    disable1On1Mode?: boolean | undefined;
    defaultLanguage?: string | undefined;
    disableProfile?: boolean | undefined;
    enableUserRolesBasedOnToken?: boolean | undefined;
    enableFeaturesBasedOnToken?: boolean | undefined;
    lockRoomGuestEnabled?: boolean | undefined;
    roomPasswordNumberOfDigits?: false | number | undefined;
    noticeMessage?: string | undefined;
    enableCalendarIntegration?: boolean | undefined;
    prejoinPageEnabled?: boolean | undefined;
    enableInsecureRoomNameWarning?: boolean | undefined;
    enableAutomaticUrlCopy?: boolean | undefined;
    gravatarBaseURL?: string | undefined;

    gatherStats?: boolean | undefined;
    pcStatsInterval?: number | undefined;
    callStatsID?: string | undefined;
    callStatsSecret?: string | undefined;

    enableDisplayNameInStats?: boolean | undefined;
    enableEmailInStats?: boolean | undefined;

    disableThirdPartyRequests?: boolean | undefined;

    p2p?: ConfigP2P | undefined;

    analytics?: ConfigAnalytics | undefined;
    apiLogLevels?: string[] | undefined;

    deploymentInfo?: ConfigDeploymentInfo | undefined;
    disableRecordAudioNotification?: boolean | undefined;
    chromeExtensionBanner?: ChromeExtensionBanner | undefined;

    localRecording?: ConfigLocalRecording | undefined;
    e2eping?: ConfigE2EPing | undefined;
    _desktopSharingSourceDevice?: string | undefined;
    disableDeepLinking?: boolean | undefined;
    disableLocalVideoFlip?: boolean | undefined;

    disableInviteFunctions?: boolean | undefined;
    doNotStoreRoom?: boolean | undefined;
    deploymentUrls?: ConfigDeploymentURLs | undefined;
    remoteVideoMenu?: ConfigRemoteVideoMenu | undefined;
    disableRemoteMute?: boolean | undefined;
    brandingDataUrl?: string | undefined;
    moderatedRoomServiceUrl?: string | undefined;
    hideConferenceTimer?: boolean | undefined;
    subject?: string | undefined;

    // undocumented from jitsi-meet, type assumed from name;
    _immediateReloadThreshold?: any;
    debug?: boolean | undefined;
    debugAudioLevels?: any;
    dialInConfCodeUrl?: string | undefined;
    dialInNumbersUrl?: string | undefined;
    dialOutAuthUrl?: string | undefined;
    dialOutCodesUrl?: string | undefined;
    disableRemoteControl?: boolean | undefined;
    displayJids?: boolean | undefined;
    etherpad_base?: string | undefined;
    externalConnectUrl?: string | null | undefined;
    firefox_fake_device?: any;
    googleApiApplicationClientID?: any;
    iAmRecorder?: boolean | undefined;
    iAmSipGateway?: boolean | undefined;
    microsoftApiApplicationClientID?: boolean | undefined;
    peopleSearchQueryTypes?: any;
    peopleSearchUrl?: string | undefined;
    tokenAuthUrl?: string | undefined;

    brandingRoomAlias?: any;

    // undocumented from lib-jitsi-meet, type assumed from name;
    _peerConnStatusOutOfLastNTimeout?: any;
    _peerConnStatusRtcMuteTimeout?: any;
    abTesting?: any;
    avgRtpStatsN?: any;
    callStatsConfIDNamespace?: any;
    callStatsCustomScriptUrl?: any;
    desktopSharingSources?: any;
    disableAEC?: boolean | undefined;
    disableAGC?: boolean | undefined;
    disableAP?: boolean | undefined;
    disableHPF?: boolean | undefined;
    disableNS?: boolean | undefined;
    enableLipSync?: boolean | undefined;
    enableTalkWhileMuted?: boolean | undefined;
    forceJVB121Ratio?: boolean | undefined;
    hiddenDomain?: any;
    ignoreStartMuted?: boolean | undefined;
    nick?: any;
    startBitrate?: any;
}

export interface InterfaceMobileDynamicLink {
    APN?: string | undefined;
    APP_CODE?: string | undefined;
    CUSTOM_DOMAIN?: any;
    IBI?: string | undefined;
    ISI?: string | undefined;
}

export interface InterfaceConfig {
    APP_NAME?: string | undefined;
    AUDIO_LEVEL_PRIMARY_COLOR?: string | undefined;
    AUDIO_LEVEL_SECONDARY_COLOR?: string | undefined;
    AUTO_PIN_LATEST_SCREEN_SHARE?: string | undefined;
    BRAND_WATERMARK_LINK?: string | undefined;

    CLOSE_PAGE_GUEST_HINT?: boolean | undefined;
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED?: boolean | undefined;
    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT?: number | undefined;
    CONNECTION_INDICATOR_DISABLED?: boolean | undefined;

    DEFAULT_BACKGROUND?: string | undefined;
    DEFAULT_LOCAL_DISPLAY_NAME?: string | undefined;
    DEFAULT_LOGO_URL?: string | undefined;
    DEFAULT_REMOTE_DISPLAY_NAME?: string | undefined;
    DEFAULT_WELCOME_PAGE_LOGO_URL?: string | undefined;

    DISABLE_DOMINANT_SPEAKER_INDICATOR?: boolean | undefined;
    DISABLE_FOCUS_INDICATOR?: boolean | undefined;
    DISABLE_JOIN_LEAVE_NOTIFICATIONS?: boolean | undefined;
    DISABLE_PRESENCE_STATUS?: boolean | undefined;
    DISABLE_RINGING?: boolean | undefined;
    DISABLE_TRANSCRIPTION_SUBTITLES?: boolean | undefined;
    DISABLE_VIDEO_BACKGROUND?: boolean | undefined;

    DISPLAY_WELCOME_FOOTER?: boolean | undefined;
    DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD?: boolean | undefined;
    DISPLAY_WELCOME_PAGE_CONTENT?: boolean | undefined;
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT?: boolean | undefined;
    ENABLE_DIAL_OUT?: boolean | undefined;
    ENABLE_FEEDBACK_ANIMATION?: boolean | undefined;
    FILM_STRIP_MAX_HEIGHT?: number | undefined;
    filmStripOnly?: boolean | undefined;
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE?: boolean | undefined;
    HIDE_DEEP_LINKING_LOGO?: boolean | undefined;
    HIDE_INVITE_MORE_HEADER?: boolean | undefined;
    INITIAL_TOOLBAR_TIMEOUT?: number | undefined;

    JITSI_WATERMARK_LINK?: string | undefined;
    LANG_DETECTION?: boolean | undefined;
    LIVE_STREAMING_HELP_LINK?: string | undefined;
    LOCAL_THUMBNAIL_RATIO?: number | undefined;
    MAXIMUM_ZOOMING_COEFFICIENT?: number | undefined;
    MOBILE_APP_PROMO?: boolean | undefined;
    NATIVE_APP_NAME?: string | undefined;
    OPTIMAL_BROWSERS?: string[] | undefined;
    POLICY_LOGO?: any;
    PROVIDER_NAME?: string | undefined;
    RECENT_LIST_ENABLED?: boolean | undefined;
    REMOTE_THUMBNAIL_RATIO?: number | undefined;
    SETTINGS_SECTIONS?: Array<"devices" | "language" | "moderator" | "profile" | "calendar"> | undefined;
    SHOW_BRAND_WATERMARK?: boolean | undefined;
    SHOW_CHROME_EXTENSION_BANNER?: boolean | undefined;

    SHOW_DEEP_LINKING_IMAGE?: boolean | undefined;
    SHOW_JITSI_WATERMARK?: boolean | undefined;
    SHOW_POWERED_BY?: boolean | undefined;
    SHOW_PROMOTIONAL_CLOSE_PAGE?: boolean | undefined;
    SHOW_WATERMARK_FOR_GUESTS?: boolean | undefined;

    SUPPORT_URL?: string | undefined;

    TOOLBAR_ALWAYS_VISIBLE?: boolean | undefined;
    TOOLBAR_BUTTONS?:
        | Array<
            | "microphone"
            | "camera"
            | "closedcaptions"
            | "desktop"
            | "embedmeeting"
            | "fullscreen"
            | "fodeviceselection"
            | "hangup"
            | "profile"
            | "chat"
            | "recording"
            | "livestreaming"
            | "etherpad"
            | "sharedvideo"
            | "settings"
            | "raisehand"
            | "videoquality"
            | "filmstrip"
            | "invite"
            | "feedback"
            | "stats"
            | "shortcuts"
            | "tileview"
            | "videobackgroundblur"
            | "download"
            | "help"
            | "mute-everyone"
            | "security"
        >
        | undefined;

    TOOLBAR_TIMEOUT?: number | undefined;

    UNSUPPORTED_BROWSERS?: string[] | undefined;
    VERTICAL_FILMSTRIP?: boolean | undefined;
    VIDEO_LAYOUT_FIT?: string | undefined;
    VIDEO_QUALITY_LABEL_DISABLED?: boolean | undefined;
    HIDE_KICK_BUTTON_FOR_GUESTS?: boolean | undefined;
    TILE_VIEW_MAX_COLUMNS?: number | undefined;

    MOBILE_DOWNLOAD_LINK_ANDROID?: string | undefined;
    MOBILE_DOWNLOAD_LINK_F_DROID?: string | undefined;
    MOBILE_DOWNLOAD_LINK_IOS?: string | undefined;
    MOBILE_DYNAMIC_LINK?: InterfaceMobileDynamicLink | undefined;
    APP_SCHEME?: string | undefined;
    ANDROID_APP_PACKAGE?: string | undefined;

    ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT?: number | undefined;
    INDICATOR_FONT_SIZES?: any;
    PHONE_NUMBER_REGEX?: any;
}

export type Invitee = any;

export interface UserInfo {
    email?: string | undefined;
    displayName?: string | undefined;
}

export interface ExternalAPIOptions {
    roomName?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    parentNode?: Element | undefined;
    configOverwrite?: Config | undefined;
    interfaceConfigOverwrite?: InterfaceConfig | undefined;
    noSSL?: boolean | undefined;
    jwt?: string | undefined;
    onload?: (() => any) | undefined;
    invitees?: Invitee[] | undefined;
    devices?: any;
    userInfo?: UserInfo | undefined;
}

export interface Device {
    deviceId: string;
    groupId: string;
    kind: string;
    label: string;
}

export interface DeviceMap {
    audioInput?: Device[] | undefined;
    audioOutput?: Device[] | undefined;
    videoInput?: Device[] | undefined;
}

export type ExternalAPICommands =
    | "displayName"
    | "password"
    | "toggleLobby"
    | "sendTones"
    | "subject"
    | "toggleAudio"
    | "toggleVideo"
    | "toggleFilmStrip"
    | "toggleChat"
    | "toggleShareScreen"
    | "toggleTileView"
    | "hangup"
    | "email"
    | "avatarUrl"
    | "sendEndpointTextMessage"
    | "setLargeVideoParticipant"
    | "setVideoQuality"
    | "muteEveryone"
    | "startRecording"
    | "stopRecording";

export type RecordingMode = "file" | "stream";

export interface RecordingOptions {
    mode: RecordingMode;
    dropboxToken?: string | undefined;
    shouldShare?: boolean | undefined;
    rtmpStreamKey?: string | undefined;
    rtmpBroadcastID?: string | undefined;
    youtubeStreamKey?: string | undefined;
    youtubeBroadcastID?: string | undefined;
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

export type LogLevels = "info" | "error" | "debug" | "warn";

export interface LogEvent {
    logLevel: LogLevels;
    args: string;
}

export interface MicErrorEvent {
    type: string;
    message: string;
}

export type ScreenSharingSourceTypes = "window" | "screen" | "proxy" | "device";

export interface ScreenSharingStatusChangedEvent {
    on: boolean;
    details: {
        sourceType?: ScreenSharingSourceTypes | undefined;
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
    error?: string | undefined;
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
export interface JitsiMeetExternalAPI
    extends TypedEventEmitter<ExternalAPIEventCallbacks, keyof ExternalAPIEventCallbacks>
{
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
export as namespace Jitsi;
