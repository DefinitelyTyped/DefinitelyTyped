// Type definitions for detect-browser 3.0
// Project: https://github.com/DamonOehlman/detect-browser
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Brian Caruso <https://github.com/carusology>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

export type BrowserName =
    "aol" |
    "android" |
    "bb10" |
    "chrome" |
    "crios" |
    "edge" |
    "facebook" |
    "firefox" |
    "fxios" |
    "ie" |
    "instagram" |
    "ios" |
    "ios-webview" |
    "kakaotalk" |
    "node" |
    "opera" |
    "phantomjs" |
    "safari" |
    "samsung" |
    "vivaldi" |
    "yandexbrowser";

export interface BrowserInfo {
    name?: string;
    version?: string;
    os?: string | null;
    bot?: true;
}

export function detect(): null | false | BrowserInfo;
export function detectOS(userAgentString: string): null | string;
export function parseUserAgent(userAgentString: string): null | BrowserInfo;
export function getNodeVersion(): false | BrowserInfo;
