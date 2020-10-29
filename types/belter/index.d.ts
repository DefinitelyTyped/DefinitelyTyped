// Type definitions for belter 1.0
// Project: https://github.com/krakenjs/belter#readme
// Definitions by: sly <https://github.com/SlyBouhafs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace belter;

// Device.js function definitions
export function getUserAgent(): string;
export function isDevice(userAgent: string): boolean;
export function isWebView(): boolean;
export function isStandAlone(): boolean;
export function isFacebookWebView(ua: string): boolean;
export function isFirefoxIOS(ua: string): boolean;
export function isEdgeIOS(ua: string): boolean;
export function isOperaMini(ua: string): boolean;
export function isAndroid(ua: string): boolean;
export function isIos(ua: string): boolean;
export function isGoogleSearchApp(ua: string): boolean;
export function isQQBrowser(ua: string): boolean;
export function isIosWebview(ua: string): boolean;
export function isAndroidWebview(ua?: string): boolean;
export function isIE(): boolean;
export function isIECompHeader(): boolean;
export function isElectron(): boolean;
export function isIEIntranet(): boolean;
export function isMacOsCna(): boolean;
export function supportsPopups(ua: string): boolean;
export function isChrome(ua: string): boolean;
export function isSafari(ua: string): boolean;
