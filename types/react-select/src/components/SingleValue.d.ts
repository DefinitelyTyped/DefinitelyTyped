import { ComponentType, ReactElement, ReactNode } from 'react';
import { CSSObject } from '@emotion/serialize';
import { colors, spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';
import { ContainerProps } from './containers';

interface State {
    /** Whether this is disabled */
    isDisabled: boolean;
}
interface ValueProps<OptionType extends OptionTypeBase> {
    /** The children to be rendered. */
    children: ReactNode;
    /* The data of the selected option rendered in the Single Value componentn */
    data: OptionType;
    /** Props passed to the wrapping element for the group. */
    innerProps: any;
}
export type SingleValueProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, false, GroupType> & ValueProps<OptionType> & State;

export function css(props: SingleValueProps<any>): CSSObject;

declare function SingleValue<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: SingleValueProps<OptionType, GroupType>): ReactElement;

export default SingleValue;
