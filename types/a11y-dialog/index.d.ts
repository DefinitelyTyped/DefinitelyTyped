// Type definitions for a11y-dialog 5.2.0
// Project: https://github.com/edenspiekermann/a11y-dialog
// Definitions by: Yuto Otaguro <https://github.com/Goyatuzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DialogEvents = "show" | "hide" | "destroy" | "create";
declare class A11yDialog {
    constructor(el: Element | null, containers?: NodeList | Element | string);

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
    create(): void;


    on<T extends Element>(evt: DialogEvents, callback: (dialogElement: T, event: Event) => void): void;
    on<T extends Element>(evt: DialogEvents, callback: (dialogElement: T) => void): void;
    on(evt: DialogEvents, callback: () => void): void;

    off<T extends Element>(evt: DialogEvents, callback: (dialogElement: T, event: Event) => void): void;
    off<T extends Element>(evt: DialogEvents, callback: (dialogElement: T) => void): void;
    off(evt: DialogEvents, callback: () => void): void;
}

export = A11yDialog;