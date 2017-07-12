// Type definitions for react-redux-toastr 7.0.0
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Mika Kuitunen <https://github.com/kulmajaba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.1

import * as React from "react";
import * as Redux from "redux";

declare module "react-redux-toastr" {

    interface ToastrOptions {
        timeOut?: number;
        newestOnTop?: boolean;
        position?: string;
        confirmOptions?: ConfirmOptions;
        preventDuplicates?: boolean;
        transitionIn?: 'bounceIn' | 'bounceInDown' | 'fadeIn';
        transitionOut?: 'bounceOut' | 'bounceOutUp' | 'fadeOut';
        progressBar?: boolean;
    }

    interface ConfirmOptions {
        okText: string;
        cancelText: string;
    }

    export default class ReduxToastr extends React.Component<ToastrOptions, {}> {}

    interface EmitterOptions {
        icon?: string;
        timeOut?: number;
        removeOnHover?: boolean;
        removeOnClick?: boolean;
        component?: React.Component<any, any>;
        onShowComplete?: () => void;
        onHideComplete?: () => void;
    }

    interface ToastrConfirmOptions {
        onOk: () => void;
        onCancel: () => void;
    }

    interface ToastrEmitter {
        message: (title: string, message: string, options?: EmitterOptions) => void;
        info: (title: string, message: string, options?: EmitterOptions) => void;
        success: (title: string, message: string, options?: EmitterOptions) => void;
        warning: (title: string, message: string, options?: EmitterOptions) => void;
        error: (title: string, message: string, options?: EmitterOptions) => void;
        clean: () => void;
        confirm: (message: string, options: ToastrConfirmOptions) => void;
    }

    interface Actions {
        addToastrAction: Redux.Action;
        clean: Redux.Action;
        remove: Redux.Action;
        success: Redux.Action;
        info: Redux.Action;
        warning: Redux.Action;
        error: Redux.Action;
        showConfirm: Redux.Action;
        hideConfirm: Redux.Action;
    }

    export const actions: Redux.ActionCreator<Actions>;
    export const reducer: Redux.Reducer<any>;
    export const toastr: ToastrEmitter;
}
