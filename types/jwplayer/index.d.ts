// Type definitions for JW Player 8.2
// Project: https://github.com/jwplayer/jwplayer
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Tomer Kruvi <https://github.com/kutomer>
//                 Philipp Gürtler <https://github.com/philippguertler>
//                 Daniel McGraw <https://github.com/danielmcgraw>
//                 Be Birchall <https://github.com/bebebebebe>
//                 Daniel Cassidy <https://github.com/djcsdy>
//                 Drew Wyatt <https://github.com/drewwyatt>
//                 Zack Haigh <https://github.com/zetagame>
//                 Ethan Setnik <https://github.com/esetnik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

declare namespace jwplayer {
    interface Version {
        version: string;
        major: number;
        minor: number;
    }

    interface Browser {
        androidNative: boolean;
        chrome: boolean;
        edge: boolean;
        facebook: boolean;
        firefox: boolean;
        ie: boolean;
        msie: boolean;
        safari: boolean;
        version: Version;
    }

    interface OS {
        android: boolean;
        iOS: boolean;
        iPad: boolean;
        iPhone: boolean;
        mac: boolean;
        mobile: boolean;
        tizen: boolean;
        tizenApp: boolean;
        version: Version;
        windows: boolean;
    }

    interface Features {
        backgroundLoading: boolean;
        flash: boolean;
        flashVersion: number;
        iframe: boolean;
        passiveEvents: boolean;
    }

    interface Environment {
        Browser: Browser;
        OS: OS;
        Features: Features;
    }

    interface Provider {
        name: 'flash_adaptive' | 'flash_video' | 'flash_sound' | 'hlsjs' | 'html5' | 'shaka';
    }

    interface AbsolutePositionReadyParam {
        ready: boolean;
        startDateTime: number;
        type: 'absolutePositionReady';
    }

    interface AdProgressParam {
        client: 'vast' | 'googima';
        creativetype: string;
        tag: string;
    }

    interface AdCompanionsParam {
        companions: any[];
        tag: string;
    }

    interface AdErrorParam {
        message: string;
        tag: string;
    }

    interface AdRequestParam {
        adposition: 'pre' | 'mid' | 'post';
        client: 'vast' | 'googima';
        offset: 'pre' | 'mid' | 'post';
        tag: string;
    }

    interface AdImpressionParam {
        adposition: 'pre' | 'mid' | 'post';
        adsystem: string;
        adtitle: string;
        clickThroughUrl: string;
        client: 'vast' | 'googima';
        creativetype: string;
        linear: string;
        mediafile: any;
        tag: string;
        vastversion: number;
        wrapper: any[];
    }

    interface AdScheduleParam {
        tag: string;
        client: string;
        adbreaks: object[];
    }

    interface AdStartedParam {
        creativetype: string;
        tag: string;
    }

    interface AdPlayParam {
        creativetype: string;
        newstate: string;
        oldstate: string;
        tag: string;
    }

    interface AutostartNotAllowedParam {
        code: number;
        error: Error;
        reason: string;
        type: 'autostartNotAllowed';
    }

    interface BufferParam {
        newstate: 'buffering';
        oldstate: PlayState;
        reason: 'loading' | 'complete' | 'stalled' | 'error';
        type: 'buffer';
    }

    interface BufferChangeParam {
        duration: number;
        bufferPercent: number;
        position: number;
        currentTime: number;
        seekRange: SeekRange;
        type: 'bufferChange';
    }

    interface AdTimeParam {
        client: 'vast' | 'googima';
        creativetype: string;
        duration: number;
        position: number;
        sequence: number;
        tag: string;
    }

    interface AudioTracksParam {
        currentTrack: number;
        tracks: AudioTrack[];
    }

    interface CaptionsChangedParam {
        tracks: Caption[];
        track: number;
        type: 'captionsChanged';
    }

    interface CaptionsListParam {
        tracks: Caption[];
    }

    interface Caption {
        id: number | string;
        label: string;
    }

    interface AudioTrackChangedParam {
        currentTrack: number;
    }

    interface Attribute {
        name: string;
        value: any;
    }

    interface Meta {
        type: 'meta';
    }

    interface MetadataCueParsed {
        type: 'metadataCueParsed';
    }

    interface MetaDateRange {
        metadataType: 'date-range';
        metadataTime: number;
        metadata: {
            attributes: Attribute[];
            content: string;
            duration: number;
            end: number;
            endDate: string;
            start: number;
            startDate: string;
            tag: 'EXT-X-DATERANGE';
        };
    }

    interface MetaEMSG {
        metadataType: 'emsg';
        metadataTime: number;
        metadata: {
            duration: number;
            end: number;
            id: number;
            messageData: any[];
            metadataType: 'emsg';
            presentationTimeOffset: number;
            start: number;
            schemeIdUri: string;
            timescale: number;
        };
    }

    interface MetaID3 {
        metadataType: 'id3';
        metadataTime: number;
        metadata: any;
    }

    interface MetaMedia {
        metadataType: 'media';
        duration: number;
        height: number;
        seekRange: SeekRange;
        width: number;
    }

    interface MetaProgramDateTime {
        metadataType: 'program-date-time';
        metadataTime: number;
        programDateTime: string;
        metadata: {
            end: number;
            programDateTime: string;
            start: number;
        };
    }

    interface MetaSCTE35 {
        metadataType: 'scte-35';
        metadataTime: number;
        metadata: {
            content: string;
            end: number;
            start: number;
            tag: 'EXT-X-CUE-OUT' | 'EXT-X-CUE-IN';
        };
    }

    interface MetaDiscontinuity {
        metadataType: 'discontinuity';
        metadataTime: number;
        metadata: {
            metadataType: 'discontinuity';
            discontinuitySequence: number;
            end: number;
            PTS: number;
            start: number;
            tag: string;
        };
    }

    interface MetaUnknown {
        metadataType: 'unknown';
    }

    type MetadataParam =
        | (MetaDateRange & Meta)
        | (MetaEMSG & Meta)
        | (MetaID3 & Meta)
        | (MetaMedia & Meta)
        | (MetaProgramDateTime & Meta)
        | (MetaSCTE35 & Meta)
        | (MetaUnknown & Meta)
        | (MetaDiscontinuity & MetadataCueParsed);

    type MetadataCueParsedParam =
        | (MetaDateRange & MetadataCueParsed)
        | (MetaEMSG & MetadataCueParsed)
        | (MetaID3 & MetadataCueParsed)
        | (MetaProgramDateTime & MetadataCueParsed)
        | (MetaSCTE35 & MetadataCueParsed)
        | (MetaDiscontinuity & MetadataCueParsed);

    interface CompleteParam {
        type: 'complete';
    }

    interface ControlsParam {
        controls: boolean;
        type: 'controls';
    }

    interface ErrorParam {
        code: number;
        message: string;
        sourceError: object | null;
        type: 'error';
    }

    interface FloatParam {
        floating: boolean;
        type: 'float';
    }

    interface FullscreenParam {
        fullscreen: boolean;
    }

    interface IdleParam {
        newstate: 'idle';
        oldstate: PlayState;
        reason: 'complete' | 'idle';
        type: 'idle';
    }

    interface LevelsChangedParam {
        currentQuality: number;
        levels: Level[];
        type: 'levelsChanged';
    }

    interface MuteParam {
        mute: boolean;
        type: 'mute';
    }

    interface NextClickParam {
        feedData: object;
        feedShownId: string;
        itemsShown: PlaylistItem[];
        mode: string;
        target: PlaylistItem;
        ui: string;
        type: 'nextClick';
    }

    interface VolumeParam {
        volume: number;
        type: 'volume';
    }

    type PlayReason = 'autostart' | 'external' | 'interaction' | 'playlist' | 'related-auto' | 'viewable';

    type PlayState = 'buffering' | 'idle' | 'paused' | 'playing';

    interface PauseParam {
        newstate: PlayState;
        oldstate: PlayState;
        pauseReason: PlayReason;
        reason: string;
        viewable: 0 | 1;
        type: 'pause';
    }

    interface PlayParam {
        newstate: PlayState;
        oldstate: PlayState;
        playReason: PlayReason;
        reason: string;
        viewable: 0 | 1;
        type: 'play';
    }

    interface PlayAttemptFailedParam {
        code: number;
        error: Error;
        item: PlaylistItem;
        playReason: PlayReason;
        sourceError: object | null;
        type: 'playAttemptFailed';
    }

    interface PlaylistParam {
        feedData: object;
        playlist: PlaylistItem[];
        type: 'playlist';
    }

    interface PlaylistCompleteParam {
        type: 'playlistComplete';
    }

    interface PlaylistItemParam {
        index: number;
        item: PlaylistItem;
        type: 'playlistItem';
    }

    interface ReadyParam {
        setupTime: number;
        viewable: 0 | 1;
    }

    interface ResizeParam {
        width: number;
        height: number;
    }

    interface VisualQualityParam extends VisualQuality {
        level: Level;
        mode: 'auto' | 'manual';
        reason: 'api' | 'auto' | 'initial choice';
        type: 'visualQuality';
    }

    interface PlaybackRateChangedParam {
        playbackRate: number;
        position: number | undefined;
        type: 'playbackRateChanged';
    }

    interface LevelsParam {
        currentQuality: number;
        levels: Level[];
        type: 'levels';
    }

    interface SeekParam {
        currentTime: number;
        duration: number;
        metadata?: {
            currentTime?: number;
        };
        offset: number;
        position: number;
        seekRange: SeekRange;
        type: 'seek';
    }

    interface SeekRange {
        end: number;
        start: number;
    }

    interface TimeParam {
        duration: number;
        position: number;
        viewable: 0 | 1;
    }

    interface FirstFrameParam {
        loadTime: number;
        type: 'firstFrame';
    }

    type EventCallback<T> = (param: T) => void;

    interface Region {
        x: 0; // x and y will always be 0 according to https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayergetsaferegion
        y: 0;
        width: number;
        height: number;
    }

    interface AudioTrack {
        autoselect?: boolean;
        defaulttrack?: boolean;
        language: string;
        name: string;
    }

    interface CaptionsConfig {
        color?: string;
        fontSize?: number;
        fontFamily?: string;
        fontOpacity?: number;
        backgroundColor?: string;
        backgroundOpacity?: number;
        edgeStyle?: 'none' | 'depressed' | 'dropshadow' | 'raised' | 'uniform';
        windowColor?: string;
        windowOpacity?: number;
    }

    interface Level {
        height?: number;
        index?: number;
        label: string;
        width?: number;
        hlsjsIndex?: number;
        level_id?: number | string;
        bitrate?: number;
    }

    interface QualityLevel {
        bitrate?: number;
        height?: number;
        index?: number;
        label: string;
        width?: number;
    }

    interface VisualQuality {
        level: QualityLevel;
        mode: 'auto' | 'manual';
        reason: 'auto' | 'api' | 'initial choice';
    }

    interface PlaylistItem {
        adschedule?: Adschedule;
        allSources?: Source[];
        description?: string;
        duration?: number;
        file: string;
        image?: string;
        images?: Image[];
        link?: string;
        mediaid?: string;
        minDvrWindow?: number;
        preload?: 'metadata' | 'auto' | 'none';
        recommendations?: string;
        sources: [Source];
        starttime?: number;
        tags?: string;
        title: string;
        tracks?: Track[];
        withCredentials?: boolean;
    }

    interface Adschedule {
        offset: number | string;
        tag?: string | string[];
        type?: 'linear' | 'nonlinear';
        vastxml?: string;
    }

    interface Image {
        src: string;
        width: number;
        type: string;
    }

    interface Source {
        default: boolean;
        drm?: DRMConfig;
        file: string;
        label: string;
        liveSyncDuration?: number;
        mimeType?: string;
        preload?: 'metadata' | 'auto' | 'none';
        type: string;
    }

    interface Track {
        default?: boolean;
        file: string;
        kind: 'captions' | 'chapters' | 'thumbnails';
        label?: string;
    }

    type DRMConfig = ClearKeyDRM | FairPlayDRM | PlayReadyDRM | WideWineDRM;

    interface ClearKeyDRM {
        key: string;
        keyId: string;
    }

    interface FairPlayDRM {
        certificateUrl: string;
        extractContentId?: (initDataUri: string) => string;
        extractKey?: (ckc: any) => string | Promise<string>;
        licenseRequestFilter?: (request: any) => any;
        licenseRequestHeaders?: Header[];
        licenseRequestMessage?: (message: any) => any;
        licenseResponseFilter?: (response: any) => any;
        licenseResponseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        processSpcUrl: string | ((...args: any[]) => string);
    }

    interface PlayReadyDRM {
        audioRobustness?: RobustnessLevel;
        headers?: Header[];
        licenseRequestFilter?: (request: any) => any;
        licenseResponseFilter?: (response: any) => any;
        url: string;
        videoRobustness?: RobustnessLevel;
    }

    interface WideWineDRM extends PlayReadyDRM {
        serverCertificateUrl?: string;
    }

    type RobustnessLevel =
        | 'HW_SECURE_ALL'
        | 'HW_SECURE_CRYPTO'
        | 'HW_SECURE_DECODE'
        | 'SW_SECURE_CRYPTO'
        | 'SW_SECURE_DECODE';

    interface Header {
        name: string;
        value: string;
    }

    interface CastParam {
        available: boolean;
        active: boolean;
        deviceName: string;
        type: 'cast';
    }

    interface ViewableParam {
        viewable: 0 | 1;
        type: 'viewable';
    }

    interface WarningParam {
        code: number;
        key?: string;
        sourceError: object | null;
        type: 'warning';
    }

    interface GaConfig {
        label?: keyof PlaylistItem;
        sendEnhancedEvents?: boolean;
        trackerName?: string;
        useUniversalAnalytics?: boolean;
    }

    interface IntlConfig {
        advertising?: IntlAdvertising;
        airplay?: string;
        audioTracks?: string;
        auto?: string;
        buffer?: string;
        captionsStyles?: IntlCaptionsStyles;
        cast?: string;
        cc?: string;
        close?: string;
        displayHeading?: string;
        errors?: IntlErrors;
        exitFullscreen?: string;
        fullscreen?: string;
        hd?: string;
        liveBroadcast?: string;
        logo?: string;
        mute?: string;
        next?: string;
        nextUp?: string;
        notLive?: string;
        off?: string;
        pause?: string;
        pipIcon?: string;
        play?: string;
        playback?: string;
        playbackRates?: string;
        player?: string;
        playlist?: string;
        poweredBy?: string;
        prev?: string;
        related?: IntlRelated;
        replay?: string;
        rewind?: string;
        settings?: string;
        sharing?: IntlSharing;
        shortcuts?: IntlShortcuts;
        slider?: string;
        stop?: string;
        unmute?: string;
        videoInfo?: string;
        volume?: string;
        volumeSlider?: string;
    }

    interface IntlAdvertising {
        admessage?: string;
        cuetext?: string;
        loadingAd?: string;
        podmessage?: string;
        skipmessage?: string;
        skiptext?: string;
    }

    interface IntlCaptionsStyles {
        backgroundColor?: string;
        backgroundOpacity?: string;
        black?: string;
        blue?: string;
        characterEdge?: string;
        cyan?: string;
        depressed?: string;
        disabled?: string;
        dropShadow?: string;
        enabled?: string;
        fontColor?: string;
        fontFamily?: string;
        fontOpacity?: string;
        fontSize?: string;
        green?: string;
        magenta?: string;
        none?: string;
        raised?: string;
        red?: string;
        reset?: string;
        subtitleSettings?: string;
        uniform?: string;
        white?: string;
        windowColor?: string;
        windowOpacity?: string;
        yellow?: string;
    }

    interface IntlErrors {
        badConnection?: string;
        cantLoadPlayer?: string;
        cantPlayInBrowser?: string;
        cantPlayVideo?: string;
        errorCode?: string;
        liveStreamDown?: string;
        protectedContent?: string;
        technicalError?: string;
    }

    interface IntlRelated {
        autoplaymessage?: string;
        heading?: string;
    }

    interface IntlSharing {
        copied?: string;
        email?: string;
        embed?: string;
        heading?: string;
        link?: string;
    }

    interface IntlShortcuts {
        captionsToggle?: string;
        decreaseVolume?: string;
        fullscreenToggle?: string;
        increaseVolume?: string;
        keyboardShortcuts?: string;
        playPause?: string;
        seekBackward?: string;
        seekForward?: string;
        seekPercent?: string;
        spacebar?: string;
        volumeToggle?: string;
    }

    interface EventParams {
        absolutePositionReady: AbsolutePositionReadyParam;
        adClick: AdProgressParam;
        adCompanions: AdCompanionsParam;
        adComplete: AdProgressParam;
        adSkipped: AdProgressParam;
        adError: AdErrorParam;
        adRequest: AdRequestParam;
        adSchedule: AdScheduleParam;
        adStarted: AdStartedParam;
        adImpression: AdImpressionParam;
        adPlay: AdPlayParam;
        adPause: AdPlayParam;
        adTime: AdTimeParam;
        all: keyof EventParams;
        autostartNotAllowed: AutostartNotAllowedParam;
        cast: CastParam;
        complete: CompleteParam;
        meta: MetadataParam;
        metadataCueParsed: MetadataCueParsedParam;
        audioTracks: AudioTracksParam;
        audioTrackChanged: AudioTrackChangedParam;
        firstFrame: FirstFrameParam;
        buffer: BufferParam;
        bufferChange: BufferChangeParam;
        captionsChanged: CaptionsChangedParam;
        captionsList: CaptionsListParam;
        controls: ControlsParam;
        error: ErrorParam;
        float: FloatParam;
        fullscreen: FullscreenParam;
        idle: IdleParam;
        levelsChanged: LevelsChangedParam;
        mute: MuteParam;
        volume: VolumeParam;
        pause: PauseParam;
        play: PlayParam;
        playlist: PlaylistParam;
        playlistItem: PlaylistItemParam;
        ready: ReadyParam;
        resize: ResizeParam;
        visualQuality: VisualQualityParam;
        playbackRateChanged: PlaybackRateChangedParam;
        levels: LevelsParam;
        seek: SeekParam;
        setupError: ErrorParam;
        time: TimeParam;
        warning: WarningParam;
    }

    type NoParamEvent =
        | 'adBlock'
        | 'beforeComplete'
        | 'beforePlay'
        | 'displayClick'
        | 'remove'
        | 'seeked'
        | 'userActive'
        | 'userInactive';

    interface SliderCue {
        begin: number;
        cueType: string;
        text: string;
    }

    type JWPlugin = JwpsrvPlugin | RelatedPlugin | SharingPlugin;

    interface JwpsrvPlugin {
        addToPlayer(): void;
        doNotTrackUser(): boolean;
        getTrackingPixelUrls(): {
            error?: string;
            impression: string;
        };
        resizeHandler(): void;
        trackExternalAPIUsage(): void;
    }

    interface RelatedPlugin {
        close(): void;
        open(): void;
        on<TEvent extends keyof RPEventParams>(
            event: TEvent,
            callback: EventCallback<RPEventParams[TEvent]>,
        ): RelatedPlugin;
        once<TEvent extends keyof RPEventParams>(
            event: TEvent,
            callback: EventCallback<RPEventParams[TEvent]>,
        ): RelatedPlugin;
        off(event: keyof RPEventParams): RelatedPlugin;
    }

    interface RPEventParams {
        close: RPCloseParam;
        feedAutoAdvance: RPFeedAutoAdvanceParam;
        feedClick: RPFeedClickParam;
        feedShown: RPFeedShownParam;
        nextUp: RPNextUpParam;
        open: RPOpenParam;
        play: RPPlayParam;
        playlist: RPPlaylistParam;
        videoThumbFirstFrame: RPVideoFirstThumbFrame;
        warning: RPWarningParam;
    }

    interface RPCloseParam {
        method: 'interaction' | 'play';
        onclick: 'link' | 'play';
        relatedFile: string;
        visible: boolean;
    }

    interface RPFeedAutoAdvanceParam {
        feedData: FeedData;
        feedShownId: string;
        itemsShown: PlaylistItem[];
        mode: string;
        onclick: 'link' | 'play';
        relatedFile: string;
        target: PlaylistItem;
        ui: RelatedDisplayMode;
    }

    interface RPFeedClickParam {
        feedData: FeedData;
        feedShownId: string;
        index: number;
        itemsShown: PlaylistItem[];
        mode: string;
        onclick: 'link' | 'play';
        page: number;
        reason: 'interaction' | 'paged';
        relatedFile: string;
        target: PlaylistItem;
        ui: RelatedDisplayMode;
        viewable: 0 | 1;
    }

    interface RPFeedShownParam {
        autoTimer: number;
        feedData: FeedData;
        feedShownId: string;
        itemsShown: PlaylistItem[];
        mode: string;
        onclick: 'link' | 'play';
        page: number;
        reason: 'complete' | 'interaction' | 'inview' | 'paged' | 'resized';
        relatedFile: string;
        ui: RelatedDisplayMode;
        viewable: 0 | 1;
    }

    interface RPNextUpParam extends PlaylistItem {
        feedData: FeedData;
        mode: string;
        showNextUp: boolean;
    }

    interface RPOpenParam {
        autoplay: boolean;
        feed: string;
        feedData: FeedData;
        items: PlaylistItem[];
        method: 'complete' | 'interaction';
        onclick: 'link' | 'play';
        relatedFile: string;
        visible: boolean;
    }

    interface RPPlayParam {
        auto: boolean;
        autoplaytimer: number;
        feedData: FeedData;
        item: PlaylistItem;
        method: 'auto' | 'manual';
        onclick: 'link' | 'play';
        position: number;
        relatedFile: string;
    }

    interface RPPlaylistParam {
        feedData: FeedData;
        onclick: 'link' | 'play';
        playlist: PlaylistItem[];
    }

    interface RPWarningParam {
        code: number;
        key: string;
        sourceError: object | null;
    }

    interface FeedData {
        description?: string;
        feedid: string;
        feed_instance_id: string;
        kind: string;
        links: {
            first: string;
            last: string;
            next: string;
        };
        playlist: PlaylistItem[];
        title: string;
    }

    interface SharingPlugin {
        close(): void;
        getHeading(): string;
        getLink(): string;
        getShareMethods(): ShareMethod[];
        open(): void;
        on<TEvent extends keyof SPEventParams>(
            event: TEvent,
            callback: EventCallback<SPEventParams[TEvent]>,
        ): SharingPlugin;
        once<TEvent extends keyof SPEventParams>(
            event: TEvent,
            callback: EventCallback<SPEventParams[TEvent]>,
        ): SharingPlugin;
        off(event: keyof SPEventParams): SharingPlugin;
    }

    interface SPEventParams {
        close: SPCloseParam;
    }

    interface SPClickParam {
        method: string;
    }

    interface SPCloseParam {
        method: string;
        visible: boolean;
    }

    interface SPOpenParam {
        method: string;
        visible: boolean;
    }

    interface ShareMethod {
        displayText?: string;
        jwsource?: string;
        label: string;
        options: {
            copyText: string;
        };
        src: string;
        svg?: string;
    }

    interface AdvertisingConfig {
        client: string;
        outstream?: boolean;
        adTagParameters?: AdTagParametersConfig;
        adscheduleid?: string;
        admessage?: string;
        allowedOmidVendors?: string[];
        autoplayadsmuted?: boolean;
        bids?: BidsConfig;
        clearAdsOnComplete?: boolean;
        companiondiv?: CompanionDivConfig;
        conditionaladoptout?: boolean;
        creativeTimeout?: number;
        cuetext?: string;
        duration?: number;
        endstate?: string;
        forceNonLinearFullSlot?: boolean;
        freewheel: FreeWheelConfig;
        fwassetid?: string;
        loadVideoTimeout?: number;
        locale?: string;
        maxRedirects?: number;
        omidSupport?: string;
        ppid?: string;
        placement?: string;
        podmessage?: string;
        preloadAds?: boolean;
        repeat?: boolean;
        requestFilter?: (request: { url: string; xhr: XMLHttpRequest }) => XMLHttpRequest;
        requestTimeout?: number;
        rules?: RulesConfig;
        schedule?: ScheduleConfig[] | string;
        skipmessage?: string;
        skipoffset?: number;
        skiptext?: string;
        tag?: string | string[];
        trackingFilter?: (url: string) => boolean;
        truncateMacros?: boolean;
        vastLoadTimeout?: number;
        vastxml?: string;
        vpaidcontrols?: boolean;
        vpaidmode?: string;
        withCredentials?: boolean;
    }

    interface AdTagParametersConfig {
        iu?: string;
        cust_params?: string;
        sz?: string;
        tfcd?: 0 | 1;
        description_url?: string;
        ppid?: string;
        ciu_szs?: string;
        mpt?: string;
        mpv?: string;
        ptpl?: number;
        ptpln?: string;
        an?: string;
        ltd?: 0 | 1;
        rdid?: string;
        idtype?: 'adid' | 'afai' | 'idfa' | 'lgudid' | 'msai' | 'rida' | 'tifa' | 'tvOS' | 'vaid';
        is_lat?: 0 | 1;
        trt?: 0 | 1 | 2;
        vconp?: 1 | 2;
        vpa?: 'auto' | 'click';
        vpmute?: 0 | 1;
        npa?: 0 | 1;
        gdpr?: 0 | 1;
        gdpr_consent?: string;
        addtl_consent?: string;
        rdp?: 0 | 1;
        sid?: 0 | string;
        wta?: 0 | 1;
    }

    interface BidsConfig {
        bidders: Bidder[];
        bidOnBreaks?: number;
        ortbParams?: OrtbParams;
        settings: BidsSettings;
    }

    interface BidsSettings {
        consentManagement: ConsentManagement;
        mediationLayerAdServer: 'dfp' | 'jwp' | 'jwpdfp' | 'jwpspotx';
        bidTimeout?: number;
        buckets?: PriceBucket[];
        floorPriceCents?: number;
        floorPriceCurrency?: string;
    }

    interface ConsentManagement {
        gdpr?: GDPR;
        usp?: USP;
    }

    interface GDPR {
        allowAuctionWithoutConsent?: string;
        cmpApi?: string;
        defaultGpdrScope?: boolean;
        rules?: GDPRRules;
        timeout?: number;
    }

    interface GDPRRules {
        enforcePurpose?: boolean;
        enforceVendor?: boolean;
        purpose?: string;
        vendorExceptions?: string[];
    }

    interface USP {
        cmpApi?: string;
        timeout?: number;
    }

    interface PriceBucket {
        increment?: number;
        max?: number;
        min?: number;
    }

    interface OrtbParams {
        plcmt: 1 | 2 | 3 | 4;
    }

    // Bidders

    type Bidder =
        | JWDemand
        | Azerion
        | Criteo
        | Emodo
        | EMX
        | Equativ
        | Imds
        | IndexExchange
        | Kargo
        | Magnite
        | MediaNet
        | OpenX
        | PubMatic
        | Sonobi
        | Sovrn
        | SpotX
        | MediaGrid
        | Unruly
        | VideoByte
        | Xandr
        | YahooSSP;

    interface JWDemand {
        name: 'jwdemand';
        placementId: number;
        publisherId: string;
        propertyId: string;
    }

    interface Azerion {
        name: 'improvedigital';
        placementId: number;
    }

    interface Criteo {
        name: 'criteo';
        networkId: number;
        networkdId: number;
    }

    interface Emodo {
        name: 'Axonix';
        supplyId: string;
    }

    interface EMX {
        name: 'EMX';
        id: string;
        pubid?: string;
    }

    interface Equativ {
        name: 'SmartAdServer';
        formatId: number;
        networkId: number;
        pageId: number;
        siteId: string | number;
    }

    interface Imds {
        name: 'SynacorMedia';
        id: string;
        pubid: string;
    }

    interface IndexExchange {
        name: 'IndexExchange';
        id: string;
        optionalParams?: BiddersOptionalParams;
    }

    interface Kargo {
        name: 'kargo';
        placementId: string;
    }

    interface Magnite {
        name: 'Rubicon';
        pubid: string;
        siteId: string;
        zoneId: string;
    }

    interface MediaNet {
        name: 'MediaNet';
        id: string;
        pubid: string;
    }

    interface OpenX {
        name: 'OpenX';
        delDomain: string;
        id: string;
    }

    interface PubMatic {
        name: 'PubMatic';
        pubid: string;
        id: string;
        optionalParams?: BiddersOptionalParams;
    }

    interface Sonobi {
        name: 'Sonobi';
        id: string;
    }

    interface Sovrn {
        name: 'Sovrn';
        tagid: string;
    }

    interface SpotX {
        name: 'SpotX';
        id: string;
        optionalParams?: BiddersOptionalParams;
    }

    interface MediaGrid {
        name: 'MediaGrid';
        id: string;
        pubid?: string;
    }

    interface Unruly {
        name: 'Unruly';
        pubid: string;
    }

    interface VideoByte {
        name: 'VideoByte';
        pubid: string;
        nid?: string;
        placementId?: string;
    }

    interface Xandr {
        name: 'AppNexus';
        id: string;
        invCode?: string;
        member?: string;
        publisherId?: string;
        optionalParams?: BiddersOptionalParams;
    }

    interface YahooSSP {
        name: 'YahooSSP';
        pubid: string;
        id: string;
        siteId: string;
    }

    interface BiddersOptionalParams {
        custom?: {
            [key: string]: string;
        };
        keywords?: {
            [key: string]: string;
        };
        no_vpaid_ads?: boolean;
        passFloorPrice?: boolean;
    }

    interface CompanionDivConfig {
        height?: number;
        id: string;
        width?: number;
    }

    interface FreeWheelConfig {
        fwassetid: string;
        adManagerURL?: string;
        custom?: {
            [key: string]: string;
        };
        networkid?: number;
        profileid?: string;
        sectionid?: string;
        serverid?: string;
    }

    interface RulesConfig {
        deferAds?: Record<string, never>;
        frequency?: number;
        startOn?: number;
        startOnSeek?: 'none' | 'pre';
        timeBetweenAds?: number;
    }

    interface ScheduleConfig extends Adschedule {
        custparams?: {
            [key: string]: string;
        };
        pod: any[];
    }

    interface AutoPauseConfig {
        pauseAds?: boolean;
        viewability?: boolean;
    }

    interface CastConfig {
        appid?: string;
        interceptCast?: boolean;
    }

    interface FloatingConfig {
        dismissible?: boolean;
        mode?: 'always' | 'never' | 'notVisible';
        showTitle?: boolean;
    }

    interface LogoConfig {
        file: string;
        hide?: boolean;
        link?: string;
        margin?: number;
        position?: 'bottom-left' | 'bottom-right' | 'control-bar' | 'top-left' | 'top-right';
    }

    interface RelatedConfig {
        autoplaymessage?: string;
        autoplaytimer?: number;
        displayMode?: RelatedDisplayMode;
        file?: string;
        onclick?: 'link' | 'play';
        oncomplete?: 'autoplay' | 'hide' | 'none' | 'show';
        selector?: string;
    }

    type RelatedDisplayMode = 'none' | 'overlay' | 'shelf' | 'shelfWidget';

    interface SharingConfig {
        code?: string;
        heading?: string;
        link?: string;
        sites?: SharingSite[];
    }

    type SharingSite = 'email' | 'facebook' | 'linkedin' | 'pinterest' | 'reddit' | 'tumlbr' | 'twitter';

    interface SkinConfig {
        controlbar?: {
            background?: string;
            icons?: string;
            iconsActive?: string;
            text?: string;
        };
        menus?: {
            background?: string;
            text?: string;
            textActive?: string;
        };
        name?: string;
        timeslider?: {
            progress?: string;
            rail?: string;
        };
        tooltips?: {
            background?: string;
            text?: string;
        };
        url?: string;
    }

    interface PlayerConfig {
        aboutlink?: string;
        abouttext?: string;
        advertising?: AdvertisingConfig;
        allowFullscreen?: boolean;
        aspectratio?: string;
        autoPause?: AutoPauseConfig;
        autostart?: boolean | 'viewable';
        base?: string;
        captions: CaptionsConfig;
        cast?: CastConfig;
        controls?: boolean;
        defaultBandwidthEstimate?: number;
        displaydescription?: boolean;
        displayHeading?: boolean;
        displayPlaybackLabel?: boolean;
        displaytitle?: boolean;
        doNotSaveCookies?: boolean;
        floating?: FloatingConfig;
        ga?: GaConfig;
        generateSEOMetadata?: boolean;
        height?: number;
        hlsjsdefault?: boolean;
        horizontalVolumeSlider?: boolean;
        intl?: {
            [lang: string]: IntlConfig;
        };
        liveSyncDuration?: number;
        liveTimeout?: number;
        loadAndParseHlsMetadata?: boolean;
        logo?: LogoConfig;
        mute?: boolean;
        nextUpDisplay?: boolean;
        nextupoffset?: number | string;
        pipIcon?: boolean;
        playbackRateControls?: boolean;
        playbackRates?: number[];
        playlist?: PlaylistItem[] | string;
        playlistIndex?: number;
        preload?: boolean;
        qualityLabels?: {
            [bandwidth: number]: string;
        };
        related?: RelatedConfig;
        repeat?: boolean;
        renderCaptionsNatively?: boolean;
        sharing?: SharingConfig;
        skin?: SkinConfig;
        stretching?: 'exactfit' | 'fill' | 'none' | 'uniform';
        width?: number;
    }

    interface JWPlayer {
        addButton(icon: string, label: string, handler: () => void, id: string, className?: string): JWPlayer;
        addCues(cues: SliderCue[]): JWPlayer;
        addPlugin(name: string, pluginInstance: any): void;
        getAdBlock(): boolean;
        getAudioTracks(): AudioTrack[];
        getAbsolutePosition(): string | null;
        getBuffer(): number;
        getCaptionsList(): Caption[];
        getConfig(): PlayerConfig;
        getContainer(): HTMLElement;
        getControls(): boolean;
        getCues(): SliderCue[];
        getCurrentAudioTrack(): number;
        getCurrentCaptions(): number;
        getCurrentQuality(): number;
        getDuration(): number;
        getEnvironment(): Environment;
        getFloating(): boolean;
        getFullscreen(): boolean;
        getHeight(): number;
        getMute(): boolean;
        getPercentViewable(): number | void;
        getPlaybackRate(): number;
        getPlaylist(): PlaylistItem[];
        getPlaylistIndex(): number;
        getPlaylistItem(index?: number): PlaylistItem;
        getPlaylistItemPromise(index: number): Promise<PlaylistItem>;
        getPlugin(name: string): JWPlugin;
        getPosition(): number;
        getProvider(): Provider;
        getQualityLevels(): QualityLevel[];
        getRenderingMode(): string;
        getSafeRegion(): Region;
        getState(): PlayState;
        getViewable(): 0 | 1;
        getVisualQuality(): VisualQuality | undefined;
        getVolume(): number;
        getWidth(): number;
        load(playlist: PlaylistItem[] | string): JWPlayer;
        next(): JWPlayer;
        on<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        on(event: NoParamEvent, callback: () => void): JWPlayer;
        once<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        once(event: NoParamEvent, callback: () => void): JWPlayer;
        off(event: keyof EventParams | NoParamEvent): JWPlayer;
        off(event: NoParamEvent, callback: () => void): JWPlayer;
        off<TEvent extends keyof EventParams>(event: TEvent, callback: EventCallback<EventParams[TEvent]>): JWPlayer;
        trigger<TEvent extends keyof EventParams>(event: TEvent, args: EventParams[TEvent]): JWPlayer;
        trigger(event: NoParamEvent): JWPlayer;
        pause(state?: boolean): JWPlayer;
        pauseAd(toggle: boolean): void;
        play(state?: boolean): JWPlayer;
        playAd(tag: string | string[]): void;
        playlistItem(index: number): JWPlayer;
        registerPlugin(id: string, target: string, jsPlugin: () => void, swfURL?: string): void;
        remove(): JWPlayer;
        removeButton(id: string): JWPlayer;
        removePlaylistItemCallback(): void;
        resize(width: number | string, height: number): JWPlayer;
        seek(position: number): JWPlayer;
        setAllowFullscreen(allowFullscreen?: boolean): JWPlayer;
        setCaptions(styles: CaptionsConfig): JWPlayer;
        setConfig(config: PlayerConfig): JWPlayer;
        setControls(state?: boolean): JWPlayer;
        setCues(cues: SliderCue[]): JWPlayer;
        setCurrentAudioTrack(index: number): void;
        setCurrentCaptions(index: number): void;
        setCurrentQuality(index: number): void;
        setFloating(shouldFloat?: boolean): void;
        setFullscreen(state: boolean): void;
        setMute(state?: boolean): JWPlayer;
        setPlaybackRate(rate?: number): JWPlayer;
        setPlaylistItemCallback(
            callback: null | ((item: PlaylistItem, index: number) => void | Promise<PlaylistItem>),
        ): void;
        setup(options: PlayerConfig): JWPlayer;
        setVolume(volume: number): JWPlayer;
        skipAd(): void;
        stop(): JWPlayer;
        stopCasting(): JWPlayer;
    }
}

interface JWPlayerStatic {
    (query?: string | number | Element): jwplayer.JWPlayer;
    key: string;
    version: string;
}

declare const jwplayer: JWPlayerStatic;
