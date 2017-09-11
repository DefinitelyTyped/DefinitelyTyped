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

interface TabBaseProps extends TransitionCallbacks {
  animation?: boolean;
  'aria-labelledby'?: string;
  bsClass?: string;
  eventKey?: any; // TODO: Add more specific type
  unmountOnExit?: boolean;
  tabClassName?: string;
  title?: any; // TODO: Add more specific type; Mark as non-optional
}
type TabProps = TabBaseProps & React.HTMLProps<Tab>;
