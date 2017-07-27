import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
}

declare var TabPane: React.StatelessComponent<Props>;
export default TabPane;
