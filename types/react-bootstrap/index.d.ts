import * as React from "react";

export type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

export type Sizes = "xs" | "xsmall" | "sm" | "small" | "medium" | "lg" | "large";

export interface SelectCallback extends React.EventHandler<any> {
    (eventKey: any, e: React.SyntheticEvent<{}>): void;
    /**
     * @deprecated
     * This signature is a hack so can still derive from HTMLProps.
     * It does not reflect the underlying event and should not be used.
     */
    (e: React.MouseEvent<{}>): void;
}

export interface TransitionCallbacks {
    onEnter?(node: HTMLElement): any;
    onEntered?(node: HTMLElement): any;
    onEntering?(node: HTMLElement): any;
    onExit?(node: HTMLElement): any;
    onExited?(node: HTMLElement): any;
    onExiting?(node: HTMLElement): any;
}

export * from "./lib";
export as namespace ReactBootstrap;
