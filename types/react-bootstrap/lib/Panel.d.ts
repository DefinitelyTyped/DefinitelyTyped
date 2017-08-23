import * as React from 'react';
import { TransitionCallbacks, Sizes, SelectCallback } from 'react-bootstrap';

declare class Panel extends React.Component<PanelProps> { }
declare namespace Panel { }
export = Panel

interface PanelProps extends TransitionCallbacks, React.HTMLProps<Panel> {
  bsClass?: string;
  bsSize?: Sizes;
  bsStyle?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  eventKey?: any;
  expanded?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  onSelect?: SelectCallback;
}
