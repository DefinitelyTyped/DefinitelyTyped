import { CommonProps } from '../index';

interface Props extends CommonProps {
  color?: string;
  pill?: boolean;
}

declare var Tag: React.StatelessComponent<Props>;
export default Tag;
