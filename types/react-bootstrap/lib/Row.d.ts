import * as React from 'react';

declare class Row extends React.Component<RowProps> { }
declare namespace Row { }
export = Row

interface RowProps extends React.HTMLProps<Row> {
  componentClass?: React.ReactType;
}
