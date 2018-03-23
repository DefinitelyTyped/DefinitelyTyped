import { CSSModule } from '../index';

export interface TabContentProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
}

declare const TabContent: React.StatelessComponent<TabContentProps>;
export default TabContent;
