import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface AlertProps extends React.HTMLProps<Alert> {
  bsSize?: Sizes;
  bsStyle?: string;
  closeLabel?: string;
  /** @deprecated since v0.29.0 */ dismissAfter?: number;
  onDismiss?: Function;
}

export default class Alert extends React.Component<AlertProps> { }
