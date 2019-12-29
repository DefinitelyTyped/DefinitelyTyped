import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var PopoverContent: React.StatelessComponent<Props>;
export default PopoverContent;
