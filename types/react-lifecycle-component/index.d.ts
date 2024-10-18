import { Component, ComponentClass, ComponentLifecycle } from "react";
import { Connect } from "react-redux";

export interface LifecycleStateProps<P = {}, S = {}> {
    component: ComponentClass<P, S>;
}

export interface LifecycleDispatchProps<P = {}, S = {}> extends ComponentLifecycle<P, S> {}

export interface Props<P = {}, S = {}> extends LifecycleStateProps<P, S>, LifecycleDispatchProps<P, S> {}

export class LifecycleComponent extends Component<Props<any, any>, any> {}

export function applyLifecycle<P = {}, S = {}>(
    component: ComponentClass<P, S>,
): ComponentClass<P & LifecycleDispatchProps<P, S>>;

export const connectWithLifecycle: Connect;
