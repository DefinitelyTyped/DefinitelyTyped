import { ComponentType, ReactNode as Node } from 'react';

import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

export type PlaceholderProps<OptionType> = CommonProps<OptionType> & {
  /** The children to be rendered. */
  children: Node,
  /** props passed to the wrapping element for the group. */
  innerProps: { [key: string]: any },
};

export function placeholderCSS(): React.CSSProperties;

export const Placeholder: ComponentType<PlaceholderProps<any>>;

export default Placeholder;
