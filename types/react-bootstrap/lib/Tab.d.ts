import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';
import TabContainer from './TabContainer';
import TabPane from './TabPane';
import TabContent from './TabContent';

interface TabProps extends TransitionCallbacks, React.HTMLProps<Tab> {
  animation?: boolean;
  'aria-labelledby'?: string;
  bsClass?: string;
  eventKey?: any; // TODO: Add more specific type
  unmountOnExit?: boolean;
  tabClassName?: string;
}

export default class Tab extends React.Component<TabProps> {
  public static Container: typeof TabContainer;
  public static Content: typeof TabContent;
  public static Pane: typeof TabPane;
}
