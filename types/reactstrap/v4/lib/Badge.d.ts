import { CSSModule } from '../index';

interface Props {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var Badge: React.StatelessComponent<Props>;
export default Badge;
