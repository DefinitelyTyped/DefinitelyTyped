// Type definitions for react-rangeslider 2.2.0
// Project: https://github.com/whoisandy/react-rangeslider
// Definitions by: aponomy <https://github.com/aponomy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2.2

import * as React from 'react';

export interface SliderProps {
  disabled?:boolean
  format?: Function;
  handleLabel?: boolean;
  labels?: object;
  max?: number;
  min?: number;
  onChange?(value:number):void;
  onChangeComplete?(value:number):void;
  onChangeStart?(value:number):void;
  orientation?: string;
  reverse?: boolean;
  step?: number;
  tooltip?: boolean;
  value: number;
}

export default class Slider extends React.Component<SliderProps> {
}