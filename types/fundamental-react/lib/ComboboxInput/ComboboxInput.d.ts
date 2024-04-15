import * as React from "react";
import { MenuProps } from "../Menu/Menu";

export type ComboboxInputProps = {
    buttonProps?: object | undefined;
    className?: string | undefined;
    compact?: boolean | undefined;
    disableStyles?: boolean | undefined;
    inputProps?: object | undefined;
    list: React.ReactNode;
    /* An object containing a `Menu` component. */
    menu: React.ReactElement<MenuProps>;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    placeholder?: string | undefined;
    popoverProps?: object | undefined;
    validationState?: {
        state?: "error" | "warning" | "information" | "success" | undefined;
        text?: string | undefined;
    } | undefined;
} & { [x: string]: any };

declare const ComboboxInput: React.FunctionComponent<ComboboxInputProps>;

export default ComboboxInput;
