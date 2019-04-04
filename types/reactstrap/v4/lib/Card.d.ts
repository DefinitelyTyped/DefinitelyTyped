import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
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
