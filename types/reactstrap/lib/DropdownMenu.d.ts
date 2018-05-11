import { CSSModule } from '../index';
import { Popper } from './Popper';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
  flip?: boolean;
  modifiers?: Popper.Modifiers;
  persist?: boolean;
}

declare const DropdownMenu: React.StatelessComponent<DropdownMenuProps>;
export default DropdownMenu;
