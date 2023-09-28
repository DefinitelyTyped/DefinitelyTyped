// Type definitions for react-better-password 1.0
// Project: https://github.com/karaggeorge/react-better-password, https://karaggeorge.github.io/react-better-password
// Definitions by: Mary Huynh <https://github.com/mhuynh1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
export interface PasswordProps {
    className?: string | undefined;
    mask?: "•" | string | undefined;
    onChange?: ((value: string) => void) | undefined;
    placeholder?: string | undefined;
    show?: boolean | undefined;
    timeout?: number | undefined;
    value?: string | undefined;
}
export default class Password extends React.Component<PasswordProps> {}
