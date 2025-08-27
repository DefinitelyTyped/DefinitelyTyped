import { ComponentClass, InputHTMLAttributes, ReactNode } from "react";

declare namespace Toggle {
    interface ToggleIcons {
        checked?: ReactNode | undefined;
        unchecked?: ReactNode | undefined;
    }

    interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
        icons?: boolean | ToggleIcons | undefined;
        defaultChecked?: boolean | undefined;
    }
}

declare const Toggle: ComponentClass<Toggle.ToggleProps>;

export = Toggle;
