import * as React from 'react';
import { CSSModule } from '../index';

export type TabPaneProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
} & T;

declare class TabPane<T = {}> extends React.Component<TabPaneProps<T>> {}
export default TabPane;
