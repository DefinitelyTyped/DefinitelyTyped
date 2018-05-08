import { CSSModule } from '../index';

export interface CardColumnsProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const CardColumns: React.StatelessComponent<CardColumnsProps>;
export default CardColumns;
