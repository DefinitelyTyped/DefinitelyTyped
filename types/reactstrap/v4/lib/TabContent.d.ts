import { CommonProps } from '../index';

interface Props extends CommonProps {
  activeTab?: number | string;
}

declare var TabContent: React.StatelessComponent<Props>;
export default TabContent;
