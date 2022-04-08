import { ComponentType } from 'react';
import { SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';
import { GroupTypeBase, OptionTypeBase } from '../types';

export type AnimatedSingleValueProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = SingleValueProps<OptionType, GroupType>;

export function AnimatedSingleValue<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
    WrappedComponent: ComponentType<SingleValueProps<OptionType, GroupType>>,
): ComponentType<AnimatedSingleValueProps<OptionType, GroupType>>;

export default AnimatedSingleValue;
