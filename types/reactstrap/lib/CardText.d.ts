import { CSSModule } from '../index';

export interface CardTextProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardText: React.StatelessComponent<CardTextProps>;
export default CardText;
