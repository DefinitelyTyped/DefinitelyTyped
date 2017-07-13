// Type definitions for react-redux-toastr 7.0.0
// Project: https://github.com/diegoddox/react-redux-toastr
// Definitions by: Aleksandar Ivanov <https://github.com/Smiche>
//                 Artyom Stukans <https://github.com/artyomsv>
//                 Mika Kuitunen <https://github.com/kulmajaba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.1

import { Component } from 'react';
import { Action, ActionCreator, Reducer } from 'redux';

export type iconType = 'success' | 'info' | 'warning' | 'error';
export type positionType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-ceter' | 'bottom-right';
export type toastType = 'success' | 'info' | 'warning' | 'light' | 'error' | 'confirm' | 'message';
export type transitionInType = 'bounceIn' | 'bounceInDown' | 'fadeIn';
export type transitionOutType = 'bounceOut' | 'bounceOutUp' | 'fadeOut';

interface BasicToastrOptions {
    attention?: boolean;
    className?: string;
    component?: React.Component<any, any>;
    icon?: React.Component<any, any>;
    onCloseButtonClick?: () => void;
    onHideComplete?: () => void;
    onShowComplete?: () => void;
    progressBar?: boolean;
    removeOnHover?: boolean;
    showCloseButton?: boolean;
    timeOut?: number;
    transitionIn?: transitionInType;
    transitionOut?: transitionOutType;
}

interface LightToastrOptions {
    attention?: boolean;
    className?: string;
    component?: React.Component<any, any>;
    icon?: iconType | React.Component<any, any>;
    onCloseButtonClick?: () => void;
    onHideComplete?: () => void;
    onShowComplete?: () => void;
    progressBar?: boolean;
    removeOnHover?: boolean;
    showCloseButton?: boolean;
    status?: iconType;
    timeOut?: number;
    transitionIn?: transitionInType;
    transitionOut?: transitionOutType;
}

interface ConfirmToastrOptions {
    disableCancel?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
}

interface ConfirmToastrCustomOptions {
    component: Component<any, any>;
}

export interface Toastr {
    id: string;
    message?: string;
    options: BasicToastrOptions | LightToastrOptions;
    position: positionType;
    title?: string;
    type: toastType;
}

export interface AddToastPayload {
    id?: string;
    message?: string;
    options?: BasicToastrOptions | LightToastrOptions;
    position?: positionType;
    title?: string;
    type: toastType;
}

export interface ToastrState {
    confirm?: {
        id: string;
        message: string;
        options: ConfirmToastrOptions | ConfirmToastrCustomOptions;
        show: boolean;
    };
    toastrs: Toastr[];
}

interface ReduxToastrProps {
    confirmOptions?: {
        cancelText: string;
        okText: string;
    };
    newestOnTop?: boolean;
    options?: any; // This is currently not used, waiting for response from the package author to remove
    position?: positionType
    preventDuplicates?: boolean;
    progressBar?: boolean;
    timeOut?: number;
    toastr?: ToastrState;
    transitionIn?: transitionInType;
    transitionOut?: transitionOutType;
}

interface EmitterOptions {
    icon?: iconType;
    timeOut?: number;
    removeOnHover?: boolean;
    removeOnClick?: boolean;
    component?: React.Component<any, any>;
    onShowComplete?: () => void;
    onHideComplete?: () => void;
}

interface ToastrEmitter {
    message: (title: string, message: string, options?: EmitterOptions) => void;
    info: (title: string, message: string, options?: EmitterOptions) => void;
    success: (title: string, message: string, options?: EmitterOptions) => void;
    warning: (title: string, message: string, options?: EmitterOptions) => void;
    error: (title: string, message: string, options?: EmitterOptions) => void;
    clean: () => void;
    confirm: (message: string, options: ConfirmToastrOptions) => void;
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

export default class ReduxToastr extends Component<ReduxToastrProps, {}> {}
export const actions: ActionCreator<Actions>;
export const reducer: Reducer<any>;
export const toastr: ToastrEmitter;
