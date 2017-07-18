import * as React from 'react';

interface TableProps extends React.HTMLProps<Table> {
  bordered?: boolean;
  condensed?: boolean;
  hover?: boolean;
  responsive?: boolean;
  striped?: boolean;
  fill?: boolean;
  bsClass?: string;
}

export default class Table extends React.Component<TableProps> { }
