import * as React from 'react';

declare class TabContainer extends React.Component<TabContainerProps> { }
declare namespace TabContainer { }
export = TabContainer

interface TabContainerProps extends React.HTMLAttributes<TabContainer> {
  activeKey?: any;
  defaultActiveKey?: any;
  generateChildId?: (eventKey: any, type: any) => string;
}
