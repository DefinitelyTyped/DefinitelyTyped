import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type TabContentProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class TabContent<T> extends React.Component<TabContentProps<T>> {}
export default TabContent;
