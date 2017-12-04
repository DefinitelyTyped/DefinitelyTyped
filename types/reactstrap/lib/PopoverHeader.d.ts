import { CSSModule } from '../index';

export interface PopoverHeaderProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const PopoverHeader: React.StatelessComponent<PopoverHeaderProps>;
export default PopoverHeader;
