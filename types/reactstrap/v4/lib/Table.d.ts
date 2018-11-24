import { CommonProps } from '../index';

interface Props extends CommonProps {
  size?: string;
  bordered?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
  responsiveTag?: React.ReactType;
}

declare var Table: React.StatelessComponent<Props>;
export default Table;
