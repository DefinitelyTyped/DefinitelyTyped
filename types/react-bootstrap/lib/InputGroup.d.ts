import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import InputGroupAddon from './InputGroupAddon';
import InputGroupButton from './InputGroupButton';

interface InputGroupProps extends React.HTMLProps<InputGroup> {
  bsClass?: string;
  bsSize?: Sizes;
}

export default class InputGroup extends React.Component<InputGroupProps> {
  public static Addon: typeof InputGroupAddon;
  public static Button: typeof InputGroupButton;
}
