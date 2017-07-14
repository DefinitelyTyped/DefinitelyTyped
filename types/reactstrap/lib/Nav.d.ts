import {CSSModule} from '../index';

interface Props {
  inline?: boolean;
  disabled?: boolean;
  tabs?: boolean;
  pills?: boolean;
  stacked?: boolean;
  navbar?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var Nav: React.StatelessComponent<Props>;
export default Nav;
