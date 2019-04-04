import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
  tabId?: number | string;
}

declare var TabPane: React.StatelessComponent<Props>;
export default TabPane;
