import * as React from 'react';
import { CSSModule } from '../index';

export interface TabContentProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
}

declare class TabContent extends React.Component<TabContentProps> {}
export default TabContent;
