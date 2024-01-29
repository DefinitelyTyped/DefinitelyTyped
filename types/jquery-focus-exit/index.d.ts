/// <reference types="jquery" />

export interface FocusElements {
    lostFocus?: HTMLElement | undefined;
    gainedFocus: HTMLElement;
}

declare global {
    interface JQuery {
        focusExit(options?: { debug: boolean }): JQuery;
        on(
            event: "focusExit",
            handler: (event: JQuery.TriggeredEvent<HTMLElement>, data: FocusElements) => void,
        ): JQuery;
        one(event: "focusin", handler: (event: JQuery.TriggeredEvent<HTMLElement>) => void): JQuery;
    }
}
