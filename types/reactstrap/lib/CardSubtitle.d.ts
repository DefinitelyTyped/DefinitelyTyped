import { CSSModule } from '../index';

export interface CardSubtitleProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardSubtitle: React.StatelessComponent<CardSubtitleProps>;
export default CardSubtitle;
