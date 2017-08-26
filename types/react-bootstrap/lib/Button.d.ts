import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Button extends React.Component<ButtonProps> { }
declare namespace Button { }
export = Button

interface ButtonProps extends React.HTMLProps<Button> {
  bsClass?: string;
  active?: boolean;
  block?: boolean;
  bsStyle?: string;
  bsSize?: Sizes;
  componentClass?: React.ReactType;
  disabled?: boolean;
}
