// Type definitions for react-redux-toastr 7.6
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Mika Kuitunen <https://github.com/kulmajaba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Component } from 'react';
import { Action, Reducer } from 'redux';

export type iconType = 'success' | 'info' | 'warning' | 'error';
export type positionType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type toastType = 'success' | 'info' | 'warning' | 'light' | 'error' | 'confirm' | 'message';
export type transitionInType = 'bounceIn' | 'bounceInDown' | 'fadeIn';
export type transitionOutType = 'bounceOut' | 'bounceOutUp' | 'fadeOut';

interface BasicToastrOptions {
    attention?: boolean | undefined;
    className?: string | undefined;
    component?: Component | JSX.Element | undefined;
    icon?: JSX.Element | undefined;
    onCloseButtonClick?: (() => void) | undefined;
    onHideComplete?: (() => void) | undefined;
    onShowComplete?: (() => void) | undefined;
    onToastrClick?: (() => void) | undefined;
    progressBar?: boolean | undefined;
    removeOnHover?: boolean | undefined;
    showCloseButton?: boolean | undefined;
    timeOut?: number | undefined;
    transitionIn?: transitionInType | undefined;
    transitionOut?: transitionOutType | undefined;
    getState?: ((state: ToastrState) => ToastrState) | undefined;
}

interface LightToastrOptions {
    attention?: boolean | undefined;
    className?: string | undefined;
    component?: JSX.Element | undefined;
    icon?: iconType | JSX.Element | undefined;
    onCloseButtonClick?: (() => void) | undefined;
    onHideComplete?: (() => void) | undefined;
    onShowComplete?: (() => void) | undefined;
    progressBar?: boolean | undefined;
    removeOnHover?: boolean | undefined;
    showCloseButton?: boolean | undefined;
    status?: iconType | undefined;
    timeOut?: number | undefined;
    transitionIn?: transitionInType | undefined;
    transitionOut?: transitionOutType | undefined;
}

interface ConfirmToastrOptions {
    disableCancel?: boolean | undefined;
    onCancel?: (() => void) | undefined;
    onOk?: (() => void) | undefined;
    cancelText?: string;
    okText?: string;
}

interface ConfirmToastrCustomOptions {
    component: JSX.Element;
}

export interface Toastr {
    id: string;
    message?: string | undefined;
    options: BasicToastrOptions | LightToastrOptions;
    position: positionType;
    title?: string | undefined;
    type: toastType;
}

export interface AddToastPayload {
    id?: string | undefined;
    message?: string | undefined;
    options?: BasicToastrOptions | LightToastrOptions | undefined;
    position?: positionType | undefined;
    title?: string | undefined;
    type: toastType;
}

export interface ToastrState {
    confirm?: {
        id: string;
        message: string;
        options: ConfirmToastrOptions | ConfirmToastrCustomOptions;
        show: boolean;
    } | undefined;
    toastrs: Toastr[];
}

interface ReduxToastrProps {
    confirmOptions?: {
        cancelText: string;
        okText: string;
    } | undefined;
    newestOnTop?: boolean | undefined;
    options?: any; // This is currently not used, waiting for response from the package author to remove
    position?: positionType | undefined;
    preventDuplicates?: boolean | undefined;
    progressBar?: boolean | undefined;
    timeOut?: number | undefined;
    toastr?: ToastrState | undefined;
    transitionIn?: transitionInType | undefined;
    transitionOut?: transitionOutType | undefined;
    className?: string | undefined;
    closeOnToastrClick?: boolean | undefined;
}

interface ToastrEmitter {
    clean: () => void;
    confirm: (message: string, options: ConfirmToastrOptions) => void;
    error: (title: string, message: string, options?: BasicToastrOptions) => void;
    info: (title: string, message: string, options?: BasicToastrOptions) => void;
    light: (title: string, message: string, options?: LightToastrOptions) => void;
    message: (title: string, message: string, options?: BasicToastrOptions) => void;
    removeByType: (type: string) => void;
    success: (title: string, message: string, options?: BasicToastrOptions) => void;
    warning: (title: string, message: string, options?: BasicToastrOptions) => void;
}

interface ToastrActionCreators {
    add: (toastr: AddToastPayload) => Action;
    clean: () => Action;
    hideConfirm: () => Action;
    remove: (id: string) => Action;
    removeByType: (type: toastType) => Action;
    showConfirm: (confirm: ConfirmToastrOptions | ConfirmToastrCustomOptions) => Action;
}

export default class ReduxToastr extends Component<ReduxToastrProps> {}
export const actions: ToastrActionCreators;
export const reducer: Reducer<ToastrState>;
export const toastr: ToastrEmitter;
