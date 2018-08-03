import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface CardProps {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: ThemeColor;
  block?: boolean;
  body?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
}

declare const Card: React.StatelessComponent<CardProps>;
export default Card;
