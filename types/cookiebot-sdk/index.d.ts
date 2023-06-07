// Type definitions for non-npm package Cookiebot SDK 2.43
// Project: https://www.cookiebot.com/en/developer/
// Definitions by: Liam Martens <https://github.com/LiamMartens>
//                 Patric Eberle <https://github.com/patric-eberle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
