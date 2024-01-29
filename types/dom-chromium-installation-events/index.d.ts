type AppBannerPromptOutcome = "accepted" | "dismissed";

interface PromptResponseObject {
    readonly outcome: AppBannerPromptOutcome;
    readonly platform: string;
}

// https://github.com/w3c/manifest/wiki/Platforms
type BeforeInstallPromptEventPlatform =
    | "chrome_web_store"
    | "play"
    | "itunes"
    | "webapp"
    | "windows"
    | "f-droid"
    | "amazon";

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
