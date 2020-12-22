import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';
import { OptionTypeBase } from '../types';

export type AnimatedValueContainerProps<OptionType extends OptionTypeBase, IsMulti extends boolean> = ValueContainerProps<OptionType, IsMulti>;

export function AnimatedValueContainer<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean
>(WrappedComponent: ComponentType<ValueContainerProps<OptionType, IsMulti>>): ComponentType<AnimatedValueContainerProps<OptionType, IsMulti>>;

export default AnimatedValueContainer;
