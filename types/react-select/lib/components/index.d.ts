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

export type PlaceholderOrValue =
  | Element<ComponentType<PlaceholderProps>>
  | Element<ComponentType<SingleValueProps>>
  | Array<Element<ComponentType<MultiValueProps>>>;

export type IndicatorComponentType = ComponentType<IndicatorProps>;

export type SelectComponents = {
  ClearIndicator: IndicatorComponentType | null,
  Control: ComponentType<ControlProps>,
  DropdownIndicator: IndicatorComponentType | null,
  DownChevron: ComponentType<any>,
  CrossIcon: ComponentType<any>,
  Group: ComponentType<GroupProps>,
  GroupHeading: ComponentType<any>,
  IndicatorsContainer: ComponentType<IndicatorContainerProps>,
  IndicatorSeparator: IndicatorComponentType | null,
  Input: ComponentType<InputProps>,
  LoadingIndicator: ComponentType<LoadingIconProps> | null,
  Menu: ComponentType<MenuProps>,
  MenuList: ComponentType<MenuListComponentProps>,
  MenuPortal: ComponentType<MenuPortalProps>,
  LoadingMessage: ComponentType<NoticeProps>,
  NoOptionsMessage: ComponentType<NoticeProps>,
  MultiValue: ComponentType<MultiValueProps>,
  MultiValueContainer: ComponentType<any>,
  MultiValueLabel: ComponentType<any>,
  MultiValueRemove: ComponentType<any>,
  Option: ComponentType<OptionProps>,
  Placeholder: ComponentType<PlaceholderProps>,
  SelectContainer: ComponentType<ContainerProps>,
  SingleValue: ComponentType<SingleValueProps>,
  ValueContainer: ComponentType<ValueContainerProps>,
};

export type SelectComponentsConfig = {
  ClearIndicator?: IndicatorComponentType | null,
  Control?: ComponentType<ControlProps>,
  DropdownIndicator?: IndicatorComponentType | null,
  DownChevron?: ComponentType<any>,
  CrossIcon?: ComponentType<any>,
  Group?: ComponentType<GroupProps>,
  GroupHeading?: ComponentType<any>,
  IndicatorsContainer?: ComponentType<IndicatorContainerProps>,
  IndicatorSeparator?: IndicatorComponentType | null,
  Input?: ComponentType<InputProps>,
  LoadingIndicator?: ComponentType<LoadingIconProps> | null,
  Menu?: ComponentType<MenuProps>,
  MenuList?: ComponentType<MenuListComponentProps>,
  MenuPortal?: ComponentType<MenuPortalProps>,
  LoadingMessage?: ComponentType<NoticeProps>,
  NoOptionsMessage?: ComponentType<NoticeProps>,
  MultiValue?: ComponentType<MultiValueProps>,
  MultiValueContainer?: ComponentType<any>,
  MultiValueLabel?: ComponentType<any>,
  MultiValueRemove?: ComponentType<any>,
  Option?: ComponentType<OptionProps>,
  Placeholder?: ComponentType<PlaceholderProps>,
  SelectContainer?: ComponentType<ContainerProps>,
  SingleValue?: ComponentType<SingleValueProps>,
  ValueContainer?: ComponentType<ValueContainerProps>,
};

export namespace components {
  const ClearIndicator: IndicatorComponentType | null;
  const Control: ComponentType<ControlProps>;
  const DropdownIndicator: IndicatorComponentType | null;
  const DownChevron: ComponentType<any>;
  const CrossIcon: ComponentType<any>;
  const Group: ComponentType<GroupProps>;
  const GroupHeading: ComponentType<any>;
  const IndicatorsContainer: ComponentType<IndicatorContainerProps>;
  const IndicatorSeparator: IndicatorComponentType | null;
  const Input: ComponentType<InputProps>;
  const LoadingIndicator: ComponentType<LoadingIconProps> | null;
  const Menu: ComponentType<MenuProps>;
  const MenuList: ComponentType<MenuListComponentProps>;
  const MenuPortal: ComponentType<MenuPortalProps>;
  const LoadingMessage: ComponentType<NoticeProps>;
  const NoOptionsMessage: ComponentType<NoticeProps>;
  const MultiValue: ComponentType<MultiValueProps>;
  const MultiValueContainer: ComponentType<any>;
  const MultiValueLabel: ComponentType<any>;
  const MultiValueRemove: ComponentType<any>;
  const Option: ComponentType<OptionProps>;
  const Placeholder: ComponentType<PlaceholderProps>;
  const SelectContainer: ComponentType<ContainerProps>;
  const SingleValue: ComponentType<SingleValueProps>;
  const ValueContainer: ComponentType<ValueContainerProps>;
}

export type Props = {
  components: SelectComponentsConfig,
};

export function defaultComponents(props: Props): SelectComponentsConfig;
