import { ComponentType, ReactNode, MouseEventHandler } from 'react';

import { colors, spacing } from '../theme';
import { CommonProps, PropsWithStyles, InnerRef } from '../types';

interface State {
  /** Wether the option is disabled. */
  isDisabled: boolean;
  /** Wether the option is focused. */
  isFocused: boolean;
  /** Whether the option is selected. */
  isSelected: boolean;
}
interface InnerProps {
  id: string;
  key: string;
  onClick: MouseEventHandler;
  onMouseOver: MouseEventHandler;
  tabIndex: number;
}
export type OptionProps<OptionType> = PropsWithStyles &
  CommonProps<OptionType> &
  State & {
    /** The children to be rendered. */
    children: ReactNode,
    /** Inner ref to DOM Node */
    innerRef: InnerRef,
    /** props passed to the wrapping element for the group. */
    innerProps: InnerProps,
    /* Text to be displayed representing the option. */
    label: string,
    /* Type is used by the menu to determine whether this is an option or a group.
    In the case of option this is always `option`. */
    type: 'option',
  };

export function optionCSS(state: State): React.CSSProperties;

export const Option: ComponentType<OptionProps<any>>;

export default Option;
