import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import * as InputGroupAddon from './InputGroupAddon';
import * as InputGroupButton from './InputGroupButton';

declare class InputGroup extends React.Component<InputGroupProps> {
  public static Addon: typeof InputGroupAddon;
  public static Button: typeof InputGroupButton;
}
declare namespace InputGroup { }
export = InputGroup

interface InputGroupProps extends React.HTMLProps<InputGroup> {
  bsClass?: string;
  bsSize?: Sizes;
}
