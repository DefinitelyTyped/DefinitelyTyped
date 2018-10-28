import * as React from 'react';
import { CSSModule } from '../index';

export type TabContentProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class TabContent<T> extends React.Component<TabContentProps<T>> {}
export default TabContent;
