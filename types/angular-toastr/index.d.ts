/// <reference types="angular" />

import * as angular from "angular";

export type IToastBaseConfig = angular.toastr.IToastBaseConfig;
export type IToastContainerConfig = angular.toastr.IToastContainerConfig;
export type IToastConfig = angular.toastr.IToastConfig;
export type IToastrConfig = angular.toastr.IToastrConfig;
export type IToastScope = angular.toastr.IToastScope;
export type IToast = angular.toastr.IToast;
export type IToastOptions = angular.toastr.IToastOptions;
export type IToastrService = angular.toastr.IToastrService;

declare module "angular" {
    export namespace toastr {
        interface IToastBaseConfig {
            allowHtml?: boolean | undefined;
            closeButton?: boolean | undefined;
            closeHtml?: string | undefined;
            extendedTimeOut?: number | undefined;
            extraData?: any;
            messageClass?: string | undefined;
            onHidden?: ((wasClicked: boolean, toast: angular.toastr.IToast) => void) | undefined;
            onShown?: ((toast: angular.toastr.IToast) => void) | undefined;
            onTap?: ((toast: angular.toastr.IToast) => void) | undefined;
            progressBar?: boolean | undefined;
            tapToDismiss?: boolean | undefined;
            templates?: {
                toast?: string | undefined;
                progressbar?: string | undefined;
            } | undefined;
            timeOut?: number | undefined;
            titleClass?: string | undefined;
            toastClass?: string | undefined;
        }

        interface IToastContainerConfig {
            autoDismiss?: boolean | undefined;
            containerId?: string | undefined;
            maxOpened?: number | undefined;
            newestOnTop?: boolean | undefined;
            positionClass?: string | undefined;
            preventDuplicates?: boolean | undefined;
            preventOpenDuplicates?: boolean | undefined;
            target?: string | undefined;
        }

        interface IToastConfig extends IToastBaseConfig {
            iconClasses?: {
                error?: string | undefined;
                info?: string | undefined;
                success?: string | undefined;
                warning?: string | undefined;
            } | undefined;
        }

        interface IToastrConfig extends IToastContainerConfig, IToastConfig {}

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
            iconClass?: string | undefined;
            target?: string | undefined;
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
}
