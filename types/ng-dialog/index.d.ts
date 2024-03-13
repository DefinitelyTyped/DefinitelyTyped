/// <reference types="angular" />

import * as angular from "angular";

export type IDialogService = angular.dialog.IDialogService;
export type IDialogOpenResult = angular.dialog.IDialogOpenResult;
export type IDialogClosePromise = angular.dialog.IDialogClosePromise;
export type IDialogProvider = angular.dialog.IDialogProvider;
export type IDialogScope = angular.dialog.IDialogScope;
export type IDialogConfirmScope = angular.dialog.IDialogConfirmScope;
export type IDialogOptions = angular.dialog.IDialogOptions;
export type IDialogOpenOptions = angular.dialog.IDialogOpenOptions;
export type IDialogOpenConfirmOptions = angular.dialog.IDialogOpenConfirmOptions;

declare module "angular" {
    export namespace dialog {
        interface IDialogService {
            getDefaults(): IDialogOptions;
            open(options: IDialogOpenOptions): IDialogOpenResult;
            openConfirm(options: IDialogOpenConfirmOptions): IPromise<any>;

            /**
             * Determine whether the specified dialog is open or not.
             * @param id Dialog id to check for.
             * @returns {boolean} Indicating whether it exists or not.
             */
            isOpen(id: string): boolean;
            close(id: string, value?: any): void;
            closeAll(value?: any): void;
            getOpenDialogs(): string[];
        }

        interface IDialogOpenResult {
            id: string;
            close: (value?: any) => void;
            closePromise: IPromise<IDialogClosePromise>;
        }

        interface IDialogClosePromise {
            id: string;
            value: any;
        }

        interface IDialogProvider extends angular.IServiceProvider {
            /**
             * Default options for the dialogs.
             * @param defaultOptions
             * @returns {}
             */
            setDefaults(defaultOptions: IDialogOptions): void;

            /**
             * Adds an additional listener on every $locationChangeSuccess event and gets update version of html into dialog.
             * May be useful in some rare cases when you're dependant on DOM changes, defaults to false.
             * @param {boolean} force
             */
            setForceHtmlReload(force: boolean): void;

            /**
             * Adds additional listener on every $locationChangeSuccess event and gets updated version of body into dialog.
             * Maybe useful in some rare cases when you're dependant on DOM changes, defaults to false. Use it in module's
             * config as provider instance:
             * @param {boolean} force
             */
            setForceBodyReload(force: boolean): void;
        }

        /**
         * Dialog Scope which extends the $scope.
         */
        interface IDialogScope extends angular.IScope {
            /**
             * This allows you to close dialog straight from handler in a popup element.
             * @param value Any value passed to this function will be attached to the object which resolves on the close promise for this dialog.
             * For dialogs opened with the openConfirm() method the value is used as the reject reason.
             */
            closeThisDialog(value?: any): void;

            /**
             * Any serializable data that you want to be stored in the controller's dialog scope.
             * From version 0.3.6 $scope.ngDialogData keeps references to the objects instead of copying them.
             */
            ngDialogData: string | {} | any[];

            /**
             * The id of the dialog. If you you ngDialogData, it'll be also available under ngDialogData.ngDialogId
             */
            ngDialogId: string;
        }

        interface IDialogConfirmScope extends IDialogScope {
            /**
             * Use this method to close the dialog and resolve the promise that was returned when opening the modal.
             *
             * The function accepts a single optional parameter which is used as the value of the resolved promise.
             * @param {any} [value] - The value with which the promise will resolve
             */
            confirm(value?: any): void;
        }

        interface IDialogOptions {
            /**
             * This option allows you to control the dialog's look, you can use built-in themes or create your own styled modals.
             * It will be appended with the "ngdialog" class e.g. className is "default-theme flat-ui" it will be class="ngdialog default-theme flat-ui".
             */
            className?: string | undefined;

            /**
             * Unlike the className property, which overrides any default classes specified through the setDefaults() method (see docs), appendClassName allows for the addition of a class on top of any defaults.
             */
            appendClassName?: string | undefined;

            /**
             * If true then animation for the dialog will be disabled, default false.
             */
            disableAnimation?: boolean | undefined;

            /**
             * If false it allows to hide overlay div behind the modals, default true.
             */
            overlay?: boolean | undefined;

            /**
             * If false it allows to hide close button on modals, default true.
             */
            showClose?: boolean | undefined;

            /**
             * It allows to close modals by clicking Esc button, default true.
             * This will close all open modals if there several of them open at the same time.
             */
            closeByEscape?: boolean | undefined;

            /**
             * It allows to close modals by clicking on overlay background, default true. If @see Hammer.js is loaded, it will listen for tap instead of click.
             */
            closeByDocument?: boolean | undefined;

            /**
             * Listens for $locationChangeSuccess event and closes open dialogs if true (also handles the ui.router $stateChangeSuccess event if ui.router is used)
             * default : false
             */
            closeByNavigation?: boolean | undefined;

            /**
             * If true allows to use plain string as template, default false.
             */
            plain?: boolean | undefined;

            /**
             * Give a name for a dialog instance. It is useful for identifying specific dialog if there are multiple dialog boxes opened.
             */
            name?: string | number | undefined;

            /**
             * Provide either the name of a function or a function to be called before the dialog is closed.
             * If the callback function specified in the option returns false then the dialog will not be closed.
             * Alternatively, if the callback function returns a promise that gets resolved the dialog will be closed.
             *
             * more: https://github.com/likeastore/ngDialog#preclosecallback-string--function
             */
            preCloseCallback?: string | Function | undefined;

            /**
             * Pass false to disable template caching. Useful for developing purposes, default is true.
             */
            cache?: boolean | undefined;

            /**
             * Specify your element where to append dialog instance, accepts selector string (e.g. #yourId, .yourClass).
             * If not specified appends dialog to body as default behavior.
             */
            appendTo?: string | undefined;

            /**
             * When true, ensures that the focused element remains within the dialog to conform to accessibility recommendations.
             * Default value is true
             */
            trapFocus?: boolean | undefined;

            /**
             * When true, closing the dialog restores focus to the element that launched it. Designed to improve keyboard
             * accessibility. Default value is true
             */
            preserveFocus?: boolean | undefined;

            /**
             * When true, automatically selects appropriate values for any unspecified accessibility attributes. Default value is true
             */
            ariaAuto?: boolean | undefined;

            /**
             * Specifies the value for the role attribute that should be applied to the dialog element. Default value is null (unspecified)
             */
            ariaRole?: string | undefined;

            /**
             * Specifies the value for the aria-labelledby attribute that should be applied to the dialog element.
             * Default value is null (unspecified)
             *
             * If specified, the value is not validated against the DOM
             */
            ariaLabelledById?: string | undefined;

            /**
             * Specifies the CSS selector for the element to be referenced by the aria-labelledby attribute on the dialog element. Default value is null (unspecified)
             *
             * If specified, the first matching element is used.
             */
            ariaLabelledBySelector?: string | undefined;

            /**
             * Specifies the value for the aria-describedby attribute that should be applied to the dialog element. Default value is null (unspecified)
             *
             * If specified, the value is not validated against the DOM.
             */
            ariaDescribedById?: string | undefined;

            /**
             * Specifies the CSS selector for the element to be referenced by the aria-describedby attribute on the dialog element. Default value is null (unspecified)
             *
             * If specified, the first matching element is used.
             */
            ariaDescribedBySelector?: string | undefined;

            /**
             * Specifies the width of the dialog content element. Default value is null (unspecified)
             */
            width?: string | number | undefined;

            /**
             * Specifies the height of the dialog content element. Default value is null (unspecified)
             */
            height?: string | number | undefined;
        }

        /**
         * Options which are provided to open a dialog.
         */
        interface IDialogOpenOptions extends IDialogOptions {
            template: string;
            controller?: string | any[] | any | undefined;
            controllerAs?: string | undefined;
            bindToController?: boolean | undefined;

            /**
             * Scope object that will be passed to dialog. If you use controller with separate $scope service this object will be passed to $scope.$parent param.
             */
            scope?: ng.IScope | undefined;

            /**
             * An optional map of dependencies which should be injected into the controller. If any of these dependencies
             * are promises, ngDialog will wait for them all to be resolved or one to be rejected before the controller
             * is instantiated.
             */
            resolve?: { [key: string]: string | Function } | undefined;

            /**
             * Any serializable data that you want to be stored in the controller's dialog scope. ($scope.ngDialogData).
             * From version 0.3.6 $scope.ngDialogData keeps references to the objects instead of copying them.
             */
            data?: string | {} | any[] | undefined;
        }

        interface IDialogOpenConfirmOptions extends IDialogOpenOptions {
            scope?: IDialogConfirmScope | undefined;
        }
    }
}
