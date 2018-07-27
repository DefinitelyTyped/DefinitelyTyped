// @flow
import React, { type Node, type ElementRef } from 'react';
import { css as emotionCSS } from 'emotion';

import { borderRadius, colors, spacing } from '../theme';
import type { CommonProps, PropsWithStyles } from '../types';

type State = {
  /** Whether the select is disabled. */
  isDisabled: boolean,
  /** Whether the select is focused. */
  isFocused: boolean,
};

export type ControlProps = CommonProps &
  PropsWithStyles &
  State & {
    /** Children to render. */
    children: Node,
    innerRef: ElementRef<*>,
    /** The mouse down event and the innerRef to pass down to the controller element. */
    innerProps: {
      onMouseDown: (SyntheticMouseEvent<HTMLElement>) => void,
    },
  };

export const css = ({ isDisabled, isFocused }: State) => ({
  alignItems: 'center',
  backgroundColor: isDisabled
    ? colors.neutral5
    : isFocused ? colors.neutral0 : colors.neutral2,
  borderColor: isDisabled
    ? colors.neutral10
    : isFocused ? colors.primary : colors.neutral20,
  borderRadius: borderRadius,
  borderStyle: 'solid',
  borderWidth: 1,
  boxShadow: isFocused ? `0 0 0 1px ${colors.primary}` : null,
  cursor: 'default',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  minHeight: spacing.controlHeight,
  outline: '0 !important',
  position: 'relative',
  transition: 'all 100ms',

  '&:hover': {
    borderColor: isFocused ? colors.primary : colors.neutral30,
  },
});

const Control = (props: ControlProps) => {
  const { children, cx, getStyles, className, isDisabled, isFocused, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      className={cx(emotionCSS(getStyles('control', props)), {
        'control': true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused
      }, className)}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default Control;
