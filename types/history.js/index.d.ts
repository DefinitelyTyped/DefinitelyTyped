interface HistoryAdapter {
    bind(element: any, event: string, callback: () => void): void;
    trigger(element: any, event: string): void;
    onDomLoad(callback: () => void): void;
}

// Since History is defined in lib.d.ts as well
// the name for our interfaces was chosen to be Historyjs
// However at runtime you would need to do
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/277
// var Historyjs: Historyjs = <any>History;

interface Historyjs {
    enabled: boolean;

    pushState(data: any, title: string, url: string, queue?: boolean): boolean;
    replaceState(data: any, title: string, url: string, queue?: boolean): boolean;
    getState(friendly?: boolean, create?: boolean): HistoryState;
    getStateId(passedState: HistoryState): string;
    getStateById(id: string): HistoryState;
    getStateByIndex(index: number): HistoryState;
    getCurrentIndex(): number;
    getHash(): string;

    Adapter: HistoryAdapter;

    back(): void;
    forward(): void;
    go(x: Number): void;

    log(...messages: any[]): void;
    debug(...messages: any[]): void;

    options: HistoryOptions;

    /**
     * History.setTitle(title)
     * Applies the title to the document
     * @param {HistoryState} newState
     * @return {Boolean}
     */
    setTitle(newState: HistoryState): boolean;
    clearQueue(): Historyjs;
    clearAllIntervals(): void;
    getRootUrl(): string;

    emulated: {
        hashChange?: any;
        pushState?: any;
    };
}

interface HistoryState {
    data?: any;
    title?: string | undefined;
    url: string;
    hashedUrl?: string | undefined;
    cleanUrl?: string | undefined;
}

interface HistoryOptions {
    hashChangeInterval?: number | undefined;
    safariPollInterval?: number | undefined;
    doubleCheckInterval?: number | undefined;
    disableSuid?: boolean | undefined;
    storeInterval?: number | undefined;
    busyDelay?: number | undefined;
    debug?: boolean | undefined;
    initialTitle?: string | undefined;
    html4Mode?: boolean | undefined;
    delayInit?: number | undefined;
}
