// Type definitions for angular-websocket v2.0
// Project: https://github.com/AngularClass/angular-websocket
// Definitions by: Nick Veys <https://github.com/nickveys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare namespace angular.websocket {

    interface IWebSocketProvider {
        /**
         * Creates and opens an IWebSocket instance.
         *
         * @param url url to connect to
         * @return websocket instance
         */
        (url: string): IWebSocket;
    }

    /** Options available to be specified for IWebSocket.onMessage */
    type IWebSocketMessageOptions = {

        /**
         * If specified, only messages that match the filter will cause the message event
         * to be fired.
         */
        filter?: string | RegExp;

        /** If true, each message handled will safely call `$rootScope.$digest()`. */
        autoApply?: boolean;
    }

    interface IWebSocket {

        /**
         * Adds a callback to be executed each time a socket connection is opened for
         * this instance.
         *
         * @param event event object
         * @returns this instance, for method chaining
         */
        onOpen(callback: (event: Event) => void): IWebSocket;

        /**
         * Adds a callback to be executed each time a socket connection is closed for
         * this instance.
         *
         * @param event event object
         * @returns this instance, for method chaining
         */
        onClose(callback: (event: CloseEvent) => void): IWebSocket;

        /**
         * Adds a callback to be executed each time a socket connection is closed for
         * this instance.
         *
         * @param event event object
         * @returns this instance, for method chaining
         */
        onError(callback: (event: Event) => void): IWebSocket;

        /**
         * Adds a callback to be executed each time a socket connection has an error for
         * this instance.
         *
         * @param event event object
         * @returns this instance, for method chaining
         */
        onMessage(callback: (event: MessageEvent) => void, options?: IWebSocketMessageOptions): IWebSocket;

        /**
         * Closes the underlying socket, as long as no data is still being sent from the client.
         *
         * @param force if `true`, force close even if data is still being sent
         * @returns this instance, for method chaining
         */
        close(force?: boolean): IWebSocket;

        /**
         * Adds data to a queue, and attempts to send if the socket is ready.
         *
         * @param data data to send, if this is an object, it will be stringified before sending
         */
        send(data: string | {}): ng.IPromise<any>;
    }
}
