import { CSSModule } from '../index';

export interface CardImgProps extends React.HTMLAttributes<HTMLElement> {
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
