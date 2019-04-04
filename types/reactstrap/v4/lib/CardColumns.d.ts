import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardColumns: React.StatelessComponent<Props>;
export default CardColumns;
