// Type definitions for react-alert 3.4
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactNode, Component, ComponentType } from 'react';

export type AlertPosition = 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';
export type AlertType = 'info' | 'success' | 'error';
export type AlertTransition = 'fade' | 'scale';

export interface AlertOptions {
    /**
     * The margin of each alert.
     *
     * Default: '10px'
     */
    offset?: string;

    /**
     * The position of the alerts in the page.
     *
     * Default: 'top center'
     */
    position?: AlertPosition;

    /**
     * Timeout to alert remove itself, if set to 0 it never removes itself.
     *
     * Default: 0
     */
    timeout?: number;

    /**
     * The default alert type used when calling this.props.alert.show.
     *
     * Default: 'info'
     */
    type?: AlertType;

    /**
     * The transition animation.
     *
     * Default: 'fade'
     */
    transition?: AlertTransition;

    /**
     * The z-index of alerts.
     *
     * Default: 100
     */
    zIndex?: number;
}

interface Alert {
    id: number;

    /**
     * The alert message.
     */
    message: ReactNode;

    options: AlertOptions;

    /**
     * A function that closes the alert.
     */
    close: () => void;
}

export interface AlertTemplateProps extends Omit<Alert, 'id'> {
    /**
     * The style contains only the margin given as offset.
     */
    style: { margin: string };
}

export interface AlertProviderProps extends AlertOptions {
    /**
     * The alert template to be used.
     */
    template: React.ComponentType<AlertTemplateProps>;
}

export class Provider extends Component<AlertProviderProps> {}

export type AlertCustomOptionsFactory<T> = T & {
    /**
     * Callback that will be executed after this alert open.
     */
    onOpen?(): void;

    /**
     * Callback that will be executed after this alert is removed.
     */
    onClose?(): void;
};

export interface AlertContainerFactory<T> {
    show(message?: ReactNode, options?: T): Alert;
    info(message?: ReactNode, options?: T): Alert;
    success(message?: ReactNode, options?: T): Alert;
    error(message?: ReactNode, options?: T): Alert;
    remove(alert: Alert): void;
}

export type AlertCustomOptions = AlertCustomOptionsFactory<AlertOptions>;
export type AlertContainer = AlertContainerFactory<AlertCustomOptions>;

export type InjectedAlertProps = { alert: AlertContainer };
export function withAlert<P extends InjectedAlertProps>(c: ComponentType<P>): ComponentType<Omit<P, 'alert'>>;
