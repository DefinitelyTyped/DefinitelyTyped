// Type definitions for react-virtual-keyboard 1.0
// Project: https://www.npmjs.com/package/react-virtual-keyboard
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
    name?: string;
    value?: string;
    options?: ReactKeyboardOptions;
    onAccepted?: kbEvents;
    onChange?: kbEvents;
    callbackParent?: kbEvents;
    placeholder?: string;
}

export interface KeyboardState {
    value: string;
    className: string;
}

export default class Keyboard extends Component<KeyboardProps, KeyboardState> { }
