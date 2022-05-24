// Type definitions for non-npm package dom-chromium-installation-events 101.0
// Project: https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
// Definitions by: Sergey Kozlov <https://github.com/dartess>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type AppBannerPromptOutcome = 'accepted' | 'dismissed';

export interface PromptResponseObject {
    readonly outcome: AppBannerPromptOutcome;
    readonly platform: string;
}

declare global {
    class BeforeInstallPromptEvent extends Event {
        constructor(type: string, eventInitDict?: EventInit);
        prompt(): Promise<void>;
        readonly platforms: string[];
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
}
