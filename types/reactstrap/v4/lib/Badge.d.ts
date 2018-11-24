import { CommonProps } from '../index';

interface Props extends CommonProps {
  color?: string;
  pill?: boolean;
}

declare var Badge: React.StatelessComponent<Props>;
export default Badge;
