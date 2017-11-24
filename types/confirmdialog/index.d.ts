// Type definitions for confirmdialog 3.3
// Project: https://github.com/allipierre/Type-definitions-for-jquery-confirm/tree/master/types/confirmDialog-js
// Definitions by: Alli Pierre Yotti <https://github.com/allipierre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

 interface JQueryStatic {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
    confirm(pOtions: options.confirmOptions | string, title?: string): any;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert(pMessage?: any | string, title?: string): any;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog(pOtions: options.confirmOptions | string): any;
}

 interface JQuery {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
   confirm(pOtions: options.confirmOptions | string, title?: string): any;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert(pMessage?: any, title?: string): any;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog(pOtions: options.confirmOptions | any): any;
}

interface Window {
    setContentAppend: any;
}

declare namespace options {
    interface confirmOptions {
            buttons?: buttonOptionss | any;
            title?: string | boolean;
            content?: any;
            onContentReady?: any;
            lazyOpen?: boolean;
            closeIcon?: boolean | any;
            type?: string;
            typeAnimated?: boolean;
            icon?: string;
            closeIconClass?: string;
            columnClass?: string;
            containerFluid?: boolean;
            boxWidth?: string;
            useBootstrap?: boolean;
            bootstrapClasses?: any;
            draggable?: boolean;
            dragWindowBorder?: boolean;
            dragWindowGap?: number;
            contentLoaded?: () => void;
            autoClose?: string;
            backgroundDismiss?: boolean | any | string;
            backgroundDismissAnimation?: string;
            escapeKey?: string | boolean;
            onOpenBefore?: () => void;
            onOpen?: () => void;
            onClose?: () => void;
            onDestroy?: () => void;
            onAction?: () => void;
    }

    interface buttonOptionss {
            cancel?: () => void;
            confirm?: () => void;
    }
}

declare namespace jconfirm {
   let defaults: any;
}
