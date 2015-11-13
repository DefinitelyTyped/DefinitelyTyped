// Type definitions for redux-devtools 2.1.4
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />

declare module "redux-devtools" {
    export function devTools(): Function;
    export function persistState(sessionId: any, stateDeserializer?: Function, actionDeserializer?: Function): Function;
}

declare module "redux-devtools/lib/react" {
    import * as React from 'react';

    export class DevTools<P,S> extends React.Component<P, S> {

    }

    export interface DevToolsProps<S> {
        monitor: Function;
        store: Store<S>;
    }

    export interface Store<S> {
        devToolStore: DevToolStore<S>;
    }

    export class DevToolStore<S> extends React.Component<void, S> {
        dispatch: Redux.Dispatch;
    }

    export class DebugPanel extends React.Component<DebugPanelProps, void> { }

    export interface DebugPanelProps {
        position?: string;
        zIndex?: number;
        fontSize?: string;
        overflow?: string;
        opacity?: number;
        color?: string;
        left?: boolean|number;
        right?: boolean|number;
        top?: boolean|number;
        bottom?: boolean|number;
        maxHeight?: string;
        maxWidth?: string;
        wordWrap?: string;
        boxSizing?: string;
        boxShadow?: string;
        getStyle?: () => DebugPanelProps;
    }

    export class LogMonitor<S> extends React.Component<LogMonitorProps<S>, void> { }

    export interface LogMonitorProps<S> {
        computedStates?: ComputedState<S>[];
        currentStateIndex?: number;
        monitorState?: MonitorState;
        stagedActions?: Action[];
        skippedActions?: boolean[];
        reset?: Function;
        commit?: Function;
        rollback?: Function;
        sweep?: Function;
        toggleAction?: Function;
        jumpToState?: Function;
        setMonitorState?: Function;
        select?: Function;
        visibleOnLoad?: boolean;
        theme?: Theme|string;
    }

    export interface ComputedState<T> {
        state?: T;
        error?: string;
    }

    export interface MonitorState {
        isViable?: boolean;
    }

    export interface Action {
        type: string;
    }

    export interface Theme {
        scheme: string;
        author: string;
        base00: string;
        base01: string;
        base02: string;
        base03: string;
        base04: string;
        base05: string;
        base06: string;
        base07: string;
        base08: string;
        base09: string;
        base0A: string;
        base0B: string;
        base0C: string;
        base0D: string;
        base0E: string;
        base0F: string;
    }
}
