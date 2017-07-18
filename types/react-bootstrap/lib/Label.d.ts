import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface LabelProps extends React.HTMLProps<Label> {
  bsSize?: Sizes;
  bsStyle?: string;
}

export default class Label extends React.Component<LabelProps> { }
