import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var Jumbotron: React.StatelessComponent<Props>;
export default Jumbotron;
