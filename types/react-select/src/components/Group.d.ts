import { ReactNode, ComponentType, ReactElement } from 'react';
import { CSSObject } from '@emotion/serialize';

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

export function groupCSS(): CSSObject;

declare function Group<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: GroupProps<OptionType, IsMulti, GroupType>): ReactElement;

export type GroupHeadingProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & Pick<ComponentProps, 'children'>;

export function groupHeadingCSS(): CSSObject;

export function GroupHeading<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: GroupHeadingProps<OptionType, IsMulti, GroupType>): ReactElement;

export default Group;
