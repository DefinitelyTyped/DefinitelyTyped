// Type definitions for react-toggle 2.2
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, HTMLAttributes, ReactNode } from "react";

interface ToggleIcons {
    checked?: ReactNode;
    unchecked?: ReactNode;
}

interface ToggleProps extends HTMLAttributes<any> {
    "aria-labelledby"?: string;
    "aria-label"?: string;
    icons?: boolean | ToggleIcons;
}

export default class Toggle extends Component<ToggleProps, any> {}
