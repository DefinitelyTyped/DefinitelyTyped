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
import { OptionTypeBase } from './types';

/** @deprecated - Used internally, but will not be exported in next major version */
export interface Props { [key: string]: any; }

/** @deprecated - Unused and will not be exported in next major version */
export type StylesConfigFunction<Props = any> = (base: CSSProperties, props: Props) => CSSProperties;

export interface Styles<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  clearIndicator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  container?(base: CSSProperties, props: ContainerProps<OptionType, IsMulti>): CSSProperties;
  control?(base: CSSProperties, props: ControlProps<OptionType, IsMulti>): CSSProperties;
  dropdownIndicator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  group?(base: CSSProperties, props: GroupProps<OptionType, IsMulti>): CSSProperties;
  groupHeading?(base: CSSProperties, props: GroupHeadingProps<OptionType, IsMulti>): CSSProperties;
  indicatorsContainer?(base: CSSProperties, props: IndicatorContainerProps<OptionType, IsMulti>): CSSProperties;
  indicatorSeparator?(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  input?: (base: CSSProperties, props: InputProps) => CSSProperties;
  loadingIndicator?(base: CSSProperties, props: LoadingIndicatorProps<OptionType, IsMulti>): CSSProperties;
  loadingMessage?(base: CSSProperties, props: NoticeProps<OptionType, IsMulti>): CSSProperties;
  menu?(base: CSSProperties, props: MenuProps<OptionType, IsMulti>): CSSProperties;
  menuList?(base: CSSProperties, props: MenuListComponentProps<OptionType, IsMulti>): CSSProperties;
  menuPortal?(base: CSSProperties, props: MenuPortalProps<OptionType, IsMulti>): CSSProperties;
  multiValue?(base: CSSProperties, props: MultiValueProps<OptionType>): CSSProperties;
  multiValueLabel?(base: CSSProperties, props: MultiValueProps<OptionType>): CSSProperties;
  multiValueRemove?(base: CSSProperties, props: MultiValueRemoveProps<OptionType>): CSSProperties;
  noOptionsMessage?(base: CSSProperties, props: NoticeProps<OptionType, IsMulti>): CSSProperties;
  option?(base: CSSProperties, props: OptionProps<OptionType, IsMulti>): CSSProperties;
  placeholder?(base: CSSProperties, props: PlaceholderProps<OptionType, IsMulti>): CSSProperties;
  singleValue?(base: CSSProperties, props: SingleValueProps<OptionType>): CSSProperties;
  valueContainer?(base: CSSProperties, props: ValueContainerProps<OptionType, IsMulti>): CSSProperties;
}

export type StylesConfig<OptionType extends OptionTypeBase, IsMulti extends boolean> = Partial<Styles<OptionType, IsMulti>>;
export type GetStyles = (a: string, b: Props) => CSSProperties;

export const defaultStyles: Styles<any, false>;

/**
 * Merge Utility - Allows consumers to extend a base Select with additional styles
 */
export function mergeStyles<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean
>(source: StylesConfig<OptionType, IsMulti>, target: StylesConfig<OptionType, IsMulti>): StylesConfig<OptionType, IsMulti>;
