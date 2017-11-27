// Type definitions for react-toggle 2.2
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, HTMLAttributes, ReactNode } from "react";

export interface ToggleIcons {
    checked?: ReactNode;
    unchecked?: ReactNode;
}

export interface ToggleProps extends HTMLAttributes<any> {
    "aria-labelledby"?: string;
    "aria-label"?: string;
    icons?: boolean | ToggleIcons;
}

export default class Toggle extends Component<ToggleProps> {}
