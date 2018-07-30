import { ComponentType } from 'react';
import { colors, spacing } from '../theme';
import { CommonProps } from '../types';

type State = {
  /** Whether this is disabled */
  isDisabled: boolean,
};
type ValueProps = {
  /** The children to be rendered. */
  children: string,
  /* The data of the selected option rendered in the Single Value componentn */
  data: any,
  /** Props passed to the wrapping element for the group. */
  innerProps: any,
};
export type SingleValueProps = CommonProps & ValueProps & State;

export function css(props: SingleValueProps): any; // TODO css type

export const SingleValue: ComponentType<SingleValueProps>;

export default SingleValue;
