// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/////////////////
// AppView Tag //
/////////////////
/**
 * Use the appview tag to embed other Chrome Apps within your Chrome App.
 * The appview runs in a separate process from your app,
 * it doesn't inherit the same permissions and is only allowed
 * to interact with your app through asynchronous APIs.
 * Not all apps can be embedded; apps have to explicitly allow themselves to be embedded.
 * @since Chrome 43.
 * @requires Permissions: 'appview'
 * @see[Documentation]{@link https://developer.chrome.com/apps/tags/appview}
 */
declare class HTMLAppViewElement extends HTMLElement {
    /**
     * Requests another app to be embedded.
     * @param app The extension id of the app to be embedded.
     * @param [data] Optional developer specified data that the app to be embedded can use when making an embedding decision.
     * @param [callback] Optional callback when the embedding request is completed. Will provide the result.
     */
    connect(app: string, data?: any, callback?: (success: boolean) => void): void;
}
declare namespace AppView {
    interface EmbedRequest {
        /** The ID of the app that sent the embedding request. */
        embedderId: string;
        /** Optional developer specified data that the app to be embedded can use when making an embedding decision. */
        data?: any;
        /**
         * Allows the embedding request
         * @param url Specifies the content to be embedded.
         */
        allow(url: string): void;
        /** Prevents the embedding request */
        deny(): void;
    }
}

declare interface Document {
    createElement(element: 'appview'): HTMLAppViewElement;
}
