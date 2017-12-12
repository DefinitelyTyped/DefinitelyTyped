import { CSSModule } from '../index';

export interface TableProps {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
  bordered?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
  tag?: React.ReactType;
  responsiveTag?: React.ReactType;
}

declare const Table: React.StatelessComponent<TableProps>;
export default Table;
