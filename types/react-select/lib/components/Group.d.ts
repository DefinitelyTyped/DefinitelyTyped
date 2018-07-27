import { ReactNode as  Node, ComponentType } from 'react';
import { css } from 'emotion';

import { spacing } from '../theme';
import { CommonProps } from '../types';

type ComponentProps = {
  /** The children to be rendered. */
  children: Node,
  /** Component to wrap the label, recieves headingProps. */
  Heading: ComponentType<any>,
  /** Label to be displayed in the heading component. */
  label: Node,
};
export type GroupProps = CommonProps & ComponentProps;

export const groupCSS: () => any; // TODO css type

export const Group: ComponentType<GroupProps>;

export const groupHeadingCSS: () => any; // TODO css type

export const GroupHeading: ComponentType<any>;

export default Group;
