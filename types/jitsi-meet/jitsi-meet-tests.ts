import {
    Config,
    DeviceMap,
    ExternalAPICommands,
    ExternalAPIEventCallbacks,
    ExternalAPIOptions,
    InterfaceConfig,
    JitsiMeetExternalAPI,
    JitsiMeetExternalAPIConstructor,
    RecordingMode,
    RecordingOptions,
    VideoConferenceJoinedEvent,
} from "jitsi-meet/index";

/**
 * verify the config type is good, at least as far as all the default options
 * @see verify the config type is good, at least as far as all the default options
 */
const config: Config = {
    hosts: {
        domain: "jitsi-meet.example.com",
        anonymousdomain: "guest.example.com",
        authdomain: "jitsi-meet.example.com",
        focus: "focus.jitsi-meet.example.com",
        muc: "conference.jitsi-meet.example.com",
    },
    bosh: "//jitsi-meet.example.com/http-bind",
    websocket: "wss://jitsi-meet.example.com/xmpp-websocket",
    clientNode: "http://jitsi.org/jitsimeet",
    focusUserJid: "focus@auth.jitsi-meet.example.com",

    testing: {
        disableE2EE: false,
        p2pTestMode: false,
        testMode: false,
        noAutoPlayVideo: false,
        capScreenshareBitrate: 1, // 0 to disable
        callStatsThreshold: 5, // enable callstats for 5% of the users.
    },

    webrtcIceUdpDisable: false,
    webrtcIceTcpDisable: false,

    audioLevelsInterval: 200,
    enableNoAudioDetection: true,
    enableSaveLogs: false,
    enableNoisyMicDetection: true,
    startAudioOnly: false,
    startAudioMuted: 10,
    startWithAudioMuted: false,
    startSilent: false,
    opusMaxAverageBitrate: 20000,
    enableOpusRed: false,
    resolution: 720,
    maxFullResolutionParticipants: 2,
    constraints: {
        video: {
            height: {
                ideal: 720,
                max: 720,
                min: 240,
            },
        },
    },
    disableSimulcast: false,
    enableLayerSuspension: false,
    startVideoMuted: 10,
    startWithVideoMuted: false,
    preferH264: true,
    disableH264: false,
    desktopSharingFrameRate: {
        min: 5,
        max: 5,
    },
    startScreenSharing: false,

    dropbox: {
        appKey: "<APP_KEY>", // Specify your app key here.
        redirectURI: "https://jitsi-meet.example.com/subfolder/static/oauth.html",
    },
    fileRecordingsServiceSharingEnabled: false,
    liveStreamingEnabled: false,
    transcribingEnabled: false,
    autoCaptionOnRecord: false,
    channelLastN: -1,
    lastNLimits: {
        5: 20,
        30: 15,
        50: 10,
        70: 5,
        90: 2,
    },
    videoQuality: {
        disabledCodec: "H264",
        preferredCodec: "VP8",
        maxBitratesVideo: {
            low: 200000,
            standard: 500000,
            high: 1500000,
        },
        minHeightForQualityLvl: {
            360: "standard",
            720: "high",
        },
        resizeDesktopForPresenter: false,
    },
    recordingLimit: {
        limit: 60,
        appName: "Unlimited recordings APP",
        appURL: "https://unlimited.recordings.app.com/",
    },
    disableRtx: false,
    enableTcc: true,
    enableRemb: true,
    enableIceRestart: false,
    useTurnUdp: false,

    hideLobbyButton: false,
    requireDisplayName: true,
    enableWelcomePage: true,
    enableClosePage: false,
    disable1On1Mode: false,
    defaultLanguage: "en",
    disableProfile: false,
    enableFeaturesBasedOnToken: false,
    roomPasswordNumberOfDigits: 10,
    noticeMessage: "",
    enableCalendarIntegration: false,
    prejoinPageEnabled: false,
    enableInsecureRoomNameWarning: false,
    enableAutomaticUrlCopy: false,
    gravatarBaseURL: "https://seccdn.libravatar.org/avatar/",

    gatherStats: false,
    pcStatsInterval: 10000,
    callStatsID: "",
    callStatsSecret: "",
    enableDisplayNameInStats: false,
    enableEmailInStats: false,

    disableThirdPartyRequests: false,

    p2p: {
        enabled: true,
        stunServers: [
            { urls: "stun:jitsi-meet.example.com:3478" },
            { urls: "stun:meet-jit-si-turnrelay.jitsi.net:443" },
        ],
        iceTransportPolicy: "all",
        preferH264: true,
        preferredCodec: "H264",
        disableH264: false,
        disabledCodec: "",
        backToP2PDelay: 5,
    },

    analytics: {
        googleAnalyticsTrackingId: "your-tracking-id-UA-123456-1",
        matomoEndpoint: "https://your-matomo-endpoint/",
        matomoSiteID: "42",
        amplitudeAPPKey: "<APP_KEY>",
        rtcstatsEnabled: true,
        rtcstatsEndpoint: "wss://rtcstats-server-pilot.jitsi.net/",
        rtcstatsPolIInterval: 1000,
        scriptURLs: [
            "libs/analytics-ga.min.js", // google-analytics
            "https://example.com/my-custom-analytics.js",
        ],
    },

    apiLogLevels: ["warn", "log", "error", "info", "debug"],

    deploymentInfo: {
        shard: "shard1",
        region: "europe",
        userRegion: "asia",
    },
    disableRecordAudioNotification: false,
    chromeExtensionBanner: {
        url: "https://chrome.google.com/webstore/detail/jitsi-meetings/kglhbbefdnlheedjiejgomgmfplipfeb",
        chromeExtensionsInfo: [
            {
                id: "kglhbbefdnlheedjiejgomgmfplipfeb",
                path: "jitsi-logo-48x48.png",
            },
        ],
    },

    localRecording: {
        enabled: true,
        format: "flac",
    },
    e2eping: {
        pingInterval: 10000,
        analyticsInterval: 60000,
    },
    _desktopSharingSourceDevice: "sample-id-or-label",
    disableDeepLinking: false,
    disableLocalVideoFlip: false,
    disableInviteFunctions: true,
    doNotStoreRoom: true,
    deploymentUrls: {
        userDocumentationURL: "https://docs.example.com/video-meetings.html",
        downloadAppsUrl: "https://docs.example.com/our-apps.html",
    },
    remoteVideoMenu: {
        disableKick: true,
    },
    disableRemoteMute: true,
    enableLipSync: false,
    brandingDataUrl: "",
    moderatedRoomServiceUrl: "https://moderated.jitsi-meet.example.com",
    hideConferenceTimer: true,
    subject: "Conference Subject",
    brandingRoomAlias: null,
};

/**
 * verify the interfaceConfig type is good for the default values
 * @see https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
 */
const interfaceConfig: InterfaceConfig = {
    APP_NAME: "Jitsi Meet",
    AUDIO_LEVEL_PRIMARY_COLOR: "rgba(255,255,255,0.4)",
    AUDIO_LEVEL_SECONDARY_COLOR: "rgba(255,255,255,0.2)",
    AUTO_PIN_LATEST_SCREEN_SHARE: "remote-only",
    BRAND_WATERMARK_LINK: "",

    CLOSE_PAGE_GUEST_HINT: false, // A html text to be shown to guests on the close page, false disables it
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED: true,

    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT: 5000,
    CONNECTION_INDICATOR_DISABLED: false,

    DEFAULT_BACKGROUND: "#474747",
    DEFAULT_LOCAL_DISPLAY_NAME: "me",
    DEFAULT_LOGO_URL: "images/watermark.svg",
    DEFAULT_REMOTE_DISPLAY_NAME: "Fellow Jitster",
    DEFAULT_WELCOME_PAGE_LOGO_URL: "images/watermark.svg",

    DISABLE_DOMINANT_SPEAKER_INDICATOR: false,
    DISABLE_FOCUS_INDICATOR: false,
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
    DISABLE_PRESENCE_STATUS: false,
    DISABLE_RINGING: false,
    DISABLE_TRANSCRIPTION_SUBTITLES: false,
    DISABLE_VIDEO_BACKGROUND: false,
    DISPLAY_WELCOME_FOOTER: true,
    DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD: false,
    DISPLAY_WELCOME_PAGE_CONTENT: false,
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,

    ENABLE_DIAL_OUT: true,
    ENABLE_FEEDBACK_ANIMATION: false, // Enables feedback star animation.
    FILM_STRIP_MAX_HEIGHT: 120,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE: true,
    HIDE_DEEP_LINKING_LOGO: false,
    HIDE_INVITE_MORE_HEADER: false,
    INITIAL_TOOLBAR_TIMEOUT: 20000,
    JITSI_WATERMARK_LINK: "https://jitsi.org",

    LANG_DETECTION: true, // Allow i18n to detect the system language
    LIVE_STREAMING_HELP_LINK: "https://jitsi.org/live", // Documentation reference for the live streaming feature.
    LOCAL_THUMBNAIL_RATIO: 16 / 9, // 16:9

    MAXIMUM_ZOOMING_COEFFICIENT: 1.3,
    MOBILE_APP_PROMO: true,
    MOBILE_DOWNLOAD_LINK_ANDROID: "https://play.google.com/store/apps/details?id=org.jitsi.meet",
    MOBILE_DOWNLOAD_LINK_F_DROID: "https://f-droid.org/en/packages/org.jitsi.meet/",
    MOBILE_DOWNLOAD_LINK_IOS: "https://itunes.apple.com/us/app/jitsi-meet/id1165103905",
    NATIVE_APP_NAME: "Jitsi Meet",
    OPTIMAL_BROWSERS: ["chrome", "chromium", "firefox", "nwjs", "electron", "safari"],

    POLICY_LOGO: null,
    PROVIDER_NAME: "Jitsi",
    RECENT_LIST_ENABLED: true,
    REMOTE_THUMBNAIL_RATIO: 1, // 1:1
    SETTINGS_SECTIONS: ["devices", "language", "moderator", "profile", "calendar"],
    SHOW_BRAND_WATERMARK: false,
    SHOW_CHROME_EXTENSION_BANNER: false,

    SHOW_DEEP_LINKING_IMAGE: false,
    SHOW_JITSI_WATERMARK: true,
    SHOW_POWERED_BY: false,
    SHOW_PROMOTIONAL_CLOSE_PAGE: false,
    SUPPORT_URL: "https://community.jitsi.org/",
    TOOLBAR_ALWAYS_VISIBLE: false,
    TOOLBAR_BUTTONS: [
        "microphone",
        "camera",
        "closedcaptions",
        "desktop",
        "embedmeeting",
        "fullscreen",
        "fodeviceselection",
        "hangup",
        "profile",
        "chat",
        "recording",
        "livestreaming",
        "etherpad",
        "sharedvideo",
        "settings",
        "raisehand",
        "videoquality",
        "filmstrip",
        "invite",
        "feedback",
        "stats",
        "shortcuts",
        "tileview",
        "videobackgroundblur",
        "download",
        "help",
        "mute-everyone",
        "security",
    ],

    TOOLBAR_TIMEOUT: 4000,
    UNSUPPORTED_BROWSERS: [],
    VERTICAL_FILMSTRIP: true,
    VIDEO_LAYOUT_FIT: "both",
    VIDEO_QUALITY_LABEL_DISABLED: false,
    TILE_VIEW_MAX_COLUMNS: 5,
    MOBILE_DYNAMIC_LINK: {
        APN: "org.jitsi.meet",
        APP_CODE: "w2atb",
        CUSTOM_DOMAIN: undefined,
        IBI: "com.atlassian.JitsiMeet.ios",
        ISI: "1165103905",
    },
    APP_SCHEME: "org.jitsi.meet",
    ANDROID_APP_PACKAGE: "org.jitsi.meet",
    ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 15000,
};

const options: ExternalAPIOptions = {
    roomName: "jitsi-meet",
    width: 1440,
    height: 1080,
    parentNode: new HTMLDivElement(),
    configOverwrite: config,
    interfaceConfigOverwrite: interfaceConfig,
    noSSL: true,
    jwt: "",
    onload: () => {
        return;
    },
    invitees: [{
        // empty object as this depends on the exact
    }],
    devices: null,
    userInfo: {
        email: "test@example.com",
        displayName: "Jitsi",
    },
};

const JitsiMeetExternalAPI = (window as any).JitsiMeetExternalAPI as JitsiMeetExternalAPIConstructor;

const api = new JitsiMeetExternalAPI("typescript", options);

api.captureLargeVideoScreenshot().then();
api.getAvailableDevices().then();
api.getCurrentDevices().then();
const getParticipantsInfo: any = api.getParticipantsInfo();
const getVideoQuality: any = api.getVideoQuality();
api.isDeviceListAvailable().then();
api.isMultipleAudioInputSupported().then();
api.pinParticipant("typescript");
api.resizeLargeVideo(1440, 1080);
api.setAudioInputDevice("mic", "atype");
api.setAudioOutputDevice("speaker", "atype");
api.setLargeVideoParticipant("typescript");
api.setVideoInputDevice("camera", "vtype");
api.startRecording({
    mode: "stream",
    dropboxToken: "drop",
    shouldShare: false,
    rtmpStreamKey: "rtmp",
    rtmpBroadcastID: "rtmp",
    youtubeStreamKey: "youtube",
    youtubeBroadcastID: "youtube",
});
api.stopRecording("file");
api.executeCommand("toggleTileView");
const getNumberOfParticipants: number = api.getNumberOfParticipants();
const getAvatarURL: string = api.getAvatarURL("typescript");
const getDisplayName: string = api.getDisplayName("typescript");
const getEmail: string = api.getEmail("typescript");
const getIFrame: HTMLIFrameElement = api.getIFrame();
api.isAudioMuted().then();
api.isVideoMuted().then();
api.isAudioAvailable().then();
api.isVideoAvailable().then();
api.dispose();

api.addListener("videoConferenceJoined", (e: VideoConferenceJoinedEvent) => {});
