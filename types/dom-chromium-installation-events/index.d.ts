// Type definitions for non-npm package dom-chromium-installation-events 101.0
// Project: https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
// Definitions by: Sergey Kozlov <https://github.com/dartess>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type AppBannerPromptOutcome = 'accepted' | 'dismissed';

interface PromptResponseObject {
    readonly outcome: AppBannerPromptOutcome;
    readonly platform: string;
}

// https://github.com/w3c/manifest/wiki/Platforms
type BeforeInstallPromptEventPlatform =
    | 'chrome_web_store'
    | 'play'
    | 'itunes'
    | 'webapp'
    | 'windows'
    | 'f-droid'
    | 'amazon';

interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;

    readonly platforms: BeforeInstallPromptEventPlatform[];
    readonly userChoice: Promise<PromptResponseObject>;
}

interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    appinstalled: Event;
}

interface Window {
    onappinstalled?: ((this: Window, ev: Event) => any) | null;
    onbeforeinstallprompt?: ((this: Window, ev: BeforeInstallPromptEvent) => any) | null;
}
