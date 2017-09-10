import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Alert extends React.Component<AlertProps> { }
declare namespace Alert { }
export = Alert

interface AlertProps extends React.HTMLProps<Alert> {
  bsSize?: Sizes;
  bsStyle?: string;
  closeLabel?: string;
  /** @deprecated since v0.29.0 */ dismissAfter?: number;
  onDismiss?: Function;
}
