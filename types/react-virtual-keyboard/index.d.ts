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
