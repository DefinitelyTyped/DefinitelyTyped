// Type definitions for ServiceStack Utils v0.0.1
// Project: https://servicestack.net/
// Definitions by: Demis Bellot <https://github.com/mythz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace ssutils {

    interface Static {
        handlers: { [index: string]: Function };
        onSubmitDisable: string;
        validation: Validation;
        clearAdjacentError: () => void;
        todate: (s: string) => Date;
        todfmt: (s: string) => string;
        dfmt: (d: Date) => string;
        dfmthm: (d: Date) => string;
        tfmt12: (d: Date) => string;
        splitOnFirst: (s: string, delimiter:string) => string[];
        splitOnLast: (s: string, delimiter: string) => string[];
        getSelection: () => string;
        combinePaths: (...paths:string[]) => string;
        queryString: (url: string) => { [index: string]: string };
        createPath: (route: string, args: any) => string;
        createUrl: (route: string, args: any) => string;
        humanize: (s: string) => string;
        normalizeKey: (key: string) => string;
        normalize: (dto: any, deep?:boolean) => any;
        parseResponseStatus: (json: string, defaultMsg?: string) => any;
        postJSON: (url: string, data: Object | String, success?: Function, error?: Function) => any;

        listenOn: string;
        eventReceivers: any;
        eventChannels: string[];
        eventSourceUrl: string;
        updateSubscriberUrl: string;
        updateChannels: (channels: string[]) => void;
        updateSubscriber: (data: UpdateSubscriberOptions, cb?: (user: SSEUpdate) => void, cbError?: Function) => any;
        subscribeToChannels: (channels: string[], cb?: (user: SSEUpdate) => void, cbError?: Function) => any;
        unsubscribeFromChannels: (channels: string[], cb?: (user: SSEUpdate) => void, cbError?: Function) => any;
        reconnectServerEvents: (opt: ReconnectServerEventsOptions) => any;
    }

    interface Validation {
        overrideMessages: boolean;
        messages: { [index: string]: string };
        errorFilter: (errorMsg: string, errorCode: string, type: string) => void;
    }

    interface ValidationOptional {
        overrideMessages?: boolean;
        messages?: { [index: string]: string };
        errorFilter?: (errorMsg: string, errorCode: string, type: string) => void;
    }

    interface ApplyErrorsOptions extends ValidationOptional {
    }

    interface BindFormOptions {
        validation?: ValidationOptional;
        validate?: (form: HTMLFormElement) => boolean;
        onSubmitDisable?: string;
        complete?: (...args: any[]) => void;
        error?: (...args: any[]) => void;
    }

    interface HandleServerEventsOptions {
        handlers?: { [index: string]: Function };
        validate?: (op?: string, target?: string, msg?: string, json?: string) => boolean;
        heartbeatUrl?: string;
        heartbeatIntervalMs?: number;
        unRegisterUrl?: string;
        receivers?: { [index: string]: any };
        success?: (selector: string, msg: string, e: any) => void;
    }

    interface UpdateSubscriberOptions {
        SubscribeChannels?: string;
        UnsubscribeChannels?: string;
    }

    interface ResponseStatus {
        errorCode: string;
        message: string;
        stackTrace: string;
        errors: ResponseError[];
    }
    interface ResponseError {
        errorCode: string;
        fieldName: string;
        message: string;
    }

    interface SSECommand {
        userId: string;
        displayName: string;
        channels: string;
        profileUrl: string;
    }

    interface SSEHeartbeat extends SSECommand { }
    interface SSEJoin extends SSECommand { }
    interface SSELeave extends SSECommand { }
    interface SSEUpdate extends SSECommand { }

    interface SSEConnect extends SSECommand {
        id: string;
        unRegisterUrl: string;
        heartbeatUrl: string;
        updateSubscriberUrl: string;
        heartbeatIntervalMs: number;
        idleTimeoutMs: number;
    }

    interface ReconnectServerEventsOptions {
        url?: string;
        onerror?: (...args: any[]) => void;
        onmessage?: (...args: any[]) => void;
        errorArgs?: any[];
    }

    /**
     * EventSource
     */
    enum ReadyState { CONNECTING = 0, OPEN = 1, CLOSED = 2 }

    interface IEventSourceStatic extends EventTarget {
        new (url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic;
        url: string;
        withCredentials: boolean;
        CONNECTING: ReadyState; // constant, always 0
        OPEN: ReadyState; // constant, always 1
        CLOSED: ReadyState; // constant, always 2
        readyState: ReadyState;
        onopen: Function;
        onmessage: (event: IOnMessageEvent) => void;
        onerror: Function;
        close: () => void;
    }

    interface IEventSourceInit {
        withCredentials?: boolean;
    }

    interface IOnMessageEvent {
        data: string;
    }
}

//Needs to be declared locally
//declare var EventSource: ssutils.IEventSourceStatic;

interface JQuery {
    setFieldError: (name: string, msg: string) => void;
    serializeMap: () => { [index: string]: any };
    applyErrors: (status: ssutils.ResponseStatus, opt?: ssutils.ApplyErrorsOptions) => JQuery;
    clearErrors: () => JQuery;
    bindForm: (opt?: ssutils.ApplyErrorsOptions) => JQuery;
    applyValues: (values: { [index: string]: string }) => JQuery;
    bindHandlers: (handlers: { [index: string]: Function }) => JQuery;
    setActiveLinks: () => JQuery;
    handleServerEvents: (opt?: ssutils.HandleServerEventsOptions) => void;
}

interface JQueryStatic {
    ss: ssutils.Static;
}

declare module "ss-utils" {
    export = ssutils;
}
