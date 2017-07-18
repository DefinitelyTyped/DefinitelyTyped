import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface ButtonGroupProps extends React.HTMLProps<ButtonGroup> {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  justified?: boolean;
  vertical?: boolean;
}

export default class ButtonGroup extends React.Component<ButtonGroupProps> { }
