import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

declare class PanelGroup extends React.Component<PanelGroupProps> { }
declare namespace PanelGroup { }
export = PanelGroup

interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
  accordion?: boolean;
  activeKey?: any;
  bsSize?: Sizes;
  bsStyle?: string;
  defaultActiveKey?: any;
  onSelect?: SelectCallback;
}
