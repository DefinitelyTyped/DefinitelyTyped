declare const Cookiebot: {
    consented: boolean;
    declined: boolean;
    hasResponse: boolean;
    doNotTrack: boolean;
    consent: {
        marketing: boolean;
        statistics: boolean;
        preferences: boolean;
        necessary: boolean;
        stamp: string;
    };
    regulations: {
        gdprApplies: boolean;
        ccpaApplies: boolean;
        lgpdApplies: boolean;
    };

    show(): void;
    hide(): void;
    renew(): void;
    getScript(url: string, async: boolean, callback: () => void): void;
    runScripts(): void;
    withdraw(): void;
    submitCustomConsent(optinPreferences: boolean, optinStatistics: boolean, optinMarketing: boolean): void;
};

interface Window {
    Cookiebot?: typeof Cookiebot;
}

interface WindowEventMap {
    CookiebotOnConsentReady: Event;
    CookiebotOnLoad: Event;
    CookiebotOnAccept: Event;
    CookiebotOnDecline: Event;
    CookiebotOnDialogInit: Event;
    CookiebotOnDialogDisplay: Event;
    CookiebotOnTagsExecuted: Event;
}
