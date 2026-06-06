interface ModalOptions {
    selectorInit: string;
    selectorModalClose: string;
    selectorPrimaryFocus: string;
    selectorsFloatingMenus: string[];
    selectorModalContainer: string;
    classVisible: string;
    classBody: string;
    attribInitTarget: string;
    initEventNames: string[];
    eventBeforeShown: string;
    eventAfterShown: string;
    eventBeforeHidden: string;
    eventAfterHidden: string;
}

declare const Modal_base: any;
declare class Modal extends Modal_base {
    constructor(element: HTMLElement, options?: Partial<ModalOptions>);
    _handleFocusinListener: any;
    _handleKeydownListener: any;
    createdByLauncher(evt: Event): void;
    shouldStateBeChanged(state: string): boolean;
    _changeState(state: string, detail: object, callback: () => void): void;
    _hookCloseActions(): void;
    _handleFocusin: (evt: FocusEvent) => void;
    static components: WeakMap<object, any>;
    static get options(): ModalOptions;
}
export default Modal;
