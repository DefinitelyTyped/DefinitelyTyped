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

export interface SelectComponentsConfig<OptionType> {
  ClearIndicator?: IndicatorComponentType<OptionType> | null;
  Control?: ComponentType<ControlProps<OptionType>>;
  DropdownIndicator?: IndicatorComponentType<OptionType> | null;
  DownChevron?: ComponentType<any>;
  CrossIcon?: ComponentType<any>;
  Group?: ComponentType<GroupProps<OptionType>>;
  GroupHeading?: ComponentType<any>;
  IndicatorsContainer?: ComponentType<IndicatorContainerProps<OptionType>>;
  IndicatorSeparator?: IndicatorComponentType<OptionType> | null;
  Input?: ComponentType<InputProps>;
  LoadingIndicator?: ComponentType<LoadingIconProps<OptionType>> | null;
  Menu?: ComponentType<MenuProps<OptionType>>;
  MenuList?: ComponentType<MenuListComponentProps<any>>;
  MenuPortal?: ComponentType<MenuPortalProps<any>>;
  LoadingMessage?: ComponentType<NoticeProps<any>>;
  NoOptionsMessage?: ComponentType<NoticeProps<any>>;
  MultiValue?: ComponentType<MultiValueProps<OptionType>>;
  MultiValueContainer?: ComponentType<any>;
  MultiValueLabel?: ComponentType<any>;
  MultiValueRemove?: ComponentType<any>;
  Option?: ComponentType<OptionProps<OptionType>>;
  Placeholder?: ComponentType<PlaceholderProps<OptionType>>;
  SelectContainer?: ComponentType<ContainerProps<OptionType>>;
  SingleValue?: ComponentType<SingleValueProps<OptionType>>;
  ValueContainer?: ComponentType<ValueContainerProps<OptionType>>;
}

export namespace components {
  const ClearIndicator: IndicatorComponentType<any> | null;
  const Control: ComponentType<ControlProps<any>>;
  const DropdownIndicator: IndicatorComponentType<any> | null;
  const DownChevron: ComponentType<any>;
  const CrossIcon: ComponentType<any>;
  const Group: ComponentType<GroupProps<any>>;
  const GroupHeading: ComponentType<any>;
  const IndicatorsContainer: ComponentType<IndicatorContainerProps<any>>;
  const IndicatorSeparator: IndicatorComponentType<any> | null;
  const Input: ComponentType<InputProps>;
  const LoadingIndicator: ComponentType<LoadingIconProps<any>> | null;
  const Menu: ComponentType<MenuProps<any>>;
  const MenuList: ComponentType<MenuListComponentProps<any>>;
  const MenuPortal: ComponentType<MenuPortalProps<any>>;
  const LoadingMessage: ComponentType<NoticeProps<any>>;
  const NoOptionsMessage: ComponentType<NoticeProps<any>>;
  const MultiValue: ComponentType<MultiValueProps<any>>;
  const MultiValueContainer: ComponentType<any>;
  const MultiValueLabel: ComponentType<any>;
  const MultiValueRemove: ComponentType<any>;
  const Option: ComponentType<OptionProps<any>>;
  const Placeholder: ComponentType<PlaceholderProps<any>>;
  const SelectContainer: ComponentType<ContainerProps<any>>;
  const SingleValue: ComponentType<SingleValueProps<any>>;
  const ValueContainer: ComponentType<ValueContainerProps<any>>;
}

export interface Props {
  components: SelectComponentsConfig<any>;
}

export function defaultComponents(props: Props): SelectComponentsConfig<any>;
