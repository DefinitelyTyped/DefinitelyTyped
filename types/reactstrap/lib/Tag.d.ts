import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface TagProps {
  color?: ThemeColor;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const Tag: React.StatelessComponent<TagProps>;
export default Tag;
