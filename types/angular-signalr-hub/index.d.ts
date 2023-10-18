/// <reference types="signalr" />
/// <reference types="angular" />

declare module "angular-signalr-hub" {
    let _: string;
    export = _;
}

declare namespace ngSignalr {
    interface HubFactory {
        /**
         * Creates a new Hub connection
         */
        new(hubName: string, options: HubOptions): Hub;
    }

    class Hub {
        hubName: string;
        connection: SignalR.Connection;
        proxy: SignalR.Hub.Proxy;

        on(event: string, fn: (...args: any[]) => void): void;
        invoke(method: string, ...args: any[]): JQueryDeferred<any>;
        disconnect(): void;
        connect(): JQueryPromise<any>;
    }

    interface HubOptions {
        /**
         * Collection of client side callbacks
         */
        listeners?: { [index: string]: (...args: any[]) => void } | undefined;

        /**
         * String array of server side methods which the client can call
         */
        methods?: Array<string> | undefined;

        /**
         * Sets the root path for the SignalR web service
         */
        rootPath?: string | undefined;

        /**
         * Object representing additional query params to be sent on connection
         */
        queryParams?: { [index: string]: string } | undefined;

        /**
         * Function to handle hub connection errors
         */
        errorHandler?: ((error: string) => void) | undefined;

        /**
         * Enable/disable logging
         */
        logging?: boolean | undefined;

        /**
         * Use a shared global connection or create a new one just for this hub, defaults to true
         */
        useSharedConnection?: boolean | undefined;

        /**
         * Sets transport method (e.g    'longPolling'    or    ['webSockets', 'longPolling'] )
         */
        transport?: any;

        /**
         * Function to handle hub connection state changed event
         */
        stateChanged?: ((state: SignalR.StateChanged) => void) | undefined;
    }
}
