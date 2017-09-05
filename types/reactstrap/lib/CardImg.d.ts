import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  cssModule?: CSSModule;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
}

declare var CardImg: React.StatelessComponent<Props>;
export default CardImg;
