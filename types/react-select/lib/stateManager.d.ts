import { Component, ComponentType, Ref as ElementRef } from 'react';

import { ActionMeta, InputActionMeta, ValueType } from './types';

export interface Props<OptionType> {
  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: ValueType<OptionType>;
  inputValue?: string;
  menuIsOpen?: boolean;
  value?: ValueType<OptionType>;
}
interface State<OptionType> {
  inputValue: string;
  menuIsOpen: boolean;
  value: ValueType<OptionType>;
}

export class StateManager<OptionType> extends Component<Props<OptionType>, State<OptionType>> {
  static defaultProps: Props<any>;

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

export function manageState(SelectComponent: ComponentType<any>): StateManager<any>;

export default manageState;
