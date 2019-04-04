import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardGroup: React.StatelessComponent<Props>;
export default CardGroup;
