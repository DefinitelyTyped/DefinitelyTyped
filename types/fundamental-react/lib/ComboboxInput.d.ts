import * as React from "react";
import { MenuProps } from "./Menu";

export type ComboboxInputProps = {
    /* An object containing a `Menu` component. */
    menu: React.ReactElement<MenuProps>;
    buttonProps?: object;
    className?: string;
    compact?: boolean;
    inputProps?: object;
    placeholder?: string;
    popoverProps?: object;
} & { [x: string]: any };

export const ComboboxInput: React.FunctionComponent<ComboboxInputProps>;
