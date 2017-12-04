import { CSSModule } from '../index';

export interface PopoverBodyProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const PopoverBody: React.StatelessComponent<PopoverBodyProps>;
export default PopoverBody;
