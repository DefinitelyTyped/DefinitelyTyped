import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var PopoverContent: React.StatelessComponent<Props>;
export default PopoverContent;
