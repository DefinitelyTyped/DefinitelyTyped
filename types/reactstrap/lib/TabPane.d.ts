import * as React from 'react';
import { CSSModule } from '../index';

export interface TabPaneProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
}

declare class TabPane<T = {[key: string]: any}> extends React.Component<TabPaneProps> {}
export default TabPane;
