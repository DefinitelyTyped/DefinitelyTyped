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
