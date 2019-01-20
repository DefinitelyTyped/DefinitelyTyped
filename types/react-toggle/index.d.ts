// Type definitions for react-toggle 4.0
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";

export interface ToggleIcons {
    checked?: ReactNode;
    unchecked?: ReactNode;
}

export interface ToggleProps extends ReactDOM.InputHTMLAttributes<HTMLInputElement> {
    "aria-labelledby"?: string;
    "aria-label"?: string;
    icons?: boolean | ToggleIcons;
}

export default class Toggle extends Component<ToggleProps> {}
