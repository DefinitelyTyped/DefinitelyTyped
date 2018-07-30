import * as React from 'react';

export type OptionType = {
  [key: string]: any,
};

export type OptionsType = OptionType[];

export type GroupType = {
  options: OptionsType,
  [key: string]: any,
};

export type GroupedOptionsType = GroupType[];

export type ValueType = OptionType | OptionsType | null | undefined;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type InnerRef = React.Ref<any>;
export type PropsWithInnerRef = {
  /** The inner reference. */
  innerRef: React.Ref<any>,
};

export type PropsWithStyles = {
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {},
};

export type ClassNameList = string[];
export type ClassNamesState = { [key: string]: boolean } | undefined;

export type CommonProps = {
  clearValue: () => void,
  className?: string,
  cx: (a: string | null, b: ClassNamesState | undefined, c: string | undefined) => string | void,
  /*
    Get the styles of a particular part of the select. Pass in the name of the
    property as the first argument, and the current props as the second argument.
    See the `styles` object for the properties available.
  */
  getStyles: (name: string, props: any) => {},
  getValue: () => ValueType,
  hasValue: boolean,
  isMulti: boolean,
  options: OptionsType,
  selectOption: (option: OptionType) => void,
  selectProps: any,
  setValue: (value: ValueType, action: ActionTypes) => void,
};

export type ActionTypes =
  | 'select-option'
  | 'deselect-option'
  | 'remove-value'
  | 'pop-value'
  | 'set-value'
  | 'clear'
  | 'create-option';

export type ActionMeta = {
  action: ActionTypes,
};

export type InputActionTypes =
  | 'set-value'
  | 'input-change'
  | 'input-blur'
  | 'menu-close';

export type InputActionMeta = {
  action: InputActionTypes,
};

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export type FocusDirection =
  | 'up'
  | 'down'
  | 'pageup'
  | 'pagedown'
  | 'first'
  | 'last';

export type OptionProps = PropsWithInnerRef & {
  data: any,
  id: number,
  index: number,
  isDisabled: boolean,
  isFocused: boolean,
  isSelected: boolean,
  label: string,
  onClick: MouseEventHandler,
  onMouseOver: MouseEventHandler,
  value: any,
};
