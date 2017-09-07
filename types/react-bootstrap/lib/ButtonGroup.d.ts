import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class ButtonGroup extends React.Component<ButtonGroupProps> { }
declare namespace ButtonGroup { }
export = ButtonGroup

interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  justified?: boolean;
  vertical?: boolean;
}
