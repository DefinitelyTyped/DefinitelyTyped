import { Component, ComponentType, Ref as ElementRef } from 'react';

import { ActionMeta, InputActionMeta, ValueType } from './types';

export type Props = {
  defaultInputValue: string,
  defaultMenuIsOpen: boolean,
  defaultValue: ValueType,
  inputValue?: string,
  menuIsOpen?: boolean,
  value?: ValueType,
};
type State = {
  inputValue: string,
  menuIsOpen: boolean,
  value: ValueType,
};

export class StateManager extends Component<Props, State> {
  static defaultProps: Props;

  select: ElementRef<any>;

  focus(): void;
  blur(): void;
  getProp(key: string): any;
  callProp(name: string, ...args: any[]): any;
  onChange: (value: any, actionMeta: ActionMeta) => void;
  onInputChange: (value: any, actionMeta: InputActionMeta) => void;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

export const manageState: (SelectComponent: ComponentType<any>) => StateManager;

export default manageState;
