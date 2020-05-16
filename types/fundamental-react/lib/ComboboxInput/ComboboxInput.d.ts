import * as React from "react";
import { MenuProps } from "../Menu/Menu";

export type ComboboxInputProps = {
    buttonProps?: object;
    className?: string;
    compact?: boolean;
    disableStyles?: boolean;
    inputProps?: object;
    list: React.ReactNode;
    /* An object containing a `Menu` component. */
    menu: React.ReactElement<MenuProps>;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    placeholder?: string;
    popoverProps?: object;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string
    }
} & { [x: string]: any };

declare const ComboboxInput: React.FunctionComponent<ComboboxInputProps>;

export default ComboboxInput;
