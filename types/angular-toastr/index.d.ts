// Type definitions for Angular Toastr v1.6.0
// Project: https://github.com/Foxandxss/angular-toastr
// Definitions by: Niko Kovačič <https://github.com/nkovacic>, Troy McKinnon <https://github.com/trodi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

export type IToastBaseConfig = angular.toastr.IToastBaseConfig;
export type IToastContainerConfig = angular.toastr.IToastContainerConfig;
export type IToastConfig = angular.toastr.IToastConfig;
export type IToastrConfig = angular.toastr.IToastrConfig;
export type IToastScope = angular.toastr.IToastScope;
export type IToast = angular.toastr.IToast;
export type IToastOptions = angular.toastr.IToastOptions;
export type IToastrService = angular.toastr.IToastrService;

declare module 'angular' {
    export namespace toastr {
        interface IToastBaseConfig {
            allowHtml?: boolean;
            closeButton?: boolean;
            closeHtml?: string;
            extendedTimeOut?: number;
            messageClass?: string;
            onHidden?: (wasClicked: boolean, toast: angular.toastr.IToast) => void;
            onShown?: (toast: angular.toastr.IToast) => void;
            onTap?: (toast: angular.toastr.IToast) => void;
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
}
