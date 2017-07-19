import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare class TabPane extends React.Component<TabPaneProps> { }
declare namespace TabPane { }
export = TabPane

interface TabPaneProps extends TransitionCallbacks, React.HTMLProps<TabPane> {
  animation?: boolean | React.ComponentClass<any>;
  'aria-labelledby'?: string;
  bsClass?: string;
  eventKey?: any;
  unmountOnExit?: boolean;
}
