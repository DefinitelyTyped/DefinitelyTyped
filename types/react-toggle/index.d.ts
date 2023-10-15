// Type definitions for react-toggle 4.0
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, InputHTMLAttributes, ReactNode } from "react";

export interface ToggleIcons {
    checked?: ReactNode | undefined;
    unchecked?: ReactNode | undefined;
}

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    "aria-labelledby"?: string | undefined;
    "aria-label"?: string | undefined;
    icons?: boolean | ToggleIcons | undefined;
}

export default class Toggle extends Component<ToggleProps> {}
