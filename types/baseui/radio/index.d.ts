/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_TYPE {
    change: 'CHANGE';
}

export type StateReducer = (
  stateType: string,
  nextState: State,
  currentState: State,
  event: React.SyntheticEvent<HTMLInputElement>
) => State;

export interface State {
  value?: string;
}

export interface StatefulContainerProps {
  overrides?: RadioOverrides & RadioGroupOverrides;
  children?: React.ReactNode;
  initialState?: State;
  stateReducer: StateReducer;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  autoFocus?: boolean;
}

export class StatefulContainer extends React.Component<StatefulContainerProps, State> {
  onChange(e: React.SyntheticEvent<HTMLInputElement>): void;
  stateReducer(type: string, e: React.SyntheticEvent<HTMLInputElement>): void;
}

export interface StatefulRadioGroupProps {
  overrides?: RadioOverrides & RadioGroupOverrides;
  children?: React.ReactNode;
  initialState?: State;
  autoFocus?: boolean;
  name?: string;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
}

export const StatefulRadioGroup: React.FC<StatefulRadioGroupProps>;

export interface RadioGroupProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  overrides?: RadioOverrides & RadioGroupOverrides;
  children?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  autoFocus?: boolean;
  align?: string;
  name?: string;
  labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseEnter?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseLeave?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
}

export class RadioGroup extends React.Component<RadioGroupProps> {}

export interface RadioOverrides {
  RadioMarkInner?: Override<any>;
  RadioMarkOuter?: Override<any>;
  Label?: Override<any>;
  Root?: Override<any>;
  Input?: Override<any>;
  Description?: Override<any>;
}

export interface RadioGroupOverrides {
  RadioGroupRoot?: Override<any>;
}

export interface RadioProps {
  autoFocus?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  isError?: boolean;
  labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
  name?: string;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseEnter?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseLeave?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseDown?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseUp?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  overrides?: RadioOverrides & RadioGroupOverrides;
  required?: boolean;
  value?: string;
}

export interface RadioState {
  isActive: boolean;
  isFocused: boolean;
  isHovered: boolean;
}

export class Radio extends React.Component<RadioProps, RadioState> {
  onMouseEnter(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseLeave(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseDown(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseUp(event: React.SyntheticEvent<HTMLInputElement>): void;
  onFocus(event: React.SyntheticEvent<HTMLInputElement>): void;
  onBlur(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledLabel: StyletronComponent<any>;
export const StyledInput: StyletronComponent<any>;
export const StyledDescription: StyletronComponent<any>;
export const StyledRadioMarkInner: StyletronComponent<any>;
export const StyledRadioMarkOuter: StyletronComponent<any>;
export const StyledRadioGroupRoot: StyletronComponent<any>;

export const STATE_TYPE: STATE_TYPE;
