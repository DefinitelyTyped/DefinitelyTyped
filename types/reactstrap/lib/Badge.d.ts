import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface BadgeProps {
  color?: ThemeColor;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const Badge: React.StatelessComponent<BadgeProps>;
export default Badge;
