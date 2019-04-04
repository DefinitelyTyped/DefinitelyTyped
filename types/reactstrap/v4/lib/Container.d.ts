import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var Container: React.StatelessComponent<Props>;
export default Container;
