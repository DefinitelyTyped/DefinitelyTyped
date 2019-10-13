// Type definitions for naja 1.6
// Project: https://github.com/jiripudil/Naja#readme
// Definitions by: Vít Rozsíval <https://github.com/rozsival>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export as namespace Naja;

interface FormsHandler {
    netteForms: object;
}

interface HistoryHandler {
    uiCache: boolean;
}

type RequestData = null | string | number | [] | object | ArrayBuffer | Blob | FormData;

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestOptions extends Record<string, any> {
    abort?: boolean;
    async?: boolean;
    dataType?: string;
    history?: boolean | 'replace';
    historyUiCache?: boolean;
    responseType?: string;
    unique?: boolean;
}

export interface NajaOptions extends RequestOptions, Record<string, any> {
    selector?: string;
}

export interface SnippetUpdateEvent extends Event {
    readonly content: string;
    readonly snippet: HTMLElement;
}

export type SnippetUpdateListener = (event: SnippetUpdateEvent) => void;

interface SnippetListeners {
    afterUpdate: SnippetUpdateListener;
    beforeUpdate: SnippetUpdateListener;
}

interface SnippetHandler extends EventTarget {
    addEventListener<K extends keyof SnippetListeners>(type: K, listener: SnippetListeners[K]): void;
    addEventListener(type: string, listener: SnippetUpdateListener): void;
    removeEventListener(type: string, listener: SnippetUpdateListener | object | null): void;
}

interface UIHandler {
    readonly allowedOrigins: string[];
    selector: string;
    bindUI(element: HTMLElement): void;
    clickElement(element: HTMLElement): void;
    submitForm(element: HTMLFormElement): void;
}

export interface InitEvent extends Event {
    readonly defaultOptions: Readonly<NajaOptions>;
}

export interface InteractionEvent extends Event {
    readonly element: HTMLElement;
    readonly originalEvent: SnippetUpdateEvent | null | undefined;
    readonly options: Readonly<RequestOptions>;
}

export interface BeforeEvent<T extends RequestData = RequestData> extends Event {
    readonly xhr: XMLHttpRequest;
    readonly method: RequestMethod;
    readonly url: string;
    readonly data: T;
    readonly options: Readonly<NajaOptions>;
}

export interface StartEvent extends Event {
    readonly request: Promise<void>;
    readonly xhr: XMLHttpRequest;
}

export interface AbortEvent extends Event {
    readonly xhr: XMLHttpRequest;
}

export interface SuccessEvent<T extends object = any> extends Event {
    readonly xhr: XMLHttpRequest;
    readonly response: T;
    readonly options: Readonly<NajaOptions>;
}

export interface ErrorEvent<T extends object = any> extends Event {
    readonly error: Error;
    readonly xhr: XMLHttpRequest;
    readonly response: T | null | undefined;
    readonly options: Readonly<NajaOptions>;
}

export interface CompleteEvent<T extends object = any> extends Event {
    readonly error: Error | null | undefined;
    readonly xhr: XMLHttpRequest;
    readonly response: T | null | undefined;
    readonly options: Readonly<NajaOptions>;
}

export type NajaEventListener<T extends Event = Event> = (event: T) => void;

interface NajaEventsMap {
    init: NajaEventListener<InitEvent>;
    load: NajaEventListener;
    interaction: NajaEventListener<InteractionEvent>;
    before: NajaEventListener<BeforeEvent>;
    start: NajaEventListener<StartEvent>;
    abort: NajaEventListener<AbortEvent>;
    success: NajaEventListener<SuccessEvent>;
    error: NajaEventListener<ErrorEvent>;
    complete: NajaEventListener<CompleteEvent>;
}

interface NajaEventTarget extends EventTarget {
    addEventListener<K extends keyof NajaEventsMap>(type: K, listener: NajaEventsMap[K]): void;
    addEventListener(type: string, listener: NajaEventListener): void;
    removeEventListener(type: string, listener: NajaEventListener | object | null): void;
}

// tslint:disable-next-line no-unnecessary-class
declare class NajaExtension {
    constructor(naja: Naja, ...optionalArguments: any);
}

export interface Naja extends NajaEventTarget {
    readonly formsHandler: FormsHandler;
    readonly historyHandler: HistoryHandler;
    readonly snippetHandler: SnippetHandler;
    readonly uiHandler: UIHandler;
    fireEvent(name: string, args: any): void;
    initialize(defaultOptions: NajaOptions): void;
    makeRequest(method: RequestMethod, url: string, data: RequestData, options?: RequestOptions): Promise<any>;
    registerExtension(extension: typeof NajaExtension, ...optionalArguments: any): void;
}

declare const naja: Naja;

export default naja;
