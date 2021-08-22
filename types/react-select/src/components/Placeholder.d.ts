import { ComponentType, CSSProperties, ReactElement, ReactNode } from 'react';
import { CSSObject } from '@emotion/serialize';

import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

export interface PlaceholderProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends CommonProps<OptionType, IsMulti, GroupType> {
    className?: string | undefined;
    /** The children to be rendered. */
    children: ReactNode;
    isDisabled: boolean;
    isFocused: boolean;
    innerProps: { style: CSSProperties };
}

export function placeholderCSS(): CSSObject;

declare function Placeholder<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: PlaceholderProps<OptionType, IsMulti, GroupType>): ReactElement;

export default Placeholder;
