import { ComponentType, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';

import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

export type PlaceholderProps<OptionType> = CommonProps<OptionType> & {
  /** The children to be rendered. */
  children: ReactNode,
  /** props passed to the wrapping element for the group. */
  innerProps: { [key: string]: any },
};

export function placeholderCSS(): ReactDOM.CSSProperties;

export const Placeholder: ComponentType<PlaceholderProps<any>>;

export default Placeholder;
