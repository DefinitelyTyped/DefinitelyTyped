import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardImgOverlay: React.StatelessComponent<Props>;
export default CardImgOverlay;
