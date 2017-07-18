import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface SplitButtonProps extends React.HTMLProps<SplitButton> {
  bsStyle?: string;
  bsSize?: Sizes;
  dropdownTitle?: any; // TODO: Add more specific type
  dropup?: boolean;
  pullRight?: boolean;
}

export default class SplitButton extends React.Component<SplitButtonProps> { }
