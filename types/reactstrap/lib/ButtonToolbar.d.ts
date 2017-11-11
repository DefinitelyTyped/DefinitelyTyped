import { CSSModule } from '../index';

export interface ButtonToolbarProps {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
}

export const ButtonToolbar: React.StatelessComponent<ButtonToolbarProps>;
export default ButtonToolbar;
