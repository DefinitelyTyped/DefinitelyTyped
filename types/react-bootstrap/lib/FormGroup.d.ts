import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface FormGroupProps extends React.HTMLProps<FormGroup> {
  bsClass?: string;
  bsSize?: Sizes;
  controlId?: string;
  validationState?: "success" | "warning" | "error";
}

export default class FormGroup extends React.Component<FormGroupProps> { }
