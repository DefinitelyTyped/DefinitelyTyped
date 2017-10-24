import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var PopoverTitle: React.StatelessComponent<Props>;
export default PopoverTitle;
