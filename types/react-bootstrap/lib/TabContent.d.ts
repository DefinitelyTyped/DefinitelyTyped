import * as React from 'react';

declare class TabContent extends React.Component<TabContentProps> { }
declare namespace TabContent { }
export = TabContent

interface TabContentProps extends React.HTMLProps<TabContent> {
  componentClass?: React.ReactType,
  animation?: boolean | React.ReactType;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}
