import { CSSModule } from '../index';

export interface TabPaneProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
}

declare const TabPane: React.StatelessComponent<TabPaneProps>;
export default TabPane;
