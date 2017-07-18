import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface TooltipProps extends React.HTMLProps<Tooltip> {
  // Optional
  arrowOffsetLeft?: number | string;
  arrowOffsetTop?: number | string;
  bsSize?: Sizes;
  bsStyle?: string;
  placement?: string;
  positionLeft?: number;
  positionTop?: number;
}

export default class Tooltip extends React.Component<TooltipProps> { }
