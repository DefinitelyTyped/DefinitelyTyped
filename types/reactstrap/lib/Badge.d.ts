import { CSSModule } from '../index';

export interface BadgeProps {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const Badge: React.StatelessComponent<BadgeProps>;
export default Badge;
