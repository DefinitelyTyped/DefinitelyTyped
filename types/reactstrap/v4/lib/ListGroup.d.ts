import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var ListGroup: React.StatelessComponent<Props>;
export default ListGroup;
