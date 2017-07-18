import * as React from 'react';

interface ColProps extends React.HTMLProps<Col> {
  componentClass?: React.ReactType;
  lg?: number;
  lgHidden?: boolean;
  lgOffset?: number;
  lgPull?: number;
  lgPush?: number;
  md?: number;
  mdHidden?: boolean;
  mdOffset?: number;
  mdPull?: number;
  mdPush?: number;
  sm?: number;
  smHidden?: boolean;
  smOffset?: number;
  smPull?: number;
  smPush?: number;
  xs?: number;
  xsHidden?: boolean;
  xsOffset?: number;
  xsPull?: number;
  xsPush?: number;
}

export default class Col extends React.Component<ColProps> { }
