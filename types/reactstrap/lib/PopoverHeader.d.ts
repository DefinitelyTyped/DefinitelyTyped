import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var PopoverHeader: React.StatelessComponent<Props>;
export default PopoverHeader;
