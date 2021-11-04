import * as React from 'react';

declare namespace Radio {
    export interface RadioProps extends React.HTMLProps<Radio> {
        bsClass?: string | undefined;
        disabled?: boolean | undefined;
        inline?: boolean | undefined;
        inputRef?: ((instance: HTMLInputElement) => void) | undefined;
        validationState?: "success" | "warning" | "error" | undefined;
    }

}
declare class Radio extends React.Component<Radio.RadioProps> { }
export = Radio;
