// Type definitions for react-toast-notifications 2.0
// Project: https://github.com/jossmac/react-toast-notifications
// Definitions by: Spencer Elliott <https://github.com/elliottsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactNode, ComponentType } from 'react';

export type AppearanceTypes = 'error' | 'info' | 'success' | 'warning';

export type Placement = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';

export interface ToastProps {
    appearance: AppearanceTypes;
    autoDismiss: boolean | number;
    autoDismissTimeout: number; // inherited from ToastProvider
    children: ReactNode;
    isRunning: boolean;
    onDismiss: (id?: string) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    placement: Placement;
    transitionDuration: number; // inherited from ToastProvider
    transitionState: TransitionState; // inherited from ToastProvider
}

export interface ToastConsumerContext {
    add: AddToast;
    remove: RemoveToast;
    toasts: Array<{
        content: ReactNode;
        id: string;
        appearance: AppearanceTypes;
    }>;
}

export interface ToastConsumerProps {
    children: (context: ToastConsumerContext) => ReactNode;
}

export interface ToastContainerProps {
    children: ReactNode;
    hasToasts: boolean;
    placement: Placement;
}

export interface ToastProviderProps {
    autoDismissTimeout?: number;
    children: ReactNode;
    components?: {
        ToastContainer?: ComponentType<ToastContainerProps>;
        Toast?: ComponentType<ToastProps>;
    };
    placement?: Placement;
    transitionDuration?: number;
}

export interface Options {
    appearance: AppearanceTypes;
    autoDismiss?: boolean;
    onDismiss?: (id: string) => void;
    pauseOnHover?: boolean;
}

export type AddToast = (content: ReactNode, options?: Options, callback?: (id: string) => void) => void;

export type RemoveToast = (id: string, callback: () => void) => void;

export const DefaultToastContainer: ComponentType<ToastContainerProps>;
export const DefaultToast: ComponentType<ToastProps>;
export const ToastConsumer: ComponentType<ToastConsumerProps>;
export const ToastProvider: ComponentType<ToastProviderProps>;
export function withToastManager(...args: any[]): any;
export function useToasts(): {
    addToast: AddToast;
    removeToast: RemoveToast;
    toastStack: Array<{
        content: ReactNode;
        id: string;
        appearance: AppearanceTypes;
    }>;
};
