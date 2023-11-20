import * as React from "react";
import { driver, StandardEngine, StyleObject } from "styletron-standard";

export { StandardEngine, StyleObject };

// From styletron-react types
export interface Reducer {
    // Static reducer = no props, dynamic requires props object
    (style: StyleObject, props?: object): StyleObject;
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

export type ReducerContainer = AssignmentCommutativeReducerContainer | NonAssignmentCommutativeReducerContainer;

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
    } | undefined;
}

export type StyleObjectFn<P extends object> = (props: P) => StyleObject;

export type $StyleProp<P extends object> = StyleObject | StyleObjectFn<P>;

export interface StyletronComponentInjectedProps<P extends object> {
    $as?: StyletronBase | undefined;
    $style?: $StyleProp<P> | undefined;
}

export type StyletronComponent<P extends object> = React.FC<P & StyletronComponentInjectedProps<P>> & {
    __STYLETRON__: Styletron;
};

export interface StyledFn {
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>, P extends object>(
        component: C,
        style: (props: P) => StyleObject,
    ): StyletronComponent<
        Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, { className: string }>> & P
    >;
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
        component: C,
        style: StyleObject,
    ): StyletronComponent<Pick<React.ComponentProps<C>, Exclude<keyof React.ComponentProps<C>, { className: string }>>>;
}

export interface WithStyleFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        style: (props: P) => StyleObject,
    ): StyletronComponent<React.ComponentProps<C> & P>;
    <C extends StyletronComponent<any>>(component: C, style: StyleObject): StyletronComponent<React.ComponentProps<C>>;
}

export interface WithTransformFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        style: (style: StyleObject, props: P) => StyleObject,
    ): StyletronComponent<React.ComponentProps<C> & P>;
}

export interface WithWrapperFn {
    <C extends StyletronComponent<any>, P extends object>(
        component: C,
        wrapper: (component: C) => React.ComponentType<P>,
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

export const DebugEngine: typeof BrowserDebugEngine | typeof NoopDebugEngine;

export type DebugEngine = BrowserDebugEngine | NoopDebugEngine;

export interface DevProviderProps {
    children: React.ReactNode;
    value: StandardEngine;
    debugAfterHydration?: boolean | undefined;
    /** DebugEngineContext */
    debug?: DebugEngine | undefined;
}

export class DevProvider extends React.Component<DevProviderProps, { hydrating: boolean }> {}

export const Provider: typeof DevProvider | React.Provider<StandardEngine>;

export function DevConsumer(props: {
    children: (styletronEngine: StandardEngine, debugEngine: DebugEngine, hydrating: boolean) => React.ReactNode;
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

export function createStyledElementComponent(styletron: Styletron): StyletronComponent<any>;

export const withTransform: WithTransformFn;

export const withStyleDeep: WithStyleFn;

/**
 * Aliases to withStyleDeep()
 * @deprecated use withStyleDeep()
 */
export const withStyle: typeof withStyleDeep;

export const withWrapper: WithWrapperFn;

export function composeStatic(styletron: Styletron, reducerContainer: ReducerContainer): Styletron;

export function composeDynamic(
    styletron: Styletron,
    reducer: (style: StyleObject, props: object) => StyleObject,
): Styletron;

export function staticComposeShallow(styletron: Styletron, style: StyleObject): ReturnType<typeof composeStatic>;

export function staticComposeDeep(styletron: Styletron, style: StyleObject): ReturnType<typeof composeStatic>;

export function dynamicComposeShallow(
    styletron: Styletron,
    styleArg: (props: object) => StyleObject,
): ReturnType<typeof composeDynamic>;

export function dynamicComposeDeep(
    styletron: Styletron,
    styleArg: (props: object) => StyleObject,
): ReturnType<typeof composeDynamic>;

export function autoComposeShallow(
    styletron: Styletron,
    styleArg: StyleObject | ((props: object) => StyleObject),
): ReturnType<typeof staticComposeShallow>;

export function autoComposeDeep(styletron: Styletron, styleArg: StyleObject): ReturnType<typeof staticComposeDeep>;
export function autoComposeDeep(
    styletron: Styletron,
    styleArg: (props: object) => StyleObject,
): ReturnType<typeof dynamicComposeDeep>;

export function createShallowMergeReducer(style: StyleObject): AssignmentCommutativeReducerContainer;

export function createDeepMergeReducer(style: StyleObject): AssignmentCommutativeReducerContainer;

// Utility functions
export function resolveStyle(
    getInitialStyle: () => StyleObject,
    reducers: ReadonlyArray<ReducerContainer>,
    props: object,
): StyleObject;
