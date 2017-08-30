import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class SplitButton extends React.Component<SplitButtonProps> { }
declare namespace SplitButton { }
export = SplitButton

interface SplitButtonBaseProps {
  bsStyle?: string;
  bsSize?: Sizes;
  dropdownTitle?: any; // TODO: Add more specific type
  dropup?: boolean;
  pullRight?: boolean;
  title: any; // TODO: Add more specific type
}
type SplitButtonProps = SplitButtonBaseProps & React.HTMLProps<SplitButton>;
