// Type definitions for confirmdialog v3.3.0
// Project: https://github.com/allipierre/Type-definitions-for-jquery-confirm/tree/master/types/confirmDialog-js
// Definitions by: Alli Pierre Yotti <https://github.com/allipierre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface JQueryStatic {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
   confirm( pOtions: options.confirmOptions | string, title?:string): boolean | void | HTMLElement | any;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert( pMessage?: any | string, title?:string):  void;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog( pOtions: options.confirmOptions | string):  void;

}


interface JQuery {
  /**
   * confirm Dialog
   * @param {confirmOptions} pOtions
   */
   confirm( pOtions: options.confirmOptions | string, title?:string): boolean | void | HTMLElement | any;

  /**
   * confirm alert
   * @param {any} pMessage
   */
   alert( pMessage?: any, title?:string):  void;

  /**
   * confirm Dialog
   * @param {any} pMessage
   */
   dialog( pOtions: options.confirmOptions | any):  void;
}

interface Window {
    setContentAppend: any;
}



declare namespace options {

    interface confirmOptions {
            buttons? : buttonOptionss | any,
            title? : string | boolean,
            content?  : string | Function,
            onContentReady?: Function,
            lazyOpen?: boolean,
            closeIcon?: boolean | Function,
            type?: string,
            typeAnimated?: boolean,
            icon?: string,
            closeIconClass?: string,
            columnClass?: string,
            containerFluid?: boolean,
            boxWidth?: string,
            useBootstrap?: boolean,
            bootstrapClasses?: any,
            draggable?: boolean,
            dragWindowBorder?: boolean,
            dragWindowGap?: number,
            contentLoaded?: Function,
            autoClose?: string,
            backgroundDismiss?: boolean | Function | string,
            backgroundDismissAnimation?: string,
            escapeKey?: string | boolean,
            onOpenBefore?:Function,
            onOpen?: Function,
            onClose?: Function,
            onDestroy?: Function,
            onAction?: Function


    }

    interface buttonOptionss {
            cancel?: Function,
            confirm?: Function
    }

}

declare namespace jconfirm {
   let defaults: any;

}
