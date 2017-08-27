import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class ButtonToolbar extends React.Component<ButtonToolbarProps> { }
declare namespace ButtonToolbar { }
export = ButtonToolbar

interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  justified?: boolean;
  vertical?: boolean;
}
