import * as React from "react";

export type ButtonOptions = "emphasized" | "transparent";

export type ButtonTypes = "standard" | "positive" | "negative" | "medium";

export type ButtonProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    glyph?: string;
    option?: ButtonOptions;
    ref?: React.RefObject<HTMLButtonElement>;
    selected?: boolean;
    type?: ButtonTypes;
    typeAttr?: "submit" | "reset" | "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

declare const Button: React.FunctionComponent<ButtonProps> & {displayName: "Button"};

export default Button;
