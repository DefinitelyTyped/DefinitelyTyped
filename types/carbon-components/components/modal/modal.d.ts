declare const Modal_base: any;
declare class Modal extends Modal_base {
    constructor(element: any, options: any);
    _handleFocusinListener: any;
    _handleKeydownListener: any;
    createdByLauncher(evt: any): void;
    shouldStateBeChanged(state: any): any;
    _changeState(state: any, detail: any, callback: any): void;
    _hookCloseActions(): void;
    _handleFocusin: (evt: any) => void;
    static components: WeakMap<object, any>;
    static get options(): {
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
    };
}
export default Modal;
