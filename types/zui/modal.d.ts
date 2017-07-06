
interface ModalOptions {
    backdrop?: boolean | string;
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}

interface ModalOptionsBackdropString {
    backdrop?: string; // for "static"
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}
interface JQuery {
    modal(options?: ModalOptions): JQuery;
    modal(options?: ModalOptionsBackdropString): JQuery;
    modal(command: string): JQuery;
}