import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var PopoverBody: React.StatelessComponent<Props>;
export default PopoverBody;
