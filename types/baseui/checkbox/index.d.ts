/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_TYPE {
  change: 'CHANGE';
}
export interface STYLE_TYPE {
  default: 'default';
  toggle: 'toggle';
}

export const StyledRoot: StyletronComponent<any>;
export const StyledCheckmark: StyletronComponent<any>;
export const StyledLabel: StyletronComponent<any>;
export const StyledInput: StyletronComponent<any>;
export const StyledToggle: StyletronComponent<any>;
export const StyledToggleInner: StyletronComponent<any>;
export const StyledToggleTrack: StyletronComponent<any>;

export type StateReducer = (
  stateType: string,
  nextState: CheckboxState,
  currentState: CheckboxState,
  event: React.SyntheticEvent<HTMLInputElement>,
) => CheckboxState;

export interface StatefulContainerProps {
  overrides?: CheckboxOverrides;
  children?: React.ReactNode;
  initialState?: CheckboxState;
  stateReducer?: StateReducer;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseEnter?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseLeave?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  autoFocus?: boolean;
}

export const StatefulContainer: React.FC<StatefulContainerProps>;

export interface StatefulCheckboxProps {
  overrides?: CheckboxOverrides;
  children?: React.ReactNode;
  initialState?: CheckboxState;
  autoFocus?: boolean;
  checkmarkType?: STYLE_TYPE[keyof STYLE_TYPE];
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseEnter?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseLeave?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
}

export const StatefulCheckbox: React.FC<StatefulCheckboxProps>;

export interface CheckboxOverrides {
  Checkmark?: Override<any>;
  Label?: Override<any>;
  Root?: Override<any>;
  Input?: Override<any>;
  Toggle?: Override<any>;
  ToggleInner?: Override<any>;
  ToggleTrack?: Override<any>;
}

export interface CheckboxProps {
  children?: React.ReactNode;
  overrides?: CheckboxOverrides;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  autoFocus?: boolean;
  type?: string;
  name?: string;
  value?: string;
  isIndeterminate?: boolean;
  labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
  checkmarkType?: STYLE_TYPE[keyof STYLE_TYPE];
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseEnter?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseLeave?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseDown?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onMouseUp?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
}

export interface CheckboxState {
  isFocused: boolean;
  isHovered: boolean;
  isActive: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  onMouseEnter(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseLeave(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseDown(event: React.SyntheticEvent<HTMLInputElement>): void;
  onMouseUp(event: React.SyntheticEvent<HTMLInputElement>): void;
  onFocus(event: React.SyntheticEvent<HTMLInputElement>): void;
  onBlur(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export const STATE_TYPE: STATE_TYPE;
export const STYLE_TYPE: STYLE_TYPE;
