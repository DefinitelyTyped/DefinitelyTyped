import { ddpCollection } from "./classes/ddpCollection";
import { ddpEventListener } from "./classes/ddpEventListener";
import { ddpSubscription } from "./classes/ddpSubscription";
import { ddpEvent } from "./ddpEvent";

export {};

type OptionalSpread<ST> = ST extends undefined ? [] : [ST];

interface SocketProvider {
    new(url: string): SocketProviderInstance;
}

interface SocketProviderInstance {
    readonly readyState: number;
    send(data: any): void;
    close(code?: number, reason?: string): void;
    onopen: ((this: any, event: any) => unknown) | null;
    onmessage: ((this: any, event: any) => unknown) | null;
    onerror: ((this: any, event: any) => unknown) | null;
    onclose: ((this: any, event: any) => unknown) | null;
}

export interface simpleDDPOptions {
    /**
     * The location of the websocket server. Its format depends on the type of socket you are using. If you are using https connection you have to use wss:// protocol.
     */
    endpoint: string;
    /**
     * The constructor function that will be used to construct the socket.
     * Meteor (currently the only DDP server available) supports websockets and SockJS sockets.
     * So, practically speaking, this means that on the browser you can use either the browser's native WebSocket constructor or the SockJS constructor provided by the SockJS library.
     * On the server you can use whichever library implements the websocket protocol (e.g. faye-websocket).
     */
    SocketConstructor: SocketProvider;
    /**
     * Whether to establish the connection to the server upon instantiation. When false, one can manually establish the connection with the connect method.
     * @defaultValue true
     */
    autoConnect?: boolean | undefined;
    /**
     * Whether to try to reconnect to the server when the socket connection closes, unless the closing was initiated by a call to the disconnect method.
     * @defaultValue true
     */
    autoReconnect?: boolean | undefined;
    /**
     * The interval in ms between reconnection attempts.
     * @defaultValue 1000
     */
    reconnectInterval?: number | undefined;

    /**
     * Whether to clear all collections data after a reconnection. This invokes fake removed messages on every document.
     * @defaultValue true
     */
    clearDataOnReconnection?: boolean | undefined;
    /**
     * Maximum wait for a response from the server to the method call. Default no maxTimeout.
     * @defaultValue undefined
     */
    maxTimeout?: number | undefined;
}

export default class simpleDDP {
    constructor(opts: simpleDDPOptions, plugins?: unknown[]);

    /**
     * All collections data recieved from server.
     */
    readonly collections: Array<ddpCollection<unknown>>;
    /**
     * Whether the client is connected to server.
     */
    readonly connected: boolean;
    /**
     * Calls a remote method with arguments passed in array.
     */
    apply(method: string, params?: object | unknown[], atBeginning?: boolean): Promise<unknown>;
    /**
     * Connects to the ddp server.
     * The method is called automatically by the class constructor if the autoConnect option is set to true (default behavior).
     */
    connect(): Promise<void>;
    /**
     * Disconnects from the ddp server by closing the WebSocket connection.
     * You can listen on the disconnected event to be notified of the disconnection.
     */
    disconnect(): Promise<void>;
    /**
     * Exports the data
     */
    exportData(format?: "string" | "raw"): object | string;
    /**
     * Exports the data
     */
    importData(data: object | string): Promise<void>;
    /**
     * Starts listening server for basic DDP event running `callback` each time the message arrives.
     */
    on(event: ddpEvent, callback: () => void): ddpEventListener;
    /**
     * Calls a remote method with arguments passed after the first argument. Syntactic sugar for `apply`.
     */
    call(method: string, ...args: any): Promise<unknown>;
    /**
     * Removes all documents like if it was removed by the server publication.
     */
    clearData(): Promise<void>;
    /**
     * Use this for fetching the subscribed data and for reactivity inside the collection.
     */
    collection(name: string): ddpCollection<unknown>;
    /**
     * Marks every passed `ddpSubscription` object as ready like if it was done by the server publication.
     */
    markAsReady(subs: unknown[]): Promise<void>;
    /**
     * Stops all reactivity.
     */
    stopChangeListeners(): void;
    /**
     * Tries to subscribe to a specific publication on server.
     */
    sub(pubname: string, arguments: unknown[]): ddpSubscription;
    /**
     * Tries to subscribe to a specific publication on server. Syntactic sugar for `sub`.
     */
    subscribe(pubname: string, ...args: any): ddpSubscription;
}
