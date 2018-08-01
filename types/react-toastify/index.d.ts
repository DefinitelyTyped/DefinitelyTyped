// Type definitions for react-toastify 4.0
// Project: https://github.com/fkhadra/react-toastify#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Transition } from 'react-transition-group';

export type ToastCloseButton = React.ReactElement<any & { closeToast(): void }>;

export interface ToastAndToastContainerOptions {
    /**
     * @default 'top-right'
     */
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';

    /**
     * Delay in ms to close the toast. If set to false, the notification needs
     * to be closed manually.
     * @default 5000
     */
    autoClose?: false | number;

    /**
     * A React Component to replace the default close button or false to
     * hide the button.
     */
    closeButton?: false | ToastCloseButton;

    /**
     * A reference to a valid react-transition-group/Transition component.
     */
    transition?: Transition;

    /**
     * Display or not the progress bar below the toast (remaining time).
     * @default false
     */
    hideProgressBar?: boolean;

    /**
     * Keep the timer running or not on hover.
     * @default true
     */
    pauseOnHover?: boolean;

    /**
     * Dismiss toast on click.
     * @default true
     */
    closeOnClick?: boolean;

    /**
     * Add optional classes to the toast body.
     */
    bodyClassName?: string;

    /**
     * Add optional classes to the progress bar.
     */
    progressClassName?: string;

    /**
     * Allow toast to be draggable.
     * @default true
     */
    draggable?: boolean;

    /**
     * The percentage of the toast's width it takes for a drag to dismiss a
     * toast (value between 0 and 100).
     * @default 80
     */
    draggablePercent?: number;
}

export interface ToastContainerProps extends ToastAndToastContainerOptions {
    /**
     * Support right to left content.
     * @default false
     */
    rtl?: boolean;

    /**
     * Display newest toast on top.
     * @default false
     */
    newestOnTop?: boolean;

    /**
     * Pause on document visibility change (resizing the window, for
     * instance).
     * @default true
     */
    pauseOnVisibilityChange?: boolean;

    /**
     * Add optional inline style to the container.
     */
    style?: React.CSSProperties;

    /**
     * Add optional classes to the container.
     */
    className?: string;

    /**
     * Add optional classes to the toast.
     */
    toastClassName?: string;
}

export interface ToastOptions extends ToastAndToastContainerOptions {
    /**
     * Kind of notification.
     * @default 'default'
     */
    type?: 'default' | 'success' | 'info' | 'warning' | 'error';

    /**
     * Called inside componentDidMount.
     */
    onOpen?(childrenProps: React.Props<any>): void;

    /**
     * Called inside componentWillUnmount.
     */
    onClose?(childrenProps: React.Props<any>): void;

    /**
     * Add optional classes to the toast.
     */
    className?: string;

    /**
     * String or React Element, only available when calling update.
     */
    render?: string | React.ReactElement<any>;
}

export interface Toast {
    /**
     * @return The ID of the toast, for future reference.
     */
    (content: React.ReactNode | ((props: { closeToast(): void }) => React.ReactNode), options?: ToastOptions): string;

    /**
     * Dismiss the toast with the given ID, or all toasts if no ID is given.
     */
    dismiss(toastId?: string): void;

    /**
     * Test if the toast with the given ID is active.
     */
    isActive(toastId?: string): boolean;

    /**
     * Shorthand for a toast with `type: toast.TYPE.SUCCESS`.
     */
    success(content: React.ReactNode, options?: ToastOptions): string;

    /**
     * Shorthand for a toast with `type: toast.TYPE.INFO`.
     */
    info(content: React.ReactNode, options?: ToastOptions): string;

    /**
     * Shorthand for a toast with `type: toast.TYPE.WARNING`.
     */
    warning(content: React.ReactNode, options?: ToastOptions): string;

    /**
     * Shorthand for a toast with `type: toast.TYPE.ERROR`.
     */
    error(content: React.ReactNode, options?: ToastOptions): string;

    /**
     * Update an existing toast by ID.
     */
    update(id: string, options: ToastOptions & { render: React.ReactNode }): void;

    POSITION: {
        TOP_LEFT: 'top-left'
        TOP_RIGHT: 'top-right'
        TOP_CENTER: 'top-center'
        BOTTOM_LEFT: 'bottom-left'
        BOTTOM_RIGHT: 'bottom-right'
        BOTTOM_CENTER: 'bottom-center'
    };

    TYPE: {
        INFO: 'info'
        SUCCESS: 'success'
        WARNING: 'warning'
        ERROR: 'error'
        DEFAULT: 'default'
    };
}

export interface CssTransitionOptions {
    /** The class name that will be used when the toast enters. */
    enter: string;
    /** The class name that will be used when the toast exits. */
    exit: string;
    /**
     * The transition duration in ms.
     * @default 750
     */
    duration?: number | number[];
    /**
     * Append or not the position to the class name:
     * yourClassName--top-right, yourClassName--bottom-left...
     * @default false
     */
    appendPosition?: boolean;
}

export function cssTransition(options: CssTransitionOptions): Transition;

export const ToastContainer: React.StatelessComponent<ToastContainerProps>;
export const toast: Toast;

export const Bounce: Transition;
export const Slide: Transition;
export const Zoom: Transition;
export const Flip: Transition;
