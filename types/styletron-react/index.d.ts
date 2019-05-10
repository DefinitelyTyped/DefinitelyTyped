// Type definitions for styletron-react 5.0
// Project: https://github.com/styletron/styletron
// Definitions by: Eric Taylor <https://github.com/erictaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';
import { driver, StandardEngine, StyleObject } from 'styletron-standard';

export { StyleObject, StandardEngine };

// From styletron-react types
export interface Reducer {
    // Static reducer
    (style: StyleObject): StyleObject;
    // Dynamic reducer
    (style: StyleObject, props: object): StyleObject;
}

export interface AssignmentCommutativeReducerContainer {
    assignmentCommutative: true;
    reducer: Reducer;
    style: StyleObject;
    factory: (style: StyleObject) => AssignmentCommutativeReducerContainer;
}

export interface NonAssignmentCommutativeReducerContainer {
    assignmentCommutative: false;
    reducer: Reducer;
}

export type ReducerContainer =
    | AssignmentCommutativeReducerContainer
    | NonAssignmentCommutativeReducerContainer;

export type StackIndex = number;

// See addDebugMetadata in dev-tool.js
export interface StackInfo {
    stack: string | undefined;
    stacktrace: any;
    message: string;
}

export type StyletronBase = React.ElementType;
export type StyletronDriver = typeof driver;
export type StyletronGetInitialStyle = () => StyleObject;
export type StyletronWrapper = (fc: React.FC<any>) => React.ComponentType<any>;

export interface Styletron {
    reducers: ReadonlyArray<ReducerContainer>;
    base: StyletronBase;
    driver: StyletronDriver;
    wrapper: StyletronWrapper;
    getInitialStyle: StyletronGetInitialStyle;
    debug?: {
        stackIndex: StackIndex;
        stackInfo: StackInfo;
    };
}

export type StyletronComponent<Props> = React.FC<Props> & {
    __STYLETRON__: Styletron;
};

export interface StyledFn {
    <
        C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
        P extends object
    >(
        component: C,
        style: (props: P) => StyleObject
    ): StyletronComponent<
        Pick<
            React.ComponentProps<C>,
            Exclude<keyof React.ComponentProps<C>, { className: string }>
        > &
            P
    >;
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
        component: C,
        style: StyleObject
    ): StyletronComponent<
        Pick<
            React.ComponentProps<C>,
            Exclude<keyof React.ComponentProps<C>, { className: string }>
        >
    >;
}

export interface WithStyleFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        style: (props: P) => StyleObject
    ): StyletronComponent<React.ComponentProps<C> & P>;
    <C extends StyletronComponent<any>>(
        component: C,
        style: StyleObject
    ): StyletronComponent<React.ComponentProps<C>>;
}

export interface WithTransformFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        style: (style: StyleObject, props: P) => StyleObject
    ): StyletronComponent<React.ComponentProps<C> & P>;
}

export interface WithWrapperFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        wrapper: (component: C) => React.ComponentType<P>
    ): StyletronComponent<React.ComponentProps<C> & P>;
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// End of style-types

export class BrowserDebugEngine {
    debug(stack: { stackIndex: StackIndex; stackInfo: StackInfo }): string;
}

export class NoopDebugEngine {
    debug(): void;
}

export type DebugEngine = BrowserDebugEngine | NoopDebugEngine;

export interface DevProviderProps {
    children: React.ReactNode;
    value: StandardEngine;
    debugAfterHydration?: boolean;
    /** DebugEngineContext */
    debug?: DebugEngine;
}

export class DevProvider extends React.Component<
    DevProviderProps,
    { hydrating: boolean }
> {}

export const Provider: typeof DevProvider | React.Provider<StandardEngine>;

export function DevConsumer(props: {
    children: (
        styletronEngine: StandardEngine,
        debugEngine: DebugEngine,
        hydrating: boolean
    ) => React.ReactNode;
}): JSX.Element;

/**
 * @param style the StyleObject
 * @returns string to be used in className prop of JSX.Element
 */
export type CSSFn = (style: StyleObject) => string;

export function useStyletron(): Readonly<[CSSFn]>;

export interface CreateStyledOptions {
    getInitialStyle: StyletronGetInitialStyle;
    driver: StyletronDriver;
    wrapper: StyletronWrapper;
}

export function createStyled(options: CreateStyledOptions): StyledFn;

export const styled: ReturnType<typeof createStyled>;

export function createStyledElementComponent(
    styletron: Styletron
): StyletronComponent<any>;

// export const withTransform: WithTransformFn;
export function withTransform<C extends StyletronComponent<any>, P>(
    component: C,
    style: (style: StyleObject, props: P) => StyleObject
): StyletronComponent<React.ComponentProps<C> & P>;

// export const withStyleDeep: WithStyleFn;
export function withStyleDeep<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    P
>(
    component: C,
    style: (props: P) => StyleObject
): StyletronComponent<
    Pick<
        React.ComponentProps<C>,
        Exclude<keyof React.ComponentProps<C>, { className: string }>
    > &
        P
>;
export function withStyleDeep<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>
>(
    component: C,
    style: StyleObject
): StyletronComponent<
    Pick<
        React.ComponentProps<C>,
        Exclude<keyof React.ComponentProps<C>, { className: string }>
    >
>;

export const withStyle: typeof withStyleDeep;

// export const withWrapper: WithWrapperFn;
export function withWrapper<C extends StyletronComponent<any>, P>(
    component: C,
    wrapper: (component: C) => React.ComponentType<P>
): StyletronComponent<React.ComponentProps<C> & P>;

export function composeStatic(
    styletron: Styletron,
    reducerContainer: ReducerContainer
): Styletron;

export function composeDynamic<P>(
    styletron: Styletron,
    reducer: (style: StyleObject, props: P) => StyleObject
): Styletron;

export function staticComposeShallow(
    styletron: Styletron,
    style: StyleObject
): ReturnType<typeof composeStatic>;

export function staticComposeDeep(
    styletron: Styletron,
    style: StyleObject
): ReturnType<typeof composeStatic>;

export function dynamicComposeShallow<P>(
    styletron: Styletron,
    styleArg: (props: P) => StyleObject
): ReturnType<typeof composeDynamic>;

export function dynamicComposeDeep<P>(
    styletron: Styletron,
    styleArg: (props: P) => StyleObject
): ReturnType<typeof composeDynamic>;

export function autoComposeShallow<P>(
    styletron: Styletron,
    styleArg: StyleObject | ((props: P) => StyleObject)
): ReturnType<typeof staticComposeShallow>;

export function autoComposeDeep<P>(
    styletron: Styletron,
    styleArg: StyleObject
): ReturnType<typeof staticComposeDeep>;
export function autoComposeDeep<P>(
    styletron: Styletron,
    styleArg: (props: P) => StyleObject
): ReturnType<typeof dynamicComposeDeep>;

export function createShallowMergeReducer(
    style: StyleObject
): AssignmentCommutativeReducerContainer;

export function createDeepMergeReducer(
    style: StyleObject
): AssignmentCommutativeReducerContainer;

// Utility functions
export function resolveStyle(
    getInitialStyle: () => StyleObject,
    reducers: ReadonlyArray<ReducerContainer>,
    props: object
): StyleObject;
