import * as React from 'react';
import { CSSModule } from '../index';

export interface TabContentProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
}

declare class TabContent<T> extends React.Component<TabContentProps> {}
export default TabContent;
