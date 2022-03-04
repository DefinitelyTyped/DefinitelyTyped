// Type definitions for react-alert 4.0
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode, ComponentType, Component, Consumer } from 'react';

export type AlertPosition = 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';
export type AlertType = 'info' | 'success' | 'error';
export type AlertTransition = 'fade' | 'scale';

export interface AlertOptions {
    /**
     * The margin of each alert.
     *
     * Default: '10px'
     */
    offset?: string | undefined;

    /**
     * The position of the alerts in the page.
     *
     * Default: 'top center'
     */
    position?: AlertPosition | undefined;

    /**
     * Timeout to alert remove itself, if set to 0 it never removes itself.
     *
     * Default: 0
     */
    timeout?: number | undefined;

    /**
     * The default alert type used when calling this.props.alert.show.
     *
     * Default: 'info'
     */
    type?: AlertType | undefined;

    /**
     * The transition animation.
     *
     * Default: 'fade'
     */
    transition?: AlertTransition | undefined;

    /**
     * The z-index of alerts.
     *
     * Default: 100
     */
    zIndex?: number | undefined;
}

export interface AlertInstance {
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

export interface AlertTemplateProps extends Omit<AlertInstance, 'id'> {
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

export interface AlertCustomOptions extends AlertOptions {
    /**
     * Callback that will be executed after this alert open.
     */
    onOpen?: () => void | undefined;

    /**
     * Callback that will be executed after this alert is removed.
     */
    onClose?: () => void | undefined;
}

export interface AlertContainerFactory<T> {
    show(message?: ReactNode, options?: T): AlertInstance;
    info(message?: ReactNode, options?: T): AlertInstance;
    success(message?: ReactNode, options?: T): AlertInstance;
    error(message?: ReactNode, options?: T): AlertInstance;
    remove(alert: AlertInstance): void;
}
export type AlertContainer = AlertContainerFactory<AlertCustomOptions>;

export interface InjectedAlertProps {
    alert: AlertContainer;
}
export function withAlert<P extends InjectedAlertProps>(c: ComponentType<P>): ComponentType<Omit<P, 'alert'>>;

export const Alert: Consumer<AlertContainer>;
