import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace FormGroup {
    export interface FormGroupProps extends React.HTMLProps<FormGroup> {
        bsClass?: string | undefined;
        bsSize?: Sizes | undefined;
        controlId?: string | undefined;
        validationState?: "success" | "warning" | "error" | null | undefined;
    }
}
declare class FormGroup extends React.Component<FormGroup.FormGroupProps> { }
export = FormGroup;
