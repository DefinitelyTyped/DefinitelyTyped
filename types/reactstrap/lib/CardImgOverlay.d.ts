import { CSSModule } from '../index';

export interface CardImgOverlayProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardImgOverlay: React.StatelessComponent<CardImgOverlayProps>;
export default CardImgOverlay;
