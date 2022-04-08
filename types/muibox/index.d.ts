// Type definitions for muibox 1.3
// Project: https://github.com/chunkai1312/muibox
// Definitions by: Diego Mijelshon <https://github.com/diegose>, David DIVERRES <https://github.com/comxd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode } from "react";

export function DialogProvider(_: any): any;
export function useDialog(): Dialog;
export function withDialog(): (WrappedComponent: any) => (props: any) => any;

export interface Dialog {
    alert(options: AlertOptions | string): Promise<void>;
    confirm(options: ConfirmOptions | string): Promise<void>;
    prompt(options: PromptOptions | string): Promise<string>;
}

export interface DialogButtonOptions {
    text?: string;
    color?: string;
    variant?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export interface AlertOptions {
    title?: string;
    message?: string | ReactNode;
    ok?: DialogButtonOptions;
}

export interface ConfirmOptions extends AlertOptions {
    cancel?: DialogButtonOptions;
}

export interface PromptOptions extends ConfirmOptions {
    required?: boolean;
    defaultValue?: string | number;
    placeholder?: string;
}
