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
        apiKey?: string | undefined;
        excludeAllText?: boolean | undefined;
        excludeTitle?: boolean | undefined;
        disableCookies?: boolean;
        disablePersistence?: boolean | undefined;
        guides?: {
            delay?: boolean | undefined;
            disable?: boolean | undefined;
            timeout?: number | undefined;
            tooltip?: {
                arrowSize?: number | undefined;
            } | undefined;
        } | undefined;
        events?: EventCallbacks | undefined;
        sanitizeUrl?: (url: string) => string;
    }

    interface EventCallbacks {
        ready?(): void;
        guidesLoaded?(): void;
        guidesFailed?(): void;
    }

    interface Pendo {
        // Initialization and Identification
        initialize(options?: InitOptions): void;
        identify(visitorId: string, accountId?: string): void;
        identify(identity: Identity): void;
        isReady(): boolean;
        flushNow(): Promise<any>;
        updateOptions(options: Identity): void;
        getVersion(): string;
        getVisitorId(): string;
        getAccountId(): string;
        getCurrentUrl(): string;

        // Guides and Guide Center
        findGuideByName(name: string): Guide | void;
        findGuideById(id: string): Guide | void;
        showGuideByName(name: string): void;
        showGuideById(id: string): void;
        toggleLauncher(): void;
        removeLauncher(): void;

        // Troubleshooting
        setGuidesDisabled(state: boolean): void;
        loadGuides(): void;
        startGuides(): void;
        stopGuides(): void;

        // Debugging
        enableDebugging(): void;
        disableDebugging(): void;
        isDebuggingEnabled(coerce?: false): "Yes" | "No";
        isDebuggingEnabled(coerce: true): boolean;
        debugging: Debugging;

        // Events
        events: Events;
        track(trackType: string, metadata?: Metadata): void;

        // Guide Events
        onGuideAdvanced(step?: GuideStep): void;
        onGuideAdvanced(steps: { steps: number }): void;
        onGuidePrevious(step?: GuideStep): void;
        onGuideDismissed(step?: GuideStep): void;
        onGuideDismissed(until: { until: "reload" }): void;

        // feedback
        feedback: Feedback;

        // Other
        validateInstall(): void;
        dom(input: any): HTMLElement; // TODO
    }

    interface FeedbackOptions {
        anchor: HTMLElement;
    }
    interface Feedback {
        loginAndRedirect(options?: FeedbackOptions): void;
    }

    interface Debugging {
        getEventCache(): any[]; // TODO
        getAllGuides(): Guide[];
        getAutoGuides(): { auto: Guide[]; override: Guide[] };
        getBadgeGuides(): Guide[];
        getLauncherGuides(): Guide[];
    }

    type Events = {
        [K in keyof EventCallbacks]-?: (callback: EventCallbacks[K]) => Events;
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
}

declare const pendo: pendo.Pendo;
