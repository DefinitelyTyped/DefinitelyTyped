import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class SplitButton extends React.Component<SplitButtonProps> { }
declare namespace SplitButton { }
export = SplitButton

interface SplitButtonProps extends React.HTMLProps<SplitButton> {
  bsStyle?: string;
  bsSize?: Sizes;
  dropdownTitle?: any; // TODO: Add more specific type
  dropup?: boolean;
  pullRight?: boolean;
}
