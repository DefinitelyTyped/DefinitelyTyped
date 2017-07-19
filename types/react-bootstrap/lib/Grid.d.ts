import * as React from 'react';

declare class Grid extends React.Component<GridProps> { }
declare namespace Grid { }
export = Grid

interface GridProps extends React.HTMLProps<Grid> {
  componentClass?: React.ReactType;
  fluid?: boolean;
  bsClass?: string;
}
