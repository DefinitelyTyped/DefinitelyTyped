// Type definitions for Angular Toastr v1.6.0
// Project: https://github.com/Foxandxss/angular-toastr
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module "angular-toastr" {
    var _: string;
    export = _;
}

declare namespace angular.toastr {
    interface IToastBaseConfig {
        allowHtml?: boolean;
        closeButton?: boolean;
        closeHtml?: string;
        extendedTimeOut?: number;
        messageClass?: string;
        onHidden?: Function;
        onShown?: Function;
        onTap?: Function;
        progressBar?: boolean;
        tapToDismiss?: boolean;
        templates?: {
            toast?: string;
            progressbar?: string;
        };
        timeOut?: number;
        titleClass?: string;
        toastClass?: string;
    }

    interface IToastContainerConfig {
        autoDismiss?: boolean;
        containerId?: string;
        maxOpened?: number;
        newestOnTop?: boolean;
        positionClass?: string;
        preventDuplicates?: boolean;
        preventOpenDuplicates?: boolean;
        target?: string;
    }

    interface IToastConfig extends IToastBaseConfig {
        iconClasses?: {
            error?: string;
            info?: string;
            success?: string;
            warning?: string;
        };
    }

    interface IToastrConfig extends IToastContainerConfig, IToastConfig { }

    interface IToastScope extends angular.IScope {
        message: string;
        options: IToastConfig;
        title: string;
        toastId: number;
        toastType: string;
    }

    interface IToast {
        el: angular.IAugmentedJQuery;
        iconClass: string;
        isOpened: boolean;
        open: angular.IPromise<any>;
        scope: IToastScope;
        toastId: number;
    }

    interface IToastOptions extends IToastBaseConfig {
        iconClass?: string;
        target?: string;
    }

    interface IToastrService {
        /**
         * Return the number of active toasts in screen.
         */
        active(): number;
        /**
         * Remove toast from screen. If no toast is passed in, all toasts will be closed.
         *
         * @param {IToast} toast Optional toast object to delete
         */
        clear(toast?: IToast): void;
        /**
         * Create error toast notification message.
         *
         * @param {String} message Message to show on toast
         * @param {String} title Title to show on toast
         * @param {IToastOptions} options Override default toast options
         */
        error(message: string, title?: string, options?: IToastOptions): IToast;
        /**
         * Create info toast notification message.
         *
         * @param {String} message Message to show on toast
         * @param {String} title Title to show on toast
         * @param {IToastOptions} options Override default toast options
         */
        info(message: string, title?: string, options?: IToastOptions): IToast;
        /**
         * Create success toast notification message.
         *
         * @param {String} message Message to show on toast
         * @param {String} title Title to show on toast
         * @param {IToastOptions} options Override default toast options
         */
        success(message: string, title?: string, options?: IToastOptions): IToast;
        /**
         * Create warning toast notification message.
         *
         * @param {String} message Message to show on toast
         * @param {String} title Title to show on toast
         * @param {IToastOptions} options Override default toast options
         */
        warning(message: string, title?: string, options?: IToastOptions): IToast;
    }
}
