import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';
import * as TabContainer from './TabContainer';
import * as TabPane from './TabPane';
import * as TabContent from './TabContent';

declare class Tab extends React.Component<TabProps> {
  public static Container: typeof TabContainer;
  public static Content: typeof TabContent;
  public static Pane: typeof TabPane;
}
declare namespace Tab { }
export = Tab

interface TabProps extends TransitionCallbacks, React.HTMLProps<Tab> {
  animation?: boolean;
  'aria-labelledby'?: string;
  bsClass?: string;
  eventKey?: any; // TODO: Add more specific type
  unmountOnExit?: boolean;
  tabClassName?: string;
}
