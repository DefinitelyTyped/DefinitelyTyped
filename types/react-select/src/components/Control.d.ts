import { ComponentType, ReactNode, Ref as ElementRef } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, OptionTypeBase, PropsWithStyles } from '../types';

export type ControlProps<OptionType extends OptionTypeBase> = CommonProps<OptionType> &
  PropsWithStyles & {
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
