// Type definitions for angularjs-toaster v0.4.13
// Project: https://github.com/jirikavi/AngularJS-Toaster
// Definitions by: Ben Tesser <https://github.com/btesser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

export = ngtoaster;
export as namespace toaster;

declare namespace ngtoaster {
  interface IToasterService {
    pop(params:IPopParams): void
    /**
     * @param {string} type Type of toaster  -- 'error', 'info', 'wait', 'success', and 'warning'
     */
    pop(type?:string, title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number, showCloseButton?:boolean): void
    error(params: IPopParams): void
    error(title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number): void
    info(params: IPopParams): void
    info(title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number): void
    wait(params: IPopParams): void
    wait(title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number): void
    success(params: IPopParams): void
    success(title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number): void
    warning(params: IPopParams): void
    warning(title?:string, body?:string, timeout?:number, bodyOutputType?:string, clickHandler?:EventListener,
        toasterId?:number): void
    clear(): void
    toast:IToast;
  }

  interface IToasterEventRegistry {
    setup(): void
    subscribeToNewToastEvent(onNewToast:IToastEventListener): void
    subscribeToClearToastsEvent(onClearToasts:IToastEventListener): void
    unsubscribeToNewToastEvent(onNewToast:IToastEventListener): void
    unsubscribeToClearToastsEvent(onClearToasts:IToastEventListener): void
  }

  interface IPopParams extends IToast{
    toasterId?: number;
  }

  interface IToastEventListener {
    (event:Event, toasterId: number): void;
  }

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
  }

  interface IToasterConfig {
    /**
     * limits max number of toasts
     */
    limit?: number;
    'tap-to-dismiss'?: boolean;
    'close-button'?: boolean;
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
