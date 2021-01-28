import { ComponentType, CSSProperties, ReactNode } from 'react';
import { CSSObject } from '@emotion/serialize';

import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

export interface PlaceholderProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends CommonProps<OptionType, IsMulti, GroupType> {
    className?: string;
    /** The children to be rendered. */
    children: ReactNode;
    isDisabled: boolean;
    isFocused: boolean;
    innerProps: { style: CSSProperties };
}

export function placeholderCSS(): CSSObject;

export const Placeholder: ComponentType<PlaceholderProps<any, boolean>>;

export default Placeholder;
