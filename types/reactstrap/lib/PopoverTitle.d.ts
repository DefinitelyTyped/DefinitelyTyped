import { CSSModule } from '../index';

export interface PopoverTitleProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const PopoverTitle: React.StatelessComponent<PopoverTitleProps>;
export default PopoverTitle;
