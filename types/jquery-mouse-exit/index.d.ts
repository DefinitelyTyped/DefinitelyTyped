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
        on(
            event: "mouseExit",
            handler: (event: JQuery.TriggeredEvent<HTMLElement>, data: FocusElements) => void,
        ): JQuery;
    }
}
