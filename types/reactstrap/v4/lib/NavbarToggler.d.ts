import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'a'> {
  type?: string;
  right?: boolean;
  left?: boolean;
}

declare var NavbarToggler: React.StatelessComponent<Props>;
export default NavbarToggler;
