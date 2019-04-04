import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardFooter: React.StatelessComponent<Props>;
export default CardFooter;
