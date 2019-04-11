import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var ListGroupItemText: React.StatelessComponent<Props>;
export default ListGroupItemText;
