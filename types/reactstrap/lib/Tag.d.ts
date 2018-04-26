import { CSSModule } from '../index';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const Tag: React.StatelessComponent<TagProps>;
export default Tag;
