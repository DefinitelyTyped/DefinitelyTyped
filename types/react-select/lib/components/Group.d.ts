// @flow
import React, { type Node, type ComponentType } from 'react';
import { css } from 'emotion';

import { spacing } from '../theme';
import type { CommonProps } from '../types';

type ComponentProps = {
  /** The children to be rendered. */
  children: Node,
  /** Component to wrap the label, recieves headingProps. */
  Heading: ComponentType<any>,
  /** Label to be displayed in the heading component. */
  label: Node,
};
export type GroupProps = CommonProps & ComponentProps;

export const groupCSS = () => ({
  paddingBottom: spacing.baseUnit * 2,
  paddingTop: spacing.baseUnit * 2,
});

const Group = (props: GroupProps) => {
  const {
    children,
    className,
    cx,
    getStyles,
    Heading,
    label,
  } = props;
  return (
    <div
      className={cx(
        css(getStyles('group', props)),
        { 'group': true },
        className,
      )}
    >
      <Heading getStyles={getStyles} cx={cx}>
        {label}
      </Heading>
      <div>{children}</div>
    </div>
  );
};

export const groupHeadingCSS = () => ({
  color: '#999',
  cursor: 'default',
  display: 'block',
  fontSize: '75%',
  fontWeight: '500',
  marginBottom: '0.25em',
  paddingLeft: spacing.baseUnit * 3,
  paddingRight: spacing.baseUnit * 3,
  textTransform: 'uppercase',
});

export const GroupHeading = (props: any) => {
  const { className, cx, getStyles, ...cleanProps } = props;
  return (
    <div
      className={cx(
        css(getStyles('groupHeading', props)),
        { 'group-heading': true },
        className
      )}
      {...cleanProps}
    />
  );
};

export default Group;
