import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
  accordion?: boolean;
  activeKey?: any;
  bsSize?: Sizes;
  bsStyle?: string;
  defaultActiveKey?: any;
  onSelect?: SelectCallback;
}

export default class PanelGroup extends React.Component<PanelGroupProps> { }
