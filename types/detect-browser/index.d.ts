// Type definitions for detect-browser 2.0
// Project: https://github.com/DamonOehlman/detect-browser
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export type BrowserName =
    "android" |
    "bb10" |
    "chrome" |
    "crios" |
    "edge" |
    "firefox" |
    "fxios" |
    "ie" |
    "ios" |
    "kakaotalk" |
    "opera" |
    "phantomjs" |
    "safari" |
    "vivaldi" |
    "yandexbrowser";

export function detect(): null | {
    name: BrowserName | "node";
    version: string;
    os: string;
};
