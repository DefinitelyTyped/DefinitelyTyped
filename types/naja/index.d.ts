// Type definitions for naja 1.6
// Project: https://github.com/jiripudil/Naja#readme
// Definitions by: Vít Rozsíval <https://github.com/rozsival>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

interface FormsHandler {
    netteForms: object;
    initForms(element: Element): void;
    processForm(event: Event): void;
}

interface HistoryHandler {
    uiCache: boolean;
}

type RequestData = null | string | number | any[] | object | ArrayBuffer | Blob | FormData;

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

export type SnippetUpdateListener =
    | ((event: SnippetUpdateEvent) => Promise<void> | void)
    | { handleEvent(event: SnippetUpdateEvent): Promise<void> | void };

interface SnippetListeners {
    afterUpdate: SnippetUpdateListener;
    beforeUpdate: SnippetUpdateListener;
}

interface SnippetHandler extends EventTarget {
    addEventListener<K extends keyof SnippetListeners>(
        type: K,
        listener: SnippetListeners[K],
        options?: EventListenerOptions | boolean,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof SnippetListeners>(
        type: K,
        listener: SnippetListeners[K],
        options?: EventListenerOptions | boolean,
    ): void;
    removeEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean,
    ): void;
}

interface UIHandler {
    readonly allowedOrigins: string[];
    selector: string;
    bindUI(element: HTMLElement): void;
    clickElement(element: HTMLElement, options?: object, event?: Event): void;
    handleUI(event: Event): void;
    isUrlAllowed(url: string): boolean;
    submitForm(element: HTMLFormElement, options?: object, event?: Event): void;
}

export interface InitEvent extends Event {
    readonly defaultOptions: Readonly<NajaOptions>;
}

export interface InteractionEvent extends Event {
    readonly element: HTMLElement;
    readonly originalEvent: SnippetUpdateEvent | undefined;
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
    readonly response: T | undefined;
    readonly options: Readonly<NajaOptions>;
}

export interface CompleteEvent<T extends object = any> extends Event {
    readonly error: Error | undefined;
    readonly xhr: XMLHttpRequest;
    readonly response: T | undefined;
    readonly options: Readonly<NajaOptions>;
}

export type NajaEventListener<T extends Event = Event> =
    | ((event: T) => Promise<void> | void)
    | { handleEvent(event: T): Promise<void> | void };

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
    addEventListener<K extends keyof NajaEventsMap>(
        type: K,
        listener: NajaEventsMap[K],
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<T extends Event>(
        type: T['type'],
        listener: NajaEventListener<T>,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof NajaEventsMap>(
        type: K,
        listener: NajaEventsMap[K],
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<T extends Event>(
        type: T['type'],
        listener: NajaEventListener<T>,
        options?: boolean | AddEventListenerOptions,
    ): void;
}

export interface NajaExtension<T extends any[]> {
    new (naja: Naja, ...args: T): any;
}

export interface Naja extends NajaEventTarget {
    readonly formsHandler: FormsHandler;
    readonly historyHandler: HistoryHandler;
    readonly snippetHandler: SnippetHandler;
    readonly uiHandler: UIHandler;
    fireEvent(name: string, args?: any): void;
    initialize(defaultOptions?: NajaOptions): void;
    makeRequest(method: RequestMethod, url: string, data: RequestData, options?: RequestOptions): Promise<any>;
    registerExtension<T extends any[]>(extension: NajaExtension<T>, ...optionalArguments: T): void;
}

declare const naja: Naja;

export default naja;
export as namespace naja;
