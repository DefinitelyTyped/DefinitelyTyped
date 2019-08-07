import * as React from 'react';
import { Props as SelectProps } from './Select';

export type OptionsType<OptionType> = ReadonlyArray<OptionType>;

export interface GroupType<OptionType> {
  options: OptionsType<OptionType>;
  [key: string]: any;
}

export type GroupedOptionsType<UnionOptionType> = ReadonlyArray<GroupType<UnionOptionType>>;

export type ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type InnerRef = React.Ref<any>;
export interface PropsWithInnerRef {
  /** The inner reference. */
  innerRef: React.Ref<any>;
}

export interface PropsWithStyles {
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {};
}

export type ClassNameList = string[];
export type ClassNamesState = { [key: string]: boolean } | undefined;

export interface CommonProps<OptionType> {
  clearValue: () => void;
  className?: string;
  cx: (a: string | null, b: ClassNamesState | undefined, c: string | undefined) => string | void;
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {};
  getValue: () => ValueType<OptionType>;
  hasValue: boolean;
  isMulti: boolean;
  options: OptionsType<OptionType>;
  selectOption: (option: OptionType) => void;
  selectProps: SelectProps<OptionType>;
  setValue: (value: ValueType<OptionType>, action: ActionTypes) => void;
}

export type ActionTypes =
  | 'select-option'
  | 'deselect-option'
  | 'remove-value'
  | 'pop-value'
  | 'set-value'
  | 'clear'
  | 'create-option';

export interface ActionMeta {
  action: ActionTypes;
}

export type InputActionTypes =
  | 'set-value'
  | 'input-change'
  | 'input-blur'
  | 'menu-close';

export interface InputActionMeta {
  action: InputActionTypes;
}

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export type FocusDirection =
  | 'up'
  | 'down'
  | 'pageup'
  | 'pagedown'
  | 'first'
  | 'last';

export interface OptionsInnerProps {
  id: string;
  key: string;
  onClick: MouseEventHandler;
  onMouseMove: MouseEventHandler;
  onMouseOver: MouseEventHandler;
  tabIndex: number;
}

export interface OptionStateProps {
  /** Whether the option is disabled. */
  isDisabled: boolean;
  /** Whether the option is focused. */
  isFocused: boolean;
  /** Whether the option is selected. */
  isSelected: boolean;
}

export type OptionProps<OptionType> = PropsWithStyles &
  CommonProps<OptionType> &
  OptionStateProps & {
  /** The children to be rendered. */
  children: React.ReactNode,
  /** Inner ref to DOM Node */
  innerRef: InnerRef,
  /** props passed to the wrapping element for the group. */
  innerProps: OptionsInnerProps,
  /* Text to be displayed representing the option. */
  label: string,
  /* Type is used by the menu to determine whether this is an option or a group.
  In the case of option this is always `option`. */
  type: 'option',
  /* The data of the selected option. */
  data: OptionType,
};

export interface ThemeSpacing {
  baseUnit: number;
  controlHeight: number;
  menuGutter: number;
}

export interface Theme {
  borderRadius: number;
  colors: { [key: string]: string };
  spacing: ThemeSpacing;
}
