// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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