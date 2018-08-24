// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/////////////////////////
// WEB APIs & Warnings //
/////////////////////////
/**
 * Only warnings since:
 *  1. It's not possible as of now to override or remove something from *Window* or *Document*.
 *  2. It may also cause other unforseen consequences if it's removed (and if it was possible).
 * @see[Disallowed]
 */
/**
 * Chrome app - Web APIs
 * @see[Docs]{@link https://developer.chrome.com/apps/api_other}
 */
interface ChromeWindow {
    ///
    /// Disabled Web Features
    /// https://developer.chrome.com/apps/app_deprecated
    ///

    /**
     * ❗ alert is not available in packaged apps. ❗
     * Work-around: Use a custom lightbox / popup.
     */
    alert(message?: any): void;
    /**
     * ❗ confirm is not available in packaged apps. ❗
     * Work-around: Use a custom lightbox / popup.
     */
    confirm(message?: string): boolean;

    /**
     * ❗ window.location is not available in packaged apps. ❗
     * Links open up with the system web browser.
     */
    location: Location;
    /**
     * ❗ window.history is not available in packaged apps. ❗
     * Links open up with the system web browser.
     */
    readonly history: History;

    ///
    /// Other APIs
    ///
    AudioContext: typeof AudioContext;
    //////////////////////////
    // WebKit prefixed APIs //
    //////////////////////////
    webkitMediaStream: typeof MediaStream;
    webkitRTCPeerConnection: typeof RTCPeerConnection;
}

interface Document {
    /**
     * ❗ document.cookie is not available in packaged apps. ❗
     * Packaged app pages are not rendered on the server, so there is no need to use these.
     */
    cookie: string;
    /**
     * ❗ document.close is not available in packaged apps. ❗
     */
    close(): void;
    /**
     * ❗ document.open is not available in packaged apps. ❗
     */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
     * ❗ document.write is not available in packaged apps. ❗
     */
    write(...content: string[]): void;
}

/**
 * ❗ iframes are not available in packaged apps, use webviews instead. ❗
 */
interface HTMLIFrameElement { }

/**
 * ❗ Modal dialogs are not available in packaged apps, use lightbox/popup instead. ❗
 */
interface HTMLDialogElement { }

interface HTMLElement {
    /**
     * @requires Permissions: 'app.window.fullscreen', 'app.window.fullscreen.overrideEsc'
     * @description
     * In Chrome Apps, fullscreen is entered without prompting the user or providing
     * exit instructions. HTML5 fullscreen requires the app.window.fullscreen permission
     * in the manifest. In normal webpages, the browser intercepts the ESC key to exit
     * pointer lock ensuring a consistent escape method for users. That is also the
     * behavior in Chrome Apps unless the app.window.fullscreen.overrideEsc permission
     * is used to enable the app to call preventDefault on keydown and keyup events.
     *
     * Then to exit fullscreen, the document exposes a method for that:
     * @example
     * document.webkitExitFullscreen();
     */
    webkitRequestFullscreen(): void;
}

interface HTMLElement {
    /**
     * ❗ Unprefixed version are not available as of Chrome 68, in Chrome apps ❗
     */
    requestFullscreen(): void;
    /**
     * ❗ Unprefixed version are not available as of Chrome 68, in Chrome apps ❗
     */
    exitrequestFullscreen(): void;
    /**
     * @requires Permissions: 'pointerLock'
     */
    requestPointerLock(): void;
    /**
     * @requires Permissions: 'pointerLock'
     */
    exitPointerLock(): void;
}

interface Navigator {
    /**
     * If you provide the 'geolocation' in your Chrome app it will allow the app to
     * use the proposed HTML5 geolocation API without prompting the user for permission.
     * @see Permissions: 'geolocation'
     */
    readonly geolocation: Geolocation;
}



/**
 * ❗ window.localStorage is not available in packaged apps. Use chrome.storage.local instead. ❗
 */
declare var localStorage: typeof localStorage;
