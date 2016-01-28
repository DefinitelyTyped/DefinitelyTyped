// Type definitions for ServiceStack Utils v0.0.1
// Project: https://servicestack.net/
// Definitions by: Demis Bellot <https://github.com/mythz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
    setFieldError: (name: string, msg: string) => void;
    serializeMap: () => { [index: string]: any };
    applyErrors: (status: ResponseStatus, opt?: SSUtilsApplyErrorsOptions) => JQuery;
    clearErrors: () => JQuery;
    bindForm: (opt?: SSUtilsApplyErrorsOptions) => JQuery;
    applyValues: (values: { [index: string]: string }) => JQuery;
    bindHandlers: (handlers: { [index: string]: Function }) => JQuery;
    setActiveLinks: () => JQuery;
    handleServerEvents: (opt?: SSUtilsHandleServerEventsOptions) => void;
}

interface SSUtilsValidation {
    overrideMessages: boolean;
    messages: { [index: string]: string };
    errorFilter: (errorMsg: string, errorCode: string, type: string) => void;
}

interface SSUtilsValidationOptional {
    overrideMessages?: boolean;
    messages?: { [index: string]: string };
    errorFilter?: (errorMsg: string, errorCode: string, type: string) => void;
}

interface SSUtilsApplyErrorsOptions extends SSUtilsValidationOptional {
}

interface SSUtilsBindFormOptions {
    validation?: SSUtilsValidationOptional;
    validate?: (form: HTMLFormElement) => boolean;
    onSubmitDisable?: string;
    complete?: (...args: any[]) => void;
    error?: (...args: any[]) => void;
}

interface SSUtilsHandleServerEventsOptions {
    handlers?: { [index: string]: Function };
    validate?: (op?: string, target?: string, msg?: string, json?: string) => boolean;
    heartbeatUrl?: string;
    heartbeatIntervalMs?: number;
    unRegisterUrl?: string;
    receivers?: { [index: string]: any };
    success?: (selector: string, msg: string, e: any) => void;
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

interface SSUtilsStatic {
    handlers: { [index: string]: Function };
    onSubmitDisable: string;
    validation: SSUtilsValidation;
    clearAdjacentError: () => void;
    todate: (s: string) => Date;
    todfmt: (s: string) => string;
    dfmt: (d: Date) => string;
    dfmthm: (d: Date) => string;
    tfmt12: (d: Date) => string;
    splitOnFirst: (s: string) => string[];
    splitOnLast: (s: string) => string[];
    getSelection: () => string;
    queryString: (url: string) => { [index: string]: string };
    createUrl: (route: string, args?: any) => string;
    humanize: (s: string) => string;

    listenOn: string;
    eventReceivers: any;
    reconnectServerEvents: (opt: SSUtilsReconnectServerEventsOptions) => any;
}

interface SSUtilsReconnectServerEventsOptions {
    url?: string;
    onerror?: (...args: any[]) => void;
    onmessage?: (...args: any[]) => void;
    errorArgs: any[];
}

interface JQueryStatic {
    ss: SSUtilsStatic;
}

interface SSUtilsSSECommand {
    userId: string;
    displayName: string;
    channels: string;
    profileUrl: string;
}
interface SSUtilsSSEHeartbeat extends SSUtilsSSECommand {}
interface SSUtilsSSEJoin extends SSUtilsSSECommand {}
interface SSUtilsSSELeave extends SSUtilsSSECommand {}
interface SSUtilsSSEConnect extends SSUtilsSSECommand {
    id: string;
    unRegisterUrl: string;
    heartbeatUrl: string;
    heartbeatIntervalMs: number;
    idleTimeoutMs: number;
}
