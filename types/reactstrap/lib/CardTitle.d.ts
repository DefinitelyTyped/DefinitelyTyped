import { CSSModule } from '../index';

export interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardTitle: React.StatelessComponent<CardTitleProps>;
export default CardTitle;
