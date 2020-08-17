import { ComponentType, ReactNode, RefCallback, MouseEventHandler, TouchEventHandler } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, OptionTypeBase, PropsWithStyles } from '../types';

export interface ControlProps<OptionType extends OptionTypeBase> extends CommonProps<OptionType> {
    className?: string;
    innerRef: RefCallback<HTMLDivElement>;
    /** The mouse down event and the innerRef to pass down to the controller element. */
    innerProps: {
      onMouseDown: MouseEventHandler<HTMLDivElement>;
      onTouchEnd: TouchEventHandler<HTMLDivElement>;
    };
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the select is focused. */
    isFocused: boolean;
    /** Whether the select is expanded. */
    menuIsOpen: boolean;
    /** Children to render. */
    children: ReactNode;
}

export function css(state: State): React.CSSProperties;

declare const Control: ComponentType<ControlProps<any>>;

export default Control;
