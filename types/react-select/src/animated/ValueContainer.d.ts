import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';
import { OptionTypeBase } from '../types';

export type AnimatedValueContainerProps<OptionType extends OptionTypeBase, isMulti extends boolean> = ValueContainerProps<OptionType, isMulti>;

export function AnimatedValueContainer<
    OptionType extends OptionTypeBase,
    isMulti extends boolean
>(WrappedComponent: ComponentType<ValueContainerProps<OptionType, isMulti>>): ComponentType<AnimatedValueContainerProps<OptionType, isMulti>>;

export default AnimatedValueContainer;
