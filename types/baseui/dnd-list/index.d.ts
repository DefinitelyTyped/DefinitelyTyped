/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

// export {arrayMove, arrayRemove} from 'react-movable';

export interface STATE_CHANGE_TYPE {
  change: 'change';
}

export type StateReducer = (
  stateChangeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  nextState: State,
  currentState: State,
) => State;

export interface StatefulListProps {
  initialState?: State;
  stateReducer?: StateReducer;
  removable?: boolean;
  onChange?: (params: {
    newState: React.ReactNode[],
    oldIndex: number,
    newIndex: number,
  }) => any;
  overrides?: ListOverrides;
}

export const StatefulList: React.FC<StatefulListProps>;

export interface State {
  items: React.ReactNode[];
}
export type StatefulComponentContainerProps = StatefulListProps & {
  initialState?: State;
  children: React.ReactNode;
};

export class StatefulListContainer extends React.Component<StatefulComponentContainerProps, State> {
  onChange({oldIndex, newIndex}: {oldIndex: number, newIndex: number}): void;
  internalSetState(type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: State): void;
}

export interface SharedStylePropsArgT {
  $isDragged: boolean;
  $isSelected: boolean;
  $isRemovable: boolean;
}

export interface ListOverrides {
  Root?: Override<SharedStylePropsArgT>;
  List?: Override<SharedStylePropsArgT>;
  Item?: Override<SharedStylePropsArgT>;
  DragHandle?: Override<SharedStylePropsArgT>;
  CloseHandle?: Override<SharedStylePropsArgT>;
  Label?: Override<SharedStylePropsArgT>;
}

export interface ListProps {
  removable?: boolean;
  items?: React.ReactNode[] ;
  onChange?: (args: {oldIndex: number, newIndex: number}) => any;
  overrides?: ListOverrides;
}

export class List extends React.Component<ListProps> {}

export const StyledRoot: StyletronComponent<any>;
export const StyledList: StyletronComponent<any>;
export const StyledItem: StyletronComponent<any>;
export const StyledDragHandle: StyletronComponent<any>;
export const StyledCloseHandle: StyletronComponent<any>;
export const StyledLabel: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
