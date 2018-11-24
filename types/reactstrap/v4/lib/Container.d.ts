import { CommonProps } from '../index';

interface Props extends CommonProps {
  fluid?: boolean;
}

declare var Container: React.StatelessComponent<Props>;
export default Container;
