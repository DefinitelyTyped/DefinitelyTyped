import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Label extends React.Component<LabelProps> { }
declare namespace Label { }
export = Label

interface LabelProps extends React.HTMLProps<Label> {
  bsSize?: Sizes;
  bsStyle?: string;
}
