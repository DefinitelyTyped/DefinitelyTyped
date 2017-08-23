import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class FormGroup extends React.Component<FormGroupProps> { }
declare namespace FormGroup { }
export = FormGroup

interface FormGroupProps extends React.HTMLProps<FormGroup> {
  bsClass?: string;
  bsSize?: Sizes;
  controlId?: string;
  validationState?: "success" | "warning" | "error";
}
