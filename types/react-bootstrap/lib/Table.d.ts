import * as React from 'react';

declare class Table extends React.Component<TableProps> { }
declare namespace Table { }
export = Table

interface TableProps extends React.HTMLProps<Table> {
  bordered?: boolean;
  condensed?: boolean;
  hover?: boolean;
  responsive?: boolean;
  striped?: boolean;
  fill?: boolean;
  bsClass?: string;
}
