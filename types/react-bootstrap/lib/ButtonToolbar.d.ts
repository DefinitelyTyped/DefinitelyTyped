import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  justified?: boolean;
  vertical?: boolean;
}

export default class ButtonToolbar extends React.Component<ButtonToolbarProps> { }
