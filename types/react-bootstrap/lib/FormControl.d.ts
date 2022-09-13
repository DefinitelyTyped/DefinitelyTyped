import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import FormControlFeedback = require('./FormControlFeedback');
import FormControlStatic = require('./FormControlStatic');

declare namespace FormControl {
    export interface FormControlProps extends React.HTMLProps<FormControl> {
        bsClass?: string | undefined;
        bsSize?: Sizes | undefined;
        componentClass?: React.ElementType | undefined;
        id?: string | undefined;
        inputRef?: ((instance: HTMLInputElement) => void) | undefined;
        type?: string | undefined;
    }
}
declare class FormControl extends React.Component<FormControl.FormControlProps> {
    public static Feedback: typeof FormControlFeedback;
    public static Static: typeof FormControlStatic;
}
export = FormControl;
