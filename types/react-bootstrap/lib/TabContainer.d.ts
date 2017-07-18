import * as React from 'react';

interface TabContainerProps extends React.HTMLAttributes<TabContainer> {
  activeKey?: any;
  defaultActiveKey?: any;
  generateChildId?: (eventKey: any, type: any) => string;
}

export default class TabContainer extends React.Component<TabContainerProps> { }
