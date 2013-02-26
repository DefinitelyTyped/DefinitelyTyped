// Type definitions for SignalR 1.0
// Project: http://www.asp.net/signalr
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

interface HubMethod {
    (callback: (data: string) => void );
}

interface SignalREvents {
    onStart: string;
    onStarting: string;
    onReceived: string;
    onError: string;
    onConnectionSlow: string;
    onReconnect: string;
    onStateChanged: string;
    onDisconnect: string;
}

interface SignalR {
    events: SignalREvents;
    connectionState: any;
    transports: any;

    hub: HubConnection;
    id: string;
    logging: bool;
    messageId: string;
    url: string;

    (url: string, queryString?: any, logging?: bool): SignalR;
    hubConnection(url?: string): SignalR;

    log(msg: string, logging: bool): void;
    isCrossDomain(url: string): bool;
    changeState(connection: SignalR, expectedState: number, newState: number): bool;
    isDisconnecting(connection: SignalR): bool;

   // createHubProxy(hubName: string): SignalR;

    start(): JQueryPromise;
    start(callback: () => void ): JQueryPromise;
    start(settings: ConnectionSettings): JQueryPromise;
    start(settings: ConnectionSettings, callback: () => void ): JQueryPromise;


    send(data: string): void;
    stop(async?: bool, notifyServer?: bool): void;

    starting(handler: () => void ): SignalR;
    received(handler: (data: any) => void ): SignalR;
    error(handler: (error: any) => void ): SignalR;
    stateChanged(handler: (change: any) => void ): SignalR;
    disconnected(handler: () => void ): SignalR;
    connectionSlow(handler: () => void ): SignalR;
    sending(handler: () => void ): SignalR;
    reconnected(handler: () => void ): SignalR;
}

interface HubProxy {
    (connection: HubConnection, hubName: string): HubProxy;
    init(connection: HubConnection, hubName: string): void;
    hasSubscriptions(): bool;
    on(eventName: string, callback: (msg) => void ): HubProxy;
    off(eventName: string, callback: (msg) => void ): HubProxy;
    invoke(methodName: string, ...args: any[]): JQueryDeferred;
}

interface HubConnectionSettings {
    queryString?: string;
    logging?: bool;
    useDefaultPath?: bool;
}

interface HubConnection extends SignalR {
    //(url?: string, queryString?: any, logging?: bool): HubConnection;
    proxies;
    received(callback: (data: { Id; Method; Hub; State; Args; }) => void ): void;
    createHubProxy(hubName: string): HubProxy;
}

interface SignalRfn {
    init(url, qs, logging);
}

interface ConnectionSettings {
    transport?;
    callback?;
    waitForPageLoad?: bool;
    jsonp?: bool;
}

interface JQueryStatic {
    signalR: SignalR;
    connection: SignalR;
    hubConnection(url?: string, queryString?: any, logging?: bool): HubConnection;
}