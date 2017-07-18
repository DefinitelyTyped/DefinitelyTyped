import * as React from 'react';

interface RowProps extends React.HTMLProps<Row> {
  componentClass?: React.ReactType;
}

export default class Row extends React.Component<RowProps> { }
