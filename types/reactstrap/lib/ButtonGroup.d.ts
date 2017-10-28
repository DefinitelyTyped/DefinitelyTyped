import { CSSModule } from '../index';

export interface ButtonGroupProps {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
  size?: string;
  vertical?: boolean;
}

export const ButtonGroup: React.StatelessComponent<ButtonGroupProps>;
