import { CSSModule } from '../index';

export interface CardImgOverlayProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardImgOverlay: React.StatelessComponent<CardImgOverlayProps>;
export default CardImgOverlay;
