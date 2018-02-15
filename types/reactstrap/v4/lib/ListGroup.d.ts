import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var ListGroup: React.StatelessComponent<Props>;
export default ListGroup;
