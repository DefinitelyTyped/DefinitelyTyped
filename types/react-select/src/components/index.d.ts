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

export type PlaceholderOrValue<OptionType extends OptionTypeBase, IsMulti extends boolean> =
  | Element<ComponentType<PlaceholderProps<OptionType, IsMulti>>>
  | Element<ComponentType<SingleValueProps<OptionType>>>
  | Array<Element<ComponentType<MultiValueProps<OptionType>>>>;

export type IndicatorComponentType<OptionType extends OptionTypeBase, IsMulti extends boolean> = ComponentType<IndicatorProps<OptionType, IsMulti>>;

export interface SelectComponents<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  ClearIndicator: IndicatorComponentType<OptionType, IsMulti> | null;
  Control: ComponentType<ControlProps<OptionType, IsMulti>>;
  DropdownIndicator: IndicatorComponentType<OptionType, IsMulti> | null;
  DownChevron: ComponentType<any>;
  CrossIcon: ComponentType<any>;
  Group: ComponentType<GroupProps<OptionType, IsMulti>>;
  GroupHeading: ComponentType<any>;
  IndicatorsContainer: ComponentType<IndicatorContainerProps<OptionType, IsMulti>>;
  IndicatorSeparator: IndicatorComponentType<OptionType, IsMulti> | null;
  Input: ComponentType<InputProps>;
  LoadingIndicator: ComponentType<LoadingIconProps<OptionType, IsMulti>> | null;
  Menu: ComponentType<MenuProps<OptionType, IsMulti>>;
  MenuList: ComponentType<MenuListComponentProps<OptionType, IsMulti>>;
  MenuPortal: ComponentType<MenuPortalProps<OptionType, IsMulti>>;
  LoadingMessage: ComponentType<NoticeProps<OptionType, IsMulti>>;
  NoOptionsMessage: ComponentType<NoticeProps<OptionType, IsMulti>>;
  MultiValue: ComponentType<MultiValueProps<OptionType>>;
  MultiValueContainer: ComponentType<any>;
  MultiValueLabel: ComponentType<any>;
  MultiValueRemove: ComponentType<any>;
  Option: ComponentType<OptionProps<OptionType, IsMulti>>;
  Placeholder: ComponentType<PlaceholderProps<OptionType, IsMulti>>;
  SelectContainer: ComponentType<ContainerProps<OptionType, IsMulti>>;
  SingleValue: ComponentType<SingleValueProps<OptionType>>;
  ValueContainer: ComponentType<ValueContainerProps<OptionType, IsMulti>>;
}

export type SelectComponentsConfig<OptionType extends OptionTypeBase, IsMulti extends boolean> = Partial<SelectComponents<OptionType, IsMulti>>;

export type DeepNonNullable<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};

export const components: Required<DeepNonNullable<SelectComponents<any, boolean>>>;

export interface Props<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  components: SelectComponentsConfig<OptionType, IsMulti>;
}

export function defaultComponents<OptionType extends OptionTypeBase, IsMulti extends boolean>(props: Props<OptionType, IsMulti>): SelectComponents<OptionType, IsMulti>;
