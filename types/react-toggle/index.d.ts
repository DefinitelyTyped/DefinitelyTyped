// Type definitions for react-toggle 4.0
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, InputHTMLAttributes, ReactNode } from "react";

export interface ToggleIcons {
    checked?: ReactNode;
    unchecked?: ReactNode;
}

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    "aria-labelledby"?: string;
    "aria-label"?: string;
    icons?: boolean | ToggleIcons;
}

export default class Toggle extends Component<ToggleProps> {}
