/// <reference types="baseui"/>
import * as React from 'react';
import { StyledFn, StyletronComponent } from 'styletron-react';

export interface KIND {
  primary: 'primary';
  secondary: 'secondary';
  tertiary: 'tertiary';
  minimal: 'minimal';
}

export interface SIZE {
  compact: 'compact';
  default: 'default';
  large: 'large';
}

export interface SHAPE {
  default: 'default';
  round: 'round';
  square: 'square';
}

export interface ButtonOverrides {
  BaseButton?: Override<any>;
  StartEnhancer?: Override<any>;
  EndEnhancer?: Override<any>;
  LoadingSpinnerContainer?: Override<any>;
  LoadingSpinner?: Override<any>;
}

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  endEnhancer?: React.ReactNode;
  isLoading?: boolean;
  isSelected?: boolean;
  kind?: KIND[keyof KIND];
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => any;
  overrides?: ButtonOverrides;
  shape?: SHAPE[keyof SHAPE];
  size?: SIZE[keyof SIZE];
  startEnhancer?: React.ReactNode;
}

export const StyledBaseButton: StyletronComponent<any>;
export const StyledStartEnhancer: StyletronComponent<any>;
export const StyledEndEnhancer: StyletronComponent<any>;
export const StyledLoadingSpinner: StyletronComponent<any>;
export const StyledLoadingSpinnerContainer: StyletronComponent<any>;

export class Button extends React.Component<ButtonProps> {
  internalOnClick(...args: any): void;
}

export const KIND: KIND;
export const SHAPE: SHAPE;
export const SIZE: SIZE;
