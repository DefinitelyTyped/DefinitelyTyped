import { ComponentType, ReactNode as Node } from 'react';

import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

export type PlaceholderProps = CommonProps & {
  /** The children to be rendered. */
  children: Node,
  /** props passed to the wrapping element for the group. */
  innerProps: { [key: string]: any },
};

export const placeholderCSS: () => any; // TODO css type

export const Placeholder: ComponentType<PlaceholderProps>;

export default Placeholder;
