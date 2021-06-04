import * as React from 'react';
import { Props as SelectProps } from './Select';

export interface OptionTypeBase {
    [key: string]: any;
}

export type OptionsType<OptionType extends OptionTypeBase> = ReadonlyArray<OptionType>;

export interface GroupTypeBase<OptionType extends OptionTypeBase> {
    options: OptionsType<OptionType>;
    [key: string]: any;
}

export type GroupedOptionsType<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = ReadonlyArray<GroupType>;

export type ValueType<OptionType extends OptionTypeBase, IsMulti extends boolean> = IsMulti extends true
    ? OptionsType<OptionType>
    : OptionType | null;

export type FocusEventHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

export type InnerRef = React.Ref<any>;
export interface PropsWithInnerRef {
    /** The inner reference. */
    innerRef: React.Ref<any>;
}

export type ClassNameList = string[];
export type ClassNamesState = { [key: string]: boolean } | undefined;

export interface CommonProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    clearValue: () => void;
    className?: string;
    cx: (state: ClassNamesState | undefined, className: string | undefined) => string;
    /**
     * Get the styles of a particular part of the select. Pass in the name of the
     * property as the first argument, and the current props as the second argument.
     * See the `styles` object for the properties available.
     */
    getStyles: (name: string, props: any) => {};
    getValue: () => OptionsType<OptionType>;
    /** Whether the value container currently holds a value. */
    hasValue: boolean;
    /** Set when the value container should hold multiple values */
    isMulti: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
    options: OptionsType<OptionType>;
    selectOption: (option: OptionType) => void;
    selectProps: SelectProps<OptionType, IsMulti, GroupType>;
    setValue: (newValue: ValueType<OptionType, IsMulti>, action: SetValueAction, option?: OptionType) => void;
    theme: Theme;
}

export interface SelectOptionActionMeta<OptionType extends OptionTypeBase> {
    action: 'select-option';
    option: OptionType | undefined;
    name?: string;
}

export interface DeselectOptionActionMeta<OptionType extends OptionTypeBase> {
    action: 'deselect-option';
    option: OptionType | undefined;
    name?: string;
}

export interface RemoveValueActionMeta<OptionType extends OptionTypeBase> {
    action: 'remove-value';
    removedValue: OptionType;
    name?: string;
}

export interface PopValueActionMeta<OptionType extends OptionTypeBase> {
    action: 'pop-value';
    removedValue: OptionType;
    name?: string;
}

export interface ClearActionMeta<OptionType extends OptionTypeBase> {
    action: 'clear';
    removedValues: OptionType[];
    name?: string;
}

export interface CreateOptionActionMeta {
    action: 'create-option';
    name?: string;
}

export type ActionMeta<OptionType extends OptionTypeBase> =
    | SelectOptionActionMeta<OptionType>
    | DeselectOptionActionMeta<OptionType>
    | RemoveValueActionMeta<OptionType>
    | PopValueActionMeta<OptionType>
    | ClearActionMeta<OptionType>
    | CreateOptionActionMeta;

export type Action = ActionMeta<OptionTypeBase>['action'];
export type SetValueAction = 'select-option' | 'deselect-option';

export type InputActionTypes = 'set-value' | 'input-change' | 'input-blur' | 'menu-close';

export interface InputActionMeta {
    action: InputActionTypes;
}

export type MenuPlacement = 'auto' | 'bottom' | 'top';
export type MenuPosition = 'absolute' | 'fixed';

export type FocusDirection = 'up' | 'down' | 'pageup' | 'pagedown' | 'first' | 'last';

export type OptionProps = PropsWithInnerRef & {
    data: any;
    id: number;
    index: number;
    isDisabled: boolean;
    isFocused: boolean;
    isSelected: boolean;
    label: string;
    onClick: MouseEventHandler;
    onMouseOver: MouseEventHandler;
    value: any;
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
