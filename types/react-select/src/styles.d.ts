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

export interface Props { [key: string]: any; }

export interface Styles {
  clearIndicator?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  container?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: ContainerProps<OptionType, IsMulti>): CSSProperties;
  control?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: ControlProps<OptionType, IsMulti>): CSSProperties;
  dropdownIndicator?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  group?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: GroupProps<OptionType, IsMulti>): CSSProperties;
  groupHeading?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: GroupHeadingProps<OptionType, IsMulti>): CSSProperties;
  indicatorsContainer?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: IndicatorContainerProps<OptionType, IsMulti>): CSSProperties;
  indicatorSeparator?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: IndicatorProps<OptionType, IsMulti>): CSSProperties;
  input?: (base: CSSProperties, props: InputProps) => CSSProperties;
  loadingIndicator?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: LoadingIndicatorProps<OptionType, IsMulti>): CSSProperties;
  loadingMessage?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: NoticeProps<OptionType, IsMulti>): CSSProperties;
  menu?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: MenuProps<OptionType, IsMulti>): CSSProperties;
  menuList?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: MenuListComponentProps<OptionType, IsMulti>): CSSProperties;
  menuPortal?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: MenuPortalProps<OptionType, IsMulti>): CSSProperties;
  multiValue?<OptionType extends OptionTypeBase>(base: CSSProperties, props: MultiValueProps<OptionType>): CSSProperties;
  multiValueLabel?<OptionType extends OptionTypeBase>(base: CSSProperties, props: MultiValueProps<OptionType>): CSSProperties;
  multiValueRemove?<OptionType extends OptionTypeBase>(base: CSSProperties, props: MultiValueRemoveProps<OptionType>): CSSProperties;
  noOptionsMessage?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: NoticeProps<OptionType, IsMulti>): CSSProperties;
  option?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: OptionProps<OptionType, IsMulti>): CSSProperties;
  placeholder?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: PlaceholderProps<OptionType, IsMulti>): CSSProperties;
  singleValue?<OptionType extends OptionTypeBase>(base: CSSProperties, props: SingleValueProps<OptionType>): CSSProperties;
  valueContainer?<OptionType extends OptionTypeBase, IsMulti extends boolean>(base: CSSProperties, props: ValueContainerProps<OptionType, IsMulti>): CSSProperties;
}

export type StylesConfig = Partial<Styles>;
export type GetStyles = (a: string, b: Props) => CSSProperties;

export const defaultStyles: Styles;

/**
 * Merge Utility - Allows consumers to extend a base Select with additional styles
 */
export function mergeStyles(source: StylesConfig, target: StylesConfig): StylesConfig;
