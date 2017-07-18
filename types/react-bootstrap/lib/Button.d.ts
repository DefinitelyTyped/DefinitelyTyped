import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface ButtonProps extends React.HTMLProps<Button> {
  bsClass?: string;
  active?: boolean;
  block?: boolean;
  bsStyle?: string;
  bsSize?: Sizes;
  componentClass?: React.ReactType;
  disabled?: boolean;
}
export default class Button extends React.Component<ButtonProps> { }
