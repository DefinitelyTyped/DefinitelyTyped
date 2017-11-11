import { CSSModule } from '../index';

export interface TabPaneProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
}

export const TabPane: React.StatelessComponent<TabPaneProps>;
export default TabPane;
