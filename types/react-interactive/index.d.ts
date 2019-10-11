// Type definitions for react-interactive 0.9.1
// Project: https://github.com/rafrex/react-interactive
// Definitions by: Daniel <https://github.com/DanudeSandstorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

declare module 'react-interactive' {
    import { ReactNode, ReactElement, Component, CSSProperties, SyntheticEvent } from 'react';

    export type iState = 'normal' | 'hover' | 'hoverActive' | 'touchActive' | 'keyActive';
    export type focus = false | 'tab' | 'mouse' | 'touch';
    export type clickType = "mouseClick" | "tapClick" | "keyClick";

    export type State = {focus: focus, iState: iState};

    type Hover = {
        hover?: CSSProperties;
    } | {
        hoverActive?: CSSProperties;
        touchActive?: CSSProperties;
        keyActive?: CSSProperties;
    }

    type Focus = {
        focus?: CSSProperties;
    } | {
        focusFromTab?: CSSProperties;
        focusFromMouse?: CSSProperties;
        focusFromTouch?: CSSProperties;
    }

    type InteractiveProps = Focus & Hover & {
        as: string | Component | ReactElement;

        style?: CSSProperties;

        className?: string;

        onStateChange?: (arg0: {prevState: State, nextState: State, event: SyntheticEvent}) => void;

        setStateCallback?: (arg0: {prevState: State, nextState: State}) => void;

        onClick?: (event: SyntheticEvent, clickType: clickType) => void;

        onTapTwo?: (event: Event) => void;

        tapTimeCutoff?: number;

        onLongPress?: (event: Event) => void;

        touchActiveTapOnly?: boolean; 

        extraTouchNoTap?: boolean;

        nonContainedChild?: boolean;

        initialState?: State;

        forceState?: State;

        styleProperty?: Object;

        refDOMNode?: (node: any) => any; // Not sure about this type

        focusToggleOff?: boolean;

        mutableProps?: boolean;

        interactiveChild?: boolean;

        wrapperStyle?: CSSProperties;

        wrapperClassName?: string;
    }

    export default class Interactive extends Component<InteractiveProps> {}
}