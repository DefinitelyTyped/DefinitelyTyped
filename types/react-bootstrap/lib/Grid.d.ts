import * as React from 'react';

interface GridProps extends React.HTMLProps<Grid> {
  componentClass?: React.ReactType;
  fluid?: boolean;
  bsClass?: string;
}

export default class Grid extends React.Component<GridProps> { }
