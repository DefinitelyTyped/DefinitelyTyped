import { CSSModule } from '../index';

export interface CardDeckProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardDeck: React.StatelessComponent<CardDeckProps>;
export default CardDeck;
