// Type definitions for react-alert 7.0
// Project: https://github.com/schiehll/react-alert
// Definitions by: Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Context, ComponentType } from 'react';
import { AlertContainer as AlertContainerV5 } from 'react-alert/v5';

export * from 'react-alert/v5';

export type AlertContainer = AlertContainerV5 & {
    removeAll(): void;
};

export interface InjectedAlertProps {
    alert: AlertContainer;
}
export function withAlert<P extends InjectedAlertProps = InjectedAlertProps>(
    context?: Context<P['alert']>,
): (c: ComponentType<P>) => ComponentType<Omit<P, 'alert'>>;

export function useAlert<T extends AlertContainer = AlertContainer>(context?: Context<T>): T;
