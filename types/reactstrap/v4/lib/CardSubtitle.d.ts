import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardSubtitle: React.StatelessComponent<Props>;
export default CardSubtitle;
