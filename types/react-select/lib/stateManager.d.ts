import { Component, ComponentType, Ref as ElementRef } from 'react';

import SelectBase, { Props as SelectProps } from './Select';
import { ActionMeta, InputActionMeta, ValueType } from './types';

export interface DefaultProps<OptionType> {
  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: ValueType<OptionType>;
}
interface State<OptionType> {
  inputValue: string;
  menuIsOpen: boolean;
  value: ValueType<OptionType>;
}

type GetOptionType<T> = T extends SelectBase<infer OT> ? OT : never;

export class StateManager<
  OptionType = { label: string; value: string },
  T extends SelectBase<OptionType> = SelectBase<OptionType>
> extends Component<SelectProps<OptionType> & DefaultProps<OptionType>, State<OptionType>> {
  static defaultProps: DefaultProps<any>;

  select: T;

  focus(): void;
  blur(): void;
  getProp(key: string): any;
  callProp(name: string, ...args: any[]): any;
  onChange: (value: any, actionMeta: ActionMeta) => void;
  onInputChange: (value: any, actionMeta: InputActionMeta) => void;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

export function manageState<T extends SelectBase<any>>(
  SelectComponent: T
): StateManager<GetOptionType<T>, T>;

export default manageState;
