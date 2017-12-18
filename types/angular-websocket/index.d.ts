// Type definitions for angular-websocket 2.0
// Project: https://github.com/AngularClass/angular-websocket
// Definitions by: Nick Veys <https://github.com/nickveys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from "angular";

export type IWebSocketConfigOptions = angular.websocket.IWebSocketConfigOptions;
export type IWebSocketProvider = angular.websocket.IWebSocketProvider;
export type IWebSocketMessageOptions = angular.websocket.IWebSocketMessageOptions;
export type IWebSocketMessageHandler = angular.websocket.IWebSocketMessageHandler;
export type IWebSocketQueueItem = angular.websocket.IWebSocketQueueItem;
export type IWebSocket = angular.websocket.IWebSocket;

declare module "angular" {
    namespace websocket {
        /**
         * Options available to be specified for IWebSocketProvider.
         */
        interface IWebSocketConfigOptions {
            scope?: IScope;
            rootScopeFailOver?: boolean;
            useApplyAsync?: boolean;
            initialTimeout?: number;
            maxTimeout?: number;
            binaryType?: "blob" | "arraybuffer";
            reconnectIfNotNormalClose?: boolean;
        }

        /**
         * Creates and opens an IWebSocket instance.
         *
         * @param url url to connect to
         * @return websocket instance
         */
        type IWebSocketProvider =
            (url: string, protocols?: string | string[] | IWebSocketConfigOptions,
                options?: IWebSocketConfigOptions) => IWebSocket;

        /** Options available to be specified for IWebSocket.onMessage */
        interface IWebSocketMessageOptions {
            /**
             * If specified, only messages that match the filter will cause the message event
             * to be fired.
             */
            filter?: string | RegExp;

            /** If true, each message handled will safely call `$rootScope.$digest()`. */
            autoApply?: boolean;
        }

        /** Type corresponding to onMessage callbacks stored in $Websocket#onMessageCallbacks instance. */
        interface IWebSocketMessageHandler {
            fn: (evt: MessageEvent) => void;
            pattern?: string | RegExp;
            autoApply: boolean;
        }

        /** Type corresponding to items stored in $WebSocket#sendQueue instance. */
        interface IWebSocketQueueItem {
            message: any;
            defered: IPromise<void>;
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
            send(data: string | {}): IPromise<any>;

            /**
             * WebSocket instance.
             */
            socket: WebSocket;

            /**
             * Queue of send calls to be made on socket when socket is able to receive data.
             */
            sendQueue: IWebSocketQueueItem[];

            /**
             * List of callbacks to be executed when the socket is opened.
             */
            onOpenCallbacks: Array<((evt: Event) => void)>;

            /**
             * List of callbacks to be executed when a message is received from the socket.
             */
            onMessageCallbacks: IWebSocketMessageHandler[];

            /**
             * List of callbacks to be executed when an error is received from the socket.
             */
            onErrorCallbacks: Array<((evt: Event) => void)>;

            /**
             * List of callbacks to be executed when the socket is closed.
             */
            onCloseCallbacks: Array<((evt: CloseEvent) => void)>;

            /**
             * Returns either the readyState value from the underlying WebSocket instance
             * or a proprietary value representing the internal state
             */
            readyState: number;

            /**
             * The initial timeout.
             */
            initialTimeout: number;

            /**
             * Maximun timeout used to determine reconnection delay.
             */
            maxTimeout: number;
        }
    }
}
