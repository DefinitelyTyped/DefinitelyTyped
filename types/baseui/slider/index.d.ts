/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_CHANGE_TYPE {
    change: 'change';
}

export interface State {
  value: number[];
}

export type StateReducer = (
  stateType: string,
  nextState: State,
  currentState: State,
) => State;

export interface SliderOverrides {
  Root?: Override<any>;
  Track?: Override<any>;
  InnerTrack?: Override<any>;
  Tick?: Override<any>;
  TickBar?: Override<any>;
  Thumb?: Override<any>;
  InnerThumb?: Override<any>;
  ThumbValue?: Override<any>;
}

export interface SliderProps {
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  overrides?: SliderOverrides;
  disabled?: boolean;
  onChange?: (e: State) => any;
}

export interface StatefulSliderProps {
  overrides?: SliderOverrides;
  initialState?: State;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (e: State) => any;
}

export interface StatefulContainerProps {
  overrides?: SliderOverrides;
  children?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  initialState?: State;
  stateReducer?: StateReducer;
  onChange?: (e: State) => any;
}

export const Slider: React.FC<SliderProps>;
export const StatefulSlider: React.FC<StatefulSliderProps>;
export class StatefulContainer extends React.Component<StatefulContainerProps, State> {
  onChange(params: State): any;
  internalSetState(type: 'change', {value}: State): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledTrack: StyletronComponent<any>;
export const StyledInnerTrack: StyletronComponent<any>;
export const StyledThumb: StyletronComponent<any>;
export const StyledInnerThumb: StyletronComponent<any>;
export const StyledTick: StyletronComponent<any>;
export const StyledTickBar: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
