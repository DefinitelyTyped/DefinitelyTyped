import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Well extends React.Component<WellProps> { }
declare namespace Well { }
export = Well

interface WellProps extends React.HTMLProps<Well> {
  bsSize?: Sizes;
  bsStyle?: string;
}
