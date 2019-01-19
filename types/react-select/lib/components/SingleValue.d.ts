import { ComponentType } from 'react';
import * as ReactDOM from 'react-dom';

import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

interface State {
  /** Whether this is disabled */
  isDisabled: boolean;
}
interface ValueProps<OptionType> {
  /** The children to be rendered. */
  children: string;
  /* The data of the selected option rendered in the Single Value componentn */
  data: OptionType;
  /** Props passed to the wrapping element for the group. */
  innerProps: any;
}
export type SingleValueProps<OptionType> = CommonProps<OptionType> & ValueProps<OptionType> & State;

export function css(props: SingleValueProps<any>): ReactDOM.CSSProperties;

export const SingleValue: ComponentType<SingleValueProps<any>>;

export default SingleValue;
