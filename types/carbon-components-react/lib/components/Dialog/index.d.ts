import * as React from "react";
import { ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

// TODO: This passes its rest props to FocusScope which passes its rest props to an "as" component
export type ExcludedDialogPropKeys = "aria-labelledby" | "aria-modal" | "internalFocusRef" | "onKeyDown" | "role" | "tabIndex";
export interface DialogProps extends Omit<ReactDivAttr, ExcludedDialogPropKeys> {
    'aria-labelledby': string;
    children?: React.ReactNode | undefined;
    onDismiss?(): void;
}

export declare const Dialog: ForwardRefReturn<HTMLDivElement, DialogProps>;
