// Type definitions for CometD 2.5.1
// Project: http://cometd.org
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CometD {

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

interface CometD {

    onListenerException: (exception: any, subscriptionHandle: any, isListener: boolean, message: string) => void;

    init(options: CometD.ConfigurationOptions): void;

    configure(config: CometD.ConfigurationOptions): void;

    addListener(channel: string, listener: (message: any) => void): void;
    removeListener(listener: (message: any) => void): void;

    clearListeners(): void;

    clearSubscriptions(): void;

    handshake(handshake_params: any): void;

    publish(channel: string, message: any): void;


    disconnect(): void;

}



interface JQueryStatic {
    cometd: CometD;
}
