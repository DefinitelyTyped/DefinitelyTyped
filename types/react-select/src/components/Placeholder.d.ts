import { ComponentType, CSSProperties, ReactNode } from 'react';

import { CommonProps, OptionTypeBase } from '../types';

export interface PlaceholderProps<OptionType extends OptionTypeBase, isMulti extends boolean> extends CommonProps<OptionType, isMulti> {
    className?: string;
    /** The children to be rendered. */
    children: ReactNode;
    isDisabled: boolean;
    isFocused: boolean;
    innerProps: { style: CSSProperties };
}

export function placeholderCSS(): React.CSSProperties;

export const Placeholder: ComponentType<PlaceholderProps<any, any>>;

export default Placeholder;
