import { CSSModule } from '../index';

export interface CardColumnsProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardColumns: React.StatelessComponent<CardColumnsProps>;
export default CardColumns;
