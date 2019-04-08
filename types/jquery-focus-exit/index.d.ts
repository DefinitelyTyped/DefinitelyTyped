// Type definitions for JQuery Focus Exit 1.0
// Project: https://github.com/makeup-jquery/jquery-focus-exit
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export interface FocusElements {
    lostFocus?: HTMLElement;
    gainedFocus: HTMLElement;
}

declare global {
    interface JQuery {
        focusExit(options?: { debug: boolean }): JQuery;
        on(event: 'focusExit', handler: ((event: JQuery.TriggeredEvent<HTMLElement>, data: FocusElements) => void)): JQuery;
        one(event: 'focusin', handler: ((event: JQuery.TriggeredEvent<HTMLElement>) => void)): JQuery;
    }
}
