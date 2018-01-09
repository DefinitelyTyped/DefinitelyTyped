import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
}

declare var Card: React.StatelessComponent<Props>;
export default Card;

