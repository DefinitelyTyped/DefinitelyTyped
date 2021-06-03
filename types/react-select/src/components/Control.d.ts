import { ComponentType, ReactElement, ReactNode, Ref as ElementRef } from 'react';
import { CSSObject } from '@emotion/serialize';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

interface State {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the select is focused. */
    isFocused: boolean;
    /** Whether the select is expanded. */
    menuIsOpen: boolean;
}

export type ControlProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> &
    State & {
        /** Children to render. */
        children: ReactNode;
        innerRef: ElementRef<any>;
        /** The mouse down event and the innerRef to pass down to the controller element. */
        innerProps: {
            onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
        };
    };

export function css(state: State): CSSObject;

declare function Control<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: ControlProps<OptionType, IsMulti, GroupType>): ReactElement;

export default Control;
