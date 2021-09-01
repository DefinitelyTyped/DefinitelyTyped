import { ComponentType, ReactElement as Element } from 'react';
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
import MultiValue, { MultiValueProps, MultiValueContainer, MultiValueLabel, MultiValueRemove } from './MultiValue';
import Option, { OptionProps } from './Option';
import Placeholder, { PlaceholderProps } from './Placeholder';
import SingleValue, { SingleValueProps } from './SingleValue';
import { GroupTypeBase, OptionTypeBase } from '../types';

export type PlaceholderOrValue<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> =
    | Element<ComponentType<PlaceholderProps<OptionType, IsMulti, GroupType>>>
    | Element<ComponentType<SingleValueProps<OptionType, GroupType>>>
    | Array<Element<ComponentType<MultiValueProps<OptionType, GroupType>>>>;

export type IndicatorComponentType<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = ComponentType<IndicatorProps<OptionType, IsMulti, GroupType>>;

export interface SelectComponents<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    ClearIndicator: IndicatorComponentType<OptionType, IsMulti, GroupType> | null;
    Control: ComponentType<ControlProps<OptionType, IsMulti, GroupType>>;
    DropdownIndicator: IndicatorComponentType<OptionType, IsMulti, GroupType> | null;
    DownChevron: ComponentType<any>;
    CrossIcon: ComponentType<any>;
    Group: ComponentType<GroupProps<OptionType, IsMulti, GroupType>>;
    GroupHeading: ComponentType<any>;
    IndicatorsContainer: ComponentType<IndicatorContainerProps<OptionType, IsMulti, GroupType>>;
    IndicatorSeparator: IndicatorComponentType<OptionType, IsMulti, GroupType> | null;
    Input: ComponentType<InputProps>;
    LoadingIndicator: ComponentType<LoadingIconProps<OptionType, IsMulti, GroupType>> | null;
    Menu: ComponentType<MenuProps<OptionType, IsMulti, GroupType>>;
    MenuList: ComponentType<MenuListComponentProps<OptionType, IsMulti, GroupType>>;
    MenuPortal: ComponentType<MenuPortalProps<OptionType, IsMulti, GroupType>>;
    LoadingMessage: ComponentType<NoticeProps<OptionType, IsMulti, GroupType>>;
    NoOptionsMessage: ComponentType<NoticeProps<OptionType, IsMulti, GroupType>>;
    MultiValue: ComponentType<MultiValueProps<OptionType, GroupType>>;
    MultiValueContainer: ComponentType<any>;
    MultiValueLabel: ComponentType<any>;
    MultiValueRemove: ComponentType<any>;
    Option: ComponentType<OptionProps<OptionType, IsMulti, GroupType>>;
    Placeholder: ComponentType<PlaceholderProps<OptionType, IsMulti, GroupType>>;
    SelectContainer: ComponentType<ContainerProps<OptionType, IsMulti, GroupType>>;
    SingleValue: ComponentType<SingleValueProps<OptionType, GroupType>>;
    ValueContainer: ComponentType<ValueContainerProps<OptionType, IsMulti, GroupType>>;
}

export type SelectComponentsConfig<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = Partial<SelectComponents<OptionType, IsMulti, GroupType>>;

export interface Components {
    ClearIndicator: typeof ClearIndicator;
    Control: typeof Control;
    DropdownIndicator: typeof DropdownIndicator;
    DownChevron: typeof DownChevron;
    CrossIcon: typeof CrossIcon;
    Group: typeof Group;
    GroupHeading: typeof GroupHeading;
    IndicatorsContainer: typeof IndicatorsContainer;
    IndicatorSeparator: typeof IndicatorSeparator;
    Input: typeof Input;
    LoadingIndicator: typeof LoadingIndicator;
    Menu: typeof Menu;
    MenuList: typeof MenuList;
    MenuPortal: typeof MenuPortal;
    LoadingMessage: typeof LoadingMessage;
    NoOptionsMessage: typeof NoOptionsMessage;
    MultiValue: typeof MultiValue;
    MultiValueContainer: typeof MultiValueContainer;
    MultiValueLabel: typeof MultiValueLabel;
    MultiValueRemove: typeof MultiValueRemove;
    Option: typeof Option;
    Placeholder: typeof Placeholder;
    SelectContainer: typeof SelectContainer;
    SingleValue: typeof SingleValue;
    ValueContainer: typeof ValueContainer;
}

export const components: Components;

export interface Props<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    components: SelectComponentsConfig<OptionType, IsMulti, GroupType>;
}

export function defaultComponents<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(props: Props<OptionType, IsMulti, GroupType>): SelectComponents<OptionType, IsMulti, GroupType>;
