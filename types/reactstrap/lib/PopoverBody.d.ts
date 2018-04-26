import { CSSModule } from '../index';

export interface PopoverBodyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const PopoverBody: React.StatelessComponent<PopoverBodyProps>;
export default PopoverBody;
