import { CSSModule } from '../index';

export interface CardImgProps {
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

declare const CardImg: React.StatelessComponent<CardImgProps>;
export default CardImg;
