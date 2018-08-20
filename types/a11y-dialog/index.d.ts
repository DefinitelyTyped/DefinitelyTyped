// Type definitions for a11y-dialog
// Project: https://github.com/edenspiekermann/a11y-dialog
// Definitions by: Yuto Otaguro <https://github.com/Goyatuzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class A11yDialog {
    constructor(el: Element, containers: NodeList | Element | string);

    show();
    hide();
    /**
     * Unbind click listeners from dialog openers and closers and remove all bound custom event listeners registered with `.on()`
     */
    destroy();
    /**
     * Bind click listeners to dialog openers and closers.
     */
    create();

    on(evt: "show" | "hide" | "destroy" | "create", callback: (dialogElement: Element, event: Event) => void);
    on(evt: "show" | "hide" | "destroy" | "create", callback: (dialogElement: Element) => void);
    on(evt: "show" | "hide" | "destroy" | "create", callback: () => void);
}