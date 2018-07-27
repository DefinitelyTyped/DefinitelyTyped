import { ComponentType, ReactNode as Node, Ref as ElementRef } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, PropsWithStyles } from '../types';

type State = {
  /** Whether the select is disabled. */
  isDisabled: boolean,
  /** Whether the select is focused. */
  isFocused: boolean,
};

export type ControlProps = CommonProps &
  PropsWithStyles &
  State & {
    /** Children to render. */
    children: Node,
    innerRef: ElementRef<any>,
    /** The mouse down event and the innerRef to pass down to the controller element. */
    innerProps: {
      onMouseDown: (event: React.MouseEvent<HTMLElement>) => void,
    },
  };

export const css: (state: State) => any; // TODO css type

declare const Control: ComponentType<ControlProps>;

export default Control;
