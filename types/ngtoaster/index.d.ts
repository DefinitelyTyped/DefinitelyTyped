// Type definitions for non-npm package angularjs-toaster 2.2
// Project: https://github.com/jirikavi/AngularJS-Toaster
// Definitions by: Ben Tesser <https://github.com/btesser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

export = ngtoaster;
export as namespace toaster;

declare namespace ngtoaster {
    interface IToasterService {
        pop(params: IPopParams): void;
        /**
         * @param type Type of toaster  -- 'error', 'info', 'wait', 'success', and 'warning'
         */
        pop(type?: string, title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        error(params: IPopParams): void;
        error(title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        info(params: IPopParams): void;
        info(title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        wait(params: IPopParams): void;
        wait(title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        success(params: IPopParams): void;
        success(title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        warning(params: IPopParams): void;
        warning(title?: string, body?: string, timeout?: number, bodyOutputType?: string, clickHandler?: EventListener,
            toasterId?: number, showCloseButton?: boolean, toastId?: string|number,
            onHideCallback?: IToastCallback): IPopReturn;
        clear(toasterId?: number, toastId?: string|number): void;
        toast: IToast;
    }

    interface IToasterEventRegistry {
        setup(): void;
        subscribeToNewToastEvent(onNewToast: IToastEventListener): void;
        subscribeToClearToastsEvent(onClearToasts: IToastEventListener): void;
        unsubscribeToNewToastEvent(onNewToast: IToastEventListener): void;
        unsubscribeToClearToastsEvent(onClearToasts: IToastEventListener): void;
    }

    interface IPopParams extends IToast {
        toasterId?: number;
    }

    interface IPopReturn {
        toasterId: number;
        toastId: string|number;
    }

    type IToastCallback = (toast: IToast) => void;

    type IToastEventListener = (event: Event, toasterId: number, toastId: string|number) => void;

    interface IToast {
        /**
         * Acceptable types are:
         * 'error', 'info', 'wait', 'success', and 'warning'
         */
        type?: string;
        title?: string;
        body?: string;
        timeout?: number;
        bodyOutputType?: string;
        clickHandler?: EventListener;
        showCloseButton?: boolean;
        closeHtml?: string;
        toastId?: string|number;
        /**
         * Called when the toast has been displayed.
         * @param toast the displayed toast
         */
        onShowCallback?: IToastCallback;
        /**
         * Called when the toast has been removed.
         * @param toast the displayed toast
         */
        onHideCallback?: IToastCallback;
        directiveData?: any;
        tapToDismiss?: boolean;
    }

    interface IToasterConfig {
        /**
         * limits max number of toasts
         */
        limit?: number;
        'tap-to-dismiss'?: boolean;
        'close-button'?: boolean;
        'close-html'?: string;
        'newest-on-top'?: boolean;
        'time-out'?: number;
        'icon-classes'?: IIconClasses;
        /**
         * Options include:
         * '', 'trustedHtml', 'template', 'templateWithData'
         */
        'body-output-type'?: string;
        'body-template'?: string;
        'icon-class'?: string;
        /**
         * Options include:
         * 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
         * 'toast-top-left', 'toast-top-center', 'toast-top-rigt',
         * 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-rigt',
         */
        'position-class'?: string;
        'title-class'?: string;
        'message-class'?: string;
        'prevent-duplicates'?: boolean;
        /**
         * stop timeout on mouseover and restart timer on mouseout
         */
        'mouseover-timer-stop'?: boolean;
    }

    interface IIconClasses {
        error: string;
        info: string;
        wait: string;
        success: string;
        warning: string;
    }
}
