export interface Options {
    onOpen?: ((this: modal) => void) | undefined;
    onClose?: ((this: modal) => void) | undefined;
    beforeOpen?: (() => void) | undefined;
    beforeClose?: ((this: modal) => boolean | undefined) | undefined;
    stickyFooter?: boolean | undefined;
    footer?: boolean | undefined;
    cssClass?: string[] | undefined;
    closeLabel?: string | undefined;
    closeMethods?: string[] | undefined;
}
export class modal {
    constructor(options?: Options);
    setContent(content: string | Node): void;
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
        listener: HTMLElement["onclick"],
    ): HTMLButtonElement;
    isOverflow(): boolean;
    checkOverflow(): void;
}
