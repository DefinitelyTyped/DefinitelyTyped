/// <reference types="angular" />

export = ngtoaster;
export as namespace toaster;

declare namespace ngtoaster {
    interface IToasterService {
        pop(params: IPopParams): void;
        /**
         * @param type Type of toaster  -- 'error', 'info', 'wait', 'success', and 'warning'
         */
        pop(
            type?: string,
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        error(params: IPopParams): void;
        error(
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        info(params: IPopParams): void;
        info(
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        wait(params: IPopParams): void;
        wait(
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        success(params: IPopParams): void;
        success(
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        warning(params: IPopParams): void;
        warning(
            title?: string,
            body?: string,
            timeout?: number,
            bodyOutputType?: string,
            clickHandler?: EventListener,
            toasterId?: number,
            showCloseButton?: boolean,
            toastId?: string | number,
            onHideCallback?: IToastCallback,
        ): IPopReturn;
        clear(toasterId?: number, toastId?: string | number): void;
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
        toasterId?: number | undefined;
    }

    interface IPopReturn {
        toasterId: number;
        toastId: string | number;
    }

    type IToastCallback = (toast: IToast) => void;

    type IToastEventListener = (event: Event, toasterId: number, toastId: string | number) => void;

    interface IToast {
        /**
         * Acceptable types are:
         * 'error', 'info', 'wait', 'success', and 'warning'
         */
        type?: string | undefined;
        title?: string | undefined;
        body?: string | undefined;
        timeout?: number | undefined;
        bodyOutputType?: string | undefined;
        clickHandler?: EventListener | undefined;
        showCloseButton?: boolean | undefined;
        closeHtml?: string | undefined;
        toastId?: string | number | undefined;
        /**
         * Called when the toast has been displayed.
         * @param toast the displayed toast
         */
        onShowCallback?: IToastCallback | undefined;
        /**
         * Called when the toast has been removed.
         * @param toast the displayed toast
         */
        onHideCallback?: IToastCallback | undefined;
        directiveData?: any;
        tapToDismiss?: boolean | undefined;
    }

    interface IToasterConfig {
        /**
         * limits max number of toasts
         */
        limit?: number | undefined;
        "tap-to-dismiss"?: boolean | undefined;
        "close-button"?: boolean | undefined;
        "close-html"?: string | undefined;
        "newest-on-top"?: boolean | undefined;
        "time-out"?: number | undefined;
        "icon-classes"?: IIconClasses | undefined;
        /**
         * Options include:
         * '', 'trustedHtml', 'template', 'templateWithData'
         */
        "body-output-type"?: string | undefined;
        "body-template"?: string | undefined;
        "icon-class"?: string | undefined;
        /**
         * Options include:
         * 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
         * 'toast-top-left', 'toast-top-center', 'toast-top-rigt',
         * 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-rigt',
         */
        "position-class"?: string | undefined;
        "title-class"?: string | undefined;
        "message-class"?: string | undefined;
        "prevent-duplicates"?: boolean | undefined;
        /**
         * stop timeout on mouseover and restart timer on mouseout
         */
        "mouseover-timer-stop"?: boolean | undefined;
    }

    interface IIconClasses {
        error: string;
        info: string;
        wait: string;
        success: string;
        warning: string;
    }
}
