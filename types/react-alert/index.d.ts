// Type definitions for react-alert 7.0
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The 7.x definition also applies to [6.x, 5.x].
//
// Some points to note:
//
// 1. `alert.removeAll()` has been added since `6.x`.

import { CSSProperties, ReactNode, ComponentType, Component, Context } from 'react';

export type AlertPositionV4 =
    | 'top left'
    | 'top center'
    | 'top right'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right';
export type AlertPosition = AlertPositionV4 | 'middle left' | 'middle' | 'middle right';
export type AlertType = 'info' | 'success' | 'error';
export type AlertTransition = 'fade' | 'scale';
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
export interface Types {
    INFO: 'info';
    SUCCESS: 'success';
    ERROR: 'error';
}
export interface Transitions {
    FADE: 'fade';
    SCALE: 'scale';
}

export const positions: Positions;
export const types: Types;
export const transitions: Transitions;

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
     * Default: positions.TOP_CENTER
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
     * Default: types.INFO
     */
    type?: AlertType | undefined;

    /**
     * The transition animation.
     *
     * Default: transitions.FADE
     */
    transition?: AlertTransition | undefined;

    /**
     * Style to be applied in the alerts container.
     *
     * Default: {
     *   zIndex: 100,
     * }
     */
    containerStyle?: CSSProperties | undefined;
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
     * Explicit children for future @types/react.
     *
     * See: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59306.
     */
    children?: ReactNode | undefined;

    /**
     * The alert template to be used.
     */
    template: React.ComponentType<AlertTemplateProps>;

    context?: Context<AlertContainer> | undefined;
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
    removeAll(): void;
}
export type AlertContainer = AlertContainerFactory<AlertCustomOptions>;

export interface InjectedAlertProps {
    alert: AlertContainer;
}
export function withAlert<P extends InjectedAlertProps = InjectedAlertProps>(
    context?: Context<P['alert']>,
): (c: ComponentType<P>) => ComponentType<Omit<P, 'alert'>>;

export function useAlert<T extends AlertContainer = AlertContainer>(context?: Context<T>): T;
