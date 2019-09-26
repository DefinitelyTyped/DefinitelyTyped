// Type definitions for tingle.js 0.13
// Project: https://github.com/robinparisi/tingle#readme
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Options {
    onOpen?: (this: modal) => void;
    onClose?: (this: modal) => void;
    beforeOpen?: () => void;
    beforeClose?: (this: modal) => boolean | undefined;
    stickyFooter?: boolean;
    footer?: boolean;
    cssClass?: string[];
    closeLabel?: string;
    closeMethods?: string[];
}
export class modal {
    constructor(options?: Options);
    setContent(content: string | Element): void;
    getContent(): HTMLDivElement;
    destroy(): void;
    open(): void;
    isOpen(): boolean;
    close(): void;
    setFooterContent(content: string): void;
    getFooterContent(): HTMLDivElement | undefined;
    setStickyFooter(sticky: boolean): void;
    addFooterBtn(
        label: string,
        cssClass: string | undefined,
        listener: HTMLElement['onclick'],
    ): HTMLButtonElement;
    isOverflow(): boolean;
    checkOverflow(): void;
}
