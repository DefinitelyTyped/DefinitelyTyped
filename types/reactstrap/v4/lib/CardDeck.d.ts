import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardDeck: React.StatelessComponent<Props>;
export default CardDeck;
