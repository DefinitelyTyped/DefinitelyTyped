// Type definitions for a11y-dialog 5.2
// Project: https://github.com/edenspiekermann/a11y-dialog
// Definitions by: Yuto <https://github.com/Goyatuzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type DialogEvents = "show" | "hide" | "destroy" | "create";
declare class A11yDialog {
    constructor(el: Element | null, containers?: NodeList | Element | string | null);
    /**
     * Shows the dialog.
     */
    show(): void;
    /**
     * Hides the dialog.
     */
    hide(): void;
    /**
     * Unbind click listeners from dialog openers and closers and remove all bound custom event listeners registered with `.on()`
     */
    destroy(): void;
    /**
     * Bind click listeners to dialog openers and closers.
     */
    create(el?: Element | null, containers?: NodeList | Element | string | null): void;

    on(evt: DialogEvents, callback: (dialogElement: any, event: Event) => void): void;
    off(evt: DialogEvents, callback: (dialogElement: any, event: Event) => void): void;
}

export = A11yDialog;
