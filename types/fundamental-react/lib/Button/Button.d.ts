import * as React from "react";

export type ButtonOptions = "emphasized" | "transparent";

export type ButtonTypes = "standard" | "positive" | "negative" | "medium" | "ghost" | "attention";

export type ButtonProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    glyph?: string | undefined;
    option?: ButtonOptions | undefined;
    ref?: React.RefObject<HTMLButtonElement> | undefined;
    selected?: boolean | undefined;
    type?: ButtonTypes | undefined;
    typeAttr?: "submit" | "reset" | "button" | undefined;
    /** Determines whether the icon should be placed before the text */
    iconBeforeText?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

declare const Button: React.FunctionComponent<ButtonProps> & { displayName: "Button" };

export default Button;
