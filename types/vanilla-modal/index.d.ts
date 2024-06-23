export interface VanillaModalConfig {
    modal?: string | HTMLElement | undefined;
    modalInner?: string | undefined;
    modalContent?: string | undefined;
    open?: string | undefined;
    close?: string | undefined;
    page?: string | undefined;
    class?: string | undefined;
    loadClass?: string | undefined;
    clickOutside?: boolean | undefined;
    closeKeys?: number[] | undefined[] | boolean | undefined;
    transitions?: string | undefined;
    transitionEnd?(): undefined;
    onBeforeOpen?(): undefined;
    onBeforeClose?(): undefined;
    onOpen?(): undefined;
    onClose?(): undefined;
}
export interface VanillaModalDomNodes {
    modal: HTMLElement;
    page: HTMLElement;
    modalInner: HTMLElement;
    modalContent: HTMLElement;
}

export default class VanillaModal {
    constructor(settings?: VanillaModalConfig);
    getDomNodes(): VanillaModalDomNodes;
    addLoadedCssClass(): void;
    setOpenId(id: string): void;
    removeOpenId(): void;
    open(allMatches: string, e?: Event): void;
    detectTransition(): boolean;
    close(e?: Event): void;
    closeModal(e: Event): void;
    closeModalWithTransition(e: Event): void;
    captureNode(node: Node): void;
    releaseNode(node: Node): void;
    closeKeyHandler(e: Event): void;
    outsideClickHandler(e: Event): void;
    delegateOpen(e: Event): void;
    delegateClose(e: Event): void;
    listen(): void;
    destroy(): void;
}
