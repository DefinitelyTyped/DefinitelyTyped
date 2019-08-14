// Type definitions for react-alert 5.2
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type AlertPosition =
    | 'top left'
    | 'top center'
    | 'top right'
    | 'middle left'
    | 'middle'
    | 'middle right'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right';

export interface Positions {
    TOP_LEFT: 'top left';
    TOP_CENTER: 'top center';
    TOP_RIGHT: 'top right';
    MIDDLE_LEFT: 'middle left';
    MIDDLE: 'middle';
    MIDDLE_RIGHT: 'middle right';
    BOTTOM_LEFT: 'bottom left';
    BOTTOM_CENTER: 'bottom center';
    BOTTOM_RIGHT: 'bottom right';
}

export const positions: Positions;

export type AlertType = 'info' | 'success' | 'error';

export interface Types {
    INFO: 'info';
    SUCCESS: 'success';
    ERROR: 'error';
}

export const types: Types;

export type AlertTransition = 'fade' | 'scale';

export interface Transitions {
    FADE: 'fade';
    SCALE: 'scale';
}

export const transitions: Transitions;

export interface AlertProviderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The margin of each alert
     *
     * Default value: '10px'
     */
    offset?: string;
    /**
     * The position of the alerts in the page
     *
     * Default value: 'top center'
     */
    position?: AlertPosition;
    /**
     * Timeout to alert remove itself, if  set to 0 it never removes itself
     *
     * Default value: 0
     */
    timeout?: number;
    /**
     * The default alert type used when calling this.props.alert.show
     *
     * Default value: 'info'
     */
    type?: AlertType;
    /**
     * The transition animation
     *
     * Default value: 'fade'
     */
    transition?: AlertTransition;
    /**
     * The style of the alert container
     *
     * Default z-index value: 100
     */
    containerStyle?: React.CSSProperties;
    /**
     * The alert component for each message
     */
    template: React.ComponentType<AlertComponentPropsWithStyle>;
    /**
     * Custom context to separate alerts.
     */
    context?: React.Context<AlertManager | undefined>;
}

export interface AlertComponentProps {
    id: string;
    message: React.ReactNode;
    options: AlertCustomOptionsWithType;
    close(): void;
}

export interface AlertComponentPropsWithStyle extends AlertComponentProps {
    style: React.CSSProperties;
}

export class Provider extends React.Component<AlertProviderProps> {}

export interface AlertCustomOptions {
    /**
     * Custom timeout just for this one alert
     */
    timeout?: number;
    /**
     * Callback that will be executed after this alert open
     */
    onOpen?(): void;
    /**
     * Callback that will be executed after this alert is removed
     */
    onClose?(): void;
}

export interface AlertCustomOptionsWithType extends AlertCustomOptions {
    type?: AlertType;
}

export interface AlertManager {
    root?: HTMLElement;
    alerts: AlertComponentProps[];
    show(
        message?: React.ReactNode,
        options?: AlertCustomOptionsWithType
    ): AlertComponentProps;
    remove(alert: AlertComponentProps): void;
    success(message?: React.ReactNode, options?: AlertCustomOptions): AlertComponentProps;
    error(message?: React.ReactNode, options?: AlertCustomOptions): AlertComponentProps;
    info(message?: React.ReactNode, options?: AlertCustomOptions): AlertComponentProps;
}

export function withAlert<P extends { alert: AlertManager }>(context?: React.Context<AlertManager | undefined>):
    (c: React.ComponentType<P>) =>
        React.ComponentType<Pick<P, Exclude<keyof P, 'alert'>>>;

export function useAlert(context?: React.Context<AlertManager | undefined>): AlertManager;
