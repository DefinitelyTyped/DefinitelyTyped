import { CSSModule } from '../index';

export interface TagProps {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const Tag: React.StatelessComponent<TagProps>;
export default Tag;
