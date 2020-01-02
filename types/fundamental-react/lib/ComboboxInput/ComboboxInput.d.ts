import * as React from "react";
import { MenuProps } from "../Menu/Menu";

export type ComboboxInputProps = {
    /* An object containing a `Menu` component. */
    menu: React.ReactElement<MenuProps>;
    buttonProps?: object;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    className?: string;
    compact?: boolean;
    inputProps?: object;
    placeholder?: string;
    popoverProps?: object;
} & { [x: string]: any };

declare const ComboboxInput: React.FunctionComponent<ComboboxInputProps>;

export default ComboboxInput;
