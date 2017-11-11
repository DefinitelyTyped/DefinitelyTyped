import { CSSModule } from '../index';

export interface TagProps {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const Tag: React.StatelessComponent<TagProps>;
export default Tag;
