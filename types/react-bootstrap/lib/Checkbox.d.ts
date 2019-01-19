import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Checkbox {
    export interface CheckboxProps extends ReactDOM.HTMLProps<Checkbox> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }
}
declare class Checkbox extends React.Component<Checkbox.CheckboxProps> { }
export = Checkbox;
