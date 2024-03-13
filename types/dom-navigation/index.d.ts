interface Window {
    readonly navigation: Navigation;
}

interface NavigationEventMap {
    navigate: NavigateEvent;
    navigatesuccess: Event;
    navigateerror: ErrorEvent;
    currententrychange: NavigationCurrentEntryChangeEvent;
}

interface NavigationResult {
    committed: Promise<NavigationHistoryEntry>;
    finished: Promise<NavigationHistoryEntry>;
}

declare class Navigation extends EventTarget {
    entries(): NavigationHistoryEntry[];
    readonly currentEntry: NavigationHistoryEntry | null;
    updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
    readonly transition: NavigationTransition | null;

    readonly canGoBack: boolean;
    readonly canGoForward: boolean;

    navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
    reload(options?: NavigationReloadOptions): NavigationResult;

    traverseTo(key: string, options?: NavigationOptions): NavigationResult;
    back(options?: NavigationOptions): NavigationResult;
    forward(options?: NavigationOptions): NavigationResult;

    onnavigate: ((this: Navigation, ev: NavigateEvent) => any) | null;
    onnavigatesuccess: ((this: Navigation, ev: Event) => any) | null;
    onnavigateerror: ((this: Navigation, ev: ErrorEvent) => any) | null;
    oncurrententrychange: ((this: Navigation, ev: NavigationCurrentEntryChangeEvent) => any) | null;

    addEventListener<K extends keyof NavigationEventMap>(
        type: K,
        listener: (this: Navigation, ev: NavigationEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof NavigationEventMap>(
        type: K,
        listener: (this: Navigation, ev: NavigationEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare class NavigationTransition {
    readonly navigationType: NavigationTypeString;
    readonly from: NavigationHistoryEntry;
    readonly finished: Promise<void>;
}

interface NavigationHistoryEntryEventMap {
    dispose: Event;
}

declare class NavigationHistoryEntry extends EventTarget {
    readonly key: string;
    readonly id: string;
    readonly url: string | null;
    readonly index: number;
    readonly sameDocument: boolean;

    getState(): unknown;

    ondispose: ((this: NavigationHistoryEntry, ev: Event) => any) | null;

    addEventListener<K extends keyof NavigationHistoryEntryEventMap>(
        type: K,
        listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof NavigationHistoryEntryEventMap>(
        type: K,
        listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

type NavigationTypeString = "reload" | "push" | "replace" | "traverse";

interface NavigationUpdateCurrentEntryOptions {
    state: unknown;
}

interface NavigationOptions {
    info?: unknown;
}

interface NavigationNavigateOptions extends NavigationOptions {
    state?: unknown;
    history?: "auto" | "push" | "replace";
}

interface NavigationReloadOptions extends NavigationOptions {
    state?: unknown;
}

declare class NavigationCurrentEntryChangeEvent extends Event {
    constructor(type: string, eventInit?: NavigationCurrentEntryChangeEventInit);

    readonly navigationType: NavigationTypeString | null;
    readonly from: NavigationHistoryEntry;
}

interface NavigationCurrentEntryChangeEventInit extends EventInit {
    navigationType?: NavigationTypeString | null;
    from: NavigationHistoryEntry;
}

declare class NavigateEvent extends Event {
    constructor(type: string, eventInit?: NavigateEventInit);

    readonly navigationType: NavigationTypeString;
    readonly canIntercept: boolean;
    readonly userInitiated: boolean;
    readonly hashChange: boolean;
    readonly destination: NavigationDestination;
    readonly signal: AbortSignal;
    readonly formData: FormData | null;
    readonly downloadRequest: string | null;
    readonly info?: unknown;

    intercept(options?: NavigationInterceptOptions): void;
    scroll(): void;
}

interface NavigateEventInit extends EventInit {
    navigationType?: NavigationTypeString;
    canIntercept?: boolean;
    userInitiated?: boolean;
    hashChange?: boolean;
    destination: NavigationDestination;
    signal: AbortSignal;
    formData?: FormData | null;
    downloadRequest?: string | null;
    info?: unknown;
}

interface NavigationInterceptOptions {
    handler?: () => Promise<void>;
    focusReset?: "after-transition" | "manual";
    scroll?: "after-transition" | "manual";
}

declare class NavigationDestination {
    readonly url: string;
    readonly key: string | null;
    readonly id: string | null;
    readonly index: number;
    readonly sameDocument: boolean;

    getState(): unknown;
}
