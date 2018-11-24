import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'a'> {
  getRef?: string | ((instance: HTMLButtonElement) => any);
  disabled?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare var NavLink: React.StatelessComponent<Props>;
export default NavLink;
