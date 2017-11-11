import { CSSModule } from '../index';

export interface CardGroupProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardGroup: React.StatelessComponent<CardGroupProps>;
export default CardGroup;
