import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var ListGroupItemHeading: React.StatelessComponent<Props>;
export default ListGroupItemHeading;
