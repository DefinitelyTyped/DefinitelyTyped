// Type definitions for react-redux-toastr 3.7.0
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-redux-toastr" {
    import * as React from "react";
    import * as Redux from "redux";

    interface ToastrOptions {
        /**
         * Timeout in miliseconds.
         */
        timeOut?: number,
        /**
         * Show newest on top or bottom.
         */
        newestOnTop?: boolean,
        /**
         * Position of the toastr: top-left, top-center, top-right, bottom-left, bottom-center and bottom-right
         */
        position?: string,
        confirmText?: ConfirmText
    }

    interface ConfirmText {
        okText: string,
        cancelText: string
    }

    /**
     * Toastr react component.
     */
    export default class ReduxToastr extends React.Component<ToastrOptions>{ }

    interface EmitterOptions {
        /**
         * Notification popup icon.
         * icon-close-round, icon-information-circle, icon-check-1, icon-exclamation-triangle, icon-exclamation-alert
         */
        icon?: string,
        /**
         * Timeout in miliseconds.
         */
        timeOut?: number,
        removeOnHover?: boolean,
        removeOnClick?: boolean,
        component?: React.Component<any>,
        onShowComplete?(): void;
        onHideComplete?(): void;
    }

    interface ToastrConfirmOptions {
        onOk(): void;
        onCancel(): void;
    }

    interface ToastrEmitter {
        /**
         * Used to provide a large amount of information.
         * It will not close unless a timeOut is provided.
         */
        message(title: string, message: string, options?: EmitterOptions): void;
        info(title: string, message: string, options?: EmitterOptions): void;
        success(title: string, message: string, options?: EmitterOptions): void;
        warning(title: string, message: string, options?: EmitterOptions): void;
        error(title: string, message: string, options?: EmitterOptions): void;
        /**
         * Clear all notifications
         */
        clean(): void;
        /**
         * Hook confirmation toastr with callback.
         */
        confirm(message: string, options: ToastrConfirmOptions): void;
    }

    /**
     * Possible actions to dispatch.
     */
    interface Actions {
        addToastrAction: Redux.Action,
        clean: Redux.Action,
        remove: Redux.Action,
        success: Redux.Action,
        info: Redux.Action,
        warning: Redux.Action,
        error: Redux.Action,
        showConfirm: Redux.Action,
        hideConfirm: Redux.Action
    }

    /**
     * Action creator for toastr.
     */
    export var actions: Redux.ActionCreator<Actions>;
    /**
     * Reducer for the toastr state.
     * Combine with your reducers.
     */
    export var reducer: Redux.Reducer<any>;
    /**
     * Used to issue toastr notifications.
     */
    export var toastr: ToastrEmitter;
}
