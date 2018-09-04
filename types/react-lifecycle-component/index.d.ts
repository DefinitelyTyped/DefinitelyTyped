import { ComponentLifecycle, ComponentType, Component, ComponentClass } from 'react';
import {
    DispatchProp, InferableComponentEnhancer, InferableComponentEnhancerWithProps, MapDispatchToPropsParam,
    MapStateToPropsParam, MergeProps, Options, Connect
} from 'react-redux';

export interface LifecycleStateProps<P = {}> {
    component: ComponentType<P>;
}

export interface LifecycleDispatchProps<P = {}, S = {}> extends ComponentLifecycle<P, S> {
}

export interface Props<P = {}, S = {}> extends LifecycleStateProps<P>, LifecycleDispatchProps<P, S> {}

export class LifecycleComponent extends Component<Props<any, any>, any> {}

export function applyLifecycle<P = {}, S = {}>(
    component: ComponentType<P>,
): ComponentType<P & LifecycleDispatchProps<P, S>>;

export const connectWithLifecycle: Connect;
