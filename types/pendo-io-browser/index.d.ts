declare namespace pendo {
    interface Identity {
        /** visitor.id is required if user is logged in, otherwise an anonymous ID is generated and tracked by a cookie (if enabled for a domain) */
        visitor?: IdentityMetadata | undefined;
        account?: IdentityMetadata | undefined;
        parentAccount?: IdentityMetadata | undefined;
        /** ensure that the same anonymous visitor.id is used on all subdomains  */
        cookieDomain?: IdentityCookieDomain | undefined;
    }

    interface Metadata {
        [key: string]: string | number | boolean | string[] | null;
    }

    type IdentityMetadata = { id?: string | undefined } & Metadata;

    /** cookie domains should start with a dot, e.g. ".example.com" */
    type IdentityCookieDomain = `.${string}`;

    interface InitOptions extends Identity {
        // Core Configuration
        apiKey?: string | undefined;
        publicAppId?: string | undefined;
        additionalPublicAppIds?: string[] | undefined;
        excludeAllText?: boolean | undefined;
        excludeTitle?: boolean | undefined;
        disableCookies?: boolean;
        disablePersistence?: boolean | undefined;
        disablePendo?: boolean | undefined;
        guides?: {
            attachPoint?: string | (() => HTMLElement) | undefined;
            delay?: boolean | undefined;
            disabled?: boolean | undefined;
            ejectOnTimeout?: boolean | undefined;
            globalScripts?: any[] | undefined;
            timeout?: number | undefined;
            tooltip?: {
                arrowSize?: number | undefined;
            } | undefined;
        } | undefined;
        events?: EventCallbacks | undefined;

        // URL and Location Configuration
        annotateUrl?: (url: string) => string | string[] | Record<string, any>;
        sanitizeUrl?: (url: string) => string;
        queryStringWhitelist?: string[] | (() => string[]) | undefined;
        ignoreHashRouting?: boolean | undefined;
        location?: {
            pushState?: boolean | undefined;
        } | undefined;

        // Hosting and Delivery
        assetHost?: string | undefined;
        contentHost?: string | undefined;
        dataHost?: string | undefined;
        selfHostedWebSDKUrl?: string | undefined;

        // Frame and Cross-Origin Configuration
        allowCrossOriginFrames?: boolean | undefined;
        autoFrameInstall?: boolean | undefined;
        frameIdentitySync?: boolean | undefined;
        frameIdentityTopDownOnly?: boolean | undefined;
        forcedLeader?: boolean | undefined;
        preferBroadcastChannel?: boolean | undefined;
        enableCrossOriginIsolation?: boolean | undefined;

        // Identity and Persistence
        forceAnonymous?: boolean | undefined;
        identityStorageSuffix?: string | undefined;
        crossAppGuideStorageSuffix?: string | undefined;
        localStorageOnly?: boolean | undefined;
        dropAnonymous?: boolean | undefined;

        // Analytics Configuration
        allowedText?: string[] | undefined;
        analytics?: {
            excludeEvents?: string[] | undefined;
            localStorageUnload?: boolean | undefined;
        } | undefined;
        enableDebugEvents?: boolean | undefined;
        eventPropertyMatchParents?: boolean | undefined;
        eventPropertyConfigurations?: any[] | undefined;
        excludeNonGuideAnalytics?: boolean | undefined;
        interceptPreventDefault?: boolean | undefined;
        interceptStopPropagation?: boolean | undefined;
        syntheticClicks?: {
            elementRemoval?: boolean | undefined;
            targetChanged?: boolean | undefined;
        } | undefined;
        interceptElementRemoval?: boolean | undefined; // Deprecated: use syntheticClicks.elementRemoval

        // Guide Configuration
        appAutoOrdering?: string[] | undefined;
        blockAgentMetadata?: boolean | undefined;
        cacheGuides?: boolean | undefined;
        cacheGuidesPersistent?: boolean | undefined;
        cacheGuidesTimeout?: number | undefined;
        captureConsoleLogs?: boolean | undefined;
        captureNetworkRequests?: boolean | undefined;
        disableDesigner?: boolean | undefined;
        disableDesignerKeyboardShortcut?: boolean | undefined;
        disableGlobalCSS?: boolean | undefined;
        disableGuidePseudoStyles?: boolean | undefined;
        disablePrefetch?: boolean | undefined;
        enableAllEmbeddedGuideEvents?: boolean | undefined;
        enableDesignerKeyboardShortcut?: boolean | undefined;
        enableFullUtmReferrer?: boolean | undefined;
        enableGuideTimeout?: boolean | undefined;
        enableSignedMetadata?: boolean | undefined;
        guideMarkdown?: boolean | undefined;
        guideSeenTimeoutLength?: number | undefined;
        guideValidation?: boolean | undefined;
        htmlAttributeBlacklist?: string[] | null | undefined;
        htmlAttributes?: RegExp | undefined;
        inlineStyleNonce?: string | undefined;
        leaderApplication?: string[] | undefined;
        preventCodeInjection?: boolean | undefined;
        preventCookieRefresh?: boolean | undefined;
        preventUnloadListener?: boolean | undefined;
        predictGuides?: boolean | undefined;
        initializeImmediately?: boolean | undefined;
        observeShadowRoots?: boolean | undefined;
        preferMutationObserver?: boolean | undefined;

        // Feedback Configuration
        disableFeedback?: boolean | undefined;
        disableFeedbackAutoInit?: boolean | undefined;
        pendoFeedback?: boolean | undefined;

        // Performance and Monitoring
        environmentName?: string | undefined;
        errorClickLogging?: boolean | undefined;
        extensionPersistLocalStorage?: boolean | undefined;
        formValidation?: boolean | undefined;
        isPendoFree?: boolean | undefined;
        pendoCore?: boolean | undefined;
        performanceMetricsEnabled?: boolean | undefined;
        performanceMetricsSampleRate?: number | undefined;
        recording?: { enabled?: boolean | undefined } | undefined;
        requestSegmentFlags?: boolean | undefined;
        requireHTTPS?: boolean | undefined;
        requireSignedMetadata?: boolean | undefined;
        resourceCaching?: boolean | undefined;
        sendEventsWithPostOnly?: boolean | undefined;
        siblingSelectors?: boolean | undefined;
        stagingServers?: (string | RegExp)[] | undefined;
        unminified?: boolean | undefined;
        vocPortal?: boolean | undefined;
    }

    interface EventCallbacks {
        ready?(): void;
        guidesLoaded?(): void;
        guidesFailed?(): void;
        validateGlobalScript?(result: any): void;
        validateGuide?(result: any): void;
        validateLauncher?(result: any): void;
    }

    interface Pendo {
        // Initialization and Identification
        initialize(options?: InitOptions): void;
        identify(visitorId: string, accountId?: string): void;
        identify(identity: Identity): void;
        isReady(): boolean;
        flushNow(options?: any): Promise<any>;
        updateOptions(options: Identity): void;
        getVersion(): string;
        getVisitorId(): string;
        get_visitor_id(): string;
        set_visitor_id(newVisitorId: string): void;
        getAccountId(): string | null;
        get_account_id(): string | null;
        set_account_id(newAccountId: string): void;
        getCurrentUrl(): string;
        clearSession(): void;
        teardown(): void;
        isAnonymousVisitor(id?: string): boolean;
        generate_unique_id(prefix?: string): string;

        // Guides and Guide Center
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        findGuideByName(name: string): Guide | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        findGuideById(id: string): Guide | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        findGuideBy(field: string, value: any): Guide | void;
        findModuleByName(name: string): any;
        findStepInGuide(guide: Guide, stepId: string): GuideStep | undefined;
        showGuideByName(name: string): void;
        showGuideById(id: string, reason?: string): void;
        isGuideShown(): boolean;
        getActiveGuides(): Guide[];
        getActiveGuide(): Guide | undefined;
        hideGuides(hideOptions?: any): void;
        toggleLauncher(): void;
        showLauncher(): void;
        hideLauncher(): void;
        removeLauncher(): void;

        // Troubleshooting
        setGuidesDisabled(state: boolean): void;
        areGuidesDisabled(): boolean;
        loadGuides(): void;
        startGuides(): void;
        stopGuides(): void;
        showPreview(): void;
        pageLoad(): void;

        // Debugging
        enableDebugging(): void;
        disableDebugging(): void;
        isDebuggingEnabled(coerce?: false): "Yes" | "No";
        isDebuggingEnabled(coerce: true): boolean;
        debugging: Debugging;

        // Events
        events: Events;
        track(trackType: string, metadata?: Metadata): void;
        trackAgent(trackType: string, metadata?: Metadata): void;
        isSendingEvents(): boolean;
        startSendingEvents(): void;
        stopSendingEvents(): void;
        getEventCache(): any[];
        flushEventCache(): void;

        // Guide Events
        onGuideAdvanced(step?: GuideStep): void;
        onGuideAdvanced(steps: { steps: number }): void;
        onGuidePrevious(step?: GuideStep): void;
        onGuideDismissed(step?: GuideStep): void;
        onGuideDismissed(until: { until: "reload" }): void;
        onGuideSnoozed(evt: any, step?: GuideStep, snoozeDuration?: number): void;

        // feedback
        feedback: Feedback;

        // Properties
        additionalApiKeys: string[];
        apiKey: string;
        visitorId: string;
        accountId: string;
        guides: Guide[];
        designerEnabled: boolean;
        features: any;
        VERSION: string;
        ENV: string;

        // URL and Location
        url: UrlManager;
        location: LocationManager;

        // Utilities
        log(message: string, ...contexts: string[]): void;
        ajax: AjaxHelper;
        validateInstall(skipLogging?: boolean): void;
        validateEnvironment(skipLogging?: boolean): void;
        dom(input: any): HTMLElement; // TODO
        doesExist(arg: any): boolean;
        getMode(): string | undefined;
        getNormalizedUrl(): string;
        getUA(): string;
        getURL(): string;
        getSerializedMetadata(): string;
        isURLValid(url: string): boolean;

        // Advanced
        BuildingBlocks?: any; // Internal API
        buffers?: any; // Internal API
        frames?: any; // Internal API
        sniffer?: BrowserSniffer;
    }

    interface FeedbackOptions {
        anchor: HTMLElement;
    }
    interface Feedback {
        loginAndRedirect(options?: FeedbackOptions): void;
    }

    interface Debugging {
        getEventCache(): any[];
        getAllGuides(): Guide[];
        getAutoGuides(): { auto: Guide[]; override: Guide[] };
        getBadgeGuides(): Guide[];
        getLauncherGuides(guideList?: Guide[]): Guide[];
        getEventHistory(): any[];
        getMetadata(): any;
        areGuidesDelayed(): boolean;
        isLeader(): boolean;
        getState(): any;
    }

    type Events = {
        [K in keyof EventCallbacks]-?: (callback: EventCallbacks[K]) => Events;
    } & {
        on(eventName: string, callback: (...args: any[]) => void): void;
        off(eventName: string, callback?: (...args: any[]) => void): void;
        once(eventName: string, callback: (...args: any[]) => void): void;
        one(eventName: string, callback: (...args: any[]) => void): void;
        trigger(eventName: string, ...args: any[]): void;
        addEventListener(eventName: string, callback: (...args: any[]) => void): void;
        removeEventListener(eventName: string, callback?: (...args: any[]) => void): void;
        onClickCaptured(callback: (event: any) => void): Events;
        deliverablesLoaded(callback: () => void): Events;
    };

    interface Guide {
        createdByUser: User;
        createdAt: number;
        lastUpdatedByUser: User;
        lastUpdatedAt: number;
        kind: string;
        rootVersionId: string;
        stableVersionId: string;
        id: string;
        name: string;
        state: "published" | "staged" | "draft" | "disabled";
        launchMethod: "api" | "automatic" | "badge" | "dom" | "launcher";
        isMultiStep: boolean;
        steps: GuideStep[];
        attributes: {
            type: string;
            device: { desktop: boolean; mobile: boolean; type: "desktop" | "mobile" };
            badge: any; // TODO
            priority: number;
            launcher: { keywords: string[] };
        };
        audience: any[]; // TODO
        audienceUiHint: { filters: any[] }; // TODO
        resetAt: number;
        publishedAt: number;
    }

    interface User {
        id: string;
        username: string;
        first: string;
        last: string;
        role: number;
        userType: string;
    }

    interface GuideStep {
        id: string;
        guideId: string;
        type: string;
        elementPathRule: string;
        contentType: string;
        contentUrl?: string | undefined;
        contentUrlCss?: string | undefined;
        contentUrlJs?: string | undefined;
        rank: number;
        advanceMethod: "button" | "programatic" /* sic */ | "element";
        thumbnailUrls?: string | undefined;
        attributes: {
            height: number;
            width: number;
            autoHeight: boolean;
            position: string;
            css: string;
            variables: any;
        };
        lastUpdatedAt: number;
        resetAt: number;
    }

    interface UrlManager {
        get(url?: string): string;
        watch(callback: (url: string) => void): void;
        clear(): void;
        getWindowLocation(): Location;
        isElectron(): boolean;
        electronAppName(): string | undefined;
        electronUserDirectory(): string | undefined;
        electronUserHomeDirectory(): string | undefined;
        electronResourcesPath(): string | undefined;
        externalizeURL(href: string, qs?: any, xhrWhitelist?: any): string;
        startPoller(): void;
    }

    interface LocationManager {
        (cmd?: string): any;
        getHref(): string;
        clearTransforms(): void;
        addTransforms(transforms: any): void;
        setUrl(strOrFn: string | (() => string)): void;
        useBrowserUrl(): void;
    }

    interface AjaxHelper {
        (config: any): any;
        get(url: string, headers?: any): Promise<any>;
        post(url: string, data?: any, headers?: any): Promise<any>;
        postJSON(url: string, data?: any, headers?: any): Promise<any>;
        urlFor(base: string, params?: any, fragment?: string): string;
        supported(): boolean;
    }

    interface BrowserSniffer {
        MutationObserver: boolean;
        addEventListener: boolean;
        android: number;
        animations: boolean;
        msie: number;
        msieDocumentMode: number | undefined;
        safari: boolean;
        sri: boolean;
        transitions: boolean;
        vendorPrefix: string;
        isChromeExtension: boolean | undefined;
        hasEvent(event: string): boolean;
        isMinimumIEVersion(minVersion: number): boolean;
        isMobileUserAgent(key?: string): boolean;
        supportsHashChange(): boolean;
        supportsHistoryApi(key?: string): boolean;
    }
}

declare const pendo: pendo.Pendo;
