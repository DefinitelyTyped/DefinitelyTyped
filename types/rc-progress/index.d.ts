// Type definitions for rc-progress 2.2
// Project: https://github.com/react-component/progress
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface CommonProps {
  className?: string;
  percent?: number | string;
  prefixCls?: string;
  strokeColor?: string;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeWidth?: number | string;
  style?: React.CSSProperties[] | React.CSSProperties;
  trailColor?: string;
  trailWidth?: number | string;
}

export interface CircleProps extends CommonProps {
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export class Circle extends React.Component<CircleProps> {
  prevTimeStamp?: number;

  getPathStyles(): {
    pathString: string;
    trailPathStyle: React.CSSProperties[] | React.CSSProperties;
    strokePathStyle: React.CSSProperties[] | React.CSSProperties;
  };
}

export interface LineProps extends CommonProps {
  prevTimeStamp?: number;
}

export class Line extends React.Component<LineProps> {
  path?: SVGPathElement;
}
