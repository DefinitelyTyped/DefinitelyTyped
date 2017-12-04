import { CSSModule } from '../index';

export interface CardTitleProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardTitle: React.StatelessComponent<CardTitleProps>;
export default CardTitle;
