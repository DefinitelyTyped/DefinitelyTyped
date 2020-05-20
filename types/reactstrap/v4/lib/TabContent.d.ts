import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  activeTab?: number | string;
  className?: string;
  cssModule?: CSSModule;
}

declare var TabContent: React.StatelessComponent<Props>;
export default TabContent;
