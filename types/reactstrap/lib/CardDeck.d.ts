import { CSSModule } from '../index';

export interface CardDeckProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const CardDeck: React.StatelessComponent<CardDeckProps>;
export default CardDeck;
