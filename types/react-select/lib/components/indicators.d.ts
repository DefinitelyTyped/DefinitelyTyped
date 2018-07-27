// @flow
import React, { type ElementType } from 'react';
import { injectGlobal, css } from 'emotion';

import { colors, spacing } from '../theme';
import { type CommonProps } from '../types';

// ==============================
// Dropdown & Clear Icons
// ==============================

const Svg = ({ size, ...props }: { size: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
    className={css({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0,
    })}
    {...props}
  />
);

export const CrossIcon = (props: any) => (
  <Svg size={20} {...props}>
    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
  </Svg>
);
export const DownChevron = (props: any) => (
  <Svg size={20} {...props}>
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
  </Svg>
);

// ==============================
// Dropdown & Clear Buttons
// ==============================

export type IndicatorProps = CommonProps & {
  /** The children to be rendered inside the indicator. */
  children: ElementType,
  /** Props that will be passed on to the children. */
  innerProps: any,
  /** The focused state of the select. */
  isFocused: boolean,
  /** Whether the text is right to left */
  isRtl: boolean,
};

const baseCSS = ({ isFocused }: IndicatorProps) => ({
  color: isFocused ? colors.neutral60 : colors.neutral20,
  display: 'flex',
  padding: spacing.baseUnit * 2,
  transition: 'color 150ms',

  ':hover': {
    color: isFocused ? colors.neutral100 : colors.neutral40,
  },
});

export const dropdownIndicatorCSS = baseCSS;
export const DropdownIndicator = (props: IndicatorProps) => {
  const { children = <DownChevron />, className, cx, getStyles, innerProps } = props;
  return (
    <div
      {...innerProps}
      className={cx(
        css(getStyles('dropdownIndicator', props)),
        {
          'indicator': true,
          'dropdown-indicator': true,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export const clearIndicatorCSS = baseCSS;
export const ClearIndicator = (props: IndicatorProps) => {
  const { children = <CrossIcon />, className, cx, getStyles, innerProps } = props;
  return (
    <div
      {...innerProps}
      className={cx(
        css(getStyles('clearIndicator', props)),
        {
          'indicator': true,
          'clear-indicator': true,
        },
        className)}
    >
      {children}
    </div>
  );
};

// ==============================
// Separator
// ==============================

type SeparatorState = { isDisabled: boolean };

export const indicatorSeparatorCSS = ({ isDisabled }: SeparatorState) => ({
  alignSelf: 'stretch',
  backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
  marginBottom: spacing.baseUnit * 2,
  marginTop: spacing.baseUnit * 2,
  width: 1,
});

export const IndicatorSeparator = (props: IndicatorProps) => {
  const { className, cx, getStyles, innerProps } = props;
  return (
    <span
      {...innerProps}
      className={cx(
        css(getStyles('indicatorSeparator', props)),
        { 'indicator-separator': true },
        className
      )}
    />
  );
};

// ==============================
// Loading
// ==============================

const keyframesName = 'react-select-loading-indicator';

export const loadingIndicatorCSS = ({
  isFocused,
  size,
}: {
  isFocused: boolean,
  size: number,
}) => ({
  color: isFocused ? colors.neutral60 : colors.neutral20,
  display: 'flex',
  padding: spacing.baseUnit * 2,
  transition: 'color 150ms',
  alignSelf: 'center',
  fontSize: size,
  lineHeight: 1,
  marginRight: size,
  textAlign: 'center',
  verticalAlign: 'middle',
});

type DotProps = { color: string, delay: number, offset: boolean };
const LoadingDot = ({ color, delay, offset }: DotProps) => (
  <span
    css={{
      animationDuration: '1s',
      animationDelay: `${delay}ms`,
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em',
    }}
  />
);

// eslint-disable-next-line no-unused-expressions
injectGlobal`@keyframes ${keyframesName} {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
};`;

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
export const LoadingIndicator = (props: LoadingIconProps) => {
  const { className, cx, getStyles, innerProps, isFocused, isRtl } = props;
  const color = isFocused ? colors.text : colors.neutral20;

  return (
    <div
      {...innerProps}
      className={cx(
        css(getStyles('loadingIndicator', props)),
        {
          'indicator': true,
          'loading-indicator': true,
        },
        className
      )}
    >
      <LoadingDot color={color} delay={0} offset={isRtl} />
      <LoadingDot color={color} delay={160} offset />
      <LoadingDot color={color} delay={320} offset={!isRtl} />
    </div>
  );
};
LoadingIndicator.defaultProps = { size: 4 };
