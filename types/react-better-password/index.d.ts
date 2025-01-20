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
