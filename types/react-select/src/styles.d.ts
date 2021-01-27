import { CSSProperties } from 'react';
import { ContainerProps, IndicatorContainerProps, ValueContainerProps } from './components/containers';
import { ControlProps } from './components/Control';
import { GroupProps, GroupHeadingProps } from './components/Group';
import { IndicatorProps, LoadingIndicatorProps } from './components/indicators';
import { MultiValueProps, MultiValueRemoveProps } from './components/MultiValue';
import { InputProps } from './components/Input';
import { MenuProps, MenuListComponentProps, MenuPortalProps, NoticeProps } from './components/Menu';
import { OptionProps } from './components/Option';
import { PlaceholderProps } from './components/Placeholder';
import { SingleValueProps } from './components/SingleValue';
import { GroupTypeBase, OptionTypeBase } from './types';

/** @deprecated - Used internally, but will not be exported in next major version */
export interface Props {
    [key: string]: any;
}

/** @deprecated - Unused and will not be exported in next major version */
export type StylesConfigFunction<Props = any> = (base: CSSProperties, props: Props) => CSSProperties;

export interface Styles<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    clearIndicator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSProperties;
    container?(base: CSSProperties, props: ContainerProps<OptionType, IsMulti, GroupType>): CSSProperties;
    control?(base: CSSProperties, props: ControlProps<OptionType, IsMulti, GroupType>): CSSProperties;
    dropdownIndicator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSProperties;
    group?(base: CSSProperties, props: GroupProps<OptionType, IsMulti, GroupType>): CSSProperties;
    groupHeading?(base: CSSProperties, props: GroupHeadingProps<OptionType, IsMulti, GroupType>): CSSProperties;
    indicatorsContainer?(
        base: CSSProperties,
        props: IndicatorContainerProps<OptionType, IsMulti, GroupType>,
    ): CSSProperties;
    indicatorSeparator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSProperties;
    input?: (base: CSSProperties, props: InputProps) => CSSProperties;
    loadingIndicator?(base: CSSProperties, props: LoadingIndicatorProps<OptionType, IsMulti, GroupType>): CSSProperties;
    loadingMessage?(base: CSSProperties, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSProperties;
    menu?(base: CSSProperties, props: MenuProps<OptionType, IsMulti, GroupType>): CSSProperties;
    menuList?(base: CSSProperties, props: MenuListComponentProps<OptionType, IsMulti, GroupType>): CSSProperties;
    menuPortal?(base: CSSProperties, props: MenuPortalProps<OptionType, IsMulti, GroupType>): CSSProperties;
    multiValue?(base: CSSProperties, props: MultiValueProps<OptionType, GroupType>): CSSProperties;
    multiValueLabel?(base: CSSProperties, props: MultiValueProps<OptionType, GroupType>): CSSProperties;
    multiValueRemove?(base: CSSProperties, props: MultiValueRemoveProps<OptionType, GroupType>): CSSProperties;
    noOptionsMessage?(base: CSSProperties, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSProperties;
    option?(base: CSSProperties, props: OptionProps<OptionType, IsMulti, GroupType>): CSSProperties;
    placeholder?(base: CSSProperties, props: PlaceholderProps<OptionType, IsMulti, GroupType>): CSSProperties;
    singleValue?(base: CSSProperties, props: SingleValueProps<OptionType, GroupType>): CSSProperties;
    valueContainer?(base: CSSProperties, props: ValueContainerProps<OptionType, IsMulti, GroupType>): CSSProperties;
}

export type StylesConfig<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = Partial<Styles<OptionType, IsMulti, GroupType>>;
export type GetStyles = (a: string, b: Props) => CSSProperties;

export const defaultStyles: Styles<any, false>;

/**
 * Merge Utility - Allows consumers to extend a base Select with additional styles
 */
export function mergeStyles<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
    source: StylesConfig<OptionType, IsMulti, GroupType>,
    target: StylesConfig<OptionType, IsMulti, GroupType>,
): StylesConfig<OptionType, IsMulti, GroupType>;
