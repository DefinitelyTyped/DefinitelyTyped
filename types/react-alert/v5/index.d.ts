// Type definitions for react-alert 5.5
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CSSProperties, ComponentType, Context, Component } from 'react';
import {
    AlertPosition as AlertPositionV4,
    AlertOptions as AlertOptionsV4,
    AlertTemplateProps,
    AlertCustomOptionsFactory,
    AlertContainerFactory,
} from '../v4';

export { AlertType, AlertTransition, AlertTemplateProps } from '../v4';

export type AlertPosition = AlertPositionV4 | 'middle left' | 'middle' | 'middle right';
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

export interface AlertOptions extends Omit<AlertOptionsV4, 'position' | 'zIndex'> {
    /**
     * The position of the alerts in the page.
     *
     * Default: positions.TOP_CENTER
     */
    position?: AlertPosition;

    /**
     * Style to be applied in the alerts container.
     *
     * Default: {
     *   zIndex: 100,
     * }
     */
    containerStyle?: CSSProperties;
}

export interface AlertProviderProps extends AlertOptions {
    /**
     * The alert template to be used.
     */
    template: React.ComponentType<AlertTemplateProps>;

    context?: Context<AlertContainer>;
}

export class Provider extends Component<AlertProviderProps> {}

export type AlertCustomOptions = AlertCustomOptionsFactory<AlertOptions>;
export type AlertContainer = AlertContainerFactory<AlertCustomOptions>;

export interface InjectedAlertProps {
    alert: AlertContainer;
}
export function withAlert<P extends InjectedAlertProps = InjectedAlertProps>(
    context?: Context<P['alert']>,
): (c: ComponentType<P>) => ComponentType<Omit<P, 'alert'>>;

export function useAlert<T extends AlertContainer = AlertContainer>(context?: Context<T>): T;
