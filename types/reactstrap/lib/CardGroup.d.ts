import { CSSModule } from '../index';

export interface CardGroupProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardGroup: React.StatelessComponent<CardGroupProps>;
export default CardGroup;
