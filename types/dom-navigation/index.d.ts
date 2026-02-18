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
    committed?: Promise<NavigationHistoryEntry>;
    finished?: Promise<NavigationHistoryEntry>;
}

interface NavigationHistoryEntryEventMap {
    dispose: Event;
}

interface NavigationHistoryEntry extends EventTarget {
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

declare var NavigationHistoryEntry: {
    prototype: NavigationHistoryEntry;
    new(): NavigationHistoryEntry;
};

type NavigationTypeString = "reload" | "push" | "replace" | "traverse";

interface NavigationUpdateCurrentEntryOptions {
    state: any;
}

interface NavigationOptions {
    info?: any;
}

interface NavigationNavigateOptions extends NavigationOptions {
    state?: any;
    history?: "auto" | "push" | "replace";
}

interface NavigationReloadOptions extends NavigationOptions {
    state?: any;
}

interface NavigationCurrentEntryChangeEventInit extends EventInit {
    navigationType?: NavigationTypeString | null;
    from: NavigationHistoryEntry;
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
    info?: any;
}

interface NavigationInterceptOptions {
    handler?: NavigationInterceptHandler | undefined;
    focusReset?: "after-transition" | "manual";
    scroll?: "after-transition" | "manual";
}
