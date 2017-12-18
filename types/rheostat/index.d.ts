// Type definitions for rheostat 2.1
// Project: https://github.com/airbnb/rheostat
// Definitions by: Sasha Bayan <https://github.com/SashaBayan>, Wil Lee <https://github.com/kourge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type Orientation = 'horizontal' | 'vertical';

export interface Algorithm {
  getPosition(value: number, min: number, max: number): number;
  getValue(pos: number, min: number, max: number): number;
}

export interface PublicState {
  max: number;
  min: number;
  values: number[];
}

export interface Events {
  onClick?(): any;
  onChange?(publicState: PublicState): any;
  onKeyPress?(): any;
  onSliderDragEnd?(): any;
  onSliderDragMove?(): any;
  onSliderDragStart?(): any;
  onValuesUpdated?(publicState: PublicState): any;
}

export interface Props extends Events {
  algorithm?: Algorithm;
  className?: string;
  disabled?: boolean;
  handle?: React.ReactType;
  max?: number;
  min?: number;
  orientation?: Orientation;
  pitComponent?: React.ReactType;
  pitPoints?: number[];
  progressBar?: React.ReactType;
  snap?: boolean;
  snapPoints?: number[];
  values?: number[];
}

export default class Rheostat extends React.Component<Props, never> {}
