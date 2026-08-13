// JSBox App API TypeScript Declaration

declare namespace AppTypes {
    interface AppInfo {
        bundleID: string;
        version: string;
        build: string;
    }

    interface OpenBrowserOptions {
        type: number;
        url: string;
    }

    interface ListenEvents {
        ready?: () => void;
        exit?: () => void;
        pause?: () => void;
        resume?: () => void;
        [event: string]: ((object?: any) => void) | undefined;
    }

    interface NotifyOptions {
        name: string;
        object?: any;
    }

    interface Strings {
        [language: string]: {
            [key: string]: string;
        };
    }
}

interface JBApp {
    theme: "light" | "dark" | "auto";
    minSDKVer: string;
    minOSVer: string;
    tips(message: string): void;
    info: AppTypes.AppInfo;
    idleTimerDisabled: boolean;
    close(delay?: number): void;
    isDebugging: boolean;
    /**
     * A bitmask value from `$env`.
     * Multiple subtype values can be combined using the bitwise OR operator (`|`).
     */
    env: number;
    /** 0 ~ 2 is valid; other values indicate that it is not a widget. */
    widgetIndex: number;
    autoKeyboardEnabled: boolean;
    keyboardToolbarEnabled: boolean;
    rotateDisabled: boolean;
    openURL(url: string): void;
    openBrowser(options: AppTypes.OpenBrowserOptions): void;
    openExtension(extension: string): void;
    listen(events: AppTypes.ListenEvents): void;
    notify(options: AppTypes.NotifyOptions): void;
    strings: AppTypes.Strings;
}

declare const $app: JBApp;
