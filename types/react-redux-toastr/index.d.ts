// Type definitions for react-redux-toastr 7.0.0
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Mika Kuitunen <https://github.com/kulmajaba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.1

import { Component } from 'react';
import { Action, ActionCreator, Reducer } from 'redux';

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

export default class ReduxToastr extends Component<ToastrOptions, {}> {}

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
    addToastrAction: Action;
    clean: Action;
    remove: Action;
    success: Action;
    info: Action;
    warning: Action;
    error: Action;
    showConfirm: Action;
    hideConfirm: Action;
}

export const actions: ActionCreator<Actions>;
export const reducer: Reducer<any>;
export const toastr: ToastrEmitter;
