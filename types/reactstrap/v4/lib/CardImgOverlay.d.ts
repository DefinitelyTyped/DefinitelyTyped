import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardImgOverlay: React.StatelessComponent<Props>;
export default CardImgOverlay;
