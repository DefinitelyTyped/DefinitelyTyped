/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_CHANGE_TYPE {
  change: 'change';
}
export interface ADJOINED {
  none: 'none';
  left: 'left';
  right: 'right';
  both: 'both';
}
export interface SIZE {
  default: 'default';
  compact: 'compact';
  large: 'large';
}

export interface CUSTOM_INPUT_TYPE {
  textarea: 'textarea';
}

export interface ENHANCER_POSITION {
    start: 'start';
    end: 'end';
}

export interface BaseInputOverrides {
  InputContainer?: Override<any>;
  Input?: Override<any>;
  Before?: Override<any>;
  After?: Override<any>;
}

export interface BaseInputProps<T> {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  adjoined?: ADJOINED[keyof ADJOINED];
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  id?: string;
  'data-baseweb'?: string;
  inputRef?: React.Ref<T>;
  name?: string;
  onBlur?: (e: React.SyntheticEvent<T>) => any;
  onChange?: (e: React.SyntheticEvent<T>) => any;
  onKeyDown?: (e: React.SyntheticEvent<T>) => any;
  onKeyPress?: (e: React.SyntheticEvent<T>) => any;
  onKeyUp?: (e: React.SyntheticEvent<T>) => any;
  onFocus?: (e: React.SyntheticEvent<T>) => any;
  overrides?: BaseInputOverrides;
  placeholder?: string;
  required?: boolean;
  size?: SIZE[keyof SIZE];
  type?: string;
  value?: string;
  rows?: number;
}

export interface State {
  value?: string;
}

export type InputOverrides = BaseInputOverrides & {
  Root?: Override<any>;
  StartEnhancer?: Override<any>;
  EndEnhancer?: Override<any>;
};

export interface InputProps extends BaseInputProps<HTMLInputElement> {
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  overrides?: InputOverrides;
}

export interface InternalState {
  isFocused?: boolean;
}

export class Input extends React.Component<InputProps, InternalState> {
  onFocus(e: React.SyntheticEvent<HTMLInputElement>): void;
  onBlur(e: React.SyntheticEvent<HTMLInputElement>): void;
}

export class BaseInput extends React.Component<BaseInputProps<HTMLInputElement>, InternalState> {
  onFocus(e: React.SyntheticEvent<HTMLInputElement>): void;
  onBlur(e: React.SyntheticEvent<HTMLInputElement>): void;
}

export interface MaskedInputProps extends InputProps {
  mask?: string;
  maskChar?: string;
}

export const MaskedInput: React.FC<MaskedInputProps>;

export interface StatefulContainerProps {
  children?: React.ReactNode;
  initialState?: State;
  stateReducer?: (stateType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], nextState: State, currentState: State) => State;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
}

export type StatefulInputProps = InputProps & StatefulContainerProps & { children?: never; };

export const StatefulInput: React.FC<StatefulInputProps>;
export const StatefulContainer: React.FC<StatefulContainerProps>;

export const StyledRoot: StyletronComponent<any>;
export const StyledInputEnhancer: StyletronComponent<any>;
export const StyledStartEnhancer: StyletronComponent<any>;
export const StyledEndEnhancer: StyletronComponent<any>;
export const StyledInputContainer: StyletronComponent<any>;
export const StyledInput: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
export const CUSTOM_INPUT_TYPE: CUSTOM_INPUT_TYPE;
export const ADJOINED: ADJOINED;
export const SIZE: SIZE;
export const ENHANCER_POSITION: ENHANCER_POSITION;
