import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var CardBody: React.StatelessComponent<Props>;
export default CardBody;
