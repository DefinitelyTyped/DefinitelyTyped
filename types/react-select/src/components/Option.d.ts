import { ComponentType, ReactNode, MouseEventHandler, ReactElement } from 'react';
import { CSSObject } from '@emotion/serialize';

import { colors, spacing } from '../theme';
import { CommonProps, InnerRef, OptionTypeBase, GroupTypeBase } from '../types';

interface State {
    /** Whether the option is disabled. */
    isDisabled: boolean;
    /** Whether the option is focused. */
    isFocused: boolean;
    /** Whether the option is selected. */
    isSelected: boolean;
}
interface InnerProps {
    id: string;
    key: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    onMouseMove: MouseEventHandler<HTMLDivElement>;
    onMouseOver: MouseEventHandler<HTMLDivElement>;
    tabIndex: number;
}
export type OptionProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> &
    State & {
        /** The children to be rendered. */
        children: ReactNode;
        /** Inner ref to DOM Node */
        innerRef: InnerRef;
        /** props passed to the wrapping element for the group. */
        innerProps: InnerProps;
        /* Text to be displayed representing the option. */
        label: string;
        /* Type is used by the menu to determine whether this is an option or a group.
    In the case of option this is always `option`. */
        type: 'option';
        /* The data of the selected option. */
        data: any;
    };

export function optionCSS(state: State): CSSObject;

declare function Option<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: OptionProps<OptionType, IsMulti, GroupType>): ReactElement;

export default Option;
