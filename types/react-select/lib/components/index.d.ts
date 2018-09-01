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

export type PlaceholderOrValue<OptionType> =
  | Element<ComponentType<PlaceholderProps<OptionType>>>
  | Element<ComponentType<SingleValueProps<OptionType>>>
  | Array<Element<ComponentType<MultiValueProps<OptionType>>>>;

export type IndicatorComponentType<OptionType> = ComponentType<IndicatorProps<OptionType>>;

export interface SelectComponents<OptionType> {
  ClearIndicator: IndicatorComponentType<OptionType> | null;
  Control: ComponentType<ControlProps<OptionType>>;
  DropdownIndicator: IndicatorComponentType<OptionType> | null;
  DownChevron: ComponentType<any>;
  CrossIcon: ComponentType<any>;
  Group: ComponentType<GroupProps<OptionType>>;
  GroupHeading: ComponentType<any>;
  IndicatorsContainer: ComponentType<IndicatorContainerProps<OptionType>>;
  IndicatorSeparator: IndicatorComponentType<OptionType> | null;
  Input: ComponentType<InputProps>;
  LoadingIndicator: ComponentType<LoadingIconProps<OptionType>> | null;
  Menu: ComponentType<MenuProps<OptionType>>;
  MenuList: ComponentType<MenuListComponentProps<OptionType>>;
  MenuPortal: ComponentType<MenuPortalProps<OptionType>>;
  LoadingMessage: ComponentType<NoticeProps<OptionType>>;
  NoOptionsMessage: ComponentType<NoticeProps<OptionType>>;
  MultiValue: ComponentType<MultiValueProps<OptionType>>;
  MultiValueContainer: ComponentType<any>;
  MultiValueLabel: ComponentType<any>;
  MultiValueRemove: ComponentType<any>;
  Option: ComponentType<OptionProps<OptionType>>;
  Placeholder: ComponentType<PlaceholderProps<OptionType>>;
  SelectContainer: ComponentType<ContainerProps<OptionType>>;
  SingleValue: ComponentType<SingleValueProps<OptionType>>;
  ValueContainer: ComponentType<ValueContainerProps<OptionType>>;
}

export type SelectComponentsConfig<OptionType> = Partial<SelectComponents<OptionType>>;

export const components: Required<SelectComponents<any>>;

export interface Props<OptionType> {
  components: SelectComponentsConfig<OptionType>;
}

export function defaultComponents<OptionType>(props: Props<OptionType>): SelectComponents<OptionType>;
