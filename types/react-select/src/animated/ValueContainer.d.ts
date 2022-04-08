import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';
import { GroupTypeBase, OptionTypeBase } from '../types';

export type AnimatedValueContainerProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = ValueContainerProps<OptionType, IsMulti, GroupType>;

export function AnimatedValueContainer<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
    WrappedComponent: ComponentType<ValueContainerProps<OptionType, IsMulti, GroupType>>,
): ComponentType<AnimatedValueContainerProps<OptionType, IsMulti, GroupType>>;

export default AnimatedValueContainer;
