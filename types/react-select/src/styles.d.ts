import { CSSObject } from '@emotion/serialize';
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
export type StylesConfigFunction<Props = any> = (base: CSSObject, props: Props) => CSSObject;

export interface Styles<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    clearIndicator?(base: CSSObject, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSObject;
    container?(base: CSSObject, props: ContainerProps<OptionType, IsMulti, GroupType>): CSSObject;
    control?(base: CSSObject, props: ControlProps<OptionType, IsMulti, GroupType>): CSSObject;
    dropdownIndicator?(base: CSSObject, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSObject;
    group?(base: CSSObject, props: GroupProps<OptionType, IsMulti, GroupType>): CSSObject;
    groupHeading?(base: CSSObject, props: GroupHeadingProps<OptionType, IsMulti, GroupType>): CSSObject;
    indicatorsContainer?(base: CSSObject, props: IndicatorContainerProps<OptionType, IsMulti, GroupType>): CSSObject;
    indicatorSeparator?(base: CSSObject, props: IndicatorProps<OptionType, IsMulti, GroupType>): CSSObject;
    input?(base: CSSObject, props: InputProps): CSSObject;
    loadingIndicator?(base: CSSObject, props: LoadingIndicatorProps<OptionType, IsMulti, GroupType>): CSSObject;
    loadingMessage?(base: CSSObject, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSObject;
    menu?(base: CSSObject, props: MenuProps<OptionType, IsMulti, GroupType>): CSSObject;
    menuList?(base: CSSObject, props: MenuListComponentProps<OptionType, IsMulti, GroupType>): CSSObject;
    menuPortal?(base: CSSObject, props: MenuPortalProps<OptionType, IsMulti, GroupType>): CSSObject;
    multiValue?(base: CSSObject, props: MultiValueProps<OptionType, GroupType>): CSSObject;
    multiValueLabel?(base: CSSObject, props: MultiValueProps<OptionType, GroupType>): CSSObject;
    multiValueRemove?(base: CSSObject, props: MultiValueRemoveProps<OptionType, GroupType>): CSSObject;
    noOptionsMessage?(base: CSSObject, props: NoticeProps<OptionType, IsMulti, GroupType>): CSSObject;
    option?(base: CSSObject, props: OptionProps<OptionType, IsMulti, GroupType>): CSSObject;
    placeholder?(base: CSSObject, props: PlaceholderProps<OptionType, IsMulti, GroupType>): CSSObject;
    singleValue?(base: CSSObject, props: SingleValueProps<OptionType, GroupType>): CSSObject;
    valueContainer?(base: CSSObject, props: ValueContainerProps<OptionType, IsMulti, GroupType>): CSSObject;
}

export type StylesConfig<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = Partial<Styles<OptionType, IsMulti, GroupType>>;
export type GetStyles = (a: string, b: Props) => CSSObject;

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
