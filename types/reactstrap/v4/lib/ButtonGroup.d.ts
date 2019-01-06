import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
  size?: string;
  vertical?: boolean;
}

declare var ButtonGroup: React.StatelessComponent<Props>;
export default ButtonGroup;
