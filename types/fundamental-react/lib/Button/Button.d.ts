import * as React from "react";

export type ButtonOptions = "emphasized" | "light";

export type ButtonTypes = "standard" | "positive" | "negative" | "medium";

export type ButtonProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    /* Set to **true** if button triggers a dropdown list. */
    dropdown?: boolean;
    glyph?: string;
    /* Set to **true** if button is part of global navbar. */
    navbar?: boolean;
    /* Indicates the importance of the button. */
    option?: ButtonOptions;
    /* Set to **true** to set state of the button to "selected". */
    selected?: boolean;
    type?: ButtonTypes;
    /* Value for the `type` attribute on the `<button>` element. */
    typeAttr?: "submit" | "reset" | "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & { [x: string]: any };

declare const Button: React.FunctionComponent<ButtonProps>;

export default Button;
