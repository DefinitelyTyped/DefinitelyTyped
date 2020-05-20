// Type definitions for jquery-mouse-exit 1.0
// Project: https://github.com/makeup-jquery/jquery-mouse-exit
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    delay: number;
}>;

export type FocusElements = Partial<{
    lostFocus: HTMLElement;
    gainedFocus: HTMLElement;
}>;

declare global {
    interface JQuery {
        mouseExit(options?: Options): JQuery;
        on(event: 'mouseExit', handler: ((event: JQuery.TriggeredEvent<HTMLElement>, data: FocusElements) => void)): JQuery;
    }
}
