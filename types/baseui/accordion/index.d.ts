/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_CHANGE_TYPE {
  expand: 'expand';
}

export interface AccordionOverrides<T> {
  Root?: Override<T>;
}

export interface SharedProps {
  $color?: string;
  $disabled?: boolean;
  $expanded?: boolean;
  $size?: string | number;
}

export type StateReducer<T> = (
  stateChangeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  nextState: T,
  currentState: T,
) => T;

export interface AccordionProps {
  accordion?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  initialState?: AccordionState;
  onChange?: (args: { expanded: React.Key[] }) => any;
  overrides?: AccordionOverrides<SharedProps & {$expanded?: never}>;
  stateReducer?: StateReducer<AccordionState>;
}

export interface AccordionState {
  expanded: React.Key[];
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  onPanelChange(key: React.Key, onChange: () => any, ...args: any): void;
  internalSetState(type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: AccordionState): void;
  getItems(): React.ReactNode;
}

export interface PanelOverrides<T> {
  PanelContainer?: Override<T>;
  Header?: Override<T>;
  ToggleIcon?: Override<T>;
  Content?: Override<T>;
}

export interface SharedPanelProps {
  children: React.ReactNode;
  disabled?: boolean;
  key?: React.Key;
  onChange?: (args: {expanded: boolean}) => any;
  onClick?: (e: Event) => any;
  onKeyDown?: (e: KeyboardEvent) => any;
  overrides?: PanelOverrides<SharedProps>;
  title?: React.ReactNode;
}

export interface SharedStatefulPanelContainerProps {
  initialState?: PanelState;
  onChange?: (args: { expanded: boolean}) => any;
  stateReducer?: StateReducer<PanelState>;
}

export type PanelProps = SharedPanelProps & { expanded?: boolean; };

export class Panel extends React.Component<PanelProps> {
  onClick(e: Event): void;
  onKeyDown(e: KeyboardEvent): void;
  getSharedProps(): SharedProps;
}

export type StatefulPanelProps = SharedPanelProps & SharedStatefulPanelContainerProps;

export const StatefulPanel: React.FC<StatefulPanelProps>;

export type StatefulPanelContainerProps = SharedStatefulPanelContainerProps & {
  children: React.ReactNode;
};

export interface PanelState {
  expanded: boolean;
}

export class StatefulPanelContainer extends React.Component<StatefulPanelContainerProps, PanelState> {
  onChange(args: any): void;
  internalSetState(type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: PanelState): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledPanelContainer: StyletronComponent<any>;
export const StyledHeader: StyletronComponent<any>;
export const StyledContent: StyletronComponent<any>;
export const StyledToggleIcon: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
