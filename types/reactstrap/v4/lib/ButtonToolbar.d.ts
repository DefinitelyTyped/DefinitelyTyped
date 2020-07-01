import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
}

declare var ButtonToolbar: React.StatelessComponent<Props>;
export default ButtonToolbar;
