// @flow
import React from 'react';
import { css as emotionCss } from 'emotion';
import { colors, spacing } from '../theme';
import type { CommonProps } from '../types';

type State = {
  /** Whether this is disabled */
  isDisabled: boolean,
};
type ValueProps = {
  /** The children to be rendered. */
  children: string,
  /* The data of the selected option rendered in the Single Value componentn */
  data: any,
  /** Props passed to the wrapping element for the group. */
  innerProps: any,
};
export type SingleValueProps = CommonProps & ValueProps & State;

export const css = ({ isDisabled }: SingleValueProps) => ({
  color: isDisabled ? colors.neutral40 : colors.text,
  marginLeft: spacing.baseUnit / 2,
  marginRight: spacing.baseUnit / 2,
  maxWidth: `calc(100% - ${spacing.baseUnit * 2}px)`,
  overflow: 'hidden',
  position: 'absolute',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  top: '50%',
  transform: 'translateY(-50%)',
});

const SingleValue = (props: SingleValueProps) => {
  const { children, className, cx, getStyles, isDisabled, innerProps } = props;
  return (
    <div
      className={cx(
        emotionCss(getStyles('singleValue', props)),
        {
          'single-value': true,
          'single-value--is-disabled': isDisabled
        },
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default SingleValue;
