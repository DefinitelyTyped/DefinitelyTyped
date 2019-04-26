import { ComponentType, ReactNode } from 'react';
import { colors, spacing } from '../theme';
import { CommonProps } from '../types';
import { DefaultSelectComponentsProps } from '../Select';

interface State {
  /** Whether this is disabled */
  isDisabled: boolean;
}
interface ValueProps<OptionType> {
  /** The children to be rendered. */
  children: ReactNode;
  /* The data of the selected option rendered in the Single Value componentn */
  data: OptionType;
  /** Props passed to the wrapping element for the group. */
  innerProps: any;
}
export type SingleValueProps<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> = CommonProps<OptionType, SelectComponentsProps> & ValueProps<OptionType> & State;

export function css(props: SingleValueProps<any>): React.CSSProperties;

export const SingleValue: ComponentType<SingleValueProps<any>>;

export default SingleValue;
