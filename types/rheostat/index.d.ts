// Type definitions for rheostat 3.0
// Project: https://github.com/airbnb/rheostat
// Definitions by: Sasha Bayan <https://github.com/SashaBayan>, Wil Lee <https://github.com/kourge>, Stefan Wer <https://github.com/StefanWerW>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
  getNextHandlePosition?(handleIdx: number, percentPosition: number): number;
  onClick?(): any;
  onChange?(publicState: PublicState): any;
  onKeyPress?(): any;
  onSliderDragEnd?(): any;
  onSliderDragMove?(): any;
  onSliderDragStart?(): any;
  onValuesUpdated?(publicState: PublicState): any;
}

export interface Props extends Events {
  algorithm?: Algorithm | undefined;
  autoAdjustVerticalPosition?: boolean | undefined;
  background?: React.ElementType | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  handle?: React.ElementType | undefined;
  max?: number | undefined;
  min?: number | undefined;
  orientation?: Orientation | undefined;
  pitComponent?: React.ElementType | undefined;
  pitPoints?: number[] | undefined;
  progressBar?: React.ElementType | undefined;
  snap?: boolean | undefined;
  snapPoints?: number[] | undefined;
  values?: number[] | undefined;
}

export default class Rheostat extends React.Component<Props, never> {}
