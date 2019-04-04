import { CSSModule } from '../index';

interface Props {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
  bordered?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
  tag?: React.ElementType;
  responsiveTag?: React.ElementType;
}

declare var Table: React.StatelessComponent<Props>;
export default Table;
