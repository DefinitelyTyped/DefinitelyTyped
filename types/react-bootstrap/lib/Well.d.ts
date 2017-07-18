import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface WellProps extends React.HTMLProps<Well> {
  bsSize?: Sizes;
  bsStyle?: string;
}

export default class Well extends React.Component<WellProps> { }
