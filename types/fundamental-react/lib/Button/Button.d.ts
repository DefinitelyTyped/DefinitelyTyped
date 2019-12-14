import * as React from "react";

export type ButtonOptions = "emphasized" | "light";

export type ButtonTypes = "standard" | "positive" | "negative" | "medium";

export type ButtonProps = {
    className?: string;
    compact?: boolean;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    glyph?: string;
    /* Set to **true** if button is part of global navbar. */
    navbar?: boolean;
    /* Indicates the importance of the button. */
    option?: ButtonOptions;
    ref?: React.RefObject<HTMLButtonElement>;
    /* Set to **true** to set state of the button to "selected". */
    selected?: boolean;
    type?: ButtonTypes;
    /* Value for the `type` attribute on the `<button>` element. */
    typeAttr?: "submit" | "reset" | "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

declare const Button: React.FunctionComponent<ButtonProps> & {displayName: "Button"};

export default Button;
