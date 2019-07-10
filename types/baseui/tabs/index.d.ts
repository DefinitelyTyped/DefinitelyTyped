/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface ORIENTATION {
  horizontal: 'horizontal';
  vertical: 'vertical';
}
export interface STATE_CHANGE_TYPE {
  change: 'change';
}

export interface State {
  activeKey: React.Key;
}

export type StateReducer = (
  stateChangeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  nextState: State,
  currentState: State,
) => State;

export interface TabsOverrides<T> {
  Root?: Override<T>;
  TabBar?: Override<T>;
  TabContent?: Override<T>;
}

export interface TabsProps {
  children: React.ReactNode;
  activeKey?: React.Key;
  disabled?: boolean;
  onChange?: (args: {activeKey: React.Key}) => any;
  orientation?: ORIENTATION[keyof ORIENTATION];
  overrides?: TabsOverrides<SharedProps & {$active?: boolean}>;
}

export const Tabs: React.FC<TabsProps>;

export type StatefulTabsProps = TabsProps & {
  activeKey?: never;
  initialState?: State;
  stateReducer?: StateReducer;
};

export class StatefulTabs extends React.Component<StatefulTabsProps, State> {
  onTabChange(newState: State): void;
  internalSetState(type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: State): void;
  getInitialKey(): any;
}

export interface TabOverrides<T> {
  Tab?: Override<T>;
}

export interface SharedProps {
  $disabled?: boolean;
  $active?: boolean;
  $orientation?: ORIENTATION[keyof ORIENTATION];
}

export interface TabProps {
  children?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  key?: React.Key;
  onClick?: (e: Event) => any;
  onKeyDown?: (e: KeyboardEvent) => any;
  onSelect?: () => any;
  overrides?: TabOverrides<SharedProps>;
  title?: React.ReactNode;
  id?: string;
  $orientation?: ORIENTATION[keyof ORIENTATION];
}

export class Tab extends React.Component<TabProps> {
  onClick(e: Event): void;
  onKeyDown(e: KeyboardEvent): void;
  getSharedProps(): SharedProps;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledTab: StyletronComponent<any>;
export const StyledTabBar: StyletronComponent<any>;
export const StyledTabContent: StyletronComponent<any>;

export const ORIENTATION: ORIENTATION;
export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
