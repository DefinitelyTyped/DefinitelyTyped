// Type definitions for @mapbox/link-hijacker 1.1
// Project: https://github.com/mapbox/link-hijacker
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    root?: EventTarget;
    skipFilter?(link: HTMLAnchorElement): boolean;
    skipModifierKeys?: boolean;
    skipDownload?: boolean;
    skipTargetBlank?: boolean;
    skipExternal?: boolean;
    skipMailTo?: boolean;
    skipOtherOrigin?: boolean;
    skipFragment?: boolean;
    preventDefault?: boolean;
}

interface Unhijack {
    (): void;
}

interface Callback {
    (link: HTMLAnchorElement, event: MouseEvent): void;
}

declare function hijack(options: Options, callback: Callback): Unhijack;
declare function hijack(callback: Callback): Unhijack;

declare const linkHijacker: {
    hijack: typeof hijack
};

export = linkHijacker;
