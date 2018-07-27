import { Component, ReactNode as Node, ComponentType } from 'react';
import { spacing } from '../theme';
import { CommonProps, KeyboardEventHandler } from '../types';

// ==============================
// Root Container
// ==============================

type ContainerState = {
  /** Whether the select is disabled. */
  isDisabled: boolean,
  /** Whether the text in the select is indented from right to left. */
  isRtl: boolean,
};

export type ContainerProps = CommonProps &
  ContainerState & {
    /** The children to be rendered. */
    children: Node,
    /** Inner props to be passed down to the container. */
    innerProps: { onKeyDown: KeyboardEventHandler },
  };
export const containerCSS: (state: ContainerState) => any; // TODO css type;
export const SelectContainer: ComponentType<ContainerProps>;

// ==============================
// Value Container
// ==============================

export type ValueContainerProps = CommonProps & {
  /** Set when the value container should hold multiple values */
  isMulti: boolean,
  /** Whether the value container currently holds a value. */
  hasValue: boolean,
  /** The children to be rendered. */
  children: Node,
};
export const valueContainerCSS: () => any; // TODO css type;
export class ValueContainer extends Component<ValueContainerProps> {}

// ==============================
// Indicator Container
// ==============================

type IndicatorsState = {
  /** Whether the text should be rendered right to left. */
  isRtl: boolean,
};

export type IndicatorContainerProps = CommonProps &
  IndicatorsState & {
    /** The children to be rendered. */
    children: Node,
  };

export const indicatorsContainerCSS: () => any; // TODO css type;
export const IndicatorsContainer: ComponentType<IndicatorContainerProps>;
