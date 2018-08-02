import { ReactNode as  Node, ComponentType } from 'react';

import { spacing } from '../theme';
import { CommonProps } from '../types';

interface ComponentProps {
  /** The children to be rendered. */
  children: Node;
  /** Component to wrap the label, recieves headingProps. */
  Heading: ComponentType<any>;
  /** Label to be displayed in the heading component. */
  label: Node;
}
export type GroupProps<OptionType> = CommonProps<OptionType> & ComponentProps;

export function groupCSS(): any; // TODO css type

export const Group: ComponentType<GroupProps<any>>;

export function groupHeadingCSS(): any; // TODO css type

export const GroupHeading: ComponentType<any>;

export default Group;
