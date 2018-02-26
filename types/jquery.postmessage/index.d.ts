// Type definitions for jQuery postMessage
// Project: http://benalman.com/projects/jquery-postmessage-plugin/
// Definitions by: Junle Li <https://github.com/lijunle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// Official docs: http://benalman.com/code/projects/jquery-postmessage/docs/files/jquery-ba-postmessage-js.html

interface JQueryStatic {

    /**
     * This method will call window.postMessage if available, setting the targetOrigin parameter to the base of the targetUrl parameter for maximum security in browsers that support it. If window.postMessage is not available, the target window’s location.hash will be used to pass the message. If an object is passed as the message param, it will be serialized into a string using the jQuery.param method.
     *
     * @param message A message to be passed to the other frame.
     * @param targetUrl The URL of the other frame this window is attempting to communicate with. This must be the exact URL (including any query string) of the other window for this script to work in browsers that don’t support window.postMessage.
     * @param target A reference to the other frame this window is attempting to communicate with. If omitted, defaults to `parent`.
     */
    postMessage(message: string, targetUrl: string, target?: Window): void;

    /**
     * This method will call window.postMessage if available, setting the targetOrigin parameter to the base of the targetUrl parameter for maximum security in browsers that support it. If window.postMessage is not available, the target window’s location.hash will be used to pass the message. If an object is passed as the message param, it will be serialized into a string using the jQuery.param method.
     *
     * @param message An object to be serialized into a params string, using the jQuery.param method.
     * @param targetUrl The URL of the other frame this window is attempting to communicate with. This must be the exact URL (including any query string) of the other window for this script to work in browsers that don’t support window.postMessage.
     * @param target A reference to the other frame this window is attempting to communicate with. If omitted, defaults to `parent`.
     */
    postMessage(message: { [key: string]: any; }, targetUrl: string, target?: Window): void;

    /**
     * Register a single callback for either a window.postMessage call, if supported, or if unsupported, for any change in the current window location.hash. If window.postMessage is supported and sourceOrigin is specified, the source window will be checked against this for maximum security. If window.postMessage is unsupported, a polling loop will be started to watch for changes to the location.hash.
     *
     * @param callback This callback will execute whenever a jQuery.postMessage message is received, provided the sourceOrigin matches. If callback is omitted, any existing receiveMessage event bind or polling loop will be canceled.
     * @param sourceOrigin If window.postMessage is available and this value is not equal to the event.origin property, the callback will not be called.
     * @param delay An optional zero-or-greater delay in milliseconds at which the polling loop will execute (for browser that don’t support window.postMessage). If omitted, defaults to 100.
     */
    receiveMessage(callback: (event: MessageEvent) => any, sourceOrigin?: string, delay?: number): void;

    /**
     * Register a single callback for either a window.postMessage call, if supported, or if unsupported, for any change in the current window location.hash. If window.postMessage is supported and sourceOrigin is specified, the source window will be checked against this for maximum security. If window.postMessage is unsupported, a polling loop will be started to watch for changes to the location.hash.
     *
     * @param callback This callback will execute whenever a jQuery.postMessage message is received, provided the sourceOrigin matches. If callback is omitted, any existing receiveMessage event bind or polling loop will be canceled.
     * @param sourceOrigin If window.postMessage is available and this function returns false when passed the event.origin property, the callback will not be called.
     * @param delay An optional zero-or-greater delay in milliseconds at which the polling loop will execute (for browser that don’t support window.postMessage). If omitted, defaults to 100.
     */
    receiveMessage(callback: (event: MessageEvent) => any, sourceOrigin?: (origin: string) => boolean, delay?: number): void;
}
