import { CSSModule } from '../index';

export interface PopoverContentProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const PopoverContent: React.StatelessComponent<PopoverContentProps>;
export default PopoverContent;
