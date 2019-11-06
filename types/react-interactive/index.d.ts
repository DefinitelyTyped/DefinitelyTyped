// Type definitions for react-interactive 0.9
// Project: https://github.com/rafrex/react-interactive
// Definitions by: Daniel Santoro <https://github.com/DanudeSandstorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactNode, ReactElement, Component, SyntheticEvent, CSSProperties } from 'react';

export {};

export type IState = 'normal' | 'hover' | 'hoverActive' | 'touchActive' | 'keyActive';
export type Focus = false | 'tab' | 'mouse' | 'touch';
export type ClickType = "mouseClick" | "tapClick" | "keyClick";

export type State = {focus: Focus, iState: IState};

type ActiveProps = {
    active?: CSSProperties;
} | {
    hoverActive?: CSSProperties;
    touchActive?: CSSProperties;
    keyActive?: CSSProperties;
};

type FocusProps = {
    focus?: CSSProperties;
} | {
    focusFromTab?: CSSProperties;
    focusFromMouse?: CSSProperties;
    focusFromTouch?: CSSProperties;
};

export type InteractiveProps = FocusProps & ActiveProps & {
    // as: string | Component | ReactElement;
    as: any;

    hover?: CSSProperties;

    style?: CSSProperties;

    className?: string;

    onStateChange?: (arg0: {prevState: State, nextState: State, event: SyntheticEvent}) => void;

    setStateCallback?: (arg0: {prevState: State, nextState: State}) => void;

    onClick?: (event: SyntheticEvent, clickType: ClickType) => void;

    onTapTwo?: (event: Event) => void;
    onTapThree?: (event: Event) => void;
    onTapFour?: (event: Event) => void;

    tapTimeCutoff?: number;

    onLongPress?: (event: Event) => void;

    touchActiveTapOnly?: boolean;

    extraTouchNoTap?: boolean;

    nonContainedChild?: boolean;

    initialState?: State;

    forceState?: State;

    styleProperty?: object;

    refDOMNode?: (node: any) => any; // Not sure about this type

    focusToggleOff?: boolean;

    mutableProps?: boolean;

    interactiveChild?: boolean;

    wrapperStyle?: CSSProperties;

    wrapperClassName?: string;
};

export default class Interactive extends Component<InteractiveProps> {}
