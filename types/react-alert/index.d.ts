// Type definitions for react-alert 4.0
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type AlertPosition =
    | 'top left'
    | 'top right'
    | 'top center'
    | 'bottom left'
    | 'bottom right'
    | 'bottom center';

export type AlertType = 'info' | 'success' | 'error';
export type AlertTransition = 'fade' | 'scale';

export interface ProviderOptions {
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
     * The z-index of alerts
     *
     * Default value: 100
     */
    zIndex?: number;
}

export class Provider extends React.Component<ProviderOptions & {
    template: React.ComponentType
}> {}

export const Alert: React.Consumer<InjectedAlertProp>;

export interface AlertCustomOptions {
    /**
     * Custom timeout just for this one alert
     */
    timeout?: number;
    /**
     * Callback that will be executed after this alert open
     */
    onOpen?(): undefined;
    /**
     * Callback that will be executed after this alert is removed
     */
    onClose?(): undefined;
}

export interface AlertCustomOptionsWithType extends AlertCustomOptions {
    type?: AlertType;
}

export interface InjectedAlertProp {
    show(
        message?: string,
        options?: AlertCustomOptionsWithType
    ): InjectedAlertProp;
    remove(alert: InjectedAlertProp): undefined;
    success(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
    error(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
    info(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
}

export function withAlert<P extends { alert: InjectedAlertProp }>(
    c: React.ComponentType<P>
): React.ComponentType<Pick<P, Exclude<keyof P, 'alert'>>>;
