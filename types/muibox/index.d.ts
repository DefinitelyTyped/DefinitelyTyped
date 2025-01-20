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
    text?: string | undefined;
    color?: string | undefined;
    variant?: string | undefined;
    startIcon?: ReactNode | undefined;
    endIcon?: ReactNode | undefined;
}

export interface AlertOptions {
    title?: string | undefined;
    message?: string | ReactNode | undefined;
    ok?: DialogButtonOptions | undefined;
}

export interface ConfirmOptions extends AlertOptions {
    cancel?: DialogButtonOptions | undefined;
}

export interface PromptOptions extends ConfirmOptions {
    required?: boolean | undefined;
    defaultValue?: string | number | undefined;
    placeholder?: string | undefined;
}
