// Type definitions for react-toggle 2.2
// Project: https://github.com/aaronshaf/react-toggle
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
