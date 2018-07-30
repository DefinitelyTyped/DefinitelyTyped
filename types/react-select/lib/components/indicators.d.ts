import { ComponentType, ReactElement as ElementType } from 'react';

import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

// ==============================
// Dropdown & Clear Icons
// ==============================

export function CrossIcon(props: any): any; // TODO svg type
export function DownChevron(props: any): any; // TODO svg type

// ==============================
// Dropdown & Clear Buttons
// ==============================

export type IndicatorProps = CommonProps & {
  /** The children to be rendered inside the indicator. */
  children: ElementType<any>,
  /** Props that will be passed on to the children. */
  innerProps: any,
  /** The focused state of the select. */
  isFocused: boolean,
  /** Whether the text is right to left */
  isRtl: boolean,
};

export type baseCSS = (props: IndicatorProps) => any; // TODO css type

export const dropdownIndicatorCSS: baseCSS;
export const DropdownIndicator: ComponentType<IndicatorProps>;

export const clearIndicatorCSS: baseCSS;
export const ClearIndicator: ComponentType<IndicatorProps>;

// ==============================
// Separator
// ==============================

export type SeparatorState = { isDisabled: boolean };

export function indicatorSeparatorCSS(state: SeparatorState): any; // TODO css type

export const IndicatorSeparator: ComponentType<IndicatorProps>;

// ==============================
// Loading
// ==============================

export function loadingIndicatorCSS(state: {
  isFocused: boolean,
  size: number,
}): any; // TODO css type

export type LoadingIconProps = {
  /** Props that will be passed on to the children. */
  innerProps: any,
  /** The focused state of the select. */
  isFocused: boolean,
  /** Whether the text is right to left */
  isRtl: boolean,
} & CommonProps & {
  /** Set size of the container. */
  size: number,
};
export const LoadingIndicator: ComponentType<LoadingIconProps>;
// TODO LoadingIndicator.defaultProps: { size: number };
