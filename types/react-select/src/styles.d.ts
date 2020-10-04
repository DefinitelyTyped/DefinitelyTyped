import { CSSProperties } from 'react';
import { ControlProps } from './components/Control';
import { PlaceholderProps } from './components/Placeholder';

export interface Props { [key: string]: any; }

export type StylesConfigFunction<Props = any> = (base: CSSProperties, props: Props) => CSSProperties;

export interface Styles {
  clearIndicator?: StylesConfigFunction;
  container?: StylesConfigFunction;
  control?: StylesConfigFunction<ControlProps<{}>>;
  dropdownIndicator?: StylesConfigFunction;
  group?: StylesConfigFunction;
  groupHeading?: StylesConfigFunction;
  indicatorsContainer?: StylesConfigFunction;
  indicatorSeparator?: StylesConfigFunction;
  input?: StylesConfigFunction;
  loadingIndicator?: StylesConfigFunction;
  // TODO loadingMessageCSS?: StylesConfigFunction;
  loadingMessage?: StylesConfigFunction;
  menu?: StylesConfigFunction;
  menuList?: StylesConfigFunction;
  menuPortal?: StylesConfigFunction;
  multiValue?: StylesConfigFunction;
  multiValueLabel?: StylesConfigFunction;
  multiValueRemove?: StylesConfigFunction;
  // TODO noOptionsMessageCSS?: StylesConfigFunction;
  noOptionsMessage?: StylesConfigFunction;
  option?: StylesConfigFunction;
  placeholder?: StylesConfigFunction<PlaceholderProps<{}>>;
  singleValue?: StylesConfigFunction;
  valueContainer?: StylesConfigFunction;
}
export type StylesConfig = Partial<Styles>;
export type GetStyles = (a: string, b: Props) => CSSProperties;

export const defaultStyles: Styles;

// Merge Utility
// Allows consumers to extend a base Select with additional styles

export function mergeStyles(source: StylesConfig, target: StylesConfig): StylesConfig;
