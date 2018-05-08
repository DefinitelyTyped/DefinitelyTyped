import { CSSModule } from '../index';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardSubtitle: React.StatelessComponent<CardSubtitleProps>;
export default CardSubtitle;
