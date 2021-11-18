// Type definitions for fitty 2.3
// Project: https://github.com/rikschennink/fitty
// Definitions by: Raiper34 <https://github.com/Raiper34>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace fitty;

declare function fitty(el: HTMLElement | string, config?: fitty.FittyConfig): fitty.FittyInstance | fitty.FittyInstance[];

declare namespace fitty {
    let observeWindow: boolean;
    let observeWindowDelay: number;
    function fitAll(): void;

    interface FittyConfig {
        minSize?: number;
        maxSize?: number;
        multiLine?: boolean;
        observeMutations?: MutationObserverInit;
    }

    interface FittyInstance {
        element: HTMLElement;
        fit(): void;
        freeze(): void;
        unfreeze(): void;
        unsubscribe(): void;
    }

    interface FittyEvent extends CustomEvent {
        detail: FittyEventDetail;
    }

    interface FittyEventDetail {
        newValue: number;
        oldValue: number;
        scaleFactor: number;
    }
}

export = fitty;
