// Type definitions for react-virtual-keyboard 1.0
// Project: https://github.com/utzel-butzel/react-virtual-keyboard
// Definitions by: Bogdan Surai <https://github.com/bsurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";

export interface ReactKeyboardOptions extends KeyboardOptions {
    accepted?: undefined; // You should use KeyboardProps.onAccepted event.
}

export type kbEvents = (event?: string | Event, keyboard?: Element, el?: Element) => void;

export interface KeyboardProps {
    name?: string | undefined;
    value?: string | undefined;
    options?: ReactKeyboardOptions | undefined;
    onAccepted?: kbEvents | undefined;
    onChange?: kbEvents | undefined;
    callbackParent?: kbEvents | undefined;
    placeholder?: string | undefined;
}

export interface KeyboardState {
    value: string;
    className: string;
}

export default class Keyboard extends Component<KeyboardProps, KeyboardState> {}
