import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type TabPaneProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
} & T;

declare class TabPane<T = {[key: string]: any}> extends React.Component<TabPaneProps<T>> {}
export default TabPane;
