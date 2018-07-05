import { CSSModule } from '../index';

interface Props {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var Breadcrumb: React.StatelessComponent<Props>;
export default Breadcrumb;
