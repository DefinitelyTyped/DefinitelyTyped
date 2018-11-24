import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'ul'> {
  inline?: boolean;
  disabled?: boolean;
  tabs?: boolean;
  pills?: boolean;
  stacked?: boolean;
  navbar?: boolean;
  vertical?: boolean;
}

declare var Nav: React.StatelessComponent<Props>;
export default Nav;
