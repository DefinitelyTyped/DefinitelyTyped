import * as React from 'react';

interface TabContentProps extends React.HTMLProps<TabContent> {
  componentClass?: React.ReactType,
  animation?: boolean | React.ReactType;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

export default class TabContent extends React.Component<TabContentProps> { }
