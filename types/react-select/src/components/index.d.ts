import {
  ComponentType,
  ReactElement as Element,
} from 'react';
import {
  IndicatorContainerProps,
  ContainerProps,
  ValueContainerProps,
  IndicatorsContainer,
  SelectContainer,
  ValueContainer,
} from './containers';
import {
  IndicatorProps,
  LoadingIconProps,
  ClearIndicator,
  DropdownIndicator,
  LoadingIndicator,
  IndicatorSeparator,
  DownChevron,
  CrossIcon,
} from './indicators';

import Control, { ControlProps } from './Control';
import Group, { GroupProps, GroupHeading } from './Group';
import Input, { InputProps } from './Input';
import Menu, {
  MenuProps,
  MenuList,
  MenuListComponentProps,
  MenuPortal,
  MenuPortalProps,
  NoticeProps,
  NoOptionsMessage,
  LoadingMessage,
} from './Menu';
import MultiValue, {
  MultiValueProps,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from './MultiValue';
import Option, { OptionProps } from './Option';
import Placeholder, { PlaceholderProps } from './Placeholder';
import SingleValue, { SingleValueProps } from './SingleValue';
import { OptionTypeBase } from '../types';

export type PlaceholderOrValue<OptionType extends OptionTypeBase, isMulti extends boolean> =
  | Element<ComponentType<PlaceholderProps<OptionType, isMulti>>>
  | Element<ComponentType<SingleValueProps<OptionType>>>
  | Array<Element<ComponentType<MultiValueProps<OptionType>>>>;

export type IndicatorComponentType<OptionType extends OptionTypeBase, isMulti extends boolean> = ComponentType<IndicatorProps<OptionType, isMulti>>;

export interface SelectComponents<OptionType extends OptionTypeBase, isMulti extends boolean> {
  ClearIndicator: IndicatorComponentType<OptionType, isMulti> | null;
  Control: ComponentType<ControlProps<OptionType, isMulti>>;
  DropdownIndicator: IndicatorComponentType<OptionType, isMulti> | null;
  DownChevron: ComponentType<any>;
  CrossIcon: ComponentType<any>;
  Group: ComponentType<GroupProps<OptionType, isMulti>>;
  GroupHeading: ComponentType<any>;
  IndicatorsContainer: ComponentType<IndicatorContainerProps<OptionType, isMulti>>;
  IndicatorSeparator: IndicatorComponentType<OptionType, isMulti> | null;
  Input: ComponentType<InputProps>;
  LoadingIndicator: ComponentType<LoadingIconProps<OptionType, isMulti>> | null;
  Menu: ComponentType<MenuProps<OptionType, isMulti>>;
  MenuList: ComponentType<MenuListComponentProps<OptionType, isMulti>>;
  MenuPortal: ComponentType<MenuPortalProps<OptionType, isMulti>>;
  LoadingMessage: ComponentType<NoticeProps<OptionType, isMulti>>;
  NoOptionsMessage: ComponentType<NoticeProps<OptionType, isMulti>>;
  MultiValue: ComponentType<MultiValueProps<OptionType>>;
  MultiValueContainer: ComponentType<any>;
  MultiValueLabel: ComponentType<any>;
  MultiValueRemove: ComponentType<any>;
  Option: ComponentType<OptionProps<OptionType, isMulti>>;
  Placeholder: ComponentType<PlaceholderProps<OptionType, isMulti>>;
  SelectContainer: ComponentType<ContainerProps<OptionType, isMulti>>;
  SingleValue: ComponentType<SingleValueProps<OptionType>>;
  ValueContainer: ComponentType<ValueContainerProps<OptionType, isMulti>>;
}

export type SelectComponentsConfig<OptionType extends OptionTypeBase, isMulti extends boolean> = Partial<SelectComponents<OptionType, isMulti>>;

export type DeepNonNullable<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};

export const components: Required<DeepNonNullable<SelectComponents<any, any>>>;

export interface Props<OptionType extends OptionTypeBase, isMulti extends boolean> {
  components: SelectComponentsConfig<OptionType, isMulti>;
}

export function defaultComponents<OptionType extends OptionTypeBase, isMulti extends boolean>(props: Props<OptionType, isMulti>): SelectComponents<OptionType, isMulti>;
