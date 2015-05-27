// Type definitions for CometD 2.5.1
// Project: http://cometd.org
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module CometD {

    var onListenerException: (exception: any, subscriptionHandle: any, isListener: boolean, message: string) => void;

    function init(options: ConfigurationOptions): void;

    function addListener(channel: string, listener: (message: any) => void): void;
    function removeListener(listener: (message: any) => void): void;

    function publish(channel: string, message: any): void;

    interface ConfigurationOptions {
        url: string;
        logLevel?: string;
        maxConnections?: number;
        backoffIncrement?: number;
        maxBackoff?: number;
        reverseIncomingExtensions?: boolean;
        maxNetworkDelay?: number;
        requestHeaders?: any;
        appendMessageTypeToURL?: boolean;
        autoBatch?: boolean;
    }
}
