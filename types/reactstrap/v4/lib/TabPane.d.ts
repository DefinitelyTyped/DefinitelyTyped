import { CommonProps } from '../index';

interface Props extends CommonProps {
  tabId?: number | string;
}

declare var TabPane: React.StatelessComponent<Props>;
export default TabPane;
