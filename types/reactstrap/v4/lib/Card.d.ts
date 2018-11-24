import { CommonProps } from '../index';

interface Props extends CommonProps {
  inverse?: boolean;
  color?: string;
  block?: boolean;
  outline?: boolean;
  style?: React.CSSProperties;
}

declare var Card: React.StatelessComponent<Props>;
export default Card;
