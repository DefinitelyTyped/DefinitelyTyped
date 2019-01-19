import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace FormGroup {
    export interface FormGroupProps extends ReactDOM.HTMLProps<FormGroup> {
        bsClass?: string;
        bsSize?: Sizes;
        controlId?: string;
        validationState?: "success" | "warning" | "error" | null;
    }
}
declare class FormGroup extends React.Component<FormGroup.FormGroupProps> { }
export = FormGroup;
