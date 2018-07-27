// @flow
import React, { Component, type Node } from 'react';
import { css } from 'emotion';
import { spacing } from '../theme';
import type { CommonProps, KeyboardEventHandler } from '../types';

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
export const containerCSS = ({ isDisabled, isRtl }: ContainerState) => ({
  direction: isRtl ? 'rtl' : null,
  pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled
  position: 'relative',
});
export const SelectContainer = (props: ContainerProps) => {
  const { children, className, cx, getStyles, innerProps, isDisabled, isRtl } = props;
  return (
    <div
      className={cx(
        css(getStyles('container', props)),
        {
          '--is-disabled': isDisabled,
          '--is-rtl': isRtl
        },
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

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
export const valueContainerCSS = () => ({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
  padding: `${spacing.baseUnit / 2}px ${spacing.baseUnit * 2}px`,
  WebkitOverflowScrolling: 'touch',
  position: 'relative',
});
export class ValueContainer extends Component<ValueContainerProps> {
  render() {
    const { children, className, cx, isMulti, getStyles, hasValue } = this.props;

    return (
      <div
        className={cx(
          css(getStyles('valueContainer', this.props)),
          {
            'value-container': true,
            'value-container--is-multi': isMulti,
            'value-container--has-value': hasValue,
          }, className)}
      >
        {children}
      </div>
    );
  }
}

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

export const indicatorsContainerCSS = () => ({
  alignItems: 'center',
  alignSelf: 'stretch',
  display: 'flex',
  flexShrink: 0,
});
export const IndicatorsContainer = (props: IndicatorContainerProps) => {
  const { children, className, cx, getStyles } = props;

  return (
    <div
      className={cx(
        css(getStyles('indicatorsContainer', props)),
        {
          'indicators': true,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
