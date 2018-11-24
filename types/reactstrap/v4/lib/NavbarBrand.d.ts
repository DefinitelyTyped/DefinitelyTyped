import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'a'> {}

declare var NavbarBrand: React.StatelessComponent<Props>;
export default NavbarBrand;
