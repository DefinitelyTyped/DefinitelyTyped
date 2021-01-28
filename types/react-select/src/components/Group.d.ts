import { ReactNode, ComponentType } from 'react';

import { spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

interface ComponentProps {
    /** The children to be rendered. */
    children: ReactNode;
    /** Component to wrap the label, recieves headingProps. */
    Heading: ComponentType<any>;
    /** Props to pass to Heading. */
    headingProps: any;
    /** Label to be displayed in the heading component. */
    label: ReactNode;
}
export type GroupProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & ComponentProps;

export function groupCSS(): React.CSSProperties;

export const Group: ComponentType<GroupProps<any, boolean>>;

export type GroupHeadingProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & Pick<ComponentProps, 'children'>;

export function groupHeadingCSS(): React.CSSProperties;

export const GroupHeading: ComponentType<any>;

export default Group;
