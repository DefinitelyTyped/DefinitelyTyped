import { CSSModule } from '../index';

export interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardTitle: React.StatelessComponent<CardTitleProps>;
export default CardTitle;
