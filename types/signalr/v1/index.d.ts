/// <reference types="jquery" />

interface HubMethod {
    (callback: (data: string) => void): any;
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

interface SignalRStateChange {
    oldState: number;
    newState: number;
}

interface SignalR {
    events: SignalREvents;
    connectionState: any;
    transports: any;

    hub: HubConnection;
    id: string;
    logging: boolean;
    messageId: string;
    url: string;
    qs: any;
    state: number;

    (url: string, queryString?: any, logging?: boolean): SignalR;
    hubConnection(url?: string): SignalR;

    log(msg: string, logging: boolean): void;
    isCrossDomain(url: string): boolean;
    changeState(connection: SignalR, expectedState: number, newState: number): boolean;
    isDisconnecting(connection: SignalR): boolean;

    // createHubProxy(hubName: string): SignalR;

    start(): JQueryPromise<any>;
    start(callback: () => void): JQueryPromise<any>;
    start(settings: ConnectionSettings): JQueryPromise<any>;
    start(settings: ConnectionSettings, callback: () => void): JQueryPromise<any>;

    send(data: string): void;
    stop(async?: boolean, notifyServer?: boolean): void;

    starting(handler: () => void): SignalR;
    received(handler: (data: any) => void): SignalR;
    error(handler: (error: Error) => void): SignalR;
    stateChanged(handler: (change: SignalRStateChange) => void): SignalR;
    disconnected(handler: () => void): SignalR;
    connectionSlow(handler: () => void): SignalR;
    sending(handler: () => void): SignalR;
    reconnecting(handler: () => void): SignalR;
    reconnected(handler: () => void): SignalR;
}

interface HubProxy {
    (connection: HubConnection, hubName: string): HubProxy;
    state: any;
    connection: HubConnection;
    hubName: string;
    init(connection: HubConnection, hubName: string): void;
    hasSubscriptions(): boolean;
    on(eventName: string, callback: (...msg: any[]) => void): HubProxy;
    off(eventName: string, callback: (...msg: any[]) => void): HubProxy;
    invoke(methodName: string, ...args: any[]): JQueryDeferred<any>;
}

interface HubConnectionSettings {
    queryString?: string | undefined;
    logging?: boolean | undefined;
    useDefaultPath?: boolean | undefined;
}

interface HubConnection extends SignalR {
    // (url?: string, queryString?: any, logging?: boolean): HubConnection;
    proxies: any;
    transport: { name: string; supportsKeepAlive: () => boolean };
    received(callback: (data: { Id: any; Method: any; Hub: any; State: any; Args: any }) => void): HubConnection;
    createHubProxy(hubName: string): HubProxy;
}

interface SignalRfn {
    init(url: any, qs: any, logging: any): any;
}

interface ConnectionSettings {
    transport?: any;
    callback?: any;
    waitForPageLoad?: boolean | undefined;
    jsonp?: boolean | undefined;
}

interface JQueryStatic {
    signalR: SignalR;
    connection: SignalR;
    hubConnection(url?: string, options?: HubConnectionSettings): HubConnection;
}
