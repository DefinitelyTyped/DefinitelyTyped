import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import * as FormControlFeedback from './FormControlFeedback';
import * as FormControlStatic from './FormControlStatic';

declare namespace FormControl {
    export interface FormControlProps extends React.HTMLProps<FormControl> {
        bsClass?: string;
        bsSize?: Sizes;
        componentClass?: React.ReactType;
        id?: string;
        inputRef?: (instance: HTMLInputElement) => void;
        type?: string;
    }
}
declare class FormControl extends React.Component<FormControl.FormControlProps> {
    public static Feedback: typeof FormControlFeedback;
    public static Static: typeof FormControlStatic;
}
export = FormControl;
