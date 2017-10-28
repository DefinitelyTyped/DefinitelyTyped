import { CSSModule } from '../index';

export interface CardDeckProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const CardDeck: React.StatelessComponent<CardDeckProps>;
