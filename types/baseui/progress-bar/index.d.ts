/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface ProgressBarOverrides {
  Root?: Override<any>;
  Bar?: Override<any>;
  BarProgress?: Override<any>;
  Label?: Override<any>;
}
export interface ProgressBarProps {
  children?: React.ReactNode;
  getProgressLabel?: (value: number, successValue: number) => React.ReactNode;
  value?: number;
  successValue?: number;
  showLabel?: boolean;
  overrides?: ProgressBarOverrides;
}
export class ProgressBar extends React.Component<ProgressBarProps> {}

export const StyledRoot: StyletronComponent<any>;
export const StyledBar: StyletronComponent<any>;
export const StyledBarProgress: StyletronComponent<any>;
export const StyledLabel: StyletronComponent<any>;
