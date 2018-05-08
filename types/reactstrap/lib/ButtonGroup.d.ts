import { CSSModule } from '../index';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
  size?: string;
  vertical?: boolean;
  [others: string]: any;
}

declare const ButtonGroup: React.StatelessComponent<ButtonGroupProps>;
export default ButtonGroup;
