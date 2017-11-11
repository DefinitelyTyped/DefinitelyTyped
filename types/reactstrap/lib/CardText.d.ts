import { CSSModule } from '../index';

export interface CardTextProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardText: React.StatelessComponent<CardTextProps>;
export default CardText;
