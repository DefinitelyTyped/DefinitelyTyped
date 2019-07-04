/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_CHANGE_TYPE {
  change: 'change';
}

export interface Labels  {
  prevButton?: string;
  nextButton?: string;
  preposition?: string;
}

export interface State {
  currentPage: number;
}

export type StateReducer = (
  changeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  changes: State,
  currentState: State,
) => State;

export interface PaginationOverrides {
  Root?: Override<any>;
  PrevButton?: Override<any>;
  NextButton?: Override<any>;
  MaxLabel?: Override<any>;
  DropdownContainer?: Override<any>;
  Select?: Override<any>;
}

export interface Callbacks {
  onPrevClick?: (args: {event: any}) => any;
  onNextClick?: (args: {event: any}) => any;
  onPageChange?: (args: {nextPage: number, prevPage: number}) => any;
}

export interface PaginationProps extends Callbacks {
  numPages: number;
  currentPage: number;
  labels?: Labels;
  overrides?: PaginationOverrides;
}

export interface PageOption {
  label: number;
}

export class Pagination extends React.PureComponent<PaginationProps> {
  getMenuOptions(numPages: number): [];
  onMenuItemSelect(data: { value: ReadonlyArray<PageOption>}): void;
  onPrevClick(event: React.SyntheticEvent<any>): void;
  onNextClick(event: React.SyntheticEvent<any>): void;
  constructAriaWayfinderLabel(locale: Locale, prefix: string): string;
}

export interface StatefulPaginationProps extends Callbacks {
  numPages: number;
  labels?: Labels;
  stateReducer?: StateReducer;
  initialState?: State;
  overrides?: PaginationOverrides;
}

export const StatefulPagination: React.FC<StatefulPaginationProps>;

export interface StatefulContainerProps {
  children: React.ReactNode;
  numPages: number;
  stateReducer?: StateReducer;
  initialState?: State;
  onPageChange?: Callbacks['onPageChange'];
}

export class StatefulContainer extends React.Component<StatefulContainerProps, State> {
  internalSetState(changeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: State): void;
  onPageChange(args: {nextPage: number}): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledMaxLabel: StyletronComponent<any>;
export const StyledDropdownContainer: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
