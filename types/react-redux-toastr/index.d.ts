// Type definitions for react-redux-toastr 7.0.0
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Mika Kuitunen <https://github.com/kulmajaba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.1

import { Component } from 'react';
import { Action, ActionCreator, Reducer } from 'redux';

export type transitionInType = 'bounceIn' | 'bounceInDown' | 'fadeIn';
export type transitionOutType = 'bounceOut' | 'bounceOutUp' | 'fadeOut';
export type positionType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-ceter' | 'bottom-right';
export type toastType = 'success' | 'info' | 'warning' | 'light' | 'error' | 'confirm' | 'message';
export type iconType = 'success' | 'info' | 'warning' | 'error';

interface ToastrOptions {
    timeOut?: number;
    newestOnTop?: boolean;
    position?: positionType;
    confirmOptions?: ConfirmOptions;
    preventDuplicates?: boolean;
    transitionIn?: transitionInType;
    transitionOut?: transitionOutType;
    progressBar?: boolean;
}

interface ConfirmOptions {
    okText: string;
    cancelText: string;
}

export default class ReduxToastr extends Component<ToastrOptions, {}> {}

interface EmitterOptions {
    icon?: iconType;
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
