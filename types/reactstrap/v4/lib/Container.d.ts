import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var Container: React.StatelessComponent<Props>;
export default Container;
