import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Radio {
    export interface RadioProps extends ReactDOM.HTMLProps<Radio> {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        inputRef?: (instance: HTMLInputElement) => void;
        validationState?: "success" | "warning" | "error";
    }

}
declare class Radio extends React.Component<Radio.RadioProps> { }
export = Radio;
