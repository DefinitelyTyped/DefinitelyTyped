import { CSSModule } from '../index';

interface Props {
  color?: string;
  pill?: boolean;
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var Tag: React.StatelessComponent<Props>;
export default Tag;
