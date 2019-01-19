import { ReactNode, ComponentType } from 'react';
import * as ReactDOM from 'react-dom';

import { spacing } from '../theme';
import { CommonProps } from '../types';

interface ComponentProps {
  /** The children to be rendered. */
  children: ReactNode;
  /** Component to wrap the label, recieves headingProps. */
  Heading: ComponentType<any>;
  /** Label to be displayed in the heading component. */
  label: ReactNode;
}
export type GroupProps<OptionType> = CommonProps<OptionType> & ComponentProps;

export function groupCSS(): ReactDOM.CSSProperties;

export const Group: ComponentType<GroupProps<any>>;

export function groupHeadingCSS(): ReactDOM.CSSProperties;

export const GroupHeading: ComponentType<any>;

export default Group;
