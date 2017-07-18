import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

interface TabsProps extends React.HTMLProps<Tabs> {
  activeKey?: any;
  animation?: boolean;
  bsStyle?: string;
  defaultActiveKey?: any;
  onSelect?: SelectCallback;
  paneWidth?: any; // TODO: Add more specific type
  position?: string;
  tabWidth?: any; // TODO: Add more specific type
  unmountOnExit?: boolean;
  justified?: boolean;
}

export default class Tabs extends React.Component<TabsProps> { }
