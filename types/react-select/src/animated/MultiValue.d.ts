import { ComponentType } from 'react';
import { MultiValueProps } from '../components/MultiValue';
import { Collapse, fn } from './transitions';
import { GroupTypeBase, OptionTypeBase } from '../types';

export type AnimatedMultiValueProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = {
    in?: boolean | undefined;
    onExited?: fn | undefined;
} & MultiValueProps<OptionType, GroupType>;

export function AnimatedMultiValue<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
    WrappedComponent: ComponentType<MultiValueProps<OptionType, GroupType>>,
): ComponentType<AnimatedMultiValueProps<OptionType, GroupType>>;

export default AnimatedMultiValue;
