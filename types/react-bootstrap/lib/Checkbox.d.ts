import * as React from 'react';

declare namespace Checkbox {
    export interface CheckboxProps extends React.HTMLProps<Checkbox> {
        bsClass?: string | undefined;
        disabled?: boolean | undefined;
        inline?: boolean | undefined;
        inputRef?: ((instance: HTMLInputElement) => void) | undefined;
        validationState?: "success" | "warning" | "error" | undefined;
    }
}
declare class Checkbox extends React.Component<Checkbox.CheckboxProps> { }
export = Checkbox;
