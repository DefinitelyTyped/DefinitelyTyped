// Type definitions for react-lifecycle-component 2.0.5
// Project: https://github.com/JamieDixon/react-lifecycle-component
// Definitions by: Alexander Fisher <https://github.com/pixelshaded>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0.3

import { ComponentLifecycle, ComponentType, Component } from 'react';
import { Connect } from 'react-redux';

export interface LifecycleStateProps<P = {}> {
    component: ComponentType<P>;
}

export interface LifecycleDispatchProps<P = {}, S = {}> extends ComponentLifecycle<P, S> {}

export interface Props<P = {}, S = {}> extends LifecycleStateProps<P>, LifecycleDispatchProps<P, S> {}

export class LifecycleComponent extends Component<Props<any, any>, any> {}

export function applyLifecycle<P = {}, S = {}>(
    component: ComponentType<P>,
): ComponentType<P & LifecycleDispatchProps<P, S>>;

export const connectWithLifecycle: Connect;
